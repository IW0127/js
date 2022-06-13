/* simple method */
/* Get method */

axios.get('https://reqres.in/api/users')
    .then(response => {
        const users = response.data.data;
        console.log(`GET users`, users);
    })
    .catch(error => console.error(error));

/* Post method */

const user = `{"avatar": "https://reqres.in/img/faces/1-image.jpg","email": "george.bluth@reqres.in","first_name": "George","id": 1000,"last_name": "Bluth"}`;

axios.post('https://reqres.in/api/users', user)
    .then(response => {
        const addedUser = response.data;
        console.log(`POST: user is added`, addedUser);
    })
    .catch(error => console.error(error));


/* Delete Data */
axios.delete(`https://reqres.in/api/users/3`)
    .then(response => {
        console.log(`DELETE: user is removed 3`);
        console.log(response);
    })
    .catch(error => console.error(error));


/* Get method */
const getUsers = () => {
    axios.get('https://reqres.in/api/users')
        .then(response => {
            const users = response.data.data;
            console.log(`GET users`, users);
        })
        .catch(error => console.error(error));
};
getUsers();

const createUser = (user) => {
    axios.post('https://reqres.in/api/users', user)
        .then(response => {
            const addedUser = response.data;
            console.log(`POST: user is added`, addedUser);
            // append to DOM
            appendToDOM([addedUser]);
        })
        .catch(error => console.error(error));
};

// createUser(user);

const deleteUser = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`)
        .then(response => {
            console.log(`DELETE: user is removed`, id);
            console.log(response);
        })
        .catch(error => console.error(error));
};

deleteUser(2);

/* 
const options = {
    method: 'post',
    url: 'https://reqres.in/api/users',
    data: {
        firstName: 'Finn',
        lastName: 'Williams'
    },
    transformResponse: [(data) => {
        // transform the response
        console.log(data)
        return data;
    }]
};

// send the request
axios(options).then(res => console.log(res.data)); */