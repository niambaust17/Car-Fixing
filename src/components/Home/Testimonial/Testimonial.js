import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Testimonial.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${ x }deg) rotateY(${ y }deg) scale(${ s })`

const Testimonial = ({ review }) =>
{
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className="col">
            <animated.div className="review-card card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}>
                <div className="row text-start ps-2">
                    <div className="card-body">
                        <h5 className="card-title">{review.name}</h5>
                        <h6 className="card-text">{review.address}</h6>
                        <p className="card-text">{review.description}</p>
                    </div>
                </div>
            </animated.div>
        </div>
    );
};

export default Testimonial;