import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import { useDeclarations } from "@/hooks";

function Declarations() {
  const { declarations, sortByDate, sortByStatus } = useDeclarations();
  return (
    <div className="bg-white shadow-md rounded-md">
      <DeclarationsItems
        declarations={declarations}
        sortByStatus={sortByStatus}
        sortByDate={sortByDate}
      />
    </div>
  );
}

export default Declarations;
