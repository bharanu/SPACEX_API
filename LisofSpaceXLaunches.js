import React,{useState,useEffect} from 'react';
import LaunchCard from '../atoms/LaunchCard';

const ListofSpaceXLaunches = ({spacexData}) => {
    return(
        <>
        {spacexData.length>0 && spacexData.map(data =>(
        <LaunchCard LaunchData={data}/>
        ))}
        </>


    )

    
}
export default ListofSpaceXLaunches;