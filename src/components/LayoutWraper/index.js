
const LayoutWraper = (props) => {
    return(
        <div className="layout">
            <div className="main">
                <div className="main-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default LayoutWraper