import Link from "next/link";

export default function DropdownListItem(props) {
    const menuText = props.menuText;
    const redirection = props.redirection;

    return (
        <Link href={ redirection }>
            <span className="icon-solid-dot"></span>
            <span>{ menuText }</span>
        </Link>
    );
}