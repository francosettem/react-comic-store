import React from 'react';
import { NavLink } from 'react-router-dom';
import "./404.css";

export const Error = () => {
  return (
   <div className="error404">
   <span className="error404__title">Error 404</span>
   <span className="error404__description">Oops... something went wrong</span>
   <NavLink to="/"><button className="error404__button">Return to Index</button></NavLink>
   </div>)
   

}