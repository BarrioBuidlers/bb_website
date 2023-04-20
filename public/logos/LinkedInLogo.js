import * as React from "react";
export default function LinkedInLogo(props) {
  const [color, setColor] = React.useState(props.color);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      preserveAspectRatio="xMidYMid"
      viewBox="0 -2 44 44"
      onFocus={() => {
        props.hover && setColor(props.hover);
      }}
    >
      <path
        fill={color}
        d="M44 40h-9.725V25.938c0-3.68-1.52-6.193-4.866-6.193-2.558 0-3.981 1.696-4.643 3.33-.249.586-.21 1.403-.21 2.22V40h-9.634s.124-24.909 0-27.173h9.634v4.265c.57-1.865 3.648-4.526 8.56-4.526C39.211 12.566 44 16.474 44 24.89V40ZM5.18 9.428h-.063C2.013 9.428 0 7.351 0 4.718 0 2.034 2.072 0 5.239 0c3.164 0 5.11 2.029 5.171 4.71 0 2.633-2.007 4.718-5.23 4.718Zm-4.07 3.399h8.576V40H1.11V12.827Z"
      />
    </svg>
  );
}
