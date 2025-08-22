const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded p-6 text-black flex items-center gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
