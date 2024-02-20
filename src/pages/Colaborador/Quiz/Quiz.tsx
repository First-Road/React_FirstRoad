import styled from "styled-components";
import { data } from "../../../assets/data"
import { useRef, useState } from "react";
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais";
import MenuLateral from "../../../components/MenuLateral/MenuLateral";
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador";

interface Question {
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    ans: number;
}



const Secao = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    /* background-image: linear-gradient(#D8C7FF, #19006c); */
    align-items: center;
    

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 5px;
    }
    hr{
        height: 2px;
        border: none;
        width: 90%;
        background-color: #707070;
    }

    h1{
        font-size: 35px;
        margin-left: 40px;
        width: 100%;
    }

    h2{
        font-size: 25px;
        margin-left: 40px;
        width: 70%;
    }

    li{
        display: flex;
        align-items: center;
        width: 600px;
        height: 70px;
        padding-left: 15px;
        border: 1px solid #686868; 
        border-radius: 8px;
        margin-bottom: 20px;
        font-size: 20px;
        cursor: pointer;  
    }

    button{
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        border-radius: 8px;
        background-color: var(--principal-cor-3);
        font-size: 25px;
        color: #FFFFFF;
        border: none;
        box-shadow: 2px 3px 5px #888888;
        cursor: pointer;
    }

    .correct{
        background: #dffff2;
        border-color: #00d397;
    }

    .wrong{
        background: #FFEBEB;
        border-color: #ff4a4a;
    }
`

const Elementos = styled.div`
    display: flex;
    flex-direction: column;    
`

const Index = styled.div`
    font-size: 18px;
`

const Quiz: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const [question, setQuestion] = useState<Question>(data[index]);
    const [result, setResult] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    const checkAns = (ans: number) => {
        if (question.ans === ans) {
            setScore(prevScore => prevScore + 1);
        }
        next();
    };

    const next = () => {
        if (index + 1 < data.length) {
            setIndex(prevIndex => prevIndex + 1);
            setQuestion(data[index + 1]);
        } else {
            setResult(true);
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setResult(false);
    };

    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral>
                    <LinksAsideColaborador />
                </MenuLateral>
                <Secao className="container">
                    <Elementos>
                        <h1>Teste seu Conhecimento</h1>
                        <hr />
                        {result ? (
                            <>
                                <h2>Sua pontuação foi {score} pontos de {data.length}!</h2>
                                <button onClick={reset}>Refazer Quiz</button>
                            </>
                        ) : (
                            <>
                                <h2>
                                    {index + 1}.{question.question}
                                </h2>
                                <ul>
                                    {[question.option1, question.option2, question.option3, question.option4].map(
                                        (option, idx) => (
                                            <li
                                                key={idx}
                                                className={idx + 1 === question.ans ? "correct" : ""}
                                                onClick={() => checkAns(idx + 1)}
                                            >
                                                {option}
                                            </li>
                                        )
                                    )}
                                </ul>
                                <div>
                                    <button onClick={next}>Próximo</button>
                                    <Index className="index">
                                        {index + 1} de {data.length} Questões
                                    </Index>
                                </div>
                            </>
                        )}
                    </Elementos>
                </Secao>
            </main>
        </>
    );
};

export default Quiz;