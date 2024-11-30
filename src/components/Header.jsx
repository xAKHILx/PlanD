// import React from 'react'
// import {FaXmark,FaBars}from "react-icons/fa6"
// import {Link}from "react-scroll"

// const Header = () => {

//   const[isMenuOpen,setIsMenuOpen]=useState(false);
//   const toggleMenu=()=>{
//     setIsMenuOpen(!isMenuOpen);
//   }
//   const closeMenu=()=>{
//     setIsMenuOpen(false)
//   }

//   const navItems=[
//     {
//       link:'Home',path:'home'
//     },
//     {
//       link:'About',path:'about'
//     },
//     {
//       link:'Services',path:'services'
//     },
//     {
//       link:'Plans',path:'plans'
//     },
//     {
//       link:'Testimonials',path:'testimonials'
//     },
//     {
//       link:'Contact',path:'contact'
//     },
//   ]

//   return (
//  <nav className='w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>
// <h1 className='text-white md:text-4xl text-3xl font-bold font-rlway'>PlanD</h1>

// <ul className='lg:flex justify-center items-center gap-8 hidden'>
//   {navItems.map(({link,path})=>(
//     <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-purp hover:text-white font-rlway text-[15px]' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
//   ))}
// </ul>
//  </nav>
//   )
// }
import React from 'react'

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header