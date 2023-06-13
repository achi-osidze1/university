import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ErrorPage from "./components/errorpage/ErrorPage";
import HomePage from "./components/homepage/HomePage";
import WeatherContext from "./components/weathercontext/WeatherContext";

function App() {
  const [weather, setWeather] = useState([])

  return (
    <div className="App">
      <WeatherContext.Provider value={{weather,setWeather}}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="*" component={ErrorPage}/>
          </Switch>
        </BrowserRouter>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;

  