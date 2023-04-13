interface baseBtnProps {
  children?: React.ReactNode;
  variant?: string, // default, primary, info, success, warning, danger, login, register
  size?: string, // sm, md, lg
  disabled?: boolean,
  onClick: () => void;
}

export default function BaseButton({
  children,
  variant = 'default',
  size = 'md',
  disabled = false,
  onClick,
  ...rest
}: baseBtnProps) {
  return (
    <button
      className={`btn ${variant} ${size}` + (disabled ? ' disabled' : '')}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}