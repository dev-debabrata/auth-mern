import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className=' block'>
            <div className=' flex items-center justify-center rounded-br-4xl rounded-bl-4xl bg-gray-950 py-32 mt-[70px]'>
                <div className=' flex justify-center items-center gap-20'>
                    <div className=' text-white text-6xl'>
                        <h1>Hey Developer</h1>

                    </div>
                    <img src={assets.home} className=' max-w-2xl rounded-2xl align-middle block' />
                </div>
            </div>
        </div>
    )
}

export default Header