import ActionButton from "@/components/shared/ActionButton";
import PageFilter from "@/components/shared/PageFilter";
import StatusBadge from "@/components/shared/StatusBadge";
import { search } from "@/services";
import { formatDate } from "@/utils";
import { useEffect, useState } from "react";

function Requests() {
  const [requests, setRequests] = useState([]);
  const getRequests = async () => {
    const data = await search("requests");
    setRequests(data);
  };
  useEffect(() => {
    getRequests();
  }, []);
  return (
    <>
      <PageFilter
        btnLabel="Nouvelle demande"
        btnPath="/private/demandes/nouvelle-demande"
        inputPlaceHolder="Rechercher une demande"
      />
      <div>
        {requests.map((item: any, index: number) => (
          <article
            className={`grid grid-cols-12 border-t border-gray-300 col-span-2 items-center ${
              index % 2 === 0 ? "bg-gray-100" : null
            }`}
            key={item.id}
          >
            <span className={`p-2`}>{formatDate(item.date)}</span>
            <span className={`p-2 col-span-2 flex flex-col`}>
              <span>{item.child.firstName}</span>
              <span className="uppercase">{item.child.lastName}</span>
            </span>
            <span className={`p-2`}>
              {item?.child?.brithDate ? formatDate(item.child.brithDate) : null}
              {item?.child?.birthDate ? formatDate(item.child.birthDate) : null}
            </span>
            <span></span>
            <span className={`p-2 col-span-2 flex flex-col`}>
              <span>{item.parent.firstName}</span>
              <span className="uppercase">{item.parent.lastName}</span>
            </span>
            <span className={`p-2 col-span-2 flex flex-col`}>
              <span>{item.parent.email}</span>
              <span className="uppercase">{item.parent.phone}</span>
            </span>
            <StatusBadge status={item.status || "NEW"} />
            <ActionButton
              classes="p-2 col-span-2"
              action={() => null}
              id={`${item.id}`}
            ></ActionButton>
          </article>
        ))}
      </div>
    </>
  );
}

export default Requests;
