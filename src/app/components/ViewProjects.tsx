"use client"
import '../globals.css';
import React, { useEffect, useState } from 'react'
import useProject from '../hooks/useProject';
import { Carousel } from 'react-bootstrap';


const ViewProjects = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    const data = useProject();
    const projects = data?.projects || [];


    return (
        <div>


            <Carousel interval={3000}>
                {projects.map((slide) => (
                    <Carousel.Item key={slide.id}>
                        <div className="d-block w-100 slide-content p-3"     >


                            <div className="card" style={
                                {
                                    backgroundColor: slide.color
                                }
                            }>
                                <div id="project-container">
                                    <div className="card-body" id='git'>
                                        <div id="carousel" className="d-flex justify-content-center align-items-center flex-column">
                                            <h5 id='nombre_git'>{slide.name}</h5>
                                            <p className="card-text">{slide.description}</p>
                                            <a href={slide.html_url} className='btn btn-primary'>ver proyecto</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                ))}

            </Carousel>

        </div>
    )
}

export default ViewProjects