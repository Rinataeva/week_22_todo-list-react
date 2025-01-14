import { ListItem } from "../ListItem";
import { useState } from "react";
import styles from "./content.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function Content() {
  const [items, setItems] = useLocalStorage("toDoList", []);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (!newItem.trim()) return;

    const newItemAdded = {
      id: Date.now(),
      name: newItem,
      isChecked: false,
      color: "purple",
    };

    const updatedItems = [...items, newItemAdded];
    setItems(updatedItems);
    localStorage.setItem("toDoList", JSON.stringify(updatedItems));

    setNewItem("");
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <main className={styles.content}>
      <form className={styles.content__form}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new activity"
          className={styles.input}
        />
        <button onClick={addItem} className={styles.addButton}>
          Add Item
        </button>
      </form>
      <div className={styles.content__list}>
        <ul>
          {" "}
          <li>
            {items.map((item) => (
              <ListItem
                key={item.id}
                name={item.name}
                color={item.color}
                deleteItem={() => deleteItem(item.id)}
              />
            ))}
          </li>
        </ul>
      </div>
    </main>
  );
}
