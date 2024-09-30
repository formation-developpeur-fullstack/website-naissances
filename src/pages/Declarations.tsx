import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import { useDeclarations } from "@/hooks";

function Declarations() {
  const { declarations, sortByStatus } = useDeclarations();
  return (
    <div className="bg-white shadow-md rounded-md">
      <DeclarationsItems
        declarations={declarations}
        sortByStatus={sortByStatus}
      />
    </div>
  );
}

export default Declarations;
