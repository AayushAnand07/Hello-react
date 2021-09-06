import './App.css';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import { green } from '@material-ui/core/colors';

function App(){
  return(
    <>
  <nav>
    
      
      <input type="checkbox" id="check"/>
     <label for="check" class="checkbtn"> <DnsRoundedIcon></DnsRoundedIcon></label>

    <label class="logo">NavBar</label>
    <ul>
      <li ><a class="active" href="/home">Home</a></li>
      
      <li><a href="/home">About</a></li>
      <li><a href="/home">Services</a></li>
      <li><a href="/home">Contact</a></li>
      <li><a href="/home">Gallery</a></li>
    </ul>
    {/* <section>
    
    <h2>Hello React</h2>
    <h5>Myself Aayush anand a sophmore in vit-ap university,
       interested in learning and developing new
        ideas and projects. </h5>
    </section> */}
    
    
  </nav>
  

  
  {/* <div id="footer"> */}
   
  
  

<div class="container-fluid my-container">
  <div class="row flex-fill my-row " style={{marginbottom:"0px"}}>
  <div class="col-lg-3 my-col">
  <img  style={{width:"14.5rem",borderRadius:"22px"}} src="https://user-images.githubusercontent.com/41218074/131801069-759d4037-8faa-4c05-9a73-faccbd255003.png" alt="Generic placeholder image"></img>
  <h1 calss="d-inline" style={{fontSize:"2rem",display:"inline-block",padding:"10px",color:"#1b5e20"}}>Hi!<br/> Myself Aayush </h1>
  </div>
  <div class="col-lg-9 my-col">
  
  <h2 style={{fontSize:"2rem",paddingleft:"20px"}}>Hello Guys! Whatsup how you all doing!</h2>
   <h3 style={{fontSize:"1.5rem",paddingleft:"20px"}}>I have been in this field of creating and developing idea since a year and a half and my technical skills 
   include working with frontend and backend and also with flutter for application dev. <br/>Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Voluptas in consectetur, hic corrupti autem dolor
    accusantium iste vel reiciendis quis, sapiente voluptatum illo expedita nulla deserunt id aliquam corporis quae!</h3>
    <br/>
    <br/>
  </div>
  <div class="row">
    <div class="col">
      <h2 style={{fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur</h2>
      <h3><p>&#9642; We listen to the other person without interruption and practice effective listening skills.</p></h3>
        <p><h3>&#9642; We do not shy away from challenges</h3></p>
        <p><h3>&#9642; We stay true to our slogan</h3></p>
    </div>
  </div>
  </div>
</div >
<div class="container footer" style={{backgroundColor:"black",position:"relative",  bottom:"0"}}>
  <h4 style={{color:"white", textAlign:"center"}}>Developed With love By-</h4>
  <h5  style={{textAlign:"center",}}><a href="#" style={{color:"#e9ecef",textDecoration:"none"}}>AAYUSH ANAND</a></h5>
  </div>
 

  
  </>
  
  );
  
 
}
export default App;
