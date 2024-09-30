import { search } from "@/services";
import { Declaration } from "@/types/Declaration";
import { useEffect, useState } from "react";

function useDeclarations() {
  const [statusOrder, setStatusOrder] = useState(1);
  const [dateOrder, setDateOrder] = useState(1);
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
  const sortByDate = () => {
    const sortedDeclarations = declarations.sort(
      ({ registered: itemOneDate }: Declaration, { registered: itemTwoDate }: Declaration) => {
        const jsDateOne = itemOneDate.split(" ")[0];
        const jsDateTwo = itemTwoDate.split(" ")[0];
        const result = new Date(jsDateOne).getTime() - new Date(jsDateTwo).getTime();
        setDateOrder(dateOrder * -1);
        return result * dateOrder;
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
  return { declarations, sortByStatus, sortByDate };
}

export { useDeclarations };
