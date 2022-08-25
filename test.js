// cart.js
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.open('GET', 'https://hardik-dholariya.myshopify.com/cart.js');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

// add.js
var xhr = new XMLHttpRequest();
xhr.open('POST', 'cart/add.js');
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const output = JSON.parse(xhr.responseText);
    console.log(output);
  } else {
    console.log('An error occurred, not able to process the request.');
  }
};
xhr.onerror = () => {
  console.log('An error occurred, not able to process the request.');
};
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(
  JSON.stringify({
    id: 40826946322564,
    quantity: 2,
    properties: {},
  })
);

// update.js
var xhr = new XMLHttpRequest();
xhr.open('POST', 'cart/update.js');
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const output = JSON.parse(xhr.responseText);
    console.log(output);
  } else {
    console.log('An error occurred, not able to process the request.');
  }
};
xhr.onerror = () => {
  console.log('An error occurred, not able to process the request.');
};
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(
  JSON.stringify({
    id: 40826946388100,
    attributes: { 'Order Type': 'Store Pickup' },
  })
);

// change
var xhr = new XMLHttpRequest();
xhr.open('POST', 'cart/update.js');
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const output = JSON.parse(xhr.responseText);
    console.log(output);
  } else {
    console.log('An error occurred, not able to process the request.');
  }
};
xhr.onerror = () => {
  console.log('An error occurred, not able to process the request.');
};
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(
  JSON.stringify({
    id: 40826946388100,
    quantity: 10,
  })
);

// change.js
var xhr = new XMLHttpRequest();
xhr.open('POST', 'cart/change.js');
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const output = JSON.parse(xhr.responseText);
    console.log(output);
  } else {
    console.log('An error occurred, not able to process the request.');
  }
};
xhr.onerror = () => {
  console.log('An error occurred, not able to process the request.');
};
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(
  JSON.stringify({
    line: 1,
    quantity: 5,
  })
);

// clear.js

var xhr = new XMLHttpRequest();
xhr.open('POST', 'cart/clear.js');
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const output = JSON.parse(xhr.responseText);
    console.log(output);
  } else {
    console.log('An error occurred, not able to process the request.');
  }
};
xhr.onerror = () => {
  console.log('An error occurred, not able to process the request.');
};
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

// get
fetch('cart.js')
  .then((response) => {
    return response.json();
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// add
fetch('cart/add.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 40826946322564,
    quantity: 2,
    properties: {},
  }),
})
  .then((response) => response.json())
  .catch((error) => error);

// update.js
fetch('cart/update.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 40826946322564,
    attributes: { 'Order Type': 'Store Pickup' },
  }),
})
  .then((response) => response.json())
  .catch((error) => error);

// change.js

fetch('cart/change.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    line: 1,
    quantity: 3,
  }),
})
  .then((response) => response.json())
  .catch((error) => error);

// clear.js

fetch('cart/clear');
