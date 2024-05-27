import React, { useEffect } from "react";
import { category, data, category2, data2 } from "../data";
import { useState } from "react";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { BiSolidStar } from "react-icons/bi";
import { BiStar } from "react-icons/bi";

const Section = () => {
  const [record, setRecord] = useState(data);
  const [record2, setRecord2] = useState(data2);

  const FilterData = item => {
    let datas = data.filter(val => val.category === item);
    setRecord(datas);
  };

  useEffect(() => {
    let all = [];
    record.map((val, i) => {
      if (i <= 1) {
        all.push(val);
      }
    });
    setRecord(all);
  }, []);

  const FilterData2 = item => {
    if (item === "All") {
      setRecord2(data2);
    } else {
      let datas2 = data2.filter(val => val.category === item);
      setRecord2(datas2);
    }
  };

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 640px
      1280: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div class="col-12 d-flex mt-5 mb-5">
            <div class="col-4 pt-2">
              {category.map(val => {
                return (
                  <div className="cet">
                    <button
                      key={val.id}
                      onClick={() => FilterData(val.name)}
                      className="btn"
                    >
                      {val.name}
                    </button>
                  </div>
                );
              })}
            </div>
            <div class="col-8 d-flex flex-wrap p-2">
              {record.map(val => {
                return (
                  <div className="opa">
                    <div class="col-6 w-100  m-1" key={val.id}>
                      <img className=" d-block rounded" src={val.img} />
                      <div className="btncenter d-flex justify-content-center">
                        <div>
                          <h4 className="tn">
                            {val.name}
                          </h4>
                          <button>Shop Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="col-12 d-flex mt-5 mb-5">
            <div class="col-3">
              {category2.map(val => {
                return (
                  <div className="cet nav-item">
                    <button
                      key={val.id}
                      onClick={() => FilterData2(val.name)}
                      className="btn"
                    >
                      {val.name}
                    </button>
                  </div>
                );
              })}
              <div class="col-3">
                <img
                  class="ih d-block"
                  src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/product-banner.jpg"
                />
              </div>
            </div>
            <div class="col-9 d-flex flex-wrap">
              {record2.map(val => {
                return (
                  <div className="col-3 p-1">
                    <div className=" card w-100 opa" style={{ width: "18rem" }}>
                      <img className="p-2 rounded" src={val.img} />
                      <div className="card-body">
                        <p className="card-text d-flex justify-content-center">
                          {val.category}
                        </p>
                        <span className="d-flex justify-content-center mb-2 star">
                          {val.star}
                        </span>
                        <h5 className="card-title text-center d-flex justify-content-center">
                          {val.name}
                        </h5>
                        <div className="d-flex mt-4 justify-content-center align-items-center">
                          <p className="price">
                            ${val.price}
                          </p>
                          <p className="rprice">
                            ${val.rprice}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-12 d-flex mt-5 mb-5">
            <div className="col-4">
              <div className="position-relative">
                <img
                  className="d-block w-100 p-1 rounded"
                  src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/1.jpg"
                />
                <div className="sec3 position-absolute">
                  <h5>
                    Healthy <br /> Bakery Products
                  </h5>
                  <p className="text-dark text-start">
                    <span className="btncolour">30%</span>Off on first order
                  </p>
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="position-relative">
                <img
                  className="d-block w-100 p-1 rounded"
                  src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/2.jpg"
                />
                <div className="sec3 position-absolute">
                  <h5>
                    Fresh <br /> Snecks & Sweets
                  </h5>
                  <p className="text-dark text-start">
                    <span className="btncolour">20%</span>Off on first order
                  </p>
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="position-relative">
                <img
                  className="d-block w-100 p-1 rounded"
                  src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/3.jpg"
                />
                <div className="sec3 position-absolute">
                  <h5>
                    Fresh & Healthy<br /> Organic Fruits
                  </h5>
                  <p className="text-dark text-start">
                    <span className="btncolour">35%</span>Off on first order
                  </p>
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 d-flex mt-5 mb-5">
            <div className="col-3 border p-2 cs text-center rounded">
              <span>
                <RiMoneyDollarBoxLine />
              </span>
              <h4>Payment Secure</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="col-3 border p-2 cs text-center rounded">
              <span>
                <RiShoppingBag3Line />
              </span>
              <h4>Product Packing</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="col-3 border p-2 cs text-center rounded">
              <span>
                <BiSupport />
              </span>
              <h4>24×7 Support</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="col-3 border p-2 cs text-center rounded">
              <span>
                <TbTruckDelivery />
              </span>
              <h4>Delivery in 5 Days</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sec4main mt-5 mb-5">
        <div className="container">
          <div className="d-flex flex-wrap col-5">
            <div className="sec4">
              <div className="col-12 watch shadow-sm rounded">
                <h6>
                  <span>35%</span>OFF
                </h6>
                <h3>Great deal on organic food.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex sec6 mt-5 mb-5">
              <div className="col-6 d-flex p-2 m-2">
                <div className="col-4 p-1">
                  <div className=" card w-100 opa" style={{ width: "18rem" }}>
                    <img
                      className="p-2 rounded"
                      src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg"/>
                    <div className="card-body">
                      <p className="card-text d-flex justify-content-center">Fruits</p>
                      <span className="d-flex justify-content-center star mb-3"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiStar /></span>
                      <h5 className="card-title text-center d-flex justify-content-center">Fresh organic apple 1kg simla</h5>
                      <div className="d-flex mt-4 justify-content-center align-items-center">
                        <p className="price">$ 120</p>
                        <p className="rprice">$ 123.25</p>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="col-4 p-1">
                  <div className=" card w-100 opa" style={{ width: "18rem" }}>
                    <img
                      className="p-2 rounded"
                      src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/9.jpg"/>
                    <div className="card-body">
                      <p className="card-text d-flex justify-content-center">Snack</p>
                      <span className="d-flex justify-content-center star mb-3"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></span>
                      <h5 className="card-title text-center d-flex justify-content-center">Best snakes with hazel nut pack</h5>
                      <div className="d-flex mt-4 justify-content-center align-items-center">
                        <p className="price">$ 145</p>
                        <p className="rprice">$ 150</p>
                      </div>  
                    </div>
                  </div>
                </div> 
                <div className="col-4 p-1">
                  <div className=" card w-100 opa" style={{ width: "18rem" }}>
                    <img
                      className="p-2 rounded"
                      src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg"/>
                    <div className="card-body">
                      <p className="card-text d-flex justify-content-center">Vegitable</p>
                      <span className="d-flex justify-content-center star mb-3"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiStar /></span>
                      <h5 className="card-title text-center d-flex justify-content-center">Fresh organic villa farm lomon</h5>
                      <div className="d-flex mt-4 justify-content-center align-items-center">
                        <p className="price">$ 120</p>
                        <p className="rprice">$ 123.25</p>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="col-6 seci p-3">
                  <img className="rounded sec6i" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/products-rightview.jpg"/>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
         <div className="row">
             <div className="col-12 sec7 mt-5 mb-5">
                <div className="col-12">
                  <h3 className="d-flex justify-content-center">Great Words From People</h3>
                  <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  <p className="d-flex justify-content-center">incididunt ut labore lacus vel facilisis.</p>
                </div>
                <div className="col-12 d-flex align-items-center">
                      <div className="col-4 mt-5 testi">
                        <img className="shadow-lg" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/1.jpg" alt="" />
                        <div className="testbox pt-5">
                              <span className="d-flex justify-content-center">Co Founder</span>
                              <h4 className="d-flex justify-content-center">Stephen Smith</h4>
                              <p className="d-flex justify-content-center flex-wrap ps-5 pe-5">"eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis."</p>
                              <div className="star d-flex justify-content-center"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></div>
                        </div>
                      </div>
                      <div className="col-4 mt-5 pe-1 testi">
                        <img className="shadow-lg" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/2.jpg" alt="" />
                        <div className="testbox pt-5">
                              <span className="d-flex justify-content-center">Manager</span>
                              <h4 className="d-flex justify-content-center">Loram Robinson</h4>
                              <p className="d-flex justify-content-center flex-wrap ps-5 pe-5">"eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis."</p>
                              <div className="star d-flex justify-content-center"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiStar /></div>
                        </div>
                      </div>
                      <div className="col-4 mt-5 testi">
                        <img className="shadow-lg" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/3.jpg" alt="" />
                        <div className="testbox pt-5">
                              <span className="d-flex justify-content-center">Team Leader</span>
                              <h4 className="d-flex justify-content-center">Saddika Alard</h4>
                              <p className="d-flex justify-content-center flex-wrap ps-5 pe-5">"eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis."</p>
                              <div className="star d-flex justify-content-center"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></div>
                        </div>
                      </div>
                </div>
             </div>
         </div>
      </div>

      <div className="sec5">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center sec5-1">
              <div>
                <h2 className="d-flex justify-content-center mb-3">
                  Latest News
                </h2>
                <p className="d-flex justify-content-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <p className="d-flex justify-content-center">
                  incididunt ut labore lacus vel facilisis.
                </p>
              </div>
            </div>
            <div className="co-12">
              <div class="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div class="card">
                      <div class="card-body sec5swip">
                        <span className="d-flex">
                          By Admin |<p>Snacks</p>
                        </span>
                        <h5 class="card-title">
                          Urna pretium elit mauris cursus at elit Vestibulum.
                        </h5>
                        <a href="#">
                          Read More <FaArrowRight />
                        </a>
                      </div>
                      <img
                        src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg"
                        className="card-img-bottom"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div class="card">
                      <div class="card-body sec5swip">
                        <span className="d-flex">
                          By Admin |<p>Food</p>
                        </span>
                        <h5 class="card-title">
                          Best guide to Shopping for organic ingredients.
                        </h5>
                        <a href="#">
                          Read More <FaArrowRight />
                        </a>
                      </div>
                      <img
                        src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/1.jpg"
                        className="card-img-bottom"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div class="card">
                      <div class="card-body sec5swip">
                        <span className="d-flex">
                          By Admin |<p>Snacks</p>
                        </span>
                        <h5 class="card-title">
                          Cursus at elit vestibulum urna pretium elit mauris.
                        </h5>
                        <a href="#">
                          Read More <FaArrowRight />
                        </a>
                      </div>
                      <img
                        src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/3.jpg"
                        className="card-img-bottom"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div class="card">
                      <div class="card-body sec5swip">
                        <span className="d-flex">
                          By Admin |<p>Vagitable</p>
                        </span>
                        <h5 class="card-title">
                          Condimentum Nam enim bestMorbi odio sodales.
                        </h5>
                        <a href="#">
                          Read More <FaArrowRight />
                        </a>
                      </div>
                      <img
                        src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg"
                        className="card-img-bottom"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div class="card">
                      <div class="card-body sec5swip">
                        <span className="d-flex">
                          By Admin |<p>Snacks</p>
                        </span>
                        <h5 class="card-title">
                          Urna pretium elit mauris cursus at elit Vestibulum.
                        </h5>
                        <a href="#">
                          Read More <FaArrowRight />
                        </a>
                      </div>
                      <img
                        src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg"
                        className="card-img-bottom"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div class="card">
                      <div class="card-body sec5swip">
                        <span className="d-flex">
                          By Admin |<p>Food</p>
                        </span>
                        <h5 class="card-title">
                          Best guide to Shopping for organic ingredients.
                        </h5>
                        <a href="#">
                          Read More <FaArrowRight />
                        </a>
                      </div>
                      <img
                        src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/1.jpg"
                        className="card-img-bottom"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div class="card">
                      <div class="card-body sec5swip">
                        <span className="d-flex">
                          By Admin |<p>Snacks</p>
                        </span>
                        <h5 class="card-title">
                          Cursus at elit vestibulum urna pretium elit mauris.
                        </h5>
                        <a href="#">
                          Read More <FaArrowRight />
                        </a>
                      </div>
                      <img
                        src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/3.jpg"
                        className="card-img-bottom"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div class="card border">
                      <div class="card-body sec5swip">
                        <span className="d-flex">
                          By Admin |<p>Vagitable</p>
                        </span>
                        <h5 class="card-title">
                          Condimentum Nam enim bestMorbi odio sodales.
                        </h5>
                        <a href="#">
                          Read More <FaArrowRight />
                        </a>
                      </div>
                      <img
                        src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg"
                        className="card-img-bottom"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
