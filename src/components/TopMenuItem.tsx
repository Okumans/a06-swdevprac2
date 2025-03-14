import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

export default function TopMenuItem({ title, href }: Props) {
  return (
    <Link href={href} className="flex items-center h-full font-medium">
      <p className="text-white">{title}</p>
    </Link>
  );
}
