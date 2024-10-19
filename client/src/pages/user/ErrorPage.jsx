import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
const navigate= useNavigate()

  return <div>
    <h1>404 Error</h1>
    <button onClick={()=>navigate('/')} >Navigate to Home</button>
  </div>;
};
