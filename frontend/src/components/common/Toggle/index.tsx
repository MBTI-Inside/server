import { useState } from 'react';

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSlide = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`relative inline-block w-12 h-6 bg-gray-400 rounded-full cursor-pointer select-none ${
        isActive ? 'bg-blue-500' : ''
      }`}
      onClick={toggleSlide}
    >
      <input
        type="checkbox"
        className="hidden toggle-checkbox absolute block w-18 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label
        className="toggle-label absolute left-0 w-6 h-6 bg-gray-300 rounded-full cursor-pointer"
        style={{
          transform: isActive ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 0.3s ease'
        }}
      />
    </div>
  );
};

export default Toggle;
