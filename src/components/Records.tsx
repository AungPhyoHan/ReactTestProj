import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import Sizebox from "./Sizebox";
import NewForm from "./NewForm";
import { useState } from "react";

interface recordsProp {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  header: string;
}

const Records = ({ items, setItems, header }: recordsProp) => {
  const [itemIndex, setItemIndex] = useState(-1);
  const [btnChange, setBtnChange] = useState(false);
  const navigate = useNavigate();
  const handleDelete = () => {
    if (itemIndex == -1) return;
    setItems(items.filter((item, index) => index != itemIndex));
    setItemIndex(-1);
  };
  const handleEdit = () => {
    if (itemIndex == -1) return;
    setBtnChange(true);
  };
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <Sizebox height={10} />
        <h1 className="text-[50px] drop-shadow-lg font-bold text-orange-400 text-center">
          {header}
        </h1>
        <Sizebox height={30} />
        <div
          className={
            items.length == 0 ? "overflow-y-auto" : "overflow-y-auto h-1/2"
          }
        >
          <p className="font-bold text-red-500 text-center text-md">
            {items.length === 0 && "No Record is here !"}
          </p>
          <ul className="list-none text-center mx-auto w-1/3 rounded-sm">
            {items.sort().map((item, index) => (
              <li
                className={
                  itemIndex === index
                    ? "text-md p-4 bg-orange-300 text-black border border-black"
                    : "text-md p-4 bg-purple-300 hover:bg-purple-400 text-black border border-black"
                }
                key={index}
                onClick={
                  btnChange == false ? () => setItemIndex(index) : () => {}
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Sizebox height={30} />
        <div className="flex flex-row mx-auto">
          <Button text="Edit" color="yellow" onClick={handleEdit} />
          <Sizebox width={20} />
          <Button text="Delete" color="red" onClick={handleDelete} />
          <Sizebox width={20} />
          <Button text="Back" color="blue" onClick={() => navigate("/")} />
        </div>
        <Sizebox height={40} />
        <NewForm
          items={items}
          setItems={setItems}
          btnChange={btnChange}
          setBtnChange={setBtnChange}
          updateIndex={btnChange == true ? itemIndex : -1}
          setItemIndex={setItemIndex}
        />
      </div>
    </>
  );
};

export default Records;
