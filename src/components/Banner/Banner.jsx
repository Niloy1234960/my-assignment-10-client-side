import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="carousel ">
         
          <div id="slide1" className="carousel-item relative w-full ">
            <img
              src="https://i.ibb.co.com/6Jg24C3J/a61fc5d0516c69e690aa736ea0b7f955.jpg"
              className="w-full h-[340px] rounded-2xl"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/tP3L9qJx/7a66850ba05458126e82de2d763415de.jpg"
              className="w-full h-[340px] rounded-2xl"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/cXbwZXpW/fe5cc469092f9bf804f5a5957fa50883.jpg"
              className="w-full h-[340px] rounded-2xl"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/F4prrht5/d15dce1a667efbfa2a9d6c2b6e2a446a.jpg"
              className="w-full h-[340px] rounded-2xl"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
