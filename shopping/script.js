let PRODUCT_TARGET = document.getElementById('Product');
let ADD_BUNDLE_BTN = document.getElementById('add_Bundle');
let BUY_PRODUCTS = document.getElementById('Buy_Product_List');

/*  read file */
const fetchData = async (url) => {
    let data = '';
    try {
        const response = await fetch(url);
        // .then(response => console.log(response))
        if (response.ok) {
            data = await response.text();
        }
        return data;
    } catch (e) {
        console.log("error => ", e);
    }

}

/* const fetchData = (url) => {
    return (
        fetch(url)
            .then(response => response.text())
    )
} */


const fetchJson = fetchData('product.json');
/* replace function */
const replaceStr = (str, find, replace) => {
    let findLen = find.length;
    for (let i = 0; i < findLen; i++) {
        str = str.replace(RegExp(find[i], 'g'), replace[i]);
    }
    return str;
}

/* set Product */
fetchJson.then(resultJson => {
    if (resultJson) {
        fetchData('product.html')
            .then(productHtml => {
                let jsonP = JSON.parse(resultJson);
                let htmlProductText = '';
                let find = ['%ID%', '%IMG%', '%PRODUCT%', '%PRICE%'];
                for (let i in jsonP) {
                    let replace = [jsonP[i].id, jsonP[i].src, jsonP[i].product, jsonP[i].price];
                    htmlProductText += replaceStr(productHtml, find, replace);
                }
                PRODUCT_TARGET ? PRODUCT_TARGET.innerHTML = htmlProductText : 0;
                ADD_BUNDLE_BTN.style.display = 'block';
            })
    } else {
        console.log("Not Found");
    }
})
    .catch(error => console.log("error => ", error));


/* onclick Buy button function */

const addProduct = [];

const buyProduct = (productId) => {
    addProduct.push(productId);
    fetchJson.then(resultJson => {
        if (resultJson) {
            fetchData('buyProduct.html')
                .then(buyProductList => {
                    let jsonProducts = JSON.parse(resultJson);
                    let find = ['%IMG%', '%PRODUCT%', '%PRICE%'];
                    let htmlBuyProductsText = '';
                    for (let c in jsonProducts) {
                        for (let r of addProduct) {
                            if (jsonProducts[c].id == r) {
                                let replace = [jsonProducts[c].src, jsonProducts[c].product, jsonProducts[c].price];
                                htmlBuyProductsText += replaceStr(buyProductList, find, replace);
                            }
                        }
                    }
                    BUY_PRODUCTS.innerHTML = htmlBuyProductsText;
                });
        } else {
            console.log("Not Found");
        }
    })
        .catch(error => console.log("error => ", error));
}



/* Buy all product */
const addBundle = () => {
    fetchJson.then(resultJson => {
        if (resultJson) {
            fetchData('buyProduct.html')
                .then(buyProducts => {
                    let jsonProducts = JSON.parse(resultJson);
                    let find = ['%IMG%', '%PRODUCT%', '%PRICE%'];
                    let htmlBuyProductsText = '';
                    for (let c in jsonProducts) {
                        addProduct.push(`${jsonProducts[c].id}`);
                        for (let r of addProduct) {
                            if (jsonProducts[c].id == r) {
                                let replace = [jsonProducts[c].src, jsonProducts[c].product, jsonProducts[c].price];
                                htmlBuyProductsText += replaceStr(buyProducts, find, replace);
                            }
                        }
                    }
                    BUY_PRODUCTS.innerHTML = htmlBuyProductsText;
                })
        } else {
            console.log("Not Found");
        }
    })
        .catch(error => console.log("error => ", error))
}