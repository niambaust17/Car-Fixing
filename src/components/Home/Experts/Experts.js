import React from 'react';
import expert1 from '../../../images/sm-1.jpg';
import expert2 from '../../../images/sm-2.jpg';
import expert3 from '../../../images/sm-3.jpg';
import Expert from '../Expert/Expert';
import './Experts.css';

const expertData = [
    {
        id: 1,
        name: 'FARUK HAYDER',
        photo: expert1,
        specialistIn: 'Engine Specialist',
        describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non null'
    },
    {
        id: 2,
        name: 'JAKIR HAYAT',
        photo: expert2,
        specialistIn: 'Engine Specialist',
        describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non null'
    },
    {
        id: 3,
        name: 'TONMOY HALDER',
        photo: expert3,
        specialistIn: 'Engine Specialist',
        describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non null'
    }
]
const Experts = () =>
{
    return (
        <section className="experts text-center">
            <div className="blur">
                <div className="container py-5">
                    <h1 className="pb-5">Experts</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            expertData.map(expert => <Expert key={expert.id} expert={expert} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experts;