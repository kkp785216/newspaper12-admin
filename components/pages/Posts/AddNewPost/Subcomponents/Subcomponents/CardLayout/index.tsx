const Head = ({
  className,
  heading,
}: {
  className?: string;
  heading: string;
}) => {
  return (
    <div className={`${className || ""} border-b border-[var(--border-dim)]`}>
      <h3 className="text-sm font-medium">{heading}</h3>
    </div>
  );
};

const Body = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${className || ""}`}>{children}</div>;
};

const Footer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${
        className || ""
      } bg-[var(--bg-lite)] border-t border-t-[var(--border-disable)]`}
    >
      {children}
    </div>
  );
};

const CardWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${
        className || ""
      } border border-[var(--border-dim)] shadow-[0_1px_1px_rgba(0,0,0,.04)] bg-white [&>*]:px-3 [&>*]:py-2`}
    >
      {children}
    </div>
  );
};

export { Head, Body, Footer, CardWrapper };
