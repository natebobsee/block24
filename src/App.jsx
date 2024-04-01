import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const dogs =[
{
id: 1088,
name: "Daphne",
breed: "German Shepherd",
status: "field",
imageUrl: "http://r.ddmcdn.com/w_960/s_f/o_1/cx_25/cy_0/cw_960/ch_1440/APL/uploads/2020/01/Daphne-PBXVI.jpg"

},
{
id: 1090,
name: "Duncan",
breed: "Collie",
status: "field",
imageUrl: "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_49/cw_1012/ch_1518/APL/uploads/2020/01/Duncan-PBXVI-v2.jpg"

},
{
id: 1091,
name: "Filbert",
breed: "Shetland Sheepdog / Border Collie",
status: "field",
imageUrl: "http://r.ddmcdn.com/w_942/s_f/o_1/cx_35/cy_0/cw_942/ch_1413/APL/uploads/2019/12/Filbert-PBXVI.jpg"
},
];
function App() {
  const [count, setCount] = useState(0)
function handleclick(){
alert(count);
setCount(prev => prev + 1);


}
  return (
    <>
    <div>{count}</div>
 <button onClick={handleclick}>click Me</button>
    
    
      {
      dogs.map(dog => {
        return(
           <div className='dog' key = {dog.name}>
            <div>{dog.name}</div>
             <div>
              <img src ={dog.imageUrl} ></img>
              </div> 
              </div>
              )
        })
      }
    </>
  )
}

export default App