import { Button, RadioGroup } from '@chakra-ui/react'
import  { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { CounterContext } from '../App';
import { Question } from './Question';

export const OnboardingHtml3 = () => {

  
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const values = useContext(CounterContext);
  const goodAnswer = "Image";
  const answers:string[] = [
    "Image",
    "Inline image",
    "Input image",
    "Insert image"
  ]
  const getValue= ()=>{
    if(value === goodAnswer){
      values?.setCounter(prev=>prev+1);
    }
    navigate('/Html/onboardingHtml4');  
  }

  return (
    <div className="onboarding">
      <h1>
        What does the {"<img>"} tag stand for in HTML?
      </h1>
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
