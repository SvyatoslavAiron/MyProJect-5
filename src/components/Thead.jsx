import Icon from "../components/layout/icon";

export default function Thead() {
  return (
    <thead>
      <tr>
        <th>
          <div>
            <button title="Создать корневой элемент">
              <Icon name="add" className="add-icon" />
            </button>
            <span>Уровень</span>
          </div>
        </th>
        <th>Наименование</th>
        <th>Кол-во</th>
        <th>Сумма</th>
      </tr>
    </thead>
  );
}
