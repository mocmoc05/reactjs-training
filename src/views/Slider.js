import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slick from "react-slick";
import "../App.css"

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };
    return (
        <div>
            <Slick {...settings}>
                <img src="https://images.unsplash.com/photo-1562886889-0d7ec2bc333e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="image-slider" />
                <img src="https://images.unsplash.com/photo-1562886889-0d7ec2bc333e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="image-slider" />
                <img src="https://images.unsplash.com/photo-1562886889-0d7ec2bc333e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="image-slider" />
                <img src="https://images.unsplash.com/photo-1562886889-0d7ec2bc333e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="image-slider" />
                <img src="https://images.unsplash.com/photo-1562886889-0d7ec2bc333e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="image-slider" />
                <img src="https://images.unsplash.com/photo-1562886889-0d7ec2bc333e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="image-slider" />
                <img src="https://images.unsplash.com/photo-1562886889-0d7ec2bc333e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="image-slider" />
                <img src="https://images.unsplash.com/photo-1562886889-0d7ec2bc333e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="image-slider" />
            </Slick>
        </div>
    )
};

const style = {
    image: { width: 100, height: 100 }
}
export default Slider;