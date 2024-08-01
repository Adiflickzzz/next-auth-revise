import Link from "next/link";
import { Button } from "../ui/button";

interface FooterProps {
  href: string;
  label: string;
}

export const Footer = ({ href, label }: FooterProps) => {
  return (
    <div className="items-center flex justify-center w-full">
      <Link href={href}>
        <Button variant="link" size="sm" className="text-gray-600">
          {label}
        </Button>
      </Link>
    </div>
  );
};
