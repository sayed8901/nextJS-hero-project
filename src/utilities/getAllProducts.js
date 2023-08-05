const getAllProducts = async (categoryID) => {
    let url = "http://localhost:5000/products";
    if (categoryID) {
        url = url + '?categoryID=' + categoryID;
    }
    const res = await fetch(url, {
        cache: "no-cache"
    });
    return res.json();
};

export default getAllProducts;