import * as S from '@/components/common/Toggle/index.styles';

interface ToggleProps {
  left: string;
  right: string;
  selectedOption: string;
  onSelect: (newOption: string) => void;
}

const Toggle = ({ left, right, selectedOption, onSelect }: ToggleProps) => {
  const handleClick = (newOption: string) => {
    onSelect(newOption);
  };

  return (
    <div className="w-96">
      <S.MbtiList>
        <S.Toggle
          className={selectedOption === left ? 'left-2.5' : 'right-2.5'}
        />
        <div className="flex-1 text-center z-10">
          <input
            type="radio"
            id={left}
            className="hidden"
            checked={selectedOption === left}
            onChange={() => handleClick(left)}
          />
          <S.MbtiLabel
            htmlFor={left}
            className={selectedOption === left ? 'text-black' : ''}
          >
            {left}
          </S.MbtiLabel>
        </div>
        <div className="flex-1 text-center z-10">
          <input
            type="radio"
            id={right}
            className="hidden"
            checked={selectedOption === right}
            onChange={() => handleClick(right)}
          />
          <S.MbtiLabel
            htmlFor={right}
            className={selectedOption === right ? 'text-black' : ''}
          >
            {right}
          </S.MbtiLabel>
        </div>
      </S.MbtiList>
    </div>
  );
};

export default Toggle;
