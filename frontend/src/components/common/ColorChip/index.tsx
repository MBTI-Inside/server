import { bgColors } from '@/constants';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import Button from '@/components/common/Button';
import * as S from '@/components/common/ColorChip/index.styles';

const ColorChip = () => {
  const [color, setColor] = useState('yellow');

  const doSomething = () => {
    console.log(color);
  };

  return (
    <S.ColorChipContainer>
      {bgColors.map(({ colorId, bgColor, name }) => (
        <S.ChipSet key={colorId}>
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
          <S.ChipLabel htmlFor={colorId}>
            <S.Chip bg={bgColor} />
            <S.ChipName isSelectedColor={color === colorId}>{name}</S.ChipName>
            {color === colorId && <FaCheck />}
          </S.ChipLabel>
        </S.ChipSet>
      ))}
      <Button
        classProp="w-80 h-14 mt-3 text-lg bg-blue-600 text-white hover:bg-blue-700"
        onClick={() => doSomething()}
      >
        확인
      </Button>
    </S.ColorChipContainer>
  );
};

export default ColorChip;
