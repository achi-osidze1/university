import React, { useContext, useEffect } from 'react'
import axios from "axios";
import WeatherContext from '../weathercontext/WeatherContext';
import { Container } from 'react-bootstrap';
import ReactCountryFlag from "react-country-flag"
import Card from 'react-bootstrap/Card';


const Header = () => {
    const {weather, setWeather} = useContext(WeatherContext)
    const apikey = `key=77cbf8bdf52442f38a7123734231306&q`

    const CallWeather = async (e) => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?${apikey}=Tbilisi&aqi=no`);
            setWeather(response.data)
        }catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        CallWeather()
    },[])

  return (
    <Container>
        <Card className="text-center mb-3" style={{ border:"none", backgroundImage:"url(https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148639325.jpg?w=900&t=st=1686664008~exp=1686664608~hmac=66c96421be7f8dab953eb49d00bc2235649eb2d63fb1fd0f50f664d2d2e27ab5)",backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat: 'no-repeat'}} >
            <Card.Body>
                <Card.Title><ReactCountryFlag countryCode="GE" svg style={{
                    width: '1.5em',
                    height: '1.5em',
                    }}/>
                </Card.Title>
                <Card.Text style={{fontSize:"2rem"}}>{weather?.location?.name}, {weather?.location?.country}</Card.Text>
                <Card.Text style={{fontSize:"1.3rem"}}> Temperature: {weather?.current?.temp_c}°C</Card.Text>
                <Card.Text style={{fontSize:"1rem"}}> Feels Like: {weather?.current?.feelslike_c}°C</Card.Text>
                <Card.Text style={{fontSize:"1rem"}}>Condition: {weather?.current?.condition.text}</Card.Text>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default Header