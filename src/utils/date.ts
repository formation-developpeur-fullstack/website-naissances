const monthsOfYear = ["Jan.", "Fev.", "Mar.", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sep.", "Oct.", "Nov.", "Dec."]
const formatDay = (day: number) => {
    return `0${day}`.slice(-2)
}
const formatDate= (value: string) => {
    if (value) {
        const date = new Date(value.split(" ")[0]);
        return `${formatDay(date.getDate())} ${monthsOfYear[date.getMonth()]} ${date.getFullYear()}`
    } 
    return value
}

export {formatDate};