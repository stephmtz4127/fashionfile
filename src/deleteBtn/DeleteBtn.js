import React from "react";
import { useDispatch } from "react-redux";
import { deleteALLAddress } from "../reducer/userSlice";

const DeleteBtn = () => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteALLAddress());
  };
  return (
    <button
      onClick={onDelete}
      style={{ height: "30px", width: "180px", backgroundColor: "red" }}
    >
      DELETE ALL HERE
    </button>
  );
};

export default DeleteBtn;
