import { FaCheck } from 'react-icons/fa';

import * as S from '@/components/common/ColorChip/index.styles';

const ColorChip = () => {
  return (
    <div>
      <div className="flex items-center mt-5">
        <input type="radio" name="colors" className="hidden" />

        <label className="flex items-center cursor-pointer flex-1 gap-4">
          <S.chip bg={'bg-[#FFDE3F]'} />
          <span>옐로우</span>
          <FaCheck />
        </label>
      </div>
      <div className="flex items-center mt-5">
        <input type="radio" name="colors" className="hidden" />
        <label className="flex items-center cursor-pointer flex-1 gap-4">
          <S.chip bg={'bg-[#EFC7D6]'} />
          <span>핑크</span>
          <FaCheck />
        </label>
      </div>
      <div className="flex items-center mt-5">
        <input type="radio" name="colors" className="hidden" />
        <label className="flex items-center cursor-pointer flex-1 gap-4">
          <S.chip bg={'bg-[#B2ACF9]'} />
          <span>퍼플</span>
          <FaCheck />
        </label>
      </div>
      <div className="flex items-center mt-5">
        <input type="radio" name="colors" className="hidden" />
        <label className="flex items-center cursor-pointer flex-1 gap-4">
          <S.chip bg={'bg-[#9FEEA2]'} />
          <span>그린</span>
          <FaCheck />
        </label>
      </div>
      <div className="flex items-center mt-5">
        <input type="radio" name="colors" className="hidden" />
        <label className="flex items-center cursor-pointer flex-1 gap-4">
          <S.chip bg={'bg-[#78D9EE]'} />
          <span>블루</span>
          <FaCheck />
        </label>
      </div>
      <div className="flex items-center mt-5">
        <input type="radio" name="colors" className="hidden" />
        <label className="flex items-center cursor-pointer flex-1 gap-4">
          <S.chip bg={'bg-[#FF9D42]'} />
          <span>오렌지</span>
          <FaCheck />
        </label>
      </div>
    </div>
  );
};

export default ColorChip;
