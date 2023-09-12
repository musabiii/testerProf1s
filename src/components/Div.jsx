import { Col, Container, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getCount, getQuestion } from '../db/db';


export default function Div({ currentQuestion, setCurrentQuestion,questions, currentDiv }) {

    console.log(currentDiv)

    const currentElement = questions[currentQuestion-1]

    const [answer, setAnswer] = useState(1);
    const [publicAnswer, setPublicAnswer] = useState(0);
    const [userAnswer, setUserAnswer] = useState(0);
    // const [current, setCurrent] = useState(1);



    useEffect(() => {
        console.log(currentQuestion);
        console.log("currentDiv", currentDiv)
        const el = getQuestion(currentQuestion, currentDiv);

        if (!el) {
            return
        }

        // const shuffledArray = el.options.sort(() => 0.5 - Math.random());


        // setOptions(shuffledArray)
        // setTitle(el.title)
        setAnswer(currentElement["answerId"])
        setPublicAnswer(0)
        setUserAnswer(0)

        console.log(el);
    }, [currentQuestion, currentDiv])

    const handleForward = () => {
        setCurrentQuestion(currentQuestion + 1)
    }

    const handleBack = () => {
        console.log("Back");
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
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

    const handleShuffle = () => {

        const len = getCount(currentDiv)
        console.log(len)
        const newId = Math.floor(Math.random() * (len - 0 + 1));
        console.log("newId",newId)
        setCurrentQuestion(newId)

    }
    return (
        <>
            <main>
                {/* <Col><Button onClick={() => setCurrent(1)}>Начало</Button></Col> */}
                {/* <Col><h5>{current}</h5></Col> */}
                <Col><h5>{currentElement["title"]}</h5></Col>

                <div className="list">
                    {
                        // options.map((el) => {
                            currentElement["options"].map((el) => {
                            return <Col key={el.id}><Button variant={el.id == publicAnswer ? "success" : el.id == userAnswer ? "danger" : "outline-dark"} onClick={() => handleClick(el.id)}>{el.title}</Button></Col>
                        })
                    }
                </div>


                <div className='move-btn'>
                    <Button onClick={handleBack}>Назад</Button><Button onClick={handleShuffle}>Случайно</Button><Button onClick={handleForward}>Вперед</Button>
                </div>

            </main>

        </>
    )
}
