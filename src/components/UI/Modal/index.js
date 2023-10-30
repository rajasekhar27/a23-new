
import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const { isOpen, children, parentClasses, modalOuterClick } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (typeof window !== "object") return null;

  if (isOpen) {
    return createPortal(
      <div
        className={'parentModal'}
        onClick={modalOuterClick}
      >
        {children}
      </div>,
      document.body
    );
  } else {
    return null;
  }
};

export default Modal;
