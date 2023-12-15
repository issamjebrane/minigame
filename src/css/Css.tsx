import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'
import { OnboardingCss1 } from './Onboarding1'
import { OnboardingCss2 } from './Onboarding2';
import { OnboardingCss3 } from './Onboarding3';
import { OnboardingCss4 } from './Onboarding4';
import Result from './Result';
import { CounterContext } from '../App';

//@ts-ignore
export const IncrementingContext = createContext<{
    incrementing:number;
    setIncrementing:Dispatch<SetStateAction<number>>
}>();

export const  Css= () => {
    const [incrementing,setIncrementing] = useState(1);
    const value = useContext(CounterContext);

    useEffect(()=>{
        window.onbeforeunload
    },[value?.counter])
  return (
    // @ts-ignore
    <IncrementingContext.Provider value={{incrementing,setIncrementing}}>
        {incrementing === 1 && <OnboardingCss1/>}
        {incrementing === 2 && <OnboardingCss2/>}
        {incrementing === 3 && <OnboardingCss3/>}
        {incrementing === 4 && <OnboardingCss4/>}
        {incrementing === 5 && <Result/>}
    </IncrementingContext.Provider>
    )
}
