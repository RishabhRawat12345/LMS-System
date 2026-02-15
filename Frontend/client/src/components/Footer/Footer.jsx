import React from 'react'
import { SiViaplay } from "react-icons/si";
import { TbHeartRateMonitor } from "react-icons/tb";
import { FaUikit } from "react-icons/fa6";
import { MdAppShortcut } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { SiGoogledataproc } from "react-icons/si";
import { BsClipboard2DataFill } from "react-icons/bs";
import { SiOpenaigym } from "react-icons/si";
import { MdOutlineConnectedTv } from "react-icons/md";
import { LiaUnlockAltSolid } from "react-icons/lia";
import { FaSackDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col justify-center bg-white py-20 gap-16'>

      <nav className='flex flex-wrap justify-center gap-6 mt-20 lg:mt-0'>

        <button className='bg-gray-300 px-6 py-3 rounded-3xl text-green-800 font-bold flex items-center gap-2'>
          <MdOutlineConnectedTv className='h-6 w-6'/>
          20k+ Online Courses
        </button>

        <button className='bg-gray-300 px-6 py-3 rounded-3xl text-green-800 font-bold flex items-center gap-2'>
          <LiaUnlockAltSolid className='h-6 w-6'/>
          Life Time Access
        </button>

        <button className='bg-gray-300 px-6 py-3 rounded-3xl text-green-800 font-bold flex items-center gap-2'>
          <FaSackDollar className='h-6 w-6'/>
          Value For Money
        </button>

        <button className='bg-gray-300 px-6 py-3 rounded-3xl text-green-800 font-bold flex items-center gap-2'>
          <BiSupport className='h-6 w-6'/>
          Life Time Support
        </button>

        <button className='bg-gray-300 px-6 py-3 rounded-3xl text-green-800 font-bold flex items-center gap-2'>
          <FaUsers className='h-6 w-6'/>
          Community Support
        </button>

      </nav>

      <div className="main flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-6">

        <div className="left flex flex-col lg:w-1/2 justify-center gap-4">

          <h1 className='text-4xl font-bold'>Explore</h1>

          <h1 className='text-4xl font-bold'>Our Courses</h1>

          <p className='max-w-md text-sm text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eaque, error. Nostrum aut voluptate placeat corporis
            eligendi accusantium? Dicta, perferendis eos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi, ipsa?
          </p>

          <button className="flex items-center w-60 gap-3 px-6 py-3 border border-black text-black text-sm md:text-lg hover:bg-black hover:text-white transition rounded">
            View All Courses
            <SiViaplay className="h-5 w-5"/>
          </button>

        </div>

        <div className="right lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 lg:mt-0 place-items-center">

          <div className="flex flex-col text-center">
            <div className="w-[70px] h-[70px] bg-purple-300 flex items-center justify-center rounded-xl ml-7">
              <TbHeartRateMonitor className='h-10 w-10 '/>
            </div>
            <p>Web Development</p>
          </div>

          <div className="flex flex-col ">
            <div className="w-[70px] h-[70px] bg-green-300 flex items-center justify-center rounded-xl ml-3">
              <FaUikit className='h-10 w-10 '/>
            </div>
            <p>UI UX Design</p>
          </div>

          <div className="flex flex-col text-center">
            <div className="w-[70px] h-[70px] bg-pink-300 flex items-center justify-center rounded-xl ml-5">
              <MdAppShortcut className='h-10 w-10'/>
            </div>
            <p>App Development</p>
          </div>

          <div className="flex flex-col text-center">
            <div className="w-[70px] h-[70px] bg-purple-300 flex items-center justify-center rounded-xl ml-5">
              <FaHackerrank className='h-10 w-10'/>
            </div>
            <p>Ethical Hacking</p>
          </div>

          <div className="flex flex-col text-center">
            <div className="w-[70px] h-[70px] bg-green-300 flex items-center justify-center rounded-xl">
              <SiOpenai className='h-10 w-10'/>
            </div>
            <p>AI / ML</p>
          </div>

          <div className="flex flex-col text-center">
            <div className="w-[70px] h-[70px] bg-pink-300 flex items-center justify-center rounded-xl">
              <SiGoogledataproc className='h-10 w-10'/>
            </div>
            <p>Data Science</p>
          </div>

          <div className="flex flex-col text-center">
            <div className="w-[70px] h-[70px] bg-purple-300 flex items-center justify-center rounded-xl">
              <BsClipboard2DataFill className='h-10 w-10'/>
            </div>
            <p>Data Analytics</p>
          </div>

          <div className="flex flex-col text-center">
            <div className="w-[70px] h-[70px] bg-green-300 flex items-center justify-center rounded-xl">
              <SiOpenaigym className='h-10 w-10'/>
            </div>
            <p>AI Tools</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer
