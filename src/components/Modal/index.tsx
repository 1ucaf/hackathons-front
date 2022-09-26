import { Button } from '@mui/material';
import { default as ReactModal } from '@mui/material/Modal';
import Box from '@mui/material/Box';
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
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const onClose = ()=>{
        afterCloseModal();
        onCloseModal();
    }
    return (
        <ReactModal
            open={show}
            onClose={onClose}
        >
            <Box sx={customStyles}>
                <h1>{title}</h1>
                <>{message}</>
                {
                    type === "delete" ? 
                    <ModalButtonsContainer>
                        <Button variant="outlined" size="large" onClick={onClose}>Cancelar</Button>
                        <Button variant="contained" size="large" onClick={()=>{onDelete(); afterCloseModal();}} color="error">Eliminar</Button>
                    </ModalButtonsContainer>
                    :
                    <SingleButtonContainer>
                        <Button variant="contained" size="large" onClick={onClose}>Aceptar</Button>
                    </SingleButtonContainer>
                }
            </Box>
        </ReactModal>
    )
}

export default Modal