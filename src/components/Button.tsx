interface buttonProps {
  text: string;
  color: "blue" | "green" | "red" | "yellow";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, item?: string) => void;
}

export const Button = ({ text, color, onClick }: buttonProps) => {
  const buttonColors = {
    blue: "bg-blue-400 hover:bg-blue-500",
    red: "bg-red-300 hover:bg-red-400",
    yellow: "bg-yellow-300 hover:bg-yellow-400",
    green: "bg-green-300 hover:bg-green-400",
  };

  return (
    <button
      className={`${buttonColors[color]} px-3 py-2 w-32 rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
