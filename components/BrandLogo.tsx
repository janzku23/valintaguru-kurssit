import Image from "next/image";
import logo from "@/assets/logo.png";

export default function BrandLogo() {
  return (
    <Image
      src={logo}
      alt=""
      width={40}
      height={40}
      sizes="40px"
      className="h-8 w-8 shrink-0 rounded-full border border-slate-950 bg-white object-cover sm:h-10 sm:w-10"
    />
  );
}
