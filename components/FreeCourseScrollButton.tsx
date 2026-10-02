"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function FreeCourseScrollButton({ children, className = "" }: Props) {
  function scrollToSignup() {
    const target = document.getElementById("ilmainen-kurssi");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    window.location.href = "/#ilmainen-kurssi";
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
