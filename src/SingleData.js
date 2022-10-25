import React from "react";
const SingleData = (props) => {
  return (
    <>
      <div className="bg-red-500 mt-10 px-10 rounded-lg py-5 cursor-pointer flex items-center justify-between w-[800px] ">
        <p key={props.id}>{props.todo}</p>
        <button
          className="bg-transparent border-white rounded-full border-2 px-6 py-2"
          onClick={() => props.handleModal(props.todo)}
        >
            Edit
        </button>
      </div>
    </>
  );
};

export default SingleData;
