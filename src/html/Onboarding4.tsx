import { Alert, AlertIcon, Button, RadioGroup } from '@chakra-ui/react'
import  { useContext, useState } from 'react'
import { CounterContext } from '../App';
import { Question } from './Question';
import { useNavigate } from 'react-router-dom';

export const OnboardingHtml4 = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const values = useContext(CounterContext);
  const [isValueSelected,setIsValueSelected] = useState(false);
  const goodAnswer = "<br>";
  const answers:string[] = [
    "<lb>",
    "<break>",
    "<br>",
    "<newline>"
  ]
  const getValue= ()=>{
    if(value === ''){
      setIsValueSelected(true);
      return;
    }
    if(value === goodAnswer){
      values?.setCounter(prev=>prev+1);
    }
    navigate('/Html/result');  

  }
  return (
    <div className="onboarding">
       {isValueSelected &&
        <Alert status='error'>
        <AlertIcon />
        please select an answer
      </Alert>
      }
      <h1>What is the correct HTML element for inserting a line break?</h1>
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
