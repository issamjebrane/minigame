import { Button, RadioGroup } from '@chakra-ui/react'
import  { useContext, useState } from 'react'
import { Question } from './Question';
import { useNavigate } from 'react-router';
import { CounterContext } from '../App';

export const OnboardingHtml2 = () => {
  const [value, setValue] = useState('');
  const values = useContext(CounterContext);
  const navigate = useNavigate();
  
  const goodAnswer = "<ul>";
  const answers:string[] = [
    "<ul>",
    "<ol>",
    "<li>",
    "<list>"
  ]
  const getValue= ()=>{
    if(value === goodAnswer){
      values?.setCounter(prev=>prev+1);
    }
    navigate('/Html/onboardingHtml3');  
    }

    
  return (
    <div className="onboarding">
      <h1>Which HTML tag is used to define an unordered list ?</h1>
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
