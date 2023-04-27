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
      <div className="container">
        <div className="row ml-3">
          {/* content column */}
          <div className="col m-auto col-md-6">
            <h3>Explore the world together</h3>
            <p>Find awesome flights, hotel, tour, car and packages</p>
            <Link type="button" className="btn btn-primary m-auto hero-btn" to='/create-user'>Book Now</Link>

          </div>
          {/* image column */}
          <div className="col m-auto">
            <img src="./image/romantic-getaway-animate.svg" alt="" />

          </div>
        </div>
      </div>
    </div>



    {/*------------------------------------
        Destination section
        -------------------------------------  */}

    <div className="destination-card-section">
      <div className="container">

        <div> <h2 className='text-center pt-5 mr-5'>Destination </h2> </div>
        <div className="row m-auto">
          <div className="col text-center mt-5 ">
            <div className="card" style={{ width: "18rem" }}>
              <img src="./image/japan-animate.svg" alt="" class="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">Tokyo</h4>
                <p className="card-text"><span className='text-primary'> 4.5/5 Excellent </span> (<span className='text-danger'>1214</span> reviews)</p>
                <p className="card-text">$99.00 Price</p>
              </div>
            </div>
          </div>

          <div className="col text-center mt-5">
            <div className="card " style={{ width: "18rem" }}>
              <img src="./image/london-animate.svg" alt="" class="card-img-top" height={290} />
              <div className="card-body">
                <h4 className="card-title">London</h4>
                <p className="card-text"><span className='text-primary'> 4.5/5 Excellent </span> (<span className='text-danger'>1214</span> reviews)</p>
                <p className="card-text">$99.00 Price</p>
              </div>
            </div>
          </div>

          <div className="col text-center mt-5">
            <div className="card " style={{ width: "18rem" }}>
              <img src="./image/paris-animate.svg" alt="" class="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">Paris</h4>
                <p className="card-text"><span className='text-primary'> 4.5/5 Excellent </span> (<span className='text-danger'>1214</span> reviews)</p>
                <p className="card-text">$99.00 Price</p>
              </div>
            </div>
          </div>

          <div className="col text-center mt-5">
            <div className="card " style={{ width: "18rem" }}>
              <img src="./image/new-york-animate.svg" alt="" class="card-img-top" height={289} />
              <div className="card-body">
                <h4 className="card-title">New York</h4>
                <p className="card-text"><span className='text-primary'> 4.5/5 Excellent </span> (<span className='text-danger'>1214</span> reviews)</p>
                <p className="card-text">$99.00 Price</p>
              </div>
            </div>
          </div>

          <div className="col text-center mt-5">
            <div className="card " style={{ width: "18rem" }}>
              <img src="./image/japan-animate.svg" alt="" class="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">Tokyo</h4>
                <p className="card-text"><span className='text-primary'> 4.5/5 Excellent</span> (<span className='text-danger'>1214</span> reviews)</p>
                <p className="card-text">$99.00 Price</p>
              </div>
            </div>
          </div>

          <div className="col text-center mt-5">
            <div className="card " style={{ width: "18rem" }}>
              <img src="./image/japan-animate.svg" alt="" class="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">Tokyo</h4>
                <p className="card-text"><span className='text-primary'> 4.5/5 Excellent </span> (<span className='text-danger'>1214</span> reviews)</p>
                <p className="card-text">$99.00 Price</p>
              </div>
            </div>
          </div>

          
        </div>
        <div className="content mt-5 text-center pb-4">
          <div className="text">
            <h1> Best Deals Avaliable Here</h1>
          </div>
        </div>

      </div>
    </div>





    {/*---------------------------------------
   Travel Trip  
   ------------------------------------------*/}

    <div className="trip-section">
      <div className="container">

        <div className="row ">
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
      <div className="footer-container m-auto">
        <div className="row ml-5">
          <div className="col mb-3">
              <h3 className='pt-4'>Connect us</h3>            
              <Link><i class="fa-brands fa-instagram fa-beat mr-3 ml-3 f-2 text-danger pt-3 "></i></Link> <br />
              <Link><i class="fa-brands fa-facebook fa-beat mr-3 ml-3 mt-2 text-primary"></i></Link> <br />
              <Link><i class="fa-brands fa-twitter fa-beat mr-3 ml-3 mt-2 text-info"></i></Link> <br />
              <Link><i class="fa-brands fa-linkedin-in fa-beat ml-3 mt-2 text-"></i></Link>           
          </div>

          <div className="col mb-3">
              <h3 className='pt-4'>Services</h3>            
              <h6 className='ml-4 pt-3'>lorem</h6>
              <br />
              <h6 className='ml-4'>lorem</h6>
              <br />
              <h6 className='ml-4'>lorem</h6>
              <br />

          </div>

          <div className="col mb-3">
              <h3 className='pt-4'>Contact</h3>            
              <h6 className='ml-4 pt-3'>Gmail 📧</h6>
              <br />
              <h6 className='ml-4'>Phone 📲</h6>
              <br />
              <h6 className='ml-4'>Map 🗺️</h6>
              <br />           
          </div>
        </div>
      </div>

    </div>
  </>


}

export default Home
