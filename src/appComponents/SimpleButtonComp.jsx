import React from 'react'

const SimpleButtonComp = ({varient, text, _onClick}) => {
    const type = {
    normal:"bg-[#000]",
    danger:"bg-[#BE1E2D]",
    dangerTwo:'bg-[#EF4444]',
    success:"bg-[#22C55E]",
    soft:"bg-[#3B82F6]"
}
const selectedType = type[varient] || type['soft'];
  return (
    <div onClick={_onClick} className={`flex text-white items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${selectedType}`}>
        <span className='text-[14px] font-[500]'>{text}</span>
    </div>
  )
}

export default SimpleButtonComp