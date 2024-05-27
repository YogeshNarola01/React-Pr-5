import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";


const Header = () => {
  return (
       <div className='header'>
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex align-items-center">
                <div className="col-3">
                  <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png"/>
                </div>
                <div className="col-6 d-flex hi">
                  <input type="text" placeholder='Serch for items...' />
                  <div className='d-flex align-items-center'>
                    <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      All category
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Men's</a></li>
                      <li><a class="dropdown-item" href="#">Women's</a></li>
                      <li><a class="dropdown-item" href="#">Electronics</a></li>
                    </ul>
                    <div className='hicon'>
                    <IoSearchOutline />
                    </div>
                  </div>
                </div>
                <div className='col-3 hd d-flex align-ites-center justify-content-end'>
                    <span className='d-flex align-items-center'><LuUser />
                    <a class="btn dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                      Account
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Register</a></li>
                      <li><a class="dropdown-item" href="#">Checkout</a></li>
                      <li><a class="dropdown-item" href="#">Login</a></li>
                    </ul>
                    </span>
                    <span className='d-flex align-items-center'><FaRegHeart />&nbsp;Wishlist</span>
                    <span className='d-flex align-items-center'><LuShoppingCart />&nbsp;Cart</span>
                </div>
              </div>
                <div><hr/></div>
              <div className="col-12 d-flex align-items-center header2">
                    <div className="col-2 h2i">
                    <TbCategory />
                    </div>
                    <div className="col-8 h2div d-flex justify-content-center">
                        <div>
                          <a class="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                          </a>
                        </div>
                        <div>
                      <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Shop left sidebar</a></li>
                        <li><a class="dropdown-item" href="#">Shop right sidebar</a></li>
                        <li><a class="dropdown-item" href="#">full width</a></li>
                      </ul>
                    </div>
                    <div>
                      <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Product
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Product left sidebar</a></li>
                        <li><a class="dropdown-item" href="#">Product right sidebar</a></li>
                        <li><a class="dropdown-item" href="#">Product full width</a></li>
                      </ul>
                    </div>
                    <div>
                      <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">About Us</a></li>
                        <li><a class="dropdown-item" href="#">Contact Us</a></li>
                        <li><a class="dropdown-item" href="#">Cart</a></li>
                        <li><a class="dropdown-item" href="#">Chackout</a></li>
                        <li><a class="dropdown-item" href="#">Track Order</a></li>
                        <li><a class="dropdown-item" href="#">Wishlist</a></li>
                        <li><a class="dropdown-item" href="#">Cart</a></li>
                        <li><a class="dropdown-item" href="#">Faq</a></li>
                        <li><a class="dropdown-item" href="#">Login</a></li>
                        <li><a class="dropdown-item" href="#">Register</a></li>
                        <li><a class="dropdown-item" href="#">Policy</a></li>
                      </ul>
                    </div>
                    <div>
                      <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Left sidebar</a></li>
                        <li><a class="dropdown-item" href="#">Right sidebar</a></li>
                        <li><a class="dropdown-item" href="#">Fullwidth</a></li>
                        <li><a class="dropdown-item" href="#">Ditail Left sidebar</a></li>
                        <li><a class="dropdown-item" href="#">Ditail Right sidebar</a></li>
                        <li><a class="dropdown-item" href="#">Ditail Fill Width</a></li>

                      </ul>
                    </div>
                    <div>
                      <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Element
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Men's</a></li>
                        <li><a class="dropdown-item" href="#">Women's</a></li>
                        <li><a class="dropdown-item" href="#">Electronics</a></li>
                      </ul>
                    </div>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                        <p><IoCallOutline />+123 ( 456 ) ( 7890 )</p>
                    </div>
              </div>
            </div>
          </div>
      </div>
      
  )
}

export default Header