import React from 'react';
import Tile from './Tile/Tile';
import './work.css'

//Old Portfolio
let oldPort = {
    title: "Old Portfolio",
    url: [
        "https://github.com/AstroNik/nkwebapp",
        "https://oldsite.nikhilkapadia.com"
    ],
    desc: "First version of my personal website where my frontend is built with React and I build my backend with Go hosted on DigitalOcean running in a kubernetes cluster.",
    langs: [
        "React",
        "Go"
    ]
}

let mistryPort = {
    title: "Mistry3Designs",
    url: [
        "https://github.com/AstroNik/mistryportfolio",
        "https://mistry.nikhilkapadia.com"
    ],
    desc: "This is a project portfolio for my friend who builds 3D models. The website itself is still in progress as more layout changes need to be made. But it is running with test project examples.",
    langs: [
        "React",
        "Node"
    ]
}

let soilProject = {
    title: "Ecoders Moisture Sensor",
    url: [
        "https://github.com/AstroNik/WebAPI",
        "https://ecoders.nikhilkapadia.com/"
    ],
    desc: "This was for a school Capstone project, it's about an Arduino based Soil Moisture Sensor that sends data to a webserver that we created, which then sends data to an application to view moisture levels. Won 'Sheridan EDGE Ready Award'.",
    langs: [
        "C++",
        "React",
        "Go",
        "Kotlin"
    ]
}


const Work = () => {
    return (
        <section className="container">
            <div className="page-container">
                <div className="content-container">
                    <div className="background-font animate__animated animate__fadeIn">
                        <h1 className="work"> work </h1>
                    </div>
                    <div className="work-container animate__animated animate__fadeIn">
                        <div className="column-grid">
                            <div className="grid-item">
                                <Tile
                                    title={oldPort.title}
                                    url={oldPort.url}
                                    desc={oldPort.desc}
                                    langs={oldPort.langs}
                                />
                            </div>
                            <div className="grid-item">
                                <Tile
                                    title={mistryPort.title}
                                    url={mistryPort.url}
                                    desc={mistryPort.desc}
                                    langs={mistryPort.langs}
                                />
                            </div>
                            <div className="grid-item">
                                <Tile
                                    title={soilProject.title}
                                    url={soilProject.url}
                                    desc={soilProject.desc}
                                    langs={soilProject.langs}
                                />
                            </div>
                            {/* <div className="grid-item">
                                <Tile />
                            </div>
                            <div className="grid-item">
                                <Tile />
                            </div>
                            <div className="grid-item">
                                <Tile />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;