import { ReactNode, createContext, useContext, useState } from 'react';

import Portal from '@/components/common/Portal';

interface ModalProps {
  component: ReactNode; // 모달에 표시할 React 구성 요소
  parameter: any; // 모달에 전달할 매개변수
  opened: boolean; // 모달이 열려 있는지 여부
  title: string; // 모달 창의 제목
  onClose: (callback?: any) => void; // 모달이 닫힐 때 실행할 콜백 함수
}

interface ModalContextProps {
  openModal: (
    component: React.ReactNode,
    parameter: any,
    title: string
  ) => void;
  closeModal: (callback: any) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [modalStack, setModalStack] = useState<ModalProps[]>([]);

  const openModal = (
    component: React.ReactNode,
    parameter: any,
    title: string
  ): void => {
    const modalProps = {
      component,
      parameter,
      onClose: () => {}, // 모달이 닫힐 때 호출할 함수
      title,
      opened: true
    };
    setModalStack((prevStack) => [...prevStack, modalProps]);
  };

  const closeModal = (callback?: any) => {
    setModalStack((prevStack) => {
      const currentModal = prevStack[prevStack.length - 1];
      currentModal.onClose(callback);

      return prevStack.slice(0, -1);
    });
  };
  console.log(modalStack);
  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Portal>
        {modalStack.map((modalProps, index) => {
          console.log(modalProps);
          return (
            modalProps.opened && (
              <div
                key={index}
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {modalProps.component}
              </div>
              // <section key={index}>
              //   <div className="modal-box" key={index}>
              //     <h3 className="font-bold text-lg">{modalProps.title}</h3>
              //     <p className="py-4">
              //       Press ESC key or click outside to close
              //     </p>
              //     <div>
              //       <button onClick={closeModal}>close</button>
              //     </div>
              //   </div>
              // </section>
            )
          );
        })}
      </Portal>
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error('useModalContext must be used within a useModal');
  }
  return modalContext;
};

export default ModalProvider;
