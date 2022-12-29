import React from "react";
import Modal from "react-modal";
import LoginModal from "../components/LoginModal";
import Button from "../components/uiKit/Button";

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
      <Button onClick={openModal} text="Open Modal" />
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
