import { useState } from "react";
import Div from "./Div";
import { Button } from "react-bootstrap";
import DivList from "./DivList";

export default function Main() {

    const [currentDiv, setCurrendDiv] = useState(1)
    const [page, setPage] = useState("Main")
    const [currentQuestion, setCurrentQuestion] = useState(1)

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

    return (
        <div className="main">
            {page == "Main" || <div> <Button onClick={() => setPage("Main")}>Список тем</Button></div>}

            {page !== "Main" || <div className="list-div"> {list.map((el, ind) => <p key={ind}> <Button onClick={() => handleDiv(ind + 1)}>{el} </Button><Button onClick={() => handleDivList(ind + 1)} >Список</Button> </p>)}</div>}

            {page !== "Div" || <div><Div currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} currentDiv={currentDiv} /></div>}

            {page !== "DivList" || <DivList handlePressDiv={handlePressDiv} currentDiv={currentDiv} />}

        </div>
    )
}
