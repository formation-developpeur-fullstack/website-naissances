import { formatDate } from "@/utils";
import ActionButton from "../shared/ActionButton";
import StatusBadge from "../shared/StatusBadge";
import { Declaration } from "@/types/Declaration";

type Props = {
  declaration: Declaration;
  index: number;
  action: (data: { id: string; status: string }) => void;
};

function DeclarationItem({ declaration: item, index, action }: Props) {
  const getLastStatus = (declaration: any) => {
    const status = declaration.statuses.sort(
      ({ registered }: { registered: Date }) => registered
    )[0];
    const {
      status: { name },
    } = status;
    return name;
  };
  const getDate = (declaration: any) => {
    const status = declaration.statuses.filter((item: any) => {
      const {
        status: { name },
      } = item;
      return name.toUpperCase() === "NEW";
    })[0];
    return status ? status.registered : null;
  };
  return (
    <article
      className={`grid grid-cols-12 border-t border-gray-300 col-span-2 items-center ${
        index % 2 === 0 ? "bg-gray-100" : null
      }`}
    >
      <span className={`p-2`}>{formatDate(getDate(item))}</span>
      <span className={`p-2 col-span-2 flex flex-col`}>
        <span>{item.child.firstName}</span>
        <span className="uppercase">{item.child.lastName}</span>
      </span>
      <span className={`p-2`}>
        {item?.child?.brithDate ? formatDate(item.child.brithDate) : "N/A"}
      </span>
      <span>
        <span>{item.company.name}</span>
      </span>
      <span className={`p-2 col-span-2 flex flex-col`}>
        <span>{item.firstParent.firstName}</span>
        <span className="uppercase">{item.firstParent.lastName}</span>
      </span>
      <span className={`p-2 col-span-2 flex flex-col`}>
        <span>{item.secondParent.firstName}</span>
        <span className="uppercase">{item.secondParent.lastName}</span>
      </span>
      <StatusBadge status={getLastStatus(item)} />
      <ActionButton
        classes="p-2 col-span-2"
        action={action}
        id={`${item.id}`}
      ></ActionButton>
    </article>
  );
}

export default DeclarationItem;
