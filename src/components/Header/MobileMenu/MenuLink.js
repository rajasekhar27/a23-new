import Link from "next/link";

export default function MenuLink(props) {
    const imagePath = props.imagePath;
    const altText = props.altText;
    const menuText = props.menuText;
    const iconWidth = props.iconWidth;
    const iconHeight = props.iconHeight;
    const href = props.href;

    return (
        <>
            <Link href={href} className="flex items-center p-0 menubutton">
                <div className="link-icon">
                    <img className="mobile-menu-icon" src={imagePath} alt={altText} width={iconWidth} height={iconHeight} />
                </div>
                <div className="text">
                    {menuText}
                </div>
            </Link>
        </>
    );
}