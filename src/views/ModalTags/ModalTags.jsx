import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast, ToastContainer } from "react-toastify";

import { setTag, setTagClear } from "../../redux/slices/tagSlice";
import { stateTag } from "../../redux/slices/tagSlice";

import styles from "./ModalTags.module.css";
import "react-toastify/dist/ReactToastify.css";

const ModalTags = (props) => {
  const dispatch = useDispatch();

  const tagSlice = useSelector(stateTag);

  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tag = e.target[0].value;
    if (tag === "") {
      toast.warn("Enter a tag");
    } else if (tag < 1) {
      toast.warn("Min. 2 characters");
    } else {
      dispatch(setTag({ tag }));
    }
    setInputText("");
  };

  return (
    <div id={styles.ModalContainer}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <div id={styles.Modal}>
        <div id={styles.Titulo}>Add new tag</div>
        <button onClick={() => props.toggleModal()} id={styles.ButtonModal}>
          x
        </button>
        <div id={styles.FormContainer}>
          <form onSubmit={handleSubmit}>
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              id={styles.InputTags}
              maxLength="15"
              name="inputTags"
            />
            <button id={styles.ButtonAdd} type="submit" name="submit">
              Add
            </button>
          </form>
          <div id={styles.TagsContainer}>
            {tagSlice?.tags?.map((tag, index) => {
              return (
                tag.tag !== "Home" &&
                tag.tag !== "Work" &&
                <div key={index + tag.id}>
                  <button
                    id={styles.ButtonTag}
                    onClick={() => dispatch(setTagClear(tag.id))}
                  >
                    x
                  </button>
                  {tag.tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTags;
