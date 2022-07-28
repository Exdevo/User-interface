import React from 'react'
import img from "./images/city.jpg"
import wha from "./images/dwn.png"
import ema from "./images/email.png"
import coast from "./images/coast.jpg"
import rect from "./images/react.png"
export default function Contact(){
    return(
        <div>
        <nav className='nav'>
                <img src={rect} alt="" className='nav--photo' />
                <h2>My project-3</h2>
        </nav> <hr />
        <main className='main'>
        <section className='section'>
        <img src={img} alt="" className='contact--photo'/>
        </section>
        <h1>City Image</h1>
        <div className='diva'>
        <img src={wha} alt="" className='contact--photo1' />
        <p>+254712345678</p>
        </div>
        <div className='diva1'>
        <img src={ema} alt="" className='contact--photo2' /> 
        <p>  image3@gmail.com</p>
        </div>
        
        <img src={coast} alt="" className='contact--photo3'/>
        <h1>Coast Image</h1>
        <div className='diva'>
        <img src={wha} alt="" className='contact--photo1' />
        <p>+254714509827</p>
        </div>
        
        <div className='diva1'>
        <img src={ema} alt="" className='contact--photo2' /> 
        <p>  image4@gmail.com</p>
        </div>
        

        <center> <footer className='footer'><small >Designed and maintained by Expertkoech.All Rights Reserved</small></footer></center>
        </main>
        </div>
        )
    }