'use client'
import React,{useEffect, useState} from 'react'

const ProgressBar = ({progress}) => {
    const[animatedprogss,setAnimatedProgress] =useState(0)

    useEffect(()=>{
        // setTimeout(()=> setAnimatedProgress(progress),100)
        const timeout = setTimeout(() => {
            setAnimatedProgress(progress);
        }, 100); // Small delay for a smoother animation

        return () => clearTimeout(timeout);
    },[progress])
  return (
    <div className='progress-bar-container'>
      <div className='inner-bar' style={{
        // width: `${animatedprogss}%`,
         color: animatedprogss<5 ? "black": "white",
        transform: `translateX(${animatedprogss-100}%)`
       }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemax="95"
            aria-valuemin="5"
      >
        {progress}%
      </div>
    </div>
  )
}

export default ProgressBar
