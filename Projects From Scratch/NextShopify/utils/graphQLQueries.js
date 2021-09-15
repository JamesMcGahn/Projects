export const allCategories = () => {
  return `{
        collections(first: 50){
        edges{
          node {
            handle
            title
            image {
              originalSrc
              altText
            }
          }
        }
      } 
}`
}

export const getProductHandles = (amount) => {
  return `{
        products(first: ${amount}){
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
                  id
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

export const getProducts = (amount) => {
  return `
  query {
      products(first: ${amount}){
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
            vendor
            productType
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

const cartFragment = `cart {
  id
  createdAt
  updatedAt
  lines(first:10) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            sku
            title
            product {
              title
              images(first: 1){
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

  }
  attributes {
    key
    value
  }
  estimatedCost {
    totalAmount {
      amount
      currencyCode
    }
    subtotalAmount {
      amount
      currencyCode
    }
    totalTaxAmount {
      amount
      currencyCode
    }
    totalDutyAmount {
      amount
      currencyCode
    }
  }
}`


export const createCart = () => {
  return `
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      ${cartFragment}
    }
  }`
}


export const updateCart = () => {
  return `mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      ${cartFragment}
      userErrors {
        code
        field
        message
      }
    }
  }
  `
}

export const addLineToCart = () => {
  return `mutation cartLinesAdd($lines: [CartLineInput!]!, $cartId: ID!) {
    cartLinesAdd(lines: $lines, cartId: $cartId) {
      ${cartFragment}
      userErrors {
        code
        field
        message
      }
    }
  }
  `
}