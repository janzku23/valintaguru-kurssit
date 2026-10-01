import type {
  ReactNode,
} from "react";

import GuruGameTopbar from "@/components/gurupath/GuruGameTopbar";

export default function GuruPathLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <GuruGameTopbar />
      {children}
    </>
  );
}
