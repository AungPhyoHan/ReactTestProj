import { useState } from "react";
import Sizebox from "./Sizebox";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
interface Props {
  items: string[];
  header: string;
}

function Message({ items, header }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  //items = [];

  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-[40px] text-orange-500 text-center">{header}</h1>
      <p className="text-[20px] text-red-300 ">
        {items.length == 0 && "No Cities found"}
      </p>
      <ul className="list-none flex-row">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => setSelectedIndex(index)}
            className={
              selectedIndex === index
                ? "px-3 py-2 border border-black  bg-emerald-400 w-[300px] text-center text-bold text-black"
                : "px-3 py-2 border border-black  w-[300px] bg-emerald-800 text-white text-center"
            }
          >
            {item}
          </li>
        ))}
      </ul>
      <Sizebox height={15} />
      <Button color="blue" text="Back" onClick={() => navigate("/")} />
    </div>
  );
}

export default Message;
