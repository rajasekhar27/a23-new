export default function DropdownItem(props) {
    const imagePath = props.imagePath;
    const altText = props.altText;
    const menuText = props.menuText;
    const iconWidth = props.iconWidth;
    const iconHeight = props.iconHeight;

    return (
        <>
            <div className="btn-trigger menubutton flex items-center">
                <div className="link-icon">
                    <img className="mobile-menu-icon" src={imagePath} alt={altText} width={iconWidth} height={iconHeight} />
                </div>
                <div className="text">
                    {menuText}
                </div>
            </div>
        </>
    );
}