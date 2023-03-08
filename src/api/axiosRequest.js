import axios from 'axios'


export async function AxiosRequest(url, method, headers, params) {
    return params ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000
    }) : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 1000
    })
}



const GetApiDetails = () => {
    const headers = {
        'content-Type': 'application/json',
    }
    return AxiosRequest('http://localhost:3004/UsersData', 'GET', headers, {})
};

const PostApiDetails = (data) => {
    const headers = {
        'content-Type': 'application/json',
    }
    return AxiosRequest('http://localhost:3004/UsersData', 'POST', headers, data)
};

const GetDetailsById = (id) => {
    const headers = {
        'content-Type': 'application/json',
    }
    return AxiosRequest('http://localhost:3004/UsersData/' + id, 'GET', headers, {})
};

const UpdateApiDetails = (data, id) => {
    const headers = {
        'content-Type': 'application/json',
    }
    return AxiosRequest('http://localhost:3004/UsersData/' + id, 'PUT', headers, data)
};

const DeleteApiDetails = (id) => {
    const headers = {
        'content-Type': 'application/json',
    }
    return AxiosRequest('http://localhost:3004/UsersData/' + id, 'DELETE', headers, {})
};



export { GetApiDetails, PostApiDetails, GetDetailsById, UpdateApiDetails, DeleteApiDetails };