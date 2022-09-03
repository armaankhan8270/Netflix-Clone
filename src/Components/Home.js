import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import logo from './Images/download.png'

const Home = () => {
    return (
        <div className="home  ">
            
        <div className='w-[1519px] brightness-105 h-[80px] flex ml-14 bg-transparent overflow-hidden'>
            <img width={'167px'} height={'45px'} className='pt-5 brightness-[125%]' src={logo} alt="" />
            <button className="text-sm pr-2 pl-2 text-white ml-[68%] bg-transparent border-2 h-7 border-gray-400 mt-3 grayscale ">🌐 English</button>
            <button className='bg-[#e50914] pr-2 pl-2 ml-4 text-white p h-7 mt-3 rounded'>Sign in</button>

            </div>
            <div className='w-[950px] h-[494px] justify-center mt-[75px] ml-[239px] mr-[239px] mb-[70px] '>
                <div className='w-[800px] h-[145px] justify-center mt-[75px] ml-[75px] mr-[75px] mb-[] '>
<h1 className='text-[64px] text-white font-bold text-center leading-[70px]'>Unlimited movies, TV shows and more.</h1>
                </div>
                <div className='w-[800px] h-[33px] justify-center mt-[16px] ml-[75px] mr-[75px] mb-[32px]'>
<h1 className='text-white text-[30px] text-center'>Watch anywhere. Cancel anytime.</h1>

                </div>
                <div className='w-[679px] h-[24px] justify-center mt-[16px] ml-[117px]  mb-[0px'>
<h1 className='text-white text-[20px] ml-9'>Ready to watch? Enter your email to create or restart your membership.</h1>
                </div>
                <div className='w-[750px] h-[70px] justify-center mt-[16px] ml-[102px] mr-[102px] mb-[13px] ' >
<input className='h-full w-[500px] text-2xl'placeholder='Email Address' type="text" name="" id="" />
<Link to='/Net'>
<button className='bg-[#e50914]  text-white h-[70px] text-[30px]  w-[245px] '>{`Get Started >` }</button>
</Link>

                </div>

        </div>
        </div>

    )
}

export default Home
