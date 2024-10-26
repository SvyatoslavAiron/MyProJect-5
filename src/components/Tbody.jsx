import { useRef, useState } from "react";
import Icon from "../components/layout/icon";
import Input from "./Input";

export default function Tbody() {
  const [add, setAdd] = useState(false);
  const nameRef = useRef(null);
  const countRef = useRef(null);
  const sumRef = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!nameRef.current.value) {
      nameRef.current.focus();
      return;
    }
    if (!countRef.current.value) {
      countRef.current.focus();
      return;
    }
    if (!sumRef.current.value) {
      sumRef.current.focus();
      return;
    }

    console.log("Форма успешно отправлена");
  };

  return (
    <tbody>
      <tr title="Двойной щелчок для изменения" role="button">
        <td>
          <div>
            <div className="connect connect_vertical connect_horizontal"></div>
            <div className="wrapper-container">
              <div className="button-wrapper">
                <button
                  onClick={() => setAdd((prev) => !prev)}
                  title="Создать дочерний элемент"
                >
                  <Icon name="add" className="add-icon" />
                </button>
                <button title="Удалить элемент">
                  <Icon name="delete" className="delete-icon" />
                </button>
              </div>
            </div>
          </div>
        </td>
        <td>Элемент 1</td>
        <td>10</td>
        <td>100</td>
      </tr>
      {add && (
        <tr title="Двойной щелчок для изменения" role="button">
          <td>
            <div>
              <div className="connect connect_vertical connect_horizontal"></div>
              <div className="wrapper-container">
                <div className="button-wrapper">
                  <button title="Создать дочерний элемент">
                    <Icon name="add" className="add-icon" />
                  </button>
                  <button title="Удалить элемент">
                    <Icon name="delete" className="delete-icon" />
                  </button>
                </div>
              </div>
            </div>
          </td>
          <td>
            <Input ref={nameRef} name="name" placeholder="Наименование" autoFocus />
          </td>
          <td>
            <Input
              ref={countRef}
              name="count"
              number
              placeholder="Количество"
            />
          </td>
          <td>
            <Input ref={sumRef} name="sum" number placeholder="Сумма" />
            <form
              noValidate
              id="form"
              onSubmit={onFormSubmit}
              autoComplete="off"
            >
              <button className="form" form="form" type="submit"></button>
            </form>
          </td>
        </tr>
      )}
    </tbody>
  );
}
