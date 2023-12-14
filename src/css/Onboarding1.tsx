import { useContext, useState } from "react"
import { Question } from "./Question"
import { Alert, AlertIcon, Button, RadioGroup } from '@chakra-ui/react'
import { CounterContext } from "../App";
import { IncrementingContext } from "./Css";

export const OnboardingCss1 = () => {
  const [value, setValue] = useState('');
  const [isValueSelected,setIsValueSelected] = useState(false);
  const incrementor = useContext(IncrementingContext);
  const values = useContext(CounterContext);
  const goodAnswer = "Cascading Style Sheets";
  const answers:string[] = [
    "Computer Style Sheets",
    "Creative Style Sheets",
    "Cascading Style Sheets",
    "Complex Style Sheets"
  ]
  const getValue= ()=>{
    if(value === ''){
      setIsValueSelected(true);
      return;
    }
    if(value === goodAnswer){
      values?.setCounter(prev=>prev+1);
    }
    incrementor.setIncrementing(prev=>prev+1);
  }


  return (
    <div className="onboarding">
      {isValueSelected &&
        <Alert status='error'>
        <AlertIcon />
        please select an answer
      </Alert>
      }
      <h1>What does CSS stand for?</h1>
      <RadioGroup onChange={setValue} value={value}>     
          {answers.map((answer,index)=>{
            return   <Question value={answer} key={index}/>
          })}
      </RadioGroup>
      <div className="navigation">
        <Button colorScheme='teal' onClick={getValue}>Continue</Button>
      </div>
    </div>
  )
}
