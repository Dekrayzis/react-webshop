import React, { useRef, useEffect, useCallback } from "react";
import { MdClose } from "react-icons/md";

//-- Stylesheet
import "./modal.scss";

const Modal = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) setShowModal(false);
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div className="modal-overlay" onClick={closeModal} ref={modalRef}>
          {/* <animated.div style={animation}> */}
          <div className="modal__wrapper" showModal={showModal}>
            <div className="modal__content">{children}</div>
            <button
              className="modal__closeBtn"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              <MdClose />
            </button>
          </div>
          {/* </animated.div> */}
        </div>
      ) : null}
    </>
  );
};

export default Modal;
