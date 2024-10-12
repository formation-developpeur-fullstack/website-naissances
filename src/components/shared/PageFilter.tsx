import { useRef } from "react";
import { Link } from "react-router-dom";
type Props = {
  btnLabel: string;
  btnPath: string;
  inputPlaceHolder: string;
  action?: (value: any) => void;
};
function PageFilter({
  btnLabel,
  btnPath,
  inputPlaceHolder,
  action: uneaction = () => null,
}: Props) {
  const filterRef = useRef<any>();
  const handlechange = () => {
    const value = filterRef.current.value;

    uneaction(value);
  };
  return (
    <div className="bg-white shadow-md rounded-md mb-3 flex justify-between items-center py-3 px-3">
      <input
        type="text"
        name=""
        id="rechercher"
        placeholder={inputPlaceHolder}
        className="bg-gray-200 px-3 py-2 rounded-md !w-96"
        ref={filterRef}
        onKeyUp={handlechange}
      />
      <Link
        to={btnPath}
        className="bg-green-600 rounded-md text-white px-3 py-2"
      >
        {btnLabel}
      </Link>
    </div>
  );
}

export default PageFilter;
