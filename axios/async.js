/* Async/Await methods */
/* ------------------------- Get methods ------------------------- */
/* ------------------------- Get all ----------------------------- */

const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log("error===========>", error);
    }
}

fetchData('https://reqres.in/api/users/')
    .then(response => console.log("Get data =======>", response.data.data))
    .catch(error => console.log("error===========>", error));


/* ------------------------- Get one data ----------------------------- */


const fetchOneData = async (url) => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log("error===========>", error);
    }
};

fetchOneData('https://reqres.in/api/users/2').then(response => {
    console.log("Get one user data =======>", response.data.data);
}).catch(error => console.log("error===========>", error));


/* ------------------------- Post data ----------------------------- */

const postData = async (url, data) => {
    try {
        const headers = {
            'content-type': 'text/json; charset=utf-8'
        };
        const response = await axios.post(url, data, headers);
        return response;
    } catch (error) {
        console.log("error===========>", error);
    }
};

const user = {
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "george.bluth@reqres.in",
    first_name: "Hardik",
    last_name: "Dholariya"
}
postData('https://reqres.in/api/users/', user)
    .then(result => console.log("Post data ============>", result.data))
    .catch(error => console.log("error===========>", error));


/* ---------------------- Update method ----------------------- */

const putData = async (id, updateData) => {
    try {
        const response = await axios.put(`https://reqres.in/api/users/${id}`, updateData);
        return response;
    } catch (error) {
        console.log("error===========>", error);
    }
}

const updateUser = {
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "george.bluth@reqres.in",
    first_name: "jon",
    last_name: "val"
};

putData(199, updateUser)
    .then(response => console.log("Update Data ==========> ", response.data))
    .catch(error => console.log("error===========>", error));

/* ---------------------- Delete method ----------------------- */

const deleteData = async (id) => {
    try {
        const response = await axios.put(`https://reqres.in/api/users/${id}`);
        return response;
    } catch (error) {
        console.log("error===========>", error);
    }
}

deleteData(52)
    .then(response => console.log("Delete User Data ==========> ", response.data))
    .catch(error => console.log("error===========>", error));
