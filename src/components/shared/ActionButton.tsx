import { getStatusLabel, STATUS } from "@/utils";

type Props = {
  id: string;
  classes: string;
  children?: React.ReactElement;
  action: (data: { id: string; status: string }) => void;
};
function ActionButton({ id, classes, action }: Props) {
  return (
    <div className={`${classes}`}>
      <select
        onChange={(event: any) => {
          const status = event.target.value;
          action({ id: id, status });
        }}
      >
        <option>Sélectionner</option>
        {STATUS.map((item: string) => (
          <option value={item} key={`${id}-${item}`}>
            {getStatusLabel(item)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ActionButton;
