import { Col, Container, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getQuestion } from '../db/db';


export default function Div({ currentDiv }) {

    console.log(currentDiv)

    const [answer, setAnswer] = useState(1);
    const [publicAnswer, setPublicAnswer] = useState(0);
    const [userAnswer, setUserAnswer] = useState(0);
    const [current, setCurrent] = useState(1);
    const [title, setTitle] = useState(1);

    const op = [
        { id: 1, title: "1. Управленческий" },
        { id: 2, title: "2. Бухгалтерский и налоговый, финансовый учет (МСФО)" },
        { id: 3, title: "3. Оперативный" },
    ];


    const [options, setOptions] = useState(op);

    useEffect(() => {
        console.log(current);
        console.log("currentDiv", currentDiv)
        const el = getQuestion(current, currentDiv);

        if (!el) {
            return
        }

        const shuffledArray = el.options.sort(() => 0.5 - Math.random());


        setOptions(shuffledArray)
        setTitle(el.title)
        setAnswer(el.answerId)
        setPublicAnswer(0)
        setUserAnswer(0)

        console.log(el);
    }, [current, currentDiv])

    const handleForward = () => {
        console.log("Forward")
        setCurrent(current + 1)
    }

    const handleBack = () => {
        console.log("Back");
        if (current > 0) {
            setCurrent(current - 1)
        }
    }

    const handleClick = (id) => {
        setPublicAnswer(answer)
        setUserAnswer(id)



        if (id == answer) {
            console.log("correct")
        }
        else {
            console.log("no correct")

        }
    }
    return (
        <>
            <main>
                    {/* <Col><Button onClick={() => setCurrent(1)}>Начало</Button></Col> */}
                    {/* <Col><h5>{current}</h5></Col> */}
                    <Col><h5>{title}</h5></Col>

                    <div className="list">
                        {
                            options.map((el) => {
                                return <Col key={el.id}><Button variant={el.id == publicAnswer ? "success" : el.id == userAnswer ? "danger" : "outline-dark"} onClick={() => handleClick(el.id)}>{el.title}</Button></Col>
                            })
                        }
                    </div>


                    <div className='move-btn'>
                            <Button onClick={handleBack}>Назад</Button><Button onClick={handleForward}>Вперед</Button>
                    </div>

            </main>

        </>
    )
}