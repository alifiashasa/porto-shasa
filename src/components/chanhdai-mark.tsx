import Image from "next/image";

import { cn } from "@/lib/utils";

import logo from "../../public/logo.png";

export function ChanhDaiMark({
  className,
  width = 36,
  height = 36,
  ...props
}: Omit<React.ComponentProps<typeof Image>, "src" | "alt">) {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={width}
      height={height}
      className={cn("aspect-square object-contain", className)}
      {...props}
    />
  );
}

export function getMarkSVG(color: string) {
  const fullSvg = `
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180"
      width="64"
      height="64"
    >
      <image href="/logo.png" x="0" y="0" height="180" width="180" />
    </svg>
  `;
  return fullSvg;
}
