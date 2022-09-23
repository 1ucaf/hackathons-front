
interface IModalButtonsContainerProps {
    children: React.ReactNode
}

const ModalButtonsContainer:React.FunctionComponent<IModalButtonsContainerProps> = ({children}) => {
    return (
        <div style={
            {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                margin: "0 0 20px 0",
            }
        }>
            {children}
        </div>
    )
}

export default ModalButtonsContainer