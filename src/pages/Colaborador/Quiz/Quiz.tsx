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



const Secao = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    background-image: linear-gradient(#D8C7FF, #19006c);
    align-items: center;
    

    @media screen and (max-width: 1000px){
        width: 100%;
        height: 100%;
        
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
    const [lock, setLock] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [result, setResult] = useState<boolean>(false);

    const Option1 = useRef<HTMLLIElement>(null);
    const Option2 = useRef<HTMLLIElement>(null);
    const Option3 = useRef<HTMLLIElement>(null);
    const Option4 = useRef<HTMLLIElement>(null);

    const option_array: any = [Option1, Option2, Option3, Option4];

    const checkAns = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, ans: number) => {
        if (!lock) {
            if (question.ans === ans) {
                if (e.target instanceof HTMLLIElement) {
                    e.target.classList.add("correct");
                }
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                if (e.target instanceof HTMLLIElement) {
                    e.target.classList.add("wrong");
                }
                setLock(true);
                if (option_array[question.ans - 1].current instanceof HTMLLIElement) {
                    option_array[question.ans - 1].current.classList.add("correct");
                }
            }
        }
    }

    const next = () => {
        if (lock) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(prev => prev + 1);
            setQuestion(data[index + 1]);
            setLock(false);
            option_array.map((option: any) => {
                if (option.current instanceof HTMLLIElement) {
                    option.current.classList.remove("wrong");
                    option.current.classList.remove("correct");
                }
                return null;
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    const ContainerElementos = styled.div`
        display: flex;
        height: 100%;
        width: 55%;
        justify-content: space-between;
        align-items: flex-start;
        background-color: #F3F3F3;
    `



    return (
        <>

            <main>
                <EstilosGlobais />
                <MenuLateral>
                    <LinksAsideColaborador />
                </MenuLateral>
                <Secao className="container">
                    <ContainerElementos>
                        <Elementos>
                            <h1>Teste seu Conhecimento</h1>
                            <hr />
                            {result ? <></> : <>
                                <h2>{index + 1} . {question.question}</h2>
                                <ul>
                                    <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                                    <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                                    <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                                    <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                                </ul>
                                <div>
                                    <button onClick={next}>Próximo</button>
                                    <Index className="index">{index + 1} de {data.length} Questões</Index>
                                </div>
                            </>}
                            {result ? <>
                                <h2>Sua pontuação foi {score} pontos de {data.length}! </h2>
                                <button onClick={reset}>Refazer Quiz</button>
                            </> : <></>}
                        </Elementos>
                    </ContainerElementos>
                </Secao>
            </main>
        </>

    );
}

export default Quiz;
