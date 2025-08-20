import React from 'react'
import { PlayIcon } from '../assets/TableIcon'

const ButtonComp = ({text, icon, _onClick, varient}) => {
    

const type = {
    normal:"bg-[#000]",
    danger:"bg-[#BE1E2D]",
    success:"bg-[#22C55E]",
    soft:"bg-[#3B82F6]"
}
const selectedType = type[varient] || type['soft'];

  return (
    <div onClick={_onClick} className={`flex text-white items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${selectedType}`}>
       <div className=''>{icon ? icon : <PlayIcon/>}</div>
        <span className='text-[14px] font-[500]'>{text}</span>
    </div>
  )
}

export default ButtonComp