import { useState } from "react"
import { Question } from "./Question"
import { Button, RadioGroup } from '@chakra-ui/react'
import { useNavigate } from "react-router";

export const OnboardingHtml1 = () => {
  const [value, setValue] = useState('');
  const goodAnswer = "Hyper Text Markup Language";
  const answers:string[] = [
    "Hyper Text Markup Language",
    "Hyperlinks and Text Markup Language",
    "High Technology Markup Language",
    "Home Tool Markup Language"
  ]
  const navigate = useNavigate();
  const getValue= ()=>{
    const isGood = (value === goodAnswer);
    navigate('/Html/onboardingHtml2',{state:{isGood}});
  }

  return (
    <div className="onboarding">
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
