import { useContext } from 'react'
import { CounterContext } from '../App'

const Result = () => {
  const result = useContext(CounterContext);
  //@ts-ignore
  const percentage = (result?.counter/4)*100; 
  return (
    <div>result is : {percentage}%</div>
  )
}
export default Result