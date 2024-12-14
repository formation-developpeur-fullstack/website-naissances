import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import PageFilter from "@/components/shared/PageFilter";
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
      <PageFilter
        btnLabel="Nouvelle déclaration"
        btnPath="/private/declarations/nouvelle-declaration"
        inputPlaceHolder="Rechercher une declaration"
        action={() => null}
      />
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
