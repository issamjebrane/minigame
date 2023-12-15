import React from "react"
import { Link } from "react-router-dom"
export const Button: React.FC<{name:string,Icon:React.FC}> = ({name,Icon}) => {
    

    return (
    <Link to={`/${name}/onboarding${name}1`}  className="link">
        <Icon/>
        <h6 style={{fontSize:"20px",width:"100%",background:"inherit"}}>
          {name}
        </h6>
    </Link>
  )
}
