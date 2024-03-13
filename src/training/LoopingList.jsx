import React from 'react'; 
 
// Array berisi data 
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 
'Grapes']; 
 
// Komponen yang melakukan looping list tanpa key 
const FruitList = ({ fruits }) => { 
  return ( 
    <ul> 
      {fruits.map((fruit, index) => ( 
        <li key={index}>{fruit}</li> 
      ))} 
    </ul> 
  ); 
}; 
 
// Komponen utama 
function LooppingList() { 
  return ( 
    <div> 
      <h2>Daftar Buah :</h2> 
      <FruitList fruits={fruits} /> 
    </div> 
  ); 
} 
export default LooppingList; 