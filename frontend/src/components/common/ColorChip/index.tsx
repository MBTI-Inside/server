import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import Button from '@/components/common/Button';
import * as S from '@/components/common/ColorChip/index.styles';

import { bgColors } from '@/constants/bgColors';

const ColorChip = () => {
  const [color, setColor] = useState('yellow');

  const doSomething = () => {
    console.log(color);
  };
  return (
    <div>
      {bgColors.map(({ colorId, bgColor, name }) => (
        <div className="flex items-center mt-5" key={colorId}>
          <input
            type="radio"
            id={colorId}
            value={colorId}
            checked={color === colorId}
            name="colors"
            className="hidden"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <label
            htmlFor={colorId}
            className="flex items-center cursor-pointer flex-1 gap-4"
          >
            <S.chip bg={bgColor} />
            <span
              className={`flex-1 ${
                color === colorId ? 'font-black opacity-100' : 'opacity-30'
              }`}
            >
              {name}
            </span>
            {color === colorId && <FaCheck />}
          </label>
        </div>
      ))}
      <Button
        classProp="w-80 h-14 mt-3 text-lg bg-blue-600 text-white hover:bg-blue-700"
        onClick={() => doSomething()}
      >
        확인
      </Button>
    </div>
  );
};

export default ColorChip;
