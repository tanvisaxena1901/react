// var React=require("react");
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
// var ReactDOM=require("react-dom");
const fname="Tanvi Saxena"
// console.log(`my name is ${fname}`);
// const currdate=new Date().toLocaleDateString();
// const currtime=new Date().toLocaleTimeString();
// const img1="https://picsum.photos/id/237/200/300";
// const img2="https://picsum.photos/seed/picsum/200/300";
// const img3="https://picsum.photos/200/300/?blur=2";

// ReactDOM.render(
// <>
// {
/* <h1>{` my name is ${fname}`}</h1>
<p>Current date is {currdate}</p>
<p>Current time is {currtime}</p> */
         // <div className='img_div'>
         // <h1 className='heading'> My name is {fname}</h1>
         // <img src={img1} alt="randomimage" />
         // <img src={img2} alt="randomimage" />
         // <a href="">
         // <img src={img3} alt="randomimage" />
         // </a>
         // </div>
         
// }
// </>,
// document.getElementById("root"));
//new Date(year,month,day,hrs,mins,secs)
let curDate=new Date(2020,5,5,12);
curDate=curDate.getHours();
let greeting="";
const cssStyle={};
if(curDate>=1 && curDate<12)
{
   greeting="Good Morning";
   cssStyle.color='green';
}
else if(curDate>=12 && curDate<19)
{
   greeting="Good AfterNoon";
   cssStyle.color='pink';
}
else
{
   greeting="Good Night";
   cssStyle.color='red';
}
ReactDOM.render(
   <h1>Hello Sir,<span style={cssStyle}> {greeting}</span></h1>,
   document.getElementById("root")
);