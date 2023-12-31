import { useEffect, useState } from 'react'
import { getList } from '../db/db'
import { Button } from 'react-bootstrap'

export default function DivList({ currentDiv, handlePressDiv }) {

    const [list, setList] = useState([])

    useEffect(() => {
        setList(getList(currentDiv))
    }, [currentDiv])



    return (
        <div className='div-list'>

            {list.map((el, ind) => <p key={ind}><Button onClick={()=>handlePressDiv(ind+1)} variant='outline-dark'>{el}</Button></p>)}

        </div>
    )
}
