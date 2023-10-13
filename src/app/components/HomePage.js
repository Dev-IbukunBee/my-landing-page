import React from 'react'
import Image from "next/image";
import Bckgrd from "@/public/imagebckgd/screw.png"


export default function HomePage() {
  return (
    <div className="relative h-screen">
      
      <Image src={Bckgrd} alt="backgroundImg" className="w-full h-full object-cover" />

      
      <div className="absolute inset-0 flex flex-col justify-center text-center mx-auto subpixel-antialiased font-mono">

        <div className= "block text-left mx-auto pr-28 pb-32 -space-y-1  text-purple-200">

        <h3 className="font-thin tracking-tight text-3xl opacity-60">BRITTEN</h3>
        <h2 className="font-normal tracking-wide text-7xl opacity-70">THE</h2>

        <div className="flex mx-auto opacity-70"> 

        <h1 className="font-bold text-9xl tracking-widest">TURN
        </h1>
        <div className="flex flex-col py-6 text-4xl font-semibold">
          <span className='text-left'>OF</span>
          <span>THE</span>
          </div>
        <h1 className="font-bold text-9xl tracking-wider">SCREW</h1>
        </div>
        <p className=' font-semibold text-end text-xl opacity-70' > 
          An immersive trailer for Opera North's production
        </p>
        </div>
  
        <div className='items-center space-y-5 -mt-0 opacity-90'>
          <p className='font-medium text-lg text-gray-100'>
            Please choose the quality according to your device:
        </p>
        <ul className= 'flex flex-row gap-4 justify-center'>
          <l1 > <button className="flex text-white text-center py-2 px-10 shadow-sm focus:outline-none text-sm border-slate-300 border-2 rounded-sm hover:bg-slate-800 active:bg-slate-800" >
                <p className="font-medium">low</p> </button> </l1>

          <l1><button className="flex text-white text-center py-2 px-9 shadow-sm focus:outline-none text-sm border-2 border-slate-300 rounded-sm hover:bg-slate-800 active:bg-slate-800" >
                <p className="font-medium">medium</p> </button></l1>
          <l1> <button className="flex text-white text-center py-2 px-10 shadow-sm focus:outline-none text-sm border-2 border-slate-300 rounded-sm hover:bg-slate-800 active:bg-slate-800" >
                <p className="font-medium">high</p> </button></l1>

              
            
          
        </ul>
        </div>

      </div>
    </div>
  );
}