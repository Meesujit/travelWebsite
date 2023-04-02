import { React, useState } from 'react'
// import HeroSection from './components/HeroSection'
import './App.css'
import { Link } from 'react-router-dom'
// import background from './img/background-image.jpg'
const Home = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return <>
    <nav className='navbar'>

      <div className='container'>

        <div className='logo'>

          <span><h1>Travelo</h1></span>

        </div>

        <div className='menu-icon' onClick={handleShowNavbar} >

          <ion-icon name="menu-outline"></ion-icon>

        </div>

        <div className={`nav-element ${showNavbar && 'active'} `} >
          <ul >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/create-user'>User</Link>
            </li>
            <li>
              <Link to='/'>Services</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    {/* ---------------------------
       hero section 
       ------------------------------ */}

    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-row">

          {/* this is for data part  */}
          <div className="hero-col">
            <h1>Happy Journey</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum, labore quis eum ad magni voluptatibus ullam autem sed eligendi, modi temporibus possimus quo ut qui. A explicabo maiores dolores!</p>
            
            <Link to='./components/CreateData' className='hero-btn button'>Book Now</Link>
          </div>

          {/* this is for image part */}
          <div className="hero-col">
            <picture>
              <img src="./image/romantic-getaway-animate.svg" alt="travel" width={550}/>

             
            </picture>

          </div>
        </div>
      </div>
    </div>



    {/*------------------------------------
        Destination section
        -------------------------------------  */}


    <div className="destination-section">
      <div className='heading'>
      <h1 className='text-center'>Destination</h1>
      </div>
      <div className="container ">
        <div className="row mt-5">
          <div className="col card mr-3">
            <img className="card-img-top" src="./image/paris-animate.svg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">Paris</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='' className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>

          <div className="col card mr-3">
            <img className="card-img-top" src="./image/london-animate.svg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">London</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='' className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>

          <div className="col card mr-3">
            <img className="card-img-top" src="./image/japan-animate.svg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">Japan</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='' className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>

          <div className="col card">
            <img className="card-img-top" src="./image/new-york-animate.svg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">New York</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='' className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>

        
      </div> 

           
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col card mr-3">
            <img className="card-img-top" src="./image/paris-animate.svg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">Paris</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='' className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>

          <div className="col card mr-3">
            <img className="card-img-top" src="./image/london-animate.svg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">London</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='' className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>

          <div className="col card mr-3">
            <img className="card-img-top" src="./image/japan-animate.svg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">Japan</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='' className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>

          <div className="col card">
            <img className="card-img-top" src="./image/new-york-animate.svg" alt=" " height={200} />
            <div className="card-body">
              <h5 className="card-title">New York</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='' className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>

        
      </div> 

    </div>


  {/*---------------------------------------
   Travel Trip  
   ------------------------------------------*/}

   <div className="trip-section">
    <div className="container">
      
      <div className="row mt-5">
        <div className="col mr-5">
        <img className="card-img-top rounded-circle " src="./image/train-animate.svg" alt=" " height={200} />
        </div>
        <div className="col mr-5">
        <img className="card-img-top rounded-circle " src="./image/flying-around-animate.svg" alt=" " height={200} />
        </div>
        <div className="col mr-5">
        <img className="card-img-top rounded-circle" src="./image/gps-navigator-animate.svg" alt=" " height={200} />
        </div>
        <div className="col">
        <img className="card-img-top rounded-circle" src="./image/hotel-booking-animate.svg" alt=" " height={200} />
        </div>
      </div>
    </div>
   </div>




   {/*----------------------------
    footer section
    ------------------------------   */}

    <div className="footer-section">
      <div className="container m-auto">
        <div className="row">
          <div className="col">
            <h3>Contact us</h3>
          <ul className="socials">
          <li> <Link><i class="fa-brands fa-instagram fa-beat"></i></Link> </li>
          <li> <Link><i class="fa-brands fa-facebook fa-beat"></i></Link> </li>
          <li> <Link><i class="fa-brands fa-twitter fa-beat"></i></Link> </li>
          <li> <Link><i class="fa-brands fa-linkedin-in fa-beat"></i></Link> </li>
        </ul>
          </div>          
        </div>
      </div>
   
    </div>












    {/* -------------------------------------
 footer section 
 -----------------------------------------*/}
    {/* <footer>
      <div className="footer-content">
        <h3>Footer Section</h3>
        <p>Footer section - source code. </p>
        <ul className="socials">
          <li> <Link><i class="fa-brands fa-instagram fa-beat"></i></Link> </li>
          <li> <Link><i class="fa-brands fa-facebook fa-beat"></i></Link> </li>
          <li> <Link><i class="fa-brands fa-twitter fa-beat"></i></Link> </li>
          <li> <Link><i class="fa-brands fa-linkedin-in fa-beat"></i></Link> </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy;2021 <Link> <span>footer bottom</span> </Link>  </p>
      </div>
      <div className="footer-menu">
        <ul className="f-menu">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/service'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>

        </ul>
      </div>

     </footer> */}




  </>


}

export default Home
