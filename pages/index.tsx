import React from 'react';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div className="flex flex-row-reverse items-center justify-center justify-around content-center bg-lime-700 h-full mt-5">
     
      <div>
      <div class="relative h-full w-full flex items-center justify-center">
  <div class="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
    <button class="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <Icon icon="devicon:html5-wordmark"/>
      </span>
    </button>

    <button class="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <Icon icon="devicon:azuresqldatabase"/>
      </span>
    </button>

    <button class="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <Icon icon="devicon:bootstrap-wordmark"/>
      </span>
    </button>

    <button class="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
         <Icon icon="devicon:css3-wordmark"/>
      </span>
    </button>

    <button class="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <Icon icon="devicon:git-wordmark" />
      </span>
    </button>

    <button class="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <Icon icon="devicon:javascript" />
      </span>
    </button>

    <button class="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
          <Icon icon="devicon:nextjs-wordmark" />
      </span>
    </button>

    <button class="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
      <div class="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
        <span class="w-20 h-20 inline-block">
            <Icon icon="el:adult" />
        </span>
      </div>
    </button>
  </div>
</div>


      </div>
     
      
      <div>
       <h1 class="text-4xl font-mono text-center mt-5"> Éverton Cordeiro </h1>
      <h3 class="text-2xl font-mono text-gray-700 text-center"> Front-End Developer   
      </h3>  
     <div className="flex justify-center mt-3">
       <button >
        <Icon icon="prime:twitter"/>
       </button>
       <button class="px-4">
        <Icon icon="iconoir:linkedin"/>
       </button>
       <button>
         <Icon icon="mingcute:github-line"/>
       </button>
      </div>
     </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
   
   
   
   
   
   
   
   
   
   </div>
  )
 }