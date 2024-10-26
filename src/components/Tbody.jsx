import { useState } from "react";
import Icon from "../components/layout/icon";
import Input from "./Input";

export default function Tbody() {
  const [add, setAdd] = useState(false);

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
            <Input name="name" placeholder="Название" />
          </td>
          <td>
					<Input name="count" type="number" placeholder="Количество" />
          </td>
          <td>
					<Input name="sum" type="number" placeholder="Сумма"/>
          </td>
        </tr>
      )}
    </tbody>
  );
}
