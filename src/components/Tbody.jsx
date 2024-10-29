import React, { useEffect, useRef, useState } from "react";
import Icon from "../components/layout/icon";
import Input from "./Input";

export default function Tbody({ setAdd, add }) {
  const [data, setData] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    count: 0,
    sum: 0,
  });
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

    setData((prev) => [
      ...prev,
      { name: formState.name, count: formState.count, sum: formState.sum },
    ]);
    console.log(data);

    console.log("Форма успешно отправлена");
    setFormState({ name: "", count: 0, sum: 0 });
    setAdd(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && add) {
      onFormSubmit(e);
    }
    if (e.key === "Escape" && add) {
      addCancel();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [add]);

  const deleteItem = (index) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };

  function addCancel() {
    setFormState({ name: "", count: 0, sum: 0 });
    setAdd(false);
  }

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>
            <div>
              <div className="connect connect_vertical connect_horizontal"></div>
              <div className="wrapper-container">
                <div className="button-wrapper">
                  <button
                    title="Создать дочерний элемент"
                    onClick={() => setAdd(true)}
                  >
                    <Icon name="add" className="add-icon" />
                  </button>
                  <button
                    title="Удалить элемент"
                    onClick={() => deleteItem(index)}
                  >
                    <Icon name="delete" className="delete-icon" />
                  </button>
                </div>
              </div>
            </div>
          </td>
          <td>{item.name}</td>
          <td>{item.count}</td>
          <td>{item.sum}</td>
        </tr>
      ))}
      {add && (
        <tr>
          <td>
            <div>
              <div className="connect connect_vertical connect_horizontal"></div>
              <div className="wrapper-container">
                <div className="button-wrapper">
                  <button form="form" type="submit" title="Подтвердить">
                    <Icon name="confirm" className="confirm-icon" />
                  </button>
                  <button title="Отменить" onClick={addCancel}>
                    <Icon name="cancel" className="cancel-icon" />
                  </button>
                </div>
              </div>
            </div>
          </td>
          <td>
            <Input
              ref={nameRef}
              name="name"
              placeholder="Наименование"
              autoFocus
              formState={formState}
              setFormState={setFormState}
            />
          </td>
          <td>
            <Input
              ref={countRef}
              name="count"
              number
              placeholder="Количество"
              formState={formState}
              setFormState={setFormState}
            />
          </td>
          <td>
            <Input
              ref={sumRef}
              name="sum"
              number
              placeholder="Сумма"
              formState={formState}
              setFormState={setFormState}
            />
            <form
              noValidate
              id="form"
              onSubmit={onFormSubmit}
              autoComplete="off"
            ></form>
          </td>
        </tr>
      )}
    </tbody>
  );
}
