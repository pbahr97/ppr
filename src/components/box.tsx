interface BoxProps {
  className?: String,
  children?: React.ReactNode
}

export default function Box({ className, children }: BoxProps) {
  return <div className={`box ${className}`}>{children}</div>
}