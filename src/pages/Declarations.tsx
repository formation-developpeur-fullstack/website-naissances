import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import { useDeclarations } from "@/hooks";

function Declarations() {
  const { declarations } = useDeclarations();
  return (
    <div className="bg-white shadow-md rounded-md">
      <DeclarationsItems declarations={declarations} />
    </div>
  );
}

export default Declarations;
