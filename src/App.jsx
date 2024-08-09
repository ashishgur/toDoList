import { useState } from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';


function App() {
  const [input,setinput] = useState('');

  const [item,setItem]=useState([]);
  // addTask function
  const addTask=()=>{
    const currentTime=new Date();   // timefunction
    const hour=String(currentTime.getHours()).padStart(2,'0');   //to add time in two digit
    const minutes=String(currentTime.getMinutes()).padStart(2,'0');
    setItem([...item,{text:input,hour,minutes}]);   //making arr of obje, contaning text,hr,min elements
    setinput('');
  }
  const removeItem=(index)=>{
    let newarr=[...item];
    newarr.splice(index,1);
    setItem(newarr);

  }
  
  return (
    <>

      <div id='HOME' className='flex justify-center items-center'>
        <div className=' text-amber-800 w-[320px] h-[640px] bg-[#0C2D57] rounded-md overflow-y-auto mt-10'>
        <div className=' w-[320px] bg-[#0C2D57] z-20 fixed'>
        
        
          <div className='flex justify-evenly mb-3'> <h1 className=' text-white text-xl pt-2 font-mono'>ALL TASKS</h1> 
          </div>
            <div className=' border-2 border-[#81689D] mr-2 ml-2 rounded-2xl mb-2 text-white'>
              <input type="text" placeholder='add task' value={input} className=' flex justify-center min-w-72 bg-transparent p-4 rounded-xl outline-none bg-slate-700 hover:bg-opacity-75' onChange={(e)=>{setinput(e.target.value)}}/>
              </div>
        </div>
          

          {/* listt */}

          <div className='ml-3 mt-36 text-white mr-2'> 
          <ol>
              {item.map((task,index)=>{
                return<>
                
                <div className='mt-4 ml-0 text-black text-sm bg-white pr-0 shadow-emerald-50 border-2 border-white rounded-xl'>
                <li key={index} className=' list-decimal ml-5 py-4 text-sm bg-white pr-0 rounded-xl'>{task.text}  <button className=' float-right mr-4' onClick={removeItem}><span className=' text-red-600 font-bold rounded-md px-0.5'>X</span></button> <br /><span className=' float-left -translate-y-9 text-[8px] font-mono font-bold text-[#492E87]' id='time'>{task.hour}:{task.minutes}</span></li>
                
                </div>
                
                </> 
              })}
            </ol>
            </div>
          <div className=' absolute bottom-0 -translate-y-36 translate-x-56 '>
          <IonFab className='res'>
      <IonFabButton>
        <IonIcon icon={add} onClick={addTask}></IonIcon>
      </IonFabButton>
    </IonFab></div>
        </div>
      </div>
    </>
  )
}

export default App;
