import React, { FC } from 'react';
import style from './Button.module.scss';

interface IButton {
  btnText: string;
  handleClic: () => void;
}
const Button: FC<IButton> = (props) => {
  const { btnText, handleClic } = props;
  return (
    <button type="button" className={style.button} onClick={handleClic}>
      {btnText}
    </button>
  );
};

export default Button;
