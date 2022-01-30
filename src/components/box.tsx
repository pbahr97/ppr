import { CSSProperties } from "react";

interface BoxProps {
  className?: String,
  children?: React.ReactNode,
  style?: CSSProperties;
}

export default function Box({ className, children, style }: BoxProps) {
  return <div className={`box ${className ?? ""}`} style={style}>{children}</div>
}