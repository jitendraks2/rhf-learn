import { useState } from "react";
import { useModalStore } from "./store/modalState";
import { data } from "./data";
import MyModal from "./Modal";

import SingleData from "./SingleData";
const App = () => {
  const [todoId, setTodoId] = useState("");
  const openModall = useModalStore((state) => state.openModal);
  const handleModal = (id) => {
    console.log("clicked", id);
    setTodoId(id);

    openModall();
  };

  return (
    <div className="h-[100vh] bg-[#121212] text-[#eae7e7] p-10 flex items-center flex-col">
      <MyModal todoId={todoId} />
      <h2 className="text-3xl mb-10 ">List</h2>
      <div>
        {data.map((d) => (
          <SingleData
            key={d.id}
            todo={d.todo}
            id={d.id}
            handleModal={handleModal}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
