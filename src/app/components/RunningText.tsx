"use client";
import { useEffect, useState } from "react";
import "./runningtext.css";
import getRandomLetter, { TLanguages } from "../util/getRandomLetter";

export default function RunningText({
  text,
  lng,
}: {
  text: string;
  lng: TLanguages;
}) {
  const [runningText, setRunningText] = useState<string>(text);
  const [hoverFlag, setHoverFlag] = useState<boolean>(false);
  const [iterations, setIterations] = useState<number>(0);

  useEffect(() => {
    if (!hoverFlag) return;

    const timeout = setTimeout(() => {
      const newText = text
        .split("")
        .map((letter, index) => {
          return index < iterations ? letter : getRandomLetter(lng);
        })
        .join("");
      setRunningText(() => newText);

      if (iterations >= text.length) {
        setIterations(0);
        setHoverFlag(false);
      } else {
        setIterations(iterations + 1);
      }
    }, 30);

    return () => clearTimeout(timeout);
  }, [hoverFlag, iterations]);

  return (
    <h1
      className="textEffect"
      onMouseOver={() => setHoverFlag(true)}
      aria-hidden
      aria-label={text}
    >
      {runningText}
    </h1>
  );
}
