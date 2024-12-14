const getStatusColor = (status: string) => {
    switch (status) {
        case "NEW":
            return "bg-blue-100 text-blue-600 text-center";
        case "ON_GOING":
            return "bg-amber-100 text-amber-600 text-center";
        case "VALIDATED":
            return "bg-green-100 text-green-600 text-center";
        case "REJECTED":
            return "bg-red-100 text-red-600 text-center";
        default:
            return "";
    }
}

const getStatusLabel = (status: string) => {
    switch (status) {
        case "NEW":
            return "Nouveau";
        case "ON_GOING":
            return "En cours";
        case "VALIDATED":
            return "Validé";
        case "REJECTED":
            return "Rejeté";
        case "DELETE":
            return "Supprimer";
        default:
            return "";
    }
}

const STATUS = {
    "AGENT": ["NEW", "ON_GOING", "VALIDATED", "REJECTED"],
    "PUBLIC": ["NEW", "DELETE"],
    "ADMINISTRATOR": ["NEW", "DELETE"],

};
export {STATUS, getStatusColor, getStatusLabel}