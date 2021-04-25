/** @format */
// const data = fetch("https://fakestoreapi.com/products")
// .then(res=>res.json())
// .then(json=>console.log(json))
var get = function (data) {
    setTimeout(function () {
        console.log(data);
        if (data)
            return data;
        else
            return console.error("please add some value");
    }, 1000);
};
var allData = get({ id: 3, name: "morsalin" });
console.log(allData);
