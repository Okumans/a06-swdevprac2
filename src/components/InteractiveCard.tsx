"use client";

import { ReactNode, SyntheticEvent } from "react";

interface Props {
  children?: ReactNode;
}

export default function InteractiveCard({ children }: Props) {
  return (
    <div
      className="w-64 h-full min-h-fit bg-white shadow-lg rounded-lg p-2 transition-all"
      onMouseOver={onCardMouseAction}
      onMouseOut={onCardMouseAction}
    >
      {children}
    </div>
  );
}

function onCardMouseAction(event: SyntheticEvent) {
  const currentTarget = event.currentTarget;

  if (event.type == "mouseover") {
    currentTarget.classList.remove("shadow-lg");
    currentTarget.classList.add("shadow-2xl");
    currentTarget.classList.remove("bg-white");
    currentTarget.classList.add("bg-neutral-200");
  } else {
    currentTarget.classList.remove("shadow-2xl");
    currentTarget.classList.add("shadow-lg");
    currentTarget.classList.remove("bg-neutral-200");
    currentTarget.classList.add("bg-white");
  }
}
