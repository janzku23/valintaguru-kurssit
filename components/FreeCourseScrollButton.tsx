"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function FreeCourseScrollButton({ children, className = "" }: Props) {
  const router = useRouter();
  function scrollToSignup() {
    const target = document.getElementById("ilmainen-kurssi");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    router.push("/#ilmainen-kurssi");
  }

  return (
    <button
      type="button"
      onClick={scrollToSignup}
      className={className}
    >
      {children}
    </button>
  );
}
