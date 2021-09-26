// Shop By Collections
const createTiles = (title, img, handle) => ({ title: title, img: img, handle: handle });

export const tiles = [
    createTiles('Vans', 'https://cdn.shopify.com/s/files/1/0599/2795/3601/collections/a340ce89e0298e52c438ae79591e3284.jpg?v=1631256132', 'vans'),
    createTiles('Adidas', 'https://cdn.shopify.com/s/files/1/0599/2795/3601/collections/97a3b1227876bf099d279fd38290e567.jpg?v=1631256133', 'adidas'),
    createTiles('Nike', 'https://cdn.shopify.com/s/files/1/0599/2795/3601/collections/52e93c3a86b9b62e023e5977ab218302.png?v=1631256134', 'nike'),
    createTiles('Converse', 'https://cdn.shopify.com/s/files/1/0599/2795/3601/collections/1651743658af793833e0a0d9cf6a9c5d.png?v=1631256135', 'converse'),
]

// Main Nav Images
const createNavTiles = (img, alt) => ({ img: img, alt: alt });

export const navTitles = [
    createNavTiles('https://cdn.shopify.com/s/files/1/0599/2795/3601/collections/a340ce89e0298e52c438ae79591e3284.jpg?v=1631256132', 'vans'),
    createNavTiles('https://cdn.shopify.com/s/files/1/0599/2795/3601/collections/97a3b1227876bf099d279fd38290e567.jpg?v=1631256133', 'adidas'),
    createNavTiles('https://cdn.shopify.com/s/files/1/0599/2795/3601/collections/52e93c3a86b9b62e023e5977ab218302.png?v=1631256134', 'nike'),
    createNavTiles('https://cdn.shopify.com/s/files/1/0599/2795/3601/collections/1651743658af793833e0a0d9cf6a9c5d.png?v=1631256135', 'converse'),
]