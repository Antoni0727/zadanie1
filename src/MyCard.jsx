const MyCard = ({children}) => {

    const myCardStyle = {
        display: "flex",
        flexDirection: "row",
        justifyConstent: "space-between",
        alignItems: "center",
        backgroundColor: "#dda15e",
        borderRadius: "16px",
        marginBottom: "10px",
        padding: "10px"
    }

    return (
        <div style={myCardStyle}>
            {children}
        </div>
    )
}

export default MyCard;