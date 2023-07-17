import Link from "next/link";
import Image from "next/image";
import LogoWhite from "@/public/images/logo-white.png";
import LogoBlack from "@/public/images/logo-black.png";

type Props = {
  isLight?: boolean;
};

export default function Logo({ isLight = true }: Props) {
  return (
    <Link href="/home" className="block text-blue-600 transition duration-150 ease-in-out" aria-label="Cruip">
      <Image src={isLight ? LogoWhite : LogoBlack} width={35} height={32} alt="Avatar 03" />
    </Link>
  );
}
