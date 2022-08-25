import { useState } from "react"

interface PayProps{
    onClose: ()=> void
    onPay: ()=> void
}

export function Pay({onClose, onPay}:PayProps) {


    function ChangeNumber(event: React.ChangeEvent<HTMLInputElement>) {
        setNumber(event.target.value)
      }
      function ChangeDate(event: React.ChangeEvent<HTMLInputElement>) {
        setDate(event.target.value)
      }

    const [number, setNumber]=useState("2154 2548 2564 4246")
    const [date, setDate]=useState("07/24")

    return(
        <>
            <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"></div>
    <div className="mx-auto w-[500px] p-5 rounded bg-white fixed top-10 left-1/2 -translate-x-1/2">
            <div className="text-center text-2xl mb-2">Payment</div>
            <div className="flex flex-col ">
            <div className="">Choose Card</div>

            <div className="w-72 h-36 rounded bg-gradient-to-r from-purple-900 to-blue-500">
                <input className="mt-3 ml-5 bg-gradient-to-r from-purple-900 to-blue-500" maxLength={16} type="text" placeholder="Card Number" value={number}
                onChange={ChangeNumber}
                />
                <input className="mt-16 ml-5 bg-gradient-to-r from-purple-900 to-blue-500" maxLength={5} placeholder="Date" onChange={ChangeDate} value={date}/>
            </div>
            </div>
            <button className="bg-green-500 px-2 py-1 rounded mt-3" onClick={()=>{onPay()}}>Pay</button>
            <button className="bg-blue-500 px-2 py-1 rounded ml-96" onClick={()=>{onClose()}} >Cancel</button>
        </div>
        </>
        
    )

}