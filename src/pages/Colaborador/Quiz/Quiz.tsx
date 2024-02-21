import styled from "styled-components";
import { data } from "../../../assets/data"
import { useRef, useState } from "react";
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais";
import MenuLateral from "../../../components/MenuLateral/MenuLateral";
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador";
import { Link, useNavigate } from "react-router-dom";

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
    align-items: center;
    background-color: #F3F3F3;
    

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 5px;
    }


    h1{
        margin: 0px;
        font-size: 35px;
        width: 100%;
        padding-top: 15px;
        @media screen and (max-width: 1000px) {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        @media screen and (max-width: 750px) {
            font-size: 25px;
        }
    }

    h2{
        font-size: 25px;
        width: 80%;
        @media screen and (max-width: 1000px) {
            width: 100%;
            justify-content: center;
        }
        @media screen and (max-width: 750px) {
            font-size: 20px;
        }
    }

    ul{
        padding: 0;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .reset{
        display: flex;
        flex-direction: column;
        justify-content: center ;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    div{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding-bottom: 5px;
        @media screen and (max-width: 1000px) {
            width: 90%;
        }
        @media screen and (max-width: 1000px) {
            width: 100%;
        }

    }
`

const Lista = styled.li`
    display: flex;
        align-items: center;
        width: 80%;
        height: 70px;
        padding-left: 15px;
        border: 1px solid #686868; 
        border-radius: 8px;
        margin-bottom: 20px;
        font-size: 20px;
        cursor: pointer;  
        background-color: #f3f3f3;
        @media screen and (max-width: 1000px) {
            width: 100%;
            justify-content: center;
        }
        @media screen and (max-width: 750px) {
            width: 400px;
        }
`

const Index = styled.div`
    font-size: 18px;
`
const Quiz: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const [question, setQuestion] = useState<Question>(data[index]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [result, setResult] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

    const checkAns = (ans: number) => {
        setSelectedOption(ans);
    };

    const next = () => {
        if (selectedOption !== null) {
            const selectedOptionIndex = selectedOption - 1;
            if (selectedOption === question.ans) {
                setScore(prevScore => prevScore + 1);
                optionRefs.current[selectedOptionIndex]?.classList.add("correct");
            } else {
                optionRefs.current[selectedOptionIndex]?.classList.add("wrong");
                optionRefs.current[question.ans - 1]?.classList.add("correct");
            }

            setTimeout(() => {
                if (index + 1 < data.length) {
                    setIndex(prevIndex => prevIndex + 1);
                    setQuestion(data[index + 1]);
                    setSelectedOption(null);
                    clearOptionStyles();
                } else {
                    setResult(true);
                }
            }, 1000); // Delay for visual effect
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setSelectedOption(null);
        setResult(false);
        clearOptionStyles();
    };

    const clearOptionStyles = () => {
        optionRefs.current.forEach(ref => {
            if (ref) {
                ref.classList.remove("correct", "wrong");
            }
        });
    };

    const navigate = useNavigate();

    const Voltar = () => {
        navigate(-1)
    }

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
                        {result ? (
                            <div className="reset">
                                <h2>Sua pontuação foi {score} pontos de {data.length}!</h2>
                                <button onClick={reset}>Refazer Quiz</button>
                                <button onClick={Voltar}></button>
                            </div>
                        ) : (
                            <>
                                <h2>
                                    {index + 1}.{question.question}
                                </h2>
                                <ul>
                                    {[question.option1, question.option2, question.option3, question.option4].map(
                                        (option, idx) => (
                                            <Lista
                                                key={idx}
                                                ref={(el: HTMLLIElement | null) => (optionRefs.current[idx] = el)}
                                                className={selectedOption !== null && idx + 1 === selectedOption ? "selected" : ""}
                                                onClick={() => checkAns(idx + 1)}
                                            >
                                                {option}
                                            </Lista>
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