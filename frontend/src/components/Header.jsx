import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className=' flex items-center justify-center py-32'>
            <div className=' flex justify-center items-center'>
                <div className=' text-white text-6xl'>
                    <h1>Hey Developer</h1>

                </div>
                {/* <img src={assets.home} className=' max-w-2xl rounded-2xl align-middle block' /> */}
            </div>
        </div>
    )
}

export default Header