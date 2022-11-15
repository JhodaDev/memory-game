export const Container = ({ children, className }) => {
  return <div className={`max-w-xs w-full mx-auto ${className || ''}`}>{children}</div>
}
