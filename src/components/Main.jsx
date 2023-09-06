import { useState } from "react";
import Div from "./Div";
import { Button, ListGroup } from "react-bootstrap";

export default function Main() {

    const [currentDiv, setCurrendDiv] = useState(1)
    const [page, setPage] = useState("Main")

    const list = [
        "01 Подготовительный этап",
        "02 Настройка правил продаж"
    ]

    const handleDiv = (id) => {
        setCurrendDiv(id)
        setPage("Div")
    }

    return (
        <div className="main">
            {page == "Main" || <div> <Button onClick={() => setPage("Main")}>Список тем</Button></div>}

            {page == "Div" || <div className="list-div"> {list.map((el, ind) => <p key={ind} onClick={() => handleDiv(ind + 1)}>{el}</p>)}</div>}

            {page == "Main" || <div><Div currentDiv={currentDiv} /></div>}

        </div>
    )
}
