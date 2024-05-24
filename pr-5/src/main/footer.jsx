import React from 'react'
import { LuMapPin } from "react-icons/lu";
import { RiMailSendLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoDribbble } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='footer mt-5'>
        <div className="container">
          <div className="row">
            <div className="col-4 footercol">
                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png"/>
                <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                <div className='d-flex'><span className='me-2'><LuMapPin /></span><h6>51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</h6></div>
                <span className='d-flex'><RiMailSendLine /><p>example@email.com</p></span>
                <span className='d-flex'><IoCallOutline /><p>+91 123 4567890</p></span>
            </div>
            <div className="col-2 footercol2">
              <h4 className='fc'>Company</h4>
              <span><a href="#">About Us</a></span><br />
              <span><a href="#">Delivery Information</a></span><br />
              <span><a href="#">Privacy Policy</a></span><br />
              <span><a href="#">Terms & Conditions</a></span><br />
              <span><a href="#">Support Center</a></span><br />
              <span><a href="#">contact Us</a></span>
            </div>
            <div className="col-2 footercol2">
              <h4 className='fc'>Category  </h4>
              <span><a href="#">Dairy & Bakery</a></span><br />
              <span><a href="#">Fruits & Vegetable</a></span><br />
              <span><a href="#">Snack & Spice</a></span><br />
              <span><a href="#">Juice & Drinks</a></span><br />
              <span><a href="#">Chicken & Meat</a></span><br />
              <span><a href="#">Fast Food</a></span>
            </div>
            <div className="col-4">
            <h4 className='fc'>Subscribe Our Newsletter</h4>
            <input className='fi' type="text" placeholder='Serch hare...' />
            <div className='d-flex soc'>
              <span><a href="#"><BiLogoFacebook /></a></span>
              <span><a href="#"><FaXTwitter /></a></span>
              <span><a href="#"><IoLogoDribbble /></a></span>
              <span><a href="#"><IoLogoInstagram /></a></span>
            </div>
            <div className='d-flex fimg'>
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/1.jpg"/>
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/2.jpg"/>
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/3.jpg"/>
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/4.jpg"/>
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/5.jpg"/>
            </div>
            </div>
          </div>
          <hr />
          <p className='flex'>© 2024<span>&nbsp;Carrot</span>, All rights received</p>
        </div>
    </div>
  )
}

export default Footer