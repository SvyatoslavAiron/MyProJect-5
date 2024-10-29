import Icon from "../components/layout/Icon";

export default function Thead({ setAdd }) {
  return (
    <thead>
      <tr>
        <th>
          <div>
            <button
              title="Создать корневой элемент"
              onClick={() => setAdd(true)}
            >
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
