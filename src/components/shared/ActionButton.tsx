import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import { getStatusLabel, STATUS } from "@/utils";
import { useContext } from "react";

type Props = {
  id: string;
  classes: string;
  children?: React.ReactElement;
  action: (data: { id: string; status: string }) => void;
};
function ActionButton({ id, classes, action }: Props) {
  const {
    state: { user: { role = "" } = {} },
  } = useContext(GlobalApplicationContext);
  return (
    <div className={`${classes}`}>
      <select
        onChange={(event: any) => {
          const status = event.target.value;
          action({ id: id, status });
        }}
      >
        <option>Sélectionner</option>
        {STATUS[role as "PUBLIC" | "AGENT" | "ADMINISTRATOR"].map(
          (item: string) => (
            <option value={item} key={`${id}-${item}`}>
              {getStatusLabel(item)}
            </option>
          )
        )}
      </select>
    </div>
  );
}

export default ActionButton;
