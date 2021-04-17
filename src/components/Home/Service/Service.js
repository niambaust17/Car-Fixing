import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory } from 'react-router';
import './Service.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${ x }deg) rotateY(${ y }deg) scale(${ s })`

const Service = ({ service }) =>
{
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const history = useHistory();

    return (
        <div className="col" onClick={() => history.push(`/bookService/${ service.title }`)}>
            <animated.div className="service-card card h-100 border-0"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans), cursor: 'pointer' }}>
                <img src={service.imageURL} className="card-img-top" alt="..." style={{ height: '200px', padding: '10px', borderRadius: '20px' }} />
                <div className="card-body text-start">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <h4 className="card-text text-success">${service.cost}</h4>
                </div>
            </animated.div>
        </div>
    );
};

export default Service;