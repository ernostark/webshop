import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      
        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus qui facilis exercitationem. Officia, quia at quisquam accusamus a, dignissimos, voluptate ut eaque placeat nulla corporis porro pariatur amet fugiat iure.
          </p>
        </div>  
      
        <div>
          <p className='text-xl font-medium mb-5'>CÉGÜNK</p>
          <ul className='flex flex-col  gap-1 text-gray-600'></ul>
          <li>KEZDŐLAP</li>
          <li>RÓLUNK</li>
          <li>SZÁLLÍTÁS</li>
          <li>ADATVÉDELEM</li>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>LÉPJEN VELÜNK KAPCSOLATBA</p>
          <ul className='flex flex-col  gap-1 text-gray-600'>
            <li>+36306528774</li>
            <li>email@email.hu</li>
          </ul>
        </div>

      </div>

        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024@ gyogynovenyek.hu - Minden jog fentartva.</p>
        </div>

    </div>

  )
}

export default Footer
