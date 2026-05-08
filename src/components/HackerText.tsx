import React, { useState, useEffect, useRef } from "react";

const letters = "ABC!@#$%^&*-=010/;'\`010101";

const extractText = (node: React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return node.toString();
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (
    node &&
    typeof node === "object" &&
    "props" in node &&
    node.props &&
    node.props.children
  ) {
    return extractText(node.props.children);
  }
  return "";
};

interface HackerTextProps {
  children: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

const HackerText = ({ children, tag: Tag = "h1", ...props }: HackerTextProps) => {
  const originalText = extractText(children);
  const [text, setText] = useState(originalText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasAnimated = useRef(false);

  const triggerEffect = () => {
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText(() =>
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1;
    }, 15);
  };

  useEffect(() => {
    if (!hasAnimated.current) {
      triggerEffect();
      hasAnimated.current = true;
    } else {
      setText(originalText);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [originalText]);

  return (
    <Tag
      {...props}
      data-value={originalText}
      className={`font-mono inline-block ${props.className || ""}`}
    >
      {text}
    </Tag>
  );
};

export default HackerText;
