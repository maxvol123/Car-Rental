import { Car } from "../modals"
interface ElementProps {
    Car_element: Car
    onOpen: (element:string)=> void
    setTitle:any
    setPrice:any
}
export function CreateElement({Car_element,onOpen,setTitle,setPrice}: ElementProps) {
    function SetTitle2(myTitle:any) {
            setTitle(myTitle)
    }
    function SetPrice2(myPrice:any) {
        setPrice(myPrice)
}
    
    return(
        <div className="flex flex-col justify-center w-96 bg-white/30 rounded mt-4 text-center items-center pb-3" key={Car_element.id}>
        <div className="">{Car_element.title}</div>
        <img className="h-24 block ml-auto mr-auto" src={Car_element.picture} alt="" />
        <span className="">Price for 1 day:</span>
        <div className="font-bold text-gray-800">from {Car_element.price} $ </div>
        <button className="px-7 py-2 bg-green-700 rounded"
        onClick={()=>{onOpen(Car_element.title)
            SetTitle2(Car_element.title)
            SetPrice2(Car_element.price)
        }
            
        }
        >Rent</button>
        </div>
    )
}