import { useState } from "react";
import styles from "./App.module.scss";
import Tbody from "./components/Tbody";
import Thead from "./components/Thead";

export default function App() {
  const [add, setAdd] = useState(false);

  return (
    <div className="wrapper">
      <div className="container">
        <div className={styles.helper}>
          *** Для редактирования элемента дважды кликнете по нужной строке. По
          нажатию Escape можно выйти из режима редактирования или создания
          нового элемента. Для создания элемента или его удаления (вместе с
          дочерними), нажмите иконки в соответствущей строке
        </div>
        <table className={styles.list}>
          <Thead setAdd={setAdd} />
          <Tbody add={add} setAdd={setAdd} />
        </table>
      </div>
    </div>
  );
}
