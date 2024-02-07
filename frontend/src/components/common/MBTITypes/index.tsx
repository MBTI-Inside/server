import { mbtiOptions } from '@/constants';
import { useReducer } from 'react';

import Toggle from '@/components/common/Toggle';

import { CommonButton } from '../Button/index.styles';

interface ToggleState {
  [key: string]: string;
}

interface Action {
  type: string;
  payload: {
    id: string;
    option: string;
  };
}

const initialState: ToggleState = {
  energy: 'E',
  awareness: 'S',
  judgement: 'T',
  life: 'J'
};

const reducer = (state: ToggleState, action: Action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return { ...state, [action.payload.id]: action.payload.option };
    default:
      return state;
  }
};

const MBTITypes = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const doSomething = () => {
    // Do something with state
    console.log(state);
  };

  return (
    <>
      {Object.entries(state).map(([id, selectedOption]) => {
        const { left, right } = mbtiOptions[id];

        return (
          <Toggle
            key={id}
            left={left}
            right={right}
            selectedOption={selectedOption}
            onSelect={(newOption: string) =>
              dispatch({
                type: 'SELECT_OPTION',
                payload: { id, option: newOption }
              })
            }
          />
        );
      })}
      <CommonButton onClick={() => doSomething()}>확인</CommonButton>
    </>
  );
};

export default MBTITypes;
