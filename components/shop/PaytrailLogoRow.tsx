import Image from "next/image";

const logoBase = "https://resources.paytrail.com/images/payment-method-logos";

export const paytrailMobileLogos = [
  { name: "Siirto", svg: `${logoBase}/siirto.svg?v=2` },
  { name: "Apple Pay", svg: `${logoBase}/apple-pay.svg` },
  { name: "Google Pay", svg: `${logoBase}/google-pay.svg` },
];

export default function PaytrailLogoRow({
  logos = paytrailMobileLogos,
}: {
  logos?: { name: string; svg: string }[];
}) {
  if (!logos.length) return null;

  return (
    <ul aria-label="Paytrailin maksutavat" className="mt-2 flex list-none flex-wrap gap-1 p-0">
      {logos.map(({ name, svg }) => (
        <li key={svg} className="h-6 w-11 shrink-0">
          <Image
            unoptimized
            src={svg}
            width={44}
            height={24}
            alt={name}
            className="block h-full w-full rounded bg-white object-contain p-0.5"
          />
        </li>
      ))}
    </ul>
  );
}
