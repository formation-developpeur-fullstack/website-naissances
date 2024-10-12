import PageFilter from "@/components/shared/PageFilter";

function Requests() {
  return (
    <>
      <PageFilter
        btnLabel="Nouvelle demande"
        btnPath="/private/demandes/nouvelle-demande"
        inputPlaceHolder="Rechercher une demande"
      />
    </>
  );
}

export default Requests;
