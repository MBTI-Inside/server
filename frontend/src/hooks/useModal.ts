import { ReactNode, useState } from 'react';

export interface ModalProps {
  component: ReactNode; // 모달 내용
  parameter: any; // 전달 파라미터
  opened: boolean; // 모달이 열려있는 상태인지의 여부
  title: string; // 모달 제목
  onClose: (result?: any) => void; // 모달이 닫힐 때 실행할 콜백 함수
}

interface ModalStackItem {
  modal: ModalProps;
}

const useModal = () => {
  const [modalStack, setModalStack] = useState<ModalStackItem[]>([]);

  const openModal = (content: ModalProps) => {
    setModalStack((prevStack) => [...prevStack, { modal: content }]);
  };

  const closeModal = () => {
    setModalStack((prevStack) => prevStack.slice(0, -1));
  };

  return {
    modals: modalStack.map((item) => item.modal),
    openModal,
    closeModal
  };
};

export default useModal;
