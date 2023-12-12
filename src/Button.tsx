import React from "react"
import { Link } from "react-router-dom"
export const Button: React.FC<{name:string,Icon:React.FC}> = ({name,Icon}) => {
    const goToQuiz = ()=>{
        
    }
    return (
    <Link to={`/${name}/onboarding${name}1`} onClick={goToQuiz} className="link">
        <Icon/>
        {name}
    </Link>
  )
}
