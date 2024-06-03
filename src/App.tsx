import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [trainerNaam, setTrainerNaam] = useState("Trainer")
  const [clienten, setClienten] = useState([{}])
  const trainingMaanden = [["Jan",1], ["Feb",2], ["Mrt",3], ["Apr",4], ["Mei",5], ["Jun",6], ["Jul",7], ["Aug",8], ["Sep",9], ["Okt",10], ["Nov",11], ["Dec",12]]

  return (
    <>
    <h4>{trainerNaam}</h4>
    <div className="bg-slate-200 p-2">
    {trainingMaanden.map((maand)=> <button className="ml-2" onClick={()=>(console.log(maand[1]))}>{maand[0]}</button>)}
    </div>
    <br></br>
      <input type="text" />
    </>
  )
}

export default App
