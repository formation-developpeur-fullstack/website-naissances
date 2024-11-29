type Params = {
    path: string,
    token?: string
}
const search = async ({path, token}: Params) => {
    const response = await fetch(
            `/api/${path}`, 
            {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
    const data = await response.json();
    return data;
}


const create =  async (url: string, body: any) => {
    const response = await fetch(
        `/api/${url}`,
        {
            headers: {'accept': 'application/json', 'content-type': 'application/json'},
            body: JSON.stringify(body),
            method: 'POST'
        }
    )
    return response;
}
export {search, create};