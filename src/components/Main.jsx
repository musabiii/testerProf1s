import { useEffect, useState } from "react";
import Div from "./Div";
import { Button } from "react-bootstrap";
import DivList from "./DivList";
import { getExamQuestions, getQuestion, getQuestions } from "../db/db";

export default function Main() {

    const [currentDiv, setCurrendDiv] = useState(1)
    const [page, setPage] = useState("Main")
    const [currentQuestion, setCurrentQuestion] = useState(1)

    const [questions, setQuestions] = useState([])



    const list = [
        "01 Подготовительный этап",
        "02 Настройка правил продаж",
        "03 Управление отношениями с клиентами",
        "04 Оптовая торговля",
        "05 Розничная торговля",
        "06 Работа с поставщиками",
        "07 Управление складом",
        "08 Планирование обеспечения",
        "09 Денежные средства",
        "10 Взаиморасчеты",
        "11 Регламентрированный учет",
        "12 Финансовый результат",
        "13 Администрирование",
        "14 Дополнительные сервисы"
    ]

    const handleDiv = (id) => {
        setCurrendDiv(id)



        setPage("Div")
    }

    const handleDivList = (id) => {
        setCurrendDiv(id)
        const q = getQuestions(id)
        setQuestions(q)
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

    const handleExam = () => {
        const examQuestions = getExamQuestions()
        setQuestions(examQuestions)
        setPage("Div")
    }

    return (
        <div className="main">
            {page == "Main" || <div> <Button onClick={() => setPage("Main")}>Список тем</Button></div>}

            {page !== "Main" ||
            <div className="list-div"> {list.map((el, ind) =>
            <p className="list-div-el" key={ind}> <Button onClick={() => handleDiv(ind + 1)}>{el} </Button>
            <Button className="list-div-el-list" variant="outline-dark" onClick={() => handleDivList(ind + 1)} >Список</Button>
            {/* <Button variant="outline-dark" onClick={shuffleQuestions} >Mix</Button> */}
            </p>)}


            <Button variant="outline-dark" onClick={shuffleQuestions} >Mix</Button>
            <Button variant="outline-dark" onClick={handleExam} >Экзамен</Button>

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
