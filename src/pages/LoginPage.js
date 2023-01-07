import React from "react";
import Modal from "react-modal";
import LoginModal from "../components/LoginModal";
import StyledButton from "../components/styles/StyledButton";

const LoginPage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <StyledButton onClick={openModal}>open Modal</StyledButton>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <LoginModal closeBtn={setIsOpen} />
      </Modal>
    </div>
  );
};

export default LoginPage;
