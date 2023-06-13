import axios from "axios";
import React, { useState } from "react"
import { Container } from 'react-bootstrap';
import UniversityList from "../universitylist/UniversityList"
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Header from "../header/Header";

const HomePage = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false)

  const handleChange = async (e) => {
    const country = e.target.value;
    if(country === ""){
      console.log("Please Select a Country");
      return
    }
    setLoading(true)
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
      setUniversities(response.data);
      setCountry(country);
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
    <Header/>
    <Container>
      <div className="container col-md-6 m-auto">
        <Form.Select className="mt-1" aria-label="Default select example" value={country} onChange={handleChange}>
        <option value="">Select a Country</option>
        <option value="Georgia">Georgia</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Germany">Germany</option>
        <option value="Italy">Italy</option>
        <option value="France">France</option>
        <option value="UK">UK</option>
        </Form.Select>
      </div>
    </Container>
    <span className="d-flex justify-content-center mt-2">{loading ? <Spinner animation="border" variant="primary" /> : loading}</span>
    <UniversityList universities={universities}/></>
  )
}

export default HomePage