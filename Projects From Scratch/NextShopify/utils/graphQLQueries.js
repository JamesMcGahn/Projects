export const allCategories = () => {
    return `{
        collections(first: 50){
        edges{
          node {
            handle
            title
          }
        }
      } 
}`
}

export const firstHundredProductHandles = () => {
    return `{
        products(first: 100){
          edges {
            node{
              handle         
            }
          }
      }
    }
    `
}

export const productByHandle = (handle) => {
    return `{
        productByHandle(handle: "${handle}") {
            title
            description
            productType
            vendor
            variants(first: 12) {
              edges {
                node {
                  availableForSale
                  title
                  priceV2{
                    amount
                  }
                  sku
                }
              }
            }
            priceRange{
              maxVariantPrice{
                amount
              }
              minVariantPrice{
                amount
              }
            }
            images(first: 4) {
              edges {
                node {
                  altText
                  originalSrc
                }
              }
            }
            seo{
              description
              title
            }
          }
        }
      `
}






export const collectionByHandle = (handle) => {
    return `
    query {
      collectionByHandle(handle: "${handle}") {
          title
        products(first: 20){
            pageInfo{
                hasNextPage
                hasPreviousPage
              }
          edges {
            cursor
            node{
              id
              title
              handle
              productType
              vendor
                    priceRange {
                minVariantPrice{
                  amount
                }
                maxVariantPrice{
                  amount
                }
              }
              images(first: 2){
                edges{
                  node{
                    originalSrc
                  }
                }
              }
            }
          }
        }
      }
    }
    `
}