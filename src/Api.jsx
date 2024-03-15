import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
 
// Hit API with Axios
const Api = () => { 
  const [temp, setTemp] = useState([]); 
 
  useEffect(() => { 
    axios.get('http://api.weatherapi.com/v1/current.json?key=188dc82421fc44d195d34719242502&q=Jakarta&aqi=no') 
    .then(response => response.data.current)  
    .then(temp => setTemp(temp))   
    // .then(data => console.log(data))
    .catch(error => console.error('Error:', error)); 
  }, []); 
 
return ( 
    <div> 
      {/* render temp */}
      Weather Jakarta: {temp.temp_c}℃
    </div> 
  ); 
}; 

export default Api;