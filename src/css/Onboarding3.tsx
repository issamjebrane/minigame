import { useContext, useState } from "react"
import { Question } from "./Question"
import { Alert, AlertIcon, Button, RadioGroup } from '@chakra-ui/react'
import { CounterContext } from "../App";
import { IncrementingContext } from "./Css";

export const OnboardingCss3 = () => {
  const [value, setValue] = useState('');
  const [isValueSelected,setIsValueSelected] = useState(false);
  const incrementor = useContext(IncrementingContext);
  const values = useContext(CounterContext);
  const goodAnswer = "letter-spacing";
  const answers:string[] = [
    "text-spacing",
    "word-spacing",
    "letter-spacing",
    "font-spacing"
  ]
  const getValue= ()=>{
    if(value === ''){
      setIsValueSelected(true);
      return;
    }
    if(value === goodAnswer){
      values?.setCounter(prev=>{
        const count = prev+1;
        console.log(count)
        return count
      });
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
      <h1>Which CSS property is used to add spacing between letters?</h1>
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
