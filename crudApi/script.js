/* 

const XHR = (method, url, data) => {
    const promise = new Promise((resole, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                const output = JSON.parse(xhr.responseText);
                resole(output);
            } else {
                reject('An error occurred, not able to process the request.');
            }
        };
        xhr.onerror = () => {
            reject('An error occurred, not able to process the request.');
        };
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(data);
    });
    return promise;
}
const GetData = () => {
    XHR('GET', 'https://jsonplaceholder.typicode.com/post').then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });
}
const PostData = () => {
    let data = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    });
    XHR('POST', 'https://jsonplaceholder.typicode.com/posts', data).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });
}
const PutData = () => {
    let data = JSON.stringify(
        {
            id: 1,
            title: 'foo',
            body: 'kd',
            userId: 1
        }
    );
    XHR('PUT', 'https://jsonplaceholder.typicode.com/posts/1', data).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });
}
const DeleteData = () => {
    XHR('DELETE', 'https://jsonplaceholder.typicode.com/posts/101');
}

console.log('-----get data------');
GetData();

console.log('------post data-------');
PostData();

console.log('------update data-----');
PutData();

console.log('-------delete data-------');
DeleteData();
 */


/* 
// get data

fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(Response => Response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error)); */


/* fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',
    body: data,
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(Response => Response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error)); */


const fetchData = (method, url, data) => {
    fetch(url, {
        method,
        body: data,
        headers: {
            "Content-type": "application/json; charset=UTF-9"
        }
    })
        .then(Response => Response.json())
        .then(result => console.log(result))
        .catch(error => console.log("THIS IS ERROR => ", error));

}


const fetchGet = () => {
    fetchData('GET', 'https://jsonplaceholder.typicode.com/todos/');
}

const fetchPost = () => {

    let data = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    });
    fetchData('POST', 'https://jsonplaceholder.typicode.com/posts/', data);
}
const fetchPut = () => {
    let data = JSON.stringify({
        id: 1,
        title: 'fetch',
        body: 'Put data',
        userId: 1
    });
    fetchData('PUT', 'https://jsonplaceholder.typicode.com/posts/1', data);
}
const fetchDelete = () => {
    fetchData('DELETE', 'https://jsonplaceholder.typicode.com/posts/101');
}

fetchGet();

fetchPut();