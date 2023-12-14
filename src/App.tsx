
import { FaCss3, FaHtml5, FaPython } from 'react-icons/fa'
import './App.css'
import { Button } from './Button'
import { SiJavascript } from "react-icons/si";
import { Route, Routes } from 'react-router-dom';
import {OnboardingHtml2 } from './html/Onboarding2';
import {OnboardingHtml3 } from './html/Onboarding3';
import { OnboardingHtml4 } from './html/Onboarding4';
import { OnboardingHtml1 } from './html/Onboarding1';
import { Suspense, createContext, lazy, useState } from 'react';
import { Css } from './css/Css';


interface CounterContextType {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}
const LazyResult = lazy(() => import('./html/Result'));
export const CounterContext = createContext<CounterContextType|undefined>(undefined);
const Home = ()=>{
  return (
    <div className='main'>
    <div className='header'>
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
  const [counter, setCounter] = useState<number>(0);
  const contextValue: CounterContextType = {
    counter,
    setCounter,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Html'>
          <Route path='onboardingHtml1' element={<OnboardingHtml1/>}/>
          <Route path='onboardingHtml2' element={<OnboardingHtml2 />}/>
          <Route path='onboardingHtml3' element={<OnboardingHtml3/>}/>
          <Route path='onboardingHtml4' element={<OnboardingHtml4/>}/>
          <Route path='result' element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyResult />
          </Suspense>
        } />
        </Route> 
        <Route path='/Css/onboardingCss1' element={<Css/>}/>
      </Routes>
    </CounterContext.Provider>
  )
}

export default App
