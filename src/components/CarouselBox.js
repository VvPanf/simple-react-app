import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forest1 from '../asserts/forest1.jpg';
import forest2 from '../asserts/forest2.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forest1}
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Bridge image</h3>
                        <p>Nice Bridge:)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forest2}
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Nice Forest:)</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}