import { Button } from '@mui/material';
import {default as ReactModal} from 'react-modal';
import ModalButtonsContainer from '../ModalButtonsContainer';
import SingleButtonContainer from '../SingleButtonContainer';


export interface IModalProps{
    title: string,
    message: string | React.ReactNode,
    type?: string,
    show: boolean,
    afterCloseModal?: ()=>{},
    onDelete?: ()=>{},
    onCloseModal: ()=>void
}

const Modal:React.FunctionComponent<IModalProps> = ({
    title = "",
    message = "",
    type = "",
    show = false,
    afterCloseModal = ()=>{},
    onDelete = ()=>{},
    onCloseModal
}) => {
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
        <ReactModal
            ariaHideApp={false}
            isOpen={show}
            onRequestClose={afterCloseModal}
            style={customStyles}
        >
            <div style={{width: "100%", display:"flex", justifyContent: "flex-end"}}>
                <span style={{cursor: "pointer"}} onClick={()=>{onCloseModal(); afterCloseModal();}}>X</span>
            </div>
            <h1>{title}</h1>
            <>{message}</>
            {
                type === "delete" ? 
                <ModalButtonsContainer>
                    <Button variant="outlined" size="large" onClick={()=>{onCloseModal(); afterCloseModal();}}>Cancelar</Button>
                    <Button variant="contained" size="large" onClick={()=>{onDelete(); afterCloseModal();}} color="error">Eliminar</Button>
                </ModalButtonsContainer>
                :
                <SingleButtonContainer>
                    <Button variant="contained" size="large" onClick={()=>{onCloseModal(); afterCloseModal();}}>Aceptar</Button>
                </SingleButtonContainer>
            }
        </ReactModal>
    )
}

export default Modal