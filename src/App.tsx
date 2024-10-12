import Message from "./components/Message";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Records from "./components/Records";
import NoPage from "./components/NoPage";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    console.log(items);
    return () => console.log("clean data");
  }, [items]);
  return (
    <>
      <div className="bg-gray-700 h-screen w-screen items-center">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/message"
              element={<Message header="Cities" items={items} />}
            />
            <Route
              path="/records"
              element={
                <Records items={items} setItems={setItems} header="Records" />
              }
            />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
