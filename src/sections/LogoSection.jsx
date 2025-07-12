import React from 'react'
import { logoIconsList } from '../constants/index.js'
const LogoIcon =({Icon})=>{
    return (
        <div className="flex-center flex-none marquee-item">
            <img src={Icon.imgPath} alt="icon.name" />
    
        </div>
    )
}
const LogoSection = () => {
  return (
    <div className="md:my-20 relative">
        <div className="gradient-edge"/>
        <div className="gradient-edge"/>
  <div className="marquee h-52">
    <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((logo, index) => (
            <LogoIcon key={index} Icon={logo} />
        ))};



    </div>
  </div>


    

    </div>
  )
}

export default LogoSection