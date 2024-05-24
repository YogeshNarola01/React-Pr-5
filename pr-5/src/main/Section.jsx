import React, { useEffect } from "react";
import { category, data, category2, data2 } from "../data";
import { useState} from "react";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";


const Section = () => {
  const [record, setRecord] = useState(data);
  const [record2, setRecord2] = useState(data2);

  const FilterData = item => {
    let datas = data.filter(val => val.category === item);
    setRecord(datas);
  };


useEffect(()=>{
    let all = []
    record.map((val,i)=>{
        if(i<=1){
        all.push(val)
        }
    })
    setRecord(all)
  },[])


  const FilterData2 = item => {
    let datas2 = data2.filter(val => val.category === item);
    setRecord2(datas2);
  };

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
                  <div className="col-3">
                    <div className=" card w-100 opa" style={{ width: "18rem" }}>
                      <img className="p-2 rounded" src={val.img} />
                      <div className="card-body">
                        <p className="card-text d-flex justify-content-center">
                          {val.category}
                        </p>
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
          <div className="d-flex flex-wrap col-4">
            <div className="sec4">
            
            </div>
          </div>    
        </div>
      </div>
      
    </div>
  );
};

export default Section;
