const host = "http://localhost:8080"
const search = async (url: string) => {
    const response = await fetch(
            `${host}/${url}`, 
            {
                headers: {'accept': 'application/json'}
            }
        );
    const data = await response.json();
    return data;
}

export {search};