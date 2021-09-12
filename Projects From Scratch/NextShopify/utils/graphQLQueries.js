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