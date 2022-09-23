import { Button } from '@mui/material';
import Modal as ReactModal from 'react-modal';
import ModalButtonsContainer from '../Containers/ModalButtonsContainer';
import SingleButtonContainer from '../Containers/SingleButtonContainer';

interface ModalProps {

}

interface IModalProps{
    modalProps:ModalProps,
    onCloseModal: ()=>{}
}

const Modal:React.FunctionComponent<IModalProps> = ({modalProps, onCloseModal}) => {
    const customStyles = {
        content: {
            background: "black",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <Modal
            isOpen={modalProps.show}
            onRequestClose={modalProps.onCloseModal}
            style={customStyles}
        >
            <div style={{width: "100%", display:"flex", justifyContent: "flex-end"}}>
                <span style={{cursor: "pointer"}} onClick={()=>{onCloseModal(); modalProps.afterCloseModal();}}>X</span>
            </div>
            <h1>{modalProps.title}</h1>
            <p>{modalProps.message}</p>
            {
                modalProps.type === "delete" ? 
                <ModalButtonsContainer>
                    <Button variant="outlined" size="large" onClick={()=>{onCloseModal(); modalProps.afterCloseModal();}}>Cancelar</Button>
                    <Button variant="contained" size="large" onClick={()=>{modalProps.onDelete(); modalProps.afterCloseModal();}} color="error">Eliminar</Button>
                </ModalButtonsContainer>
                :
                <SingleButtonContainer>
                    <Button variant="contained" size="large" onClick={()=>{onCloseModal(); modalProps.afterCloseModal();}}>Aceptar</Button>
                </SingleButtonContainer>
            }
        </Modal>
    )
}

export default Modal