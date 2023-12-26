import React from 'react'
import './skills.css'
import Header from "../../header/Header";
import { AppContext } from "../../App";
import { useContext } from 'react';
import Practicale from '../../header/components/Practicale'

import SkillsIcons from './components/SkillsIcons';




export default function Skills() {
  const { openMenu } = useContext(AppContext);

  return (
    <>
      <Header />
      <div className={!openMenu ? `w-full h-[92vh] lg:h-[88vh] lg:px-[50px] flex flex-col items-center justify-evenly` : `hidden`}>

          <div className="z-50 w-full h-1/3 mt-[15px]  flex flex-col items-center justify-center  lg:justify-end ">
              <h1 className=" text-[2rem] lg:text-[3.4rem] 2xl:text-[3.6rem]  font-black font-roboto text-dark-900 dark:text-dark-600 slide-top">
                My Skills
              </h1>
              <p className=" lg:text-right text-center text-dark-800 text-[0.8rem] lg:text-[1.1rem] 2xl:text-[1.2rem] font-normal font-roboto px-2 lg:px-0 lg:mb-[15px] mt-2 dark:text-light-800 slide-right py-3">
                The skills, tools and technologies I have used.
              </p>
          </div>


          <div className='z-50 w-full  h-2/3 grid grid-cols-4 lg:grid-cols-7 place-content-evenly	place-items-center py-2 gap-4 lg:gap-0'>
              <SkillsIcons />
          </div>
          <Practicale />
      </div>
    </>
  )
}
