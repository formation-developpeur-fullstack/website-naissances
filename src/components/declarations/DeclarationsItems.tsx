import { Declaration } from "@/types/Declaration";
import DeclarationItem from "./DeclarationItem";

import { BiSort } from "react-icons/bi";
type Props = {
  declarations: Declaration[];
  sortByStatus: () => void;
  sortByDate: () => void;
  updateStatus: (props: any) => void;
};
function DeclarationsItems(props: Props) {
  const { declarations, sortByStatus, sortByDate, updateStatus } = props;
  return (
    <>
      <article className="grid grid-cols-12 items-center">
        <button
          type="button"
          onClick={sortByDate}
          className={`p-2 flex justify-between items-center`}
        >
          Date
          <BiSort />
        </button>
        <span className={`p-2 col-span-2`}>Enfant</span>
        <span className={`p-2`}>Date de Nais.</span>
        <span className={`p-2`}>Hopital</span>
        <span className={`p-2 col-span-2`}>Parent 1</span>
        <span className={`p-2 col-span-2`}>Parent 2</span>
        <button
          type="button"
          onClick={() => sortByStatus()}
          className={`p-2 text-center flex justify-between items-center`}
        >
          Statut
          <BiSort />
        </button>
        <span className={`p-2 col-span-2 text-center`}>ACTIONS</span>
      </article>
      {declarations && declarations.length ? (
        <>
          {declarations.map((item: Declaration, index: number) => (
            <DeclarationItem
              action={updateStatus}
              declaration={item}
              index={index}
              key={`${item.id}-${index}`}
            />
          ))}
        </>
      ) : null}
    </>
  );
}

export default DeclarationsItems;
