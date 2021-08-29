import './App.css';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';

function App(){
  return(
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
    <section>
    <h2>Hello React</h2>
    <h5>Myself Aayush anand a sophmore in vit-ap university,
       interested in learning and developing new
        ideas and projects. </h5>
    </section>
   
    
  </nav>
  
  );
  
 /* <h2>Hello React</h2>
    <h5>Myself Aayush anand a sophmore in vit-ap university, interested in learning and developing new ideas and projects. </h5> */
}
export default App;
