import React, {useState} from "react";

const InputComp = ({ text, value, _onChange,_type="text", _placeholder="" }) => {
      const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[#09090B] text-[14px] font-medium">{text}</div>
      <div className={`border p-2 rounded-md transition-all duration-300 ${isFocused ? 'border-[#000]' : 'border-[#E4E4E7]'}`}>
        <input 
        className="w-full focus:outline-none focus:ring-0"
        type={_type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={(e) => _onChange(e.target.value)}
        placeholder={_placeholder}
        />
      </div>
    </div>
  );
};

export default InputComp;
