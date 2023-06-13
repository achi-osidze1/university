import React from 'react'
import { Container } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import "../universitylist/UniversityList.css"

const UniversityList = (props) => {
    return (
        <Container className='my-2'>
            <div className='list d-flex justify-content-center'>
                <ListGroup as="ol" numbered>
                    {props.universities?.map((university,index) => (
                    <ListGroup.Item as="li" className='text-primary' key={index}><a href={university?.web_pages}>{university?.name}</a></ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </Container>
      )
}

export default UniversityList