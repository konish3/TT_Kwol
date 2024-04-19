export const CustomTypography = ({ children, className, ...props }) => {
  return (
    <p {...props} className={className}>
      {children}
    </p>
  );
};
