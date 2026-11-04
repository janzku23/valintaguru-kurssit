"use client";
import Image from "next/image";
import PaytrailLogoRow from "./PaytrailLogoRow";
import { useEffect, useState } from "react";
import { shopFetch, shopJson } from "./client-api";

type Methods = { banner: boolean; logos: { name: string; svg: string }[] };

export default function PaymentMethods({ amount }: { amount: number }) {
  const [methods, setMethods] = useState<Methods>();
  useEffect(() => {
    const controller = new AbortController();
    shopFetch("/api/shop/payment-methods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
      signal: controller.signal,
    })
      .then(shopJson)
      .then(setMethods)
      .catch(() => {});
    return () => controller.abort();
  }, [amount]);
  return (
    <div className="vg-payment-methods">
      <small className="vg-shop-muted">Maksutapa valitaan Paytrailissa.</small>
      {methods?.banner && (
        <Image
          unoptimized
          src="/paytrail-maksutavat.svg"
          width={1562}
          height={400}
          alt="Paytrail: suomalaiset verkkopankit, Visa, Mastercard, MobilePay, Walley ja Klarna"
        />
      )}
      {methods && <PaytrailLogoRow logos={methods.logos} />}
    </div>
  );
}
