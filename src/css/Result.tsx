import { useContext } from 'react'
import { CounterContext } from '../App'
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

const Result = () => {
  const result = useContext(CounterContext);
  //@ts-ignore
  const percentage = (result?.counter/4)*100; 
  return (
    <>
      {
        percentage >= 75 && (

          <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
          >
              <AlertIcon boxSize='40px' mr={0} />
              <AlertTitle  mt={4} mb={1} fontSize='lg'>Congratulations!</AlertTitle>
              <AlertDescription maxWidth='sm'>You passed the test with your score is : {percentage}%. Well done!</AlertDescription>
          </Alert>
        )
      }
      {
        percentage < 75 &&
        (
          <Alert
          status='error'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle  mt={4} mb={1} fontSize='lg'>Opps!</AlertTitle>
            <AlertDescription maxWidth='sm'>Your score is below the passing limit. Keep practicing!</AlertDescription>
        </Alert>
        )
      }
    </>
  )
}
export default Result