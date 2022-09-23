import React from 'react'


function SingleButtonContainer({children}:{children:React.ReactNode}) {
    return (
        <div style={
            {
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                margin: "0 0 20px 0",
            }
        }>
            {children}
        </div>
    )
}

export default SingleButtonContainer