interface MainHeading {
  title: string;
  className: string;
}
const MainHeading = ({ title, className }: MainHeading) => {
  return <h2 className={`main-heading ${className}`}>{title}</h2>;
};

export default MainHeading;
