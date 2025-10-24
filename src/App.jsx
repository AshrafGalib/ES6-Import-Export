import './App.css'
import { add, diff, devide as div } from './utils/math/math'

function App() {
const addResult =add(5,6)
const diffResult =diff(11,6)
const divResult =div(20,5)
const devide = 18/9
console.log(divResult,addResult,diffResult,devide)
  return (
    <>
      <div>
        <h1>Add Result  : {addResult}</h1>
        <h1>Diff Result : {diffResult}</h1>
      </div>
    </>
  )
}

export default App
