import { useState } from 'react';

import * as S from '@/components/common/Toggle/index.styles';

const Toggle = () => {
  const [flag, setFlag] = useState(true);
  const setMBTIType = (e: any) => {
    console.log(e);
    console.log(e.target.value);
  };
  const activeMapper = (mbtiChar: string) => {
    if ('E'.includes(mbtiChar)) {
      return 'active';
    }

    return '';
  };

  return (
    <>
      <S.MbtiList>
        <S.Toggle className={flag ? 'left-2.5' : 'right-2.5'} />
        <div className="flex-1 text-center z-10">
          <input
            type="radio"
            id={'E'}
            className="hidden"
            checked={flag}
            onChange={() => setFlag((flag) => !flag)}
          />
          <S.MbtiLabel htmlFor={'E'} className={flag ? 'text-black' : ''}>
            {'E'}
          </S.MbtiLabel>
        </div>
        <div className="flex-1 text-center z-10">
          <input
            type="radio"
            id={'I'}
            className="hidden"
            checked={!flag}
            onChange={() => setFlag((flag) => !flag)}
          />
          <S.MbtiLabel htmlFor={'I'} className={!flag ? 'text-black' : ''}>
            {'I'}
          </S.MbtiLabel>
        </div>
      </S.MbtiList>
    </>
  );
};

export default Toggle;

// <div
//   className={`relative inline-block w-80 h-20 bg-gray-400 rounded-full cursor-pointer select-none ${
//     isActive ? 'bg-blue-500' : ''
//   }`}
//   onClick={toggleSlide}
// >
//   <div
//     className="toggle absolute left-0 w-40 h-20 bg-gray-300 rounded-full cursor-pointer"
//     style={{
//       transform: isActive ? 'translateX(100%)' : 'translateX(0)',
//       transition: 'transform 0.3s ease'
//     }}
//   >
//     ㅇㅇ
//   </div>
// </div>
