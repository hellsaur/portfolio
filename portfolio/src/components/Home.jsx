import React from 'react';




function Home(){

  return(
    <div className= "container">
    {/* <h1>My portfolio</h1> */}
    <h3 id="title">Projects</h3>
    
    <div className="project1">
          
        <a id="image" href="https://lendmybike.herokuapp.com/"><img src="https://i.imgur.com/enp9oxT.png" alt="" width="500"/></a>
        <p><h2>Rent My Bike Web-App</h2>App that allows a user to rent a bike from a certain number<br />
         of hours at a certain hourly rate, and stores that in a database. User must input their name,<br />
          address etc. Product details page that shows the bikes and tells you more about the different<br />
           add-ons, like helmets and other protections. Social media integration with Instagram that <br />
           shows all the awesome places people have BikeUs at. A checkout process and payments system <br />
           with Stripe so users can complete the process. "Currently in development"<br />
           Site done in REACT / Ruby on rails</p>
    </div>
    
    <div className="project2">
    
        <a id="image" href="https://hellsaur.github.io/daredevil/"><img src="https://i.imgur.com/HvC0w40.png" alt="" width="500"/></a>
        <p><h2>DareDevil TV-Show Site</h2>Daredevil is a TV-Show site where you get information<br/> 
          about the show and a more deep information about the characters of the show.<br/>
          Also in every character has a video about the actor/actress talking about their own character.<br/>
          Site done in HTML / CSS / JAVASCRIPT.
           </p>
    </div>
    
    <div className="project3">
    
        <a id="image" href="https://shielded-garden-81038.herokuapp.com/"><img src="https://i.imgur.com/GZfUkwP.png" alt="" width="500"/></a>
        
        <p><h2>Workout  Web-App</h2>The ideal scenario for this app to be used <br />
        is before and during a workout with either a beginner or veteran. The app allows<br /> 
        the user to build a complete routine on the fly, and possibly save that routine for<br />
        later reference. Keeping this in mind, we want to reduce the number of "screens" the user<br />
         will need to use. This way, the user is focused on working out, and not on navigating <br />
         the application.The app features log-in functionality as a way to save routines; however,<br />
          logging in is not mandatory if the user has no intention of saving their routine.<br />
          Site done in REACT / Express </p>
    </div>

    </div>
  )
}


export default Home;
