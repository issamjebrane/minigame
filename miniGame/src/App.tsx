
import { FaCss3, FaHtml5, FaPython } from 'react-icons/fa'
import './App.css'
import { Button } from './Button'
import { SiJavascript } from "react-icons/si";
import { Route, Routes } from 'react-router-dom';
import {OnboardingHtml2 } from './html/Onboarding2';
import {OnboardingHtml3 } from './html/Onboarding3';
import { OnboardingHtml4 } from './html/Onboarding4';
import { OnboardingCss1 } from './css/Onboarding1';
import { OnboardingCss2 } from './css/Onboarding2';
import { OnboardingCss3 } from './css/Onboarding3';
import { OnboardingCss4 } from './css/Onboarding4';
import { OnboardingHtml1 } from './html/Onboarding1';

const Home = ()=>{
  return (
    <div className='main'>
    <div>
      <h1>       
        Welcome to the Quiz App
      </h1>
    </div>
    <div className='buttons'>
        <Button name='Html'Icon={FaHtml5}/>
        <Button name='Css'Icon={FaCss3}/>
        <Button name='Javascript'Icon={SiJavascript}/>
        <Button name='Python'Icon={FaPython}/>
    </div>
  </div>
  )
}

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Html'>
        <Route path='onboardingHtml1' element={<OnboardingHtml1/>}/>
        <Route path='onboardingHtml2' element={<OnboardingHtml2 />}/>
        <Route path='onboardingHtml3' element={<OnboardingHtml3/>}/>
        <Route path='onboardingHtml4' element={<OnboardingHtml4/>}/>
      </Route> 
      <Route path='/Css'>
        <Route path='onboardingCss1' element={<OnboardingCss1/>}/>
        <Route path='onboardingCss2' element={<OnboardingCss2 />}/>
        <Route path='onboardingCss3' element={<OnboardingCss3/>}/>
        <Route path='onboardingCss4' element={<OnboardingCss4/>}/>
        </Route>
    </Routes>
  )
}

export default App
