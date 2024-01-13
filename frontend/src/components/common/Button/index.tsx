import { CommonButton } from './index.styles';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  classProp?: any;
  onClick?: (e?: React.FormEvent | React.MouseEvent) => void;
  children?: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
}

const Button = ({
  type = 'button',
  classProp,
  onClick,
  children,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <CommonButton
      {...props}
      type={type}
      className={classProp}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </CommonButton>
  );
};

export default Button;
