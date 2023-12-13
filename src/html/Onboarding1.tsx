import { useContext, useState } from "react"
import { Question } from "./Question"
import { Alert, AlertIcon, Button, RadioGroup } from '@chakra-ui/react'
import { useNavigate } from "react-router";
import { CounterContext } from "../App";

export const OnboardingHtml1 = () => {
  const [value, setValue] = useState('');
  const [isValueSelected,setIsValueSelected] = useState(false);
  const values = useContext(CounterContext);
  const goodAnswer = "Hyper Text Markup Language";
  const answers:string[] = [
    "Hyper Text Markup Language",
    "Hyperlinks and Text Markup Language",
    "High Technology Markup Language",
    "Home Tool Markup Language"
  ]
  const navigate = useNavigate();
  const getValue= ()=>{
    if(value === ''){
      setIsValueSelected(true);
      return;
    }
    if(value === goodAnswer){
      values?.setCounter(prev=>prev+1);
    }
    navigate('/Html/onboardingHtml2');
  }


  return (
    <div className="onboarding">
      {isValueSelected &&
        <Alert status='error'>
        <AlertIcon />
        please select an answer
      </Alert>
      }
      <h1>What is Html:</h1>
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
