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


const create =  async (url: string, body: any) => {
    const response = await fetch(
        `${host}/${url}`,
        {
            headers: {'accept': 'application/json', 'content-type': 'application/json'},
            body: JSON.stringify(body),
            method: 'POST'
        }
    )
    return response;
}
export {search, create};