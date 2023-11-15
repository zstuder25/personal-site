import Link from "next/link";

type SideNavItemProps = {
  text: string;
  href: string;
};

const SideNavItem = ({ text, href }: SideNavItemProps) => {
  return (
    <Link href={href} className="px-2 pt-2">
      <h1 className="hover:underline hover:text-slate-500">{text}</h1>
    </Link>
  );
};

export default SideNavItem;
