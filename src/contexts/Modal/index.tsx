import React from 'react';

export const ModalContext = React.createContext({
    modalProps: "",
    setModalProps: (_value:string) => {}
  });

interface IModalProviderProps {
    children: React.ReactNode,
}

const ModalathonProvider: React.FunctionComponent<IModalProviderProps> = ({ children }) => {
  const [modalProps, setModalProps] = React.useState("");
  return (
    <ModalContext.Provider
      value={
        {
            modalProps: modalProps,
            setModalProps: setModalProps
        }
      }
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalathonProvider;