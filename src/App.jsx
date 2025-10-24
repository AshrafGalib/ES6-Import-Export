import './App.css'
import { add, diff } from './utils/math/math'

function App() {
 const addResult =add(5,6)
 const diffResult =diff(11,6)
console.log(addResult,diffResult)
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
