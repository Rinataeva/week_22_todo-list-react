/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import styles from './listItem.module.css';

export function ListItem(props) {
  const [isChecked, setIsChecked] = useState(false);
  const labelRef = useRef(null); 

  const handleCheckboxState = () => {
    setIsChecked(!isChecked);
  };

    useEffect(() => {
    if (labelRef.current) {
      labelRef.current.style.textTransform = "uppercase"; 
      labelRef.current.style.color = "purple"; 
    }
  }, []); 

  return (
    <div className={styles.added_item} {...props}>
      <input 
        type="checkbox" 
        className={styles.checkbox}
        onChange={handleCheckboxState} 
      />
      <label
        ref={labelRef} 
        style={isChecked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
        className={styles.label}
      >
        {props.name}
      </label>
      <button
        className={styles.delete_button}
        onClick={() => props.deleteItem(props.id)}
      >
        delete
      </button>
    </div>
  );
}
