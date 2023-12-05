import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/Assets/logo.png"
import { FaSearch, FaUser } from 'react-icons/fa';
import { BsFillTriangleFill } from 'react-icons/bs';

const InputWithIcon = ({ icon: Icon, ...rest }) => {
    return (
      <div className='relative'>
        <input {...rest} className='w-[350px] bg-gray-800 text-white p-1 pl-8 rounded-md' />
        {Icon && (
          <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
            <Icon className='text-gray-500' />
          </div>
        )}
      </div>
    );
  };
const Navbar = () => {
    
  return (
    <>
    <div className='h-20 w-full bg-black px-14 text-white flex justify-between items-center fixed z-10'>
        <div className='flex space-x-1 items-center'>
            <Image src={Logo} height={15} width={20} className='bg-white rounded-md'/>
            <p className='text-white'>TickerTrape</p>
        </div>
        <div>
        <InputWithIcon
        placeholder='Search, Stocks, smallcases, indices'
        icon={FaSearch} // Pass the icon component as a prop
      />
       
        </div>
        <div className='flex items-center gap-3 '>
            <div className='flex items-center gap-1'>
                <BsFillTriangleFill/>
                <p className='text-white'>Social</p>
            </div>
            <div className='flex items-center gap-1'>
                <FaUser/>
                <p className='text-white'>Login</p>
            </div>

        </div>

        </div>

    </>
  )
}

export default Navbar