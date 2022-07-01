import { useEffect } from 'react';
import styles from './Modal.module.css';
import ChartPortal from './ChartPortal'

interface ModalType {
    children:any;
    handleClose: ()=>void;
    isOpen: boolean;
}

function Modal({ children, isOpen, handleClose }:ModalType) {


    useEffect(() => {
        const closeOnEscapeKey = (e: { key: string; }) => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
      }, [handleClose]);
      
  if (!isOpen) return null;

  return (
    <ChartPortal>
    <div className={styles.modal}>
      <div>{children}</div>
    </div>
    </ChartPortal>
  );
}
export default Modal;