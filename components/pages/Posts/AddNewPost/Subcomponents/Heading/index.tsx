type Props = {
  heading: string;
  className?: string;
};

const Heading = ({ heading, className }: Props) => {
  return (
    <h1
      className={`${className || ""} text-[22px] text-[var(--color-heading)]`}
    >
      {heading}
    </h1>
  );
};

export default Heading;
