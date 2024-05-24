import React from 'react'

const Slider = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
  </div>
  <div className="carousel-inner pb-5" >
    <div>
      <div className="carousel-item active position-relative">
        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/banner/banner-2.jpg" className="d-block w-100" alt="..." />
        <div>
          <div class="col-4 p-5 carousel-caption d-none d-md-block">
            <p className='text-dark ut text-start'><span className='btncolour'>100%</span>Organic Vegetables</p>
            <h1 class="text-dark big text-start">Explore fresh & <br></br>juicy fruits.</h1>
            <p class="text-body-secondary text-start pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
            <div className='text-start'><button type="button" class="btn btn-success">Shop Now</button></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="carousel-item">
        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/banner/banner.jpg" className="d-block w-100" alt="..." />
        <div class="col-4 carousel-caption d-none d-md-block">
        <p className='text-dark ut text-start'><span className='btncolour'>100%</span>Organic Vegetables</p>
          <h1 class="text-dark big text-start">The best way to <br></br>stuff your wallet.</h1>
          <p class="text-body-secondary text-start pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
          <div className='text-start'><button type="button" class="btn btn-success">Shop Now</button></div>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Slider