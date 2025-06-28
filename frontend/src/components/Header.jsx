import React from 'react'
import { assets } from '../assets/assets'
// import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className=' flex items-center justify-center py-32'>
            <div className=' flex flex-col justify-center items-center'>
                <div >
                    <h1 className=' text-stone-800 text-6xl font-extrabold'>Hey Developer</h1>

                </div>
                <div>
                    <img src={assets.header_img} alt="" className=" w-50" />
                </div>
            </div>
        </div>
    )
}

export default Header