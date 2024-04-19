export const Title = ({ children, className, ...props }) => {
  return (
    <h1 className={className} {...props}>
      {children}
    </h1>
  );
};
