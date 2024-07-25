import React from "react";

export const Banner = () =>{
    return(
        <div className="flex" style={{backgroundColor:"#14053E",height:"550px"}}>
            <img style={{marginLeft:'140px'}}width={450} height={450} src="https://skillrisers.com/_next/image?url=%2Fimages%2Fbanner.png&w=1920&q=75" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <strong><h2 style={{color:"white", fontSize:"55px"}}>Training yourself is never an expense, it is an investment in yourself.</h2></strong> 
            <h5 style={{color:"white"}}></h5>
        </div>
    );

}