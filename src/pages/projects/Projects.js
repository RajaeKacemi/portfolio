
import Header from "../../header/Header";
import './projects.css'
import Card from "./components/Card";
import projectsData from "./components/data";
import Practicale from '../../header/components/Practicale'

import { useRef } from "react";
import { AppContext } from "../../App";
import { useContext } from 'react';

function Projects() {
    const { openMenu } = useContext(AppContext);

    const containerRef = useRef(null);

    const handleWheelScroll = (event) => {
        event.preventDefault();
        const container = containerRef.current;
        container.scrollLeft += event.deltaY;
    };

    const cards = projectsData.map((item , key)=> (
            <Card
                key={key}
                title={item.projectTitle}
                description={item.projectDescription}
                img={item.projectImgCard}
                technologies={item.technologies}
                githubPath={item.githubPath}
                demoPath={item.demoPath}
            />

    ));

    return (
        <>
            <Header />
            <div className={!openMenu ? ` w-full h-[92vh] lg:h-[88vh] lg:px-[50px] flex flex-col justify-center lg:justify-evenly 2xl:justify-center` : `hidden`}>

                <div className="z-50 w-full h-1/3  flex flex-col items-center justify-center  lg:justify-end 2xl:justify-center  ">
                    <h1 className=" text-[2rem] lg:text-[3.4rem] 2xl:text-[3.6rem] font-black font-roboto text-dark-900 slide-top dark:text-dark-600">
                        My Recent Projects
                    </h1>
                    <p className=" lg:text-right text-center text-dark-800 text-[0.8rem] lg:text-[1.1rem] 2xl:text-[1.2rem] font-normal font-roboto px-2 lg:px-0 lg:mb-[15px] mt-2 dark:text-light-800 slide-right">
                        Explore more of my coding projects and view the source code on my GitHub repository.
                    </p>
                </div>


                <div className="flex overflow-x-scroll hide-scroll-bar py-2  z-50 "
                    ref={containerRef}
                    onWheel={handleWheelScroll}
                >
                    <div className="flex flex-nowrap  mx-10 "  >

                        {cards}

                    </div>
                </div>
                <Practicale/>
            </div>
        </>

    )
}
export default Projects;
