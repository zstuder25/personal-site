import Link from "next/link";

type SideNavItemProps = {
    text: string;
    href: string;
}

const SideNavItem = ({text, href}: SideNavItemProps) => {
    return (
        <Link href={href} className="px-2 pt-2 hover:underline">
            {text}
        </Link>
    )
}

export default SideNavItem;