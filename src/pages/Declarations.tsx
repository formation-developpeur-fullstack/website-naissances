import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import { useDeclarations } from "@/hooks";
import { Link } from "react-router-dom";

function Declarations() {
  const {
    filteredDeclarations,
    filterRef,
    declarations,
    updateStatus,
    sortByDate,
    sortByStatus,
    filterDeclarations,
  } = useDeclarations();
  return (
    <>
      <div className="bg-white shadow-md rounded-md mb-3 flex justify-between items-center py-3 px-3">
        <input
          type="text"
          name=""
          id="rechercher"
          placeholder="Rechercher par nom"
          className="bg-gray-200 px-3 py-2 rounded-md !w-96"
          ref={filterRef}
          onKeyUp={filterDeclarations}
        />
        <Link
          to={"/private/declarations/new"}
          className="bg-green-600 rounded-md text-white px-3 py-2"
        >
          Nouvelle déclaration
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-md">
        <DeclarationsItems
          declarations={
            filteredDeclarations.length ? filteredDeclarations : declarations
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
