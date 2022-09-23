
interface IFormGroupProps {
    children: React.ReactNode
}

const FormGroup:React.FunctionComponent<IFormGroupProps> = (props:IFormGroupProps) => {
    return (
        <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                margin: "40px 0 40px 0",
                flexWrap: "wrap",
            }} >
            {props.children}
        </div>
    )
}

export default FormGroup