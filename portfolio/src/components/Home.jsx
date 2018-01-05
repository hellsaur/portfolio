import React from 'react';




function Home(){

  return(
    <div className= "container">
  <div className="intro">
        Hello, <br />
        I am a freelance graphic designer and web developer <br /> Welcome to my portfolio !
  </div>
     <img id='name' src="https://i.imgur.com/2cMHkLb.png" alt="" width="800"/>
    <h2 id="title">Projects</h2>
    
    <div className="project1">
          
        <a id="image" href="https://lendmybike.herokuapp.com/"><img src="https://i.imgur.com/nKoHWeU.gif" alt="" width="1000" height="400"/></a>
        <p><h2>Rent My Bike Web-App</h2>App that allows a user to rent a bike from a certain number<br />
         of hours at a certain hourly rate, and stores that in a database. <br /><span>Under Development</span> <br /><br /><span>REACT / Ruby on Rails</span></p>
    </div>
    
    <div className="project2">
    
        <a id="image" href="https://hellsaur.github.io/daredevil/"><img src="https://i.imgur.com/uxKPxcC.gif" alt="" width="1000"height="400"/></a>
        <p><h2>DareDevil Website</h2>Daredevil is a informative web app. You can learn more<br /> about each character and video stories
        of the casts and comic <br />characters of "Marvel's Daredevil" TV-show <br/>
        <br/>
           <span>HTML / CSS / JAVASCRIPT</span>
           </p>
    </div>
    
    <div className="project3">
    
        <a id="image" href="https://shielded-garden-81038.herokuapp.com/"><img src="https://i.imgur.com/7AuAAE2.gif" alt="" width="1000"height="400"/></a>
        
        <p><h2>Workout  Web-App</h2>Workout app that allows the user to work at the gym or at home.<br />
        must login to save your workout routine! <br /><br />
          <span>REACT / Express</span> </p>
    </div>

    </div>
  )
}


export default Home;
