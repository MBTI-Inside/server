import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const el = document.getElementById('modal');
  if (!el) return null; // 대상 요소가 존재하지 않음
  return createPortal(children, el);
};

export default Portal;
