export const getProducts = async () => {
    const response  = await fetch("http://localhost:3001/product-list");
    const products = await response.json();
    console.log(products);
    return products;
}