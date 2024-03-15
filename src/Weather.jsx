import { useState,useEffect } from "react"; 

// Hit API with Javascript
const URL = 'http://api.weatherapi.com/v1/current.json?key=188dc82421fc44d195d34719242502&q=Jakarta&aqi=no'; 
function Weather() { 
  const [temp, setTemp] = useState(0) 
 
  useEffect(()=>{ 
    const fetchData = async () =>{ 
      const result = await fetch(URL) 
      result.json().then(json =>{ 
        setTemp(json.current.temp_c) 
        // console.log(json); 
      }) 
    } 
    fetchData(); 
   }, []); 
 
  return( 
    <div className="App"> 
      Jakarta Temp Now: {temp}℃ 
    </div> 
  ); 
  } 
export default Weather; 