import React from "react";
import cn from "classnames";

type Props = {
  text: string;
  highlight: string;
  className: string;
  highlightClass: string;
};

const HighlightText = ({
  text,
  highlight,
  className,
  highlightClass,
}: Props) => {
  if (!highlight) {
    return <span className={className}>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          className={cn(className, {
            [highlightClass]: part.toLowerCase() === highlight.toLowerCase(),
          })}
        >
          {part}
        </span>
      ))}
    </span>
  );
};

export default React.memo(HighlightText);
