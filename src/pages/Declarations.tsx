import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import { useDeclarations } from "@/hooks";
import { Link } from "react-router-dom";

function Declarations() {
  const {
    filterRef,
    filteredDeclarations,
    declarations,
    updateStatus,
    sortByDate,
    sortByStatus,
    filterDeclarations,
  } = useDeclarations();
  return (
    <>
      <div className="bg-white shadow-md rounded-md">
        <DeclarationsItems
          declarations={
            filteredDeclarations && filteredDeclarations.length
              ? filteredDeclarations
              : declarations
          }
          updateStatus={updateStatus}
          sortByStatus={sortByStatus}
          sortByDate={sortByDate}
        />
      </div>
    </>
  );
}

export default Declarations;
