import React from "react";
import Modal from "react-modal";

// Modal.setAppElement("#app");

const Window = ({ show, onClose, item, icon }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"bg-white rounded-md mt-14 mb-20 w-8/12 w-min-6/12 p-5 outline-none"}
            overlayClassName={"flex justify-center fixed z-50 inset-0 bg-black bg-opacity-50"}
        >
            <div className={"flex"}>
                <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
                <button className="h-10 w-9 text-xl text-gray-800 rounded-lg" onClick={onClose}>X</button>
            </div>
            <div>
                <h2>Description</h2>
                <p>{item.content}</p>
                <h2>Status</h2>
                <p>{icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}</p>
            </div>
        </Modal>
    );
};

export default Window;