import { useEffect, useState } from "react";
import { Button } from "./Button";
import Sizebox from "./Sizebox";

interface newformProps {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  btnChange: boolean;
  setBtnChange: React.Dispatch<React.SetStateAction<boolean>>;
  updateIndex?: number;
  setItemIndex: React.Dispatch<React.SetStateAction<number>>;
}

const NewForm = ({
  items,
  setItems,
  btnChange,
  setBtnChange,
  updateIndex,
  setItemIndex,
}: newformProps) => {
  const [record, setRecord] = useState("");
  useEffect(() => {
    if (btnChange == true) {
      setRecord(items[updateIndex]);
    }
  }, [btnChange]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecord(event.target.value);
    if (btnChange == false) setItemIndex(-1);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (record.trim() === "") return;
    setItems([...items, record]);
    setRecord("");
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    setItems(
      items.map((item, index) => (index === updateIndex ? record : item))
    );
    setRecord("");
    setBtnChange(false);
    setItemIndex(-1);
  };

  return (
    <>
      <div className="flex flex-row mx-auto">
        <form className="rounded mb-4">
          <div className="flex flex-row">
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 "
              id="record"
              name="record"
              value={record}
              onChange={handleChange}
              type="text"
              placeholder="City"
            />
            <Sizebox width={20} />
            <Button
              color={btnChange == false ? "green" : "yellow"}
              text={btnChange == false ? "New" : "Update"}
              onClick={btnChange == false ? handleAdd : handleUpdate}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default NewForm;
