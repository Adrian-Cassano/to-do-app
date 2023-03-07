import React from "react";
import { useDispatch, useSelector } from "react-redux";

import setShowTag from '../../redux/slices/tagSlice'

import styles from './Tag.module.css'

const Tag = () => {
  const tagSlice = useSelector((store) => store.tagSlice);
  const dispatch = useDispatch();
  
  return (
    <div>
      <select>
      {tagSlice?.tags?.map((tag, index) => {
        return <option key={tag.id + index} onClick={() => dispatch(setShowTag(tag.id))} id={styles.Button}>{tag.tag}</option>;
      })}
      </select>
    </div>
  );
};
export default Tag;
