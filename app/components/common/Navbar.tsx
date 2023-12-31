'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import { NavLinks } from '../../utils'
import style from '../../styles/global.module.css'
import Button from '../common/Button'
import { AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { BsFillArrowRightCircleFill} from 'react-icons/bs'
import {FaShoppingCart} from 'react-icons/fa'
import logo from '../../../public/images/Vector.svg' 
import Image from 'next/image'
import { useRouter,usePathname} from 'next/navigation'


const Navbar = () => {  
  const [isOpen,setIsOpen] =useState(false)
  // const [isActive,setIsActive] =useState(false)


  const handleClickOpen = ()=>{
    setIsOpen(!isOpen)
  }

  
  const router = useRouter()
  const pathname = usePathname()
  const isActive = (link:string) => pathname.includes(link);
  
  return (
    
    <header className='max-w-[1300px] mx-auto py-4 lg:px-0 px-6'>
        <nav className={`${style.flexBetween} h-[24vh]`}>
          <Link href='/'
          className='block lg:hidden'>
            <Image 
            src={logo}
            height={58}
            width={58}
            alt="Logo law"
            
            className='h-[24px] w-[17.54px]'
            />
          </Link>
          <div className='hidden lg:block'>
            <ul className='flex  items-center gap-10'>
               {NavLinks.map((link,index) =>(
                 <li key={index} className={`${style.Text}`}>
                    <Link 
                    href={link.href}
                    className={`text-gray-500 ${isActive(link.href)  && 'text-black'}`}
                    >{link.title}</Link>
                </li>
               ))}     
            </ul>
          </div>
            <div className={`${style.flexCenter} gap-6`}>
                <div className='flex gap-6'>
                    <div className='rounded-full h-[19px] w-[19px]  
                    bg-black text-white absolute font-500 text-[10px] leading-[12.1px] tracking-[-2%]  flex justify-center items-center'>2</div>
             <FaShoppingCart size={24} className='h-[28px] w-[31px]'
              />
              <AiOutlineMenu size={24}
              className='block lg:hidden'
              onClick={handleClickOpen} />
              { isOpen && (
                <div className={`${style.flexCenter} flex-col min-h-[100vh] w-full bg-white text-black z-20 fixed top-0 right-0`}>
                  <AiOutlineClose 
                  size={24}
                  onClick={handleClickOpen} 
                  className='fixed top-20 right-4'
                  />
                  {isOpen && (
                <ul className='flex  items-center gap-10 flex-col'>
                {NavLinks.map((link,index) =>(
                 <li key={index} 
                 className={`font-[500]
                 text-[24px] 
                 leading-[14.52px] lg:leading-[16.94px]
                 tracking-[-2%] ${(pathname === link.href) ? 'text-black' : 'text-[#818181]'}`}
                 onClick={handleClickOpen}
                 >
                     <Link href={link.href}
                     onClick={() => router.push(`${link.href}`)}
                     >{link.title}</Link>
                 </li>
                ))}     
             </ul>
              )}
                </div>
              )}
                </div>
            <div className='hidden lg:block'>
            <div className={`${style.Button}`}>
            <Button title="event"/>
            <BsFillArrowRightCircleFill />
            </div>
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar