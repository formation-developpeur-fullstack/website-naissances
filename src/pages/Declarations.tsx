import { useEffect, useState } from "react";
import { formatDate, getStatusColor, getStatusLabel } from "../utils";
import { Declaration } from "../types/Declaration";

function Declarations() {
  const [declarations, setDeclarations] = useState<Declaration[]>([]);
  const search = async () => {
    const response = await fetch("http://localhost:8080/declarations");
    const data = await response.json();
    setDeclarations(data);
  };
  useEffect(() => {
    search();
  }, []);
  return (
    <div className="bg-white shadow-md rounded-md">
      <article className="grid grid-cols-12 items-center">
        <span className={`p-2`}>Date</span>
        <span className={`p-2 col-span-2`}>Enfant</span>
        <span className={`p-2`}>Date de Nais.</span>
        <span className={`p-2`}>Hopital</span>
        <span className={`p-2 col-span-2`}>Parent 1</span>
        <span className={`p-2 col-span-2`}>Parent 2</span>
        <span className={`p-2 text-center`}>Statut</span>
        <span className={`p-2 col-span-2`}>ACTIONS</span>
      </article>
      {declarations.map((item: Declaration, index: number) => (
        <article
          key={item.id}
          className={`grid grid-cols-12 border-t border-gray-300 col-span-2 items-center ${
            index % 2 === 0 ? "bg-gray-100" : null
          }`}
        >
          <span className={`p-2`}>{formatDate(item.registered)}</span>
          <span className={`p-2 col-span-2 flex flex-col`}>
            <span>{item.child.firstName}</span>
            <span className="uppercase">{item.child.lastName}</span>
          </span>
          <span className={`p-2`}>
            {item?.child?.brithDate ? formatDate(item.child.brithDate) : null}
          </span>
          <span>
            <span>{item.company.name}</span>
          </span>
          <span className={`p-2 col-span-2 flex flex-col`}>
            <span>{item.firstParent.firstName}</span>
            <span className="uppercase">{item.firstParent.lastName}</span>
          </span>
          <span className={`p-2 col-span-2 flex flex-col`}>
            <span>{item.seconParent.firstName}</span>
            <span className="uppercase">{item.seconParent.lastName}</span>
          </span>
          <span className={`p-2 text-center ${getStatusColor(item.status)}`}>
            {getStatusLabel(item.status)}
          </span>
          <span className={`p-2 col-span-2 flex flex-col`}>ACTIONS</span>
        </article>
      ))}
    </div>
  );
}

export default Declarations;
