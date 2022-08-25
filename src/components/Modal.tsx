import { useState } from "react"

interface ModalProps{
    title: string
    onClose: ()=> void
    price:any
    GoToPay: ()=> void
}

export function Modal({title, onClose,price,GoToPay}:ModalProps) {
    const [day, setDay]= useState("1")
    function ChangeDay(event: React.ChangeEvent<HTMLInputElement>) {
        setDay(event.target.value)
    }
    return(
        <>
        <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"></div>
        <div className="mx-auto w-[500px] p-5 rounded bg-white fixed top-10 left-1/2 -translate-x-1/2">
                <div className="text-center text-2xl mb-2">{title} for {day} day</div>
                <div className="flex flex-col ">
                <div className="">Enter date and pickup time:</div>
                <input type="date" className="w-1/3"/>
                <input type="time" className="w-1/3"/>
                <div className="">Enter amount of day and downturn time:</div>
                <input type="number" className="w-1/3" value={day} min="1" onChange={ChangeDay}
                />
                <input type="time" className="w-1/3"/>
                   <div className="">total amount {Number(day)*price}</div>
                </div>
                <button className="bg-green-500 px-2 py-1 rounded mt-3" onClick={()=>{GoToPay()}}>Go to payment</button>
                <button className="bg-blue-500 px-2 py-1 rounded ml-96" onClick={()=>{onClose()}}>Cancel</button>
            </div>
            </>
    )
}