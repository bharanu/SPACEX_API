import React,{useState,useEffect} from 'react';
import ListofSpaceXLaunches from './components/molecules/LisofSpaceXLaunches';
import LaunchCard from './components/atoms/LaunchCard';
import './App.css';

function App() {
const [spacexData,setSpacexData] = useState([]);

const getSpaceData = async()=>{
  const response = await fetch('https://api.spacexdata.com/v4/launchpads');
  const data = await response.json();
  setSpacexData(data);
}
useEffect(() =>{
  getSpaceData();
},[]);

return(
  <div className = "App">
  <ListofSpaceXLaunches spacexData={spacexData}/>
  
  </div>
  );



}
  

export default App;
