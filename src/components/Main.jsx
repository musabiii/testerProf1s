import { useEffect, useState } from "react";
import Div from "./Div";
import { Button } from "react-bootstrap";
import DivList from "./DivList";
import { getQuestion, getQuestions } from "../db/db";

export default function Main() {

    const [currentDiv, setCurrendDiv] = useState(1)
    const [page, setPage] = useState("Main")
    const [currentQuestion, setCurrentQuestion] = useState(1)

    const [questions, setQuestions] = useState([])



    useEffect(() => {
        const q = getQuestions(currentDiv)
        setQuestions(q)
        console.log(questions)

    }, [currentDiv])


    const list = [
        "01 Подготовительный этап",
        "02 Настройка правил продаж"
    ]

    const handleDiv = (id) => {
        setCurrendDiv(id)
        setPage("Div")
    }

    const handleDivList = (id) => {
        setCurrendDiv(id)
        setPage("DivList")
    }

    const handlePressDiv = (id) => {
        setPage("Div")
        setCurrentQuestion(id)
    }

    const shuffleQuestions = () => {
        console.log(questions)
       const newQestions =  shuffle(questions);
       console.log(newQestions)
       setQuestions(newQestions)
    }

    return (
        <div className="main">
            {page == "Main" || <div> <Button onClick={() => setPage("Main")}>Список тем</Button></div>}

            {page !== "Main" ||
            <div className="list-div"> {list.map((el, ind) =>
            <p key={ind}> <Button onClick={() => handleDiv(ind + 1)}>{el} </Button>
            <Button onClick={() => handleDivList(ind + 1)} >Список</Button>
            <Button onClick={shuffleQuestions} >Mix</Button>
            </p>)}
            </div>}


            {page !== "Div" || <div><Div currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} questions = {questions} currentDiv={currentDiv} /></div>}

            {page !== "DivList" || <DivList handlePressDiv={handlePressDiv} currentDiv={currentDiv} />}

        </div>
    )
}


function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      }
