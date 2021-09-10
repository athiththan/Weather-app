import React,{useState} from 'react';
import './App.css';
import Input from "./components/Input";
import axios from "axios";
import Result from "./components/Result";

function App() {
  const[input,setInput] = useState("");
  const[temp,setTemp]=useState("");
  const[description,setDescription]=useState("");
  const[icon,setIcon]=useState("");

  const findWeather =async()=>{
    const apiKey ="231f1c2453f23effdfc35877159f3ad1";
    const unit = "metric";
    const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    input +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
 const response = await axios.get(url);
 const temp= await response.data.main.temp;
 const weatherDescription= await response.data.weather[0].description;
 const icon= await response.data.weather[0].icon;
 const imageURL= "https://openweathermap.org/img/wn/" + icon + "@2x.png"
 setTemp(temp);
 setDescription(weatherDescription);
 setIcon(imageURL);
  };
  return (
    <div className="app">
      <Input input={input} setInput={setInput} findWeather={findWeather}/>
      <Result temp={temp} desc={description} icon={icon} />
    </div>
  );
}

export default App;
