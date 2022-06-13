/* Multiple methods in one function */

const crudOperation = async (method, url, data, json) => {
    try {
        const options = {
            method,
            url,
            data,
            header: {
                'content-type': 'text/json; charset=utf-8'
            }
        };

        if (json) {
            options.transformResponse = [(data) => {
                return data;
            }]
        }

        const response = await axios(options);
        return response;
    } catch (error) {
        console.log('error=========>', error);
    }
}

/* ------------------------- Get (user) methods ------------------------- */

crudOperation('GET', 'https://jsonplaceholder.typicode.com/todos/1', null, true)
    .then(result => console.log("Get one user ==============>", result.data))
    .catch(error => console.log('error=========>', error));

/* ------------------------- Get (users) all ----------------------------- */


crudOperation('GET', 'https://jsonplaceholder.typicode.com/todos/')
    .then(result => console.log("Get all users ==============>", result.data))
    .catch(error => console.log('error=========>', error));

/* ------------------------- Post method -------------------------------- */

const sendData = {
    "userId": 100,
    "title": "axios",
    "completed": true
};

crudOperation('POST', 'https://jsonplaceholder.typicode.com/todos/', sendData, true)
    .then(result => console.log("Post users ==============>", result.data))
    .catch(error => console.log('error=========>', error));

/* ---------------------- Update method ----------------------- */
const updateData = {
    "userId": 10,
    "title": "axios",
    "completed": true
};

crudOperation('PUT', 'https://jsonplaceholder.typicode.com/todos/20', updateData, true)
    .then(result => console.log("Update users ==============>", result.data))
    .catch(error => console.log('error=========>', error));


crudOperation('DELETE', 'https://jsonplaceholder.typicode.com/todos/20', null, true)
    .then(result => console.log("Delete user ==============>", result.data))
    .catch(error => console.log('error=========>', error));


