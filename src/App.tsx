import { useState } from 'react';
import { Car_element } from './components/CarElement';
import { CreateElement } from './components/CreateElement';
import { Modal } from './components/Modal';
import { Pay } from './components/Pay';
import { Success } from './components/Success';
function App() {
  const [value, setValue]= useState("")
  const [modal,setModal]=useState(false)
  const [pay,setPay]=useState(false)
  const [title,setTitle]=useState("")
  const [price,setPrice]=useState()
  const [success,setSuccess]=useState(false)
  function Change(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  let filterValue =Car_element.filter(element =>{
    return element.title.toLowerCase().includes(value.toLowerCase())
  })


  return (
    <>
    {success&&<Success onClose={()=>{setSuccess(false)}}/> }
    {pay&&<Pay onPay={()=>{setSuccess(true); setPay(false)}} onClose={()=>{setPay(false)}} />}
    {modal&&<Modal GoToPay={()=>{setPay(true); setModal(false)}} onClose={()=>{setModal(false)}} title={title} price={price}/>}
    <div className="text-center">
      <input type="text" placeholder='Find car' className='w-full rounded mt-3'
      value={value}
      onChange={Change}
      />
    </div>
    <div className='flex flex-col items-center'>
    {filterValue.map(product=><CreateElement setTitle={setTitle} setPrice={setPrice} Car_element={product} onOpen={()=>{setModal(true) }} key={product.id}/>)}
    </div>
    </>
  );
}

export default App;
