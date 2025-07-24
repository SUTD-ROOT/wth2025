import { Modal } from "antd";

const ContactModal = ({
    openModal,
    setOpenModal,
    error,
    errorMsg
}) => {

    const closeModal = () => setOpenModal(false);
    return (
        <Modal
            open={openModal}
            closeOnDocumentClick
            onOk={closeModal}
            closeIcon={false}
            closable={false}
            cancelButtonProps={false}
            destroyOnClose={false}
            overlayStyle={{background: "rgb(0,0,0,0.6)"}}
            >
            <div className="pop">
                <h2 className="large">{!error ? "Thank you!" : "Error!"}</h2>
                <p>{!error ? "Your message has been received. We will get back to you shortly via email." : errorMsg}</p>
            </div>

        </Modal>
    );
}

export default ContactModal;