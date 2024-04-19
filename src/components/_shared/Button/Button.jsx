export const CustomButton = ({
  children,
  className,
  isLoading = false,
  type = "button",
  onClick,
  ...props
}) => {
  return (
    <button {...props} onClick={onClick} className={className} type={type}>
      <div className="flex items-center gap-3 text-center justify-center">
        {children}
      </div>
    </button>
  );
};
