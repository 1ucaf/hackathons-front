import React from 'react';
import Modal, { IModalProps } from '../../components/Modal';

interface IModalProviderProps {
  children: React.ReactNode,
}

interface IContextModalProps{
  title: string,
  message: string | React.ReactNode,
  type?: string,
  show: boolean,
  afterCloseModal?: ()=>{},
  onDelete?: ()=>{},
  onCloseModal?: ()=>void
}

export const ModalContext = React.createContext({
    modalProps: {
      show:false
    },
    setModalProps: (_value:IContextModalProps) => {}
  });

const ModalProvider: React.FunctionComponent<IModalProviderProps> = ({ children }) => {
  const closeModal = ()=>{
    setModalPropsState({
      ...modalProps,
      show:false
    })
  }

  const setModalProps = (props:IContextModalProps) => {
    setModalPropsState({
      ...props,
      onCloseModal: closeModal
    });
  }
  
  const [modalProps, setModalPropsState] = React.useState<IModalProps>({
    message:"",
    show:false,
    title:"",
    onCloseModal:closeModal
  });
  return (
    <ModalContext.Provider
      value={
        {
            modalProps: modalProps,
            setModalProps: setModalProps
        }
      }
    >
      <Modal
        title = {modalProps.title}
        message = {modalProps.message}
        type = {modalProps.type}
        show = {modalProps.show}
        onCloseModal={closeModal}
      />
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider;