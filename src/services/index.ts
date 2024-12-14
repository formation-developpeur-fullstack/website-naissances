import axios from "axios";

type Params = {
    path: string,
    token?: string
}
const search = async ({path, token}: Params) => {
    const response = await axios.get(
            `/api/${path}`, 
            {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
    const {data} = response;
    return data;
}


const create =  async ({url, token,  body}: any) => {
    return await axios({
        method: 'POST',
        url:  `/api/${url}`,
        data: 
        body,
        headers: {
            'accept': 'application/json', 
            'content-type': 'application/json', 
            ...(token ? ({ 'Authorization': `Bearer ${token}`}): null)

        },
    })
}

const partialUpdate =  async ({path, token,  body}: any) => {
    return await axios({
        method: 'PATCH',
        url:  `/api/${path}`,
        data: 
        body,
        headers: {
            'accept': 'application/json', 
            'content-type': 'application/json', 
            ...(token ? ({ 'Authorization': `Bearer ${token}`}): null)

        },
    })
}
export {search, create, partialUpdate};