import { useState } from "react";
import { createPortal } from "react-dom";

import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  return (
    <div className="App">
      {message}
      <button className="btn btn-open" onClick={() => setModalOpen(true)}>
        Ouvrir
      </button>
      {modalOpen &&
        createPortal(
          <Modal
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
          >
            <h1>Cours interface humain-machine</h1>
            <br />
            <p>Bonne journée!</p>
          </Modal>,
          document.body
        )}
    </div>
  );
}

export default App;
