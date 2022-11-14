import React from "react";
import Modal from "react-modal";
import Nav from "./Nav";

//TODO: make it work better
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Modal.setAppElement("#yourAppElement");

const LoginModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Nav />
        <button onClick={closeModal}>close</button>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <div>this is the login form</div>
        <form>
          <input placeholder="Email" />
          <input placeholder="password" />
          <button type="submit">submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default LoginModal;
