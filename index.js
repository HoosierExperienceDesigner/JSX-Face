import React from 'react';
import ReactDOM from "react-dom";
import { range } from 'd3';
import { Face } from './Face.js';

const width = 200;
const height = 200;
const eyeOffsetX = 35;
const eyeOffsetY = 35;

const array=range(10);
       
const App = () => array.map(()=>(
  <Face 
     width = {width}
     height = {height}
     centerX = {width/2}
     centerY =  {height/2}
     strokeWidth = {5 + Math.random()*5}
     eyeOffsetX = {eyeOffsetX}
     eyeOffsetY = {eyeOffsetY}
     eyeRadius = {10 + Math.random()*10}
     mouthWidth = {10 + Math.random()*10}
     mouthRadius = {0}
     hatWidth = {eyeOffsetX + eyeOffsetY}
     hatHeight ={height/3}
   />
	));

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);