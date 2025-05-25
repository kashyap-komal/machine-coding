'use client'

import  { useState,useRef, useEffect } from "react";

const Otp = () => {
    const refArr=useRef([]);
  const OTP_DIGITS_COUNT=5;
  const [inputArr,setInputArr]=useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  const handleChange=(value,index)=>{
    
    if(isNaN(value))return;
    const newvalue= value.trim();
    const newArr=[...inputArr];
    newArr[index]=value.slice(-1);
    setInputArr(newArr);
    newvalue && refArr.current[index+1]?.focus();
  }

  useEffect(()=>{
    refArr.current[0]?.focus();
  },[])

  const handleOnKeyDown=(e,index)=>{
    console.log(e)
    if(!e.target.value && e.key=== "Backspace")
    {
        refArr.current[index-1]?.focus();
    }

  }

  return (
    <div className="app">
    <h1>Validate OTP</h1>

    <div className="flex justify-center mt-10">
      {inputArr.map((input,index)=>{
        return (

         <input key={index} type="text" className="border border-gray-400 w-10 h-10 text-center mx-1"
            value={inputArr[index]}
            ref={(input)=>(refArr.current[index]=input)}
            onChange={(e)=>handleChange(e.target.value,index)}
            onKeyDown={(e)=> handleOnKeyDown(e,index)}
        />
        )
      })}
          
         
    </div>
  </div>
  )
}

export default Otp
