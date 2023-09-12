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



    const list = [
        "01 Подготовительный этап",
        "02 Настройка правил продаж",
        "03 Управление отношениями с клиентами. Самообслуживание клиентов. Работа с торговыми представителями"
    ]

    const handleDiv = (id) => {
        setCurrendDiv(id)

        const q = getQuestions(id)
        setQuestions(q)

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
       const newQestions =  shuffle(questions);
       setQuestions(newQestions)
    }

    return (
        <div className="main">
            {page == "Main" || <div> <Button onClick={() => setPage("Main")}>Список тем</Button></div>}

            {page !== "Main" ||
            <div className="list-div"> {list.map((el, ind) =>
            <p className="list-div-el" key={ind}> <Button onClick={() => handleDiv(ind + 1)}>{el} </Button>
            <Button variant="outline-dark" onClick={() => handleDivList(ind + 1)} >Список</Button>
            {/* <Button variant="outline-dark" onClick={shuffleQuestions} >Mix</Button> */}
            </p>)}
            <Button variant="outline-dark" onClick={shuffleQuestions} >Mix</Button>

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
