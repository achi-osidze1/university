import React from 'react'
import { Container } from 'react-bootstrap'

const ErrorPage = () => {

  return (
    <Container>
       <h1 style={{fontSize:"50px"}} className='text-center'>Error <span className='text-danger'>404</span> Page Not Found</h1>
    </Container>
  )
}

export default ErrorPage