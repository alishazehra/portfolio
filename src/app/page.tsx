import React from 'react'
import Link from "next/link"
function Home() {
  return (
    <div className='grid grid-cols-15 grid row'>
      <div className='bg-red-400'> <Link href="/about">About,</Link>  <Link href={"/contact"}>Contact, </Link> <Link href={"/projects"}>Projects</Link></div>
      <div></div>
   <h1>Welcome to my Portfolio!</h1> 
   <div >
    <img src="https://img.freepik.com/premium-photo/3d-render-mecha-robot-anime-girl_665569-410.jpg" height={150} width={150} alt="" />
    I am Alisha Zehra, a passsionate web developer with strong skills in programming and working on 
    blockchain development with the aim of exploring more.
   </div>
   </div>
  )
}

export default Home
