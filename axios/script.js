/* simple methods */
/* ------------------------- Get methods ------------------------- */
/* ------------------------- Get all ----------------------------- */
axios.get('https://reqres.in/api/users/')
    .then(response => {
        const users = response.data.data;
        console.log(`GET users`, users);
    })
    .catch(error => console.error(error));
/* ------------------------- Get one ---------------------------- */
axios.get('https://reqres.in/api/users/2')
    .then(response => {
        const users = response.data.data;
        console.log(`GET users`, users);
    })
    .catch(error => console.error(error));


/* ------------------------- Post method ----------------------- */

const user = `{"avatar": "https://reqres.in/img/faces/1-image.jpg","email": "george.bluth@reqres.in","first_name": "George","id": 1000,"last_name": "Bluth"}`;

axios.post('https://reqres.in/api/users', user)
    .then(response => {
        const addedUser = response.data;
        console.log(`POST: user is added`, addedUser);
    })
    .catch(error => console.error(error));

/* ---------------------- Update method ----------------------- */

const userUpdate = { "avatar": "https://reqres.in/img/faces/1-image.jpg", "email": "george.bluth@reqres.in", "first_name": "George", "id": 2, "last_name": "Bluth" };

axios.put('https://reqres.in/api/users/2', userUpdate)
    .then(response => {
        const UpdateUser = response.data;
        console.log(`put: user is Update`, UpdateUser);
    })
    .catch(error => console.error(error));


/* ----------------------- Delete Data ----------------------- */

axios.delete(`https://reqres.in/api/users/3`)
    .then(response => {
        console.log(`DELETE: user is removed 3`);
        console.log(response);
    })
    .catch(error => console.error(error));


/* Options method */

const options = {
    method: 'get',
    url: 'https://reqres.in/api/users',
    /* transformResponse: [(data) => {
        // transform the response
        console.log(data.data)
        return data;
    }] */
};

// send the request
axios(options).then(res => console.log("options :-", res.data.data));