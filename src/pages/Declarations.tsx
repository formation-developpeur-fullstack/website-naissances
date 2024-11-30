import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import Debug from "@/components/shared/Debug";
import { useDeclarations } from "@/hooks";

function Declarations() {
  const {
    filteredDeclarations,
    declarations,
    updateStatus,
    sortByDate,
    sortByStatus,
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
      <Debug data={declarations} />
    </>
  );
}

export default Declarations;
