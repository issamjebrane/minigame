import { RadioGroup } from '@chakra-ui/radio';
import  { useState } from 'react'
import { Question } from './Question';
import { Button } from '@chakra-ui/button';
import { useLocation } from 'react-router';

export const OnboardingHtml2 = () => {
  const [value, setValue] = useState('');
  const {state} = useLocation();
  console.log(state.isGood)
  const goodAnswer = "<ul>";
  const answers:string[] = [
    "<ul>",
    "<ol>",
    "<li>",
    "<list>"
  ]
  
  const getValue= ()=>{
    console.log(value);
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
