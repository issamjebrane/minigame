import React from 'react'
import { Radio } from '@chakra-ui/react'
export const  Question : React.FC<{value:string}> = ({value}) => {
  
  return (
    <div className='question'  >
        <Radio value={value} size='lg' colorScheme='teal'>{value}</Radio>
    </div>
  )
}
