import { search } from "@/services";
import { Declaration } from "@/types/Declaration";
import { useEffect, useState } from "react";

function useDeclarations() {
  const [statusOrder, setStatusOrder] = useState(1);
  const [declarations, setDeclarations] = useState<Declaration[]>([]);
  const sortByStatus = () => {
    const sortedDeclarations = declarations.sort(
      (itemOne: Declaration, itemTwo: Declaration) => {
        const { status: itemOneStatus } = itemOne;
        const { status: itemTwoStatus } = itemTwo;
        let result = 0;
        if (itemOneStatus > itemTwoStatus) {
          result = 1;
        } else if(itemOneStatus < itemTwoStatus) {
          result = -1;
        }

        setStatusOrder(statusOrder * -1);
        return result * statusOrder;
      }
    );
    setDeclarations([...sortedDeclarations]);
  };
  const getDeclarations = async () => {
    const data = await search("declarations");
    setDeclarations(data);
  };
  useEffect(() => {
    getDeclarations();
  }, []);
  return { declarations, sortByStatus };
}

export { useDeclarations };
