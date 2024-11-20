import deleteIcon from "../assets/delete_icon.svg"
import styles from "./CartDeleteItemButton.module.css"

export default function CartDeleteItemButton({id, deleteItem}) {
    
    return (
        <button className={styles.comicallyLargeButton} onClick={() => deleteItem(id)}>
            <img src={deleteIcon} alt="delete icon button"/>
        </button>
    )
}