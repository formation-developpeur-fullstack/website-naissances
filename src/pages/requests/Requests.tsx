import ActionButton from "@/components/shared/ActionButton";
import PageFilter from "@/components/shared/PageFilter";
import StatusBadge from "@/components/shared/StatusBadge";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import { search } from "@/services";
import { formatDate } from "@/utils";
import { useContext, useEffect } from "react";

function Requests() {
  const {
    state,
    updateTitle,
    setRequests,
    updateRequestStatus,
    filterRequests,
  } = useContext(GlobalApplicationContext);

  const { requests = [], requestFilter = "" } = state;
  const getRequests = async () => {
    if (!requests || !requests.length) {
      const data = await search({path: "requests"});
      setRequests({ requests: data });
    }
    updateTitle({ title: "Demandes" });
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
        action={filterRequests}
      />
      {requests && requests.length ? (
        <div>
          {requests
            .filter((item: any) => {
              if (requestFilter && requestFilter.length) {
                const {
                  parent: { lastName, email },
                  child: { lastName: childLastName },
                } = item;
                return (
                  lastName
                    .toLowerCase()
                    .includes(requestFilter.toLowerCase()) ||
                  email.toLowerCase().includes(requestFilter.toLowerCase()) ||
                  childLastName
                    .toLowerCase()
                    .includes(requestFilter.toLowerCase())
                );
              } else {
                return item;
              }
            })
            .map((item: any, index: number) => (
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
                  {item?.child?.brithDate
                    ? formatDate(item.child.brithDate)
                    : null}
                  {item?.child?.birthDate
                    ? formatDate(item.child.birthDate)
                    : null}
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
                  action={updateRequestStatus}
                  id={`${item.id}`}
                ></ActionButton>
              </article>
            ))}
        </div>
      ) : null}
    </>
  );
}

export default Requests;
