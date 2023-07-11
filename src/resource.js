/*import React,{Component} from 'react';
import $ from 'jquery'; 

class Res extends Component{
  render(){
    return(
      <div className="Res">
       {  $('.owl-carousel').owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    nav: true,
       } 
    )
  }
  </div>
  )}
}

export default Res;*/
/*import React, { Component } from 'react';
import $ from 'jquery'; // Import jQuery library

class Res extends Component {
  componentDidMount() {
    // Initialize Owl Carousel when the component mounts
    $('.owl-carousel').owlCarousel({
      autoplay: true,
      center: true,
      loop: true,
      nav: true,
    });
  }

  render() {
    return (
      <div className="Res">
 
      </div>
    );
  }
}
export default Res;*/

import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Res extends Component {
  render() {
    const settings = {
      autoplay: true,
      centerMode: true,
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="Res">
        <Slider {...settings}>
          {/* Your carousel slides */}
          <div>
            <h3>Slide 1</h3>
          </div>
          <div>
            <h3>Slide 2</h3>
          </div>
          <div>
            <h3>Slide 3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}


