import Check from "../img/Check.jpg"
interface SuccessProps{
    onClose: ()=> void
}
export function Success({onClose}:SuccessProps){
    return(
        <>
    <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"></div>
    <div className="mx-auto w-[500px] p-5 rounded bg-white fixed top-10 left-1/2 -translate-x-1/2">
    <img className="block ml-auto mr-auto h-40" src={Check} alt="" />
    <div className="text-green-500 text-center">Success!</div>
    <button className="bg-green-500 px-2 py-1 rounded mt-3"
    onClick={()=>onClose()}
    >OK</button>

    </div>
    </>
    )
}