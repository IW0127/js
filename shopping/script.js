let PRODUCT_TARGET = document.getElementById('Product');
let ADD_BUNDLE_BTN = document.getElementById('add_Bundle');
let BUY_PRODUCTS = document.getElementById('Buy_Product_List');

/*  read file */
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        let data;
        if (response.ok) {
            data = await response.text();
        }
        return data;
    } catch (e) {
        console.log(e)
    }

}

const fetchJson = fetchData('product.json');

/* replace function */
const replaceStr = (str, find, replace) => {
    for (var i = 0; i < find.length; i++) {
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
            })
            .then(() => {
                ADD_BUNDLE_BTN.style.display = 'block';
            });
    } else {
        console.log("Not Found");
    }
})
    .catch(error => console.log("error => ", error));


/* onclick Buy button function */

const addProduct = new Set();

const buyProduct = (productId) => {
    addProduct.add(productId);
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
                })
        } else {
            console.log("Not Found");
        }
    })
        .catch(error => console.log("error => ", error))
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
                        addProduct.add(`${jsonProducts[c].id}`);
                        let replace = [jsonProducts[c].src, jsonProducts[c].product, jsonProducts[c].price];
                        htmlBuyProductsText += replaceStr(buyProducts, find, replace);
                    }
                    BUY_PRODUCTS.innerHTML = htmlBuyProductsText;
                })
        } else {
            console.log("Not Found");
        }
    })
        .catch(error => console.log("error => ", error))
}