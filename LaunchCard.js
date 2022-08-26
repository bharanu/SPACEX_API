import React,{useState,useEffect} from 'react';
import { Route,Routes } from 'react-router-dom';

const LaunchCard = ({LaunchData}) => {

   
    return(
        
        <div>
            
            <h1>{LaunchData.name}</h1>
            <h1>{LaunchData.details}</h1>
            <h1>{LaunchData.status}</h1>
            <a href ="https://api.spacexdata.com/v4/launchpads">{LaunchData.launches[0]}</a>
            <a href="https://api.spacexdata.com/v4/launchpads">{LaunchData.launches[1]}</a>
            <a href="https://api.spacexdata.com/v4/launchpads">{LaunchData.launches[2]}</a>
         
            

            

            

           
    
        </div>
        


       


    )

    
}
export default LaunchCard;