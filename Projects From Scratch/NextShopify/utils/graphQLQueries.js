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
            priceV2 {
              amount 
            }
            sku
            title
            product {
              title
              vendor
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
  buyerIdentity {
    email
    phone
    countryCode
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

export const getCustomerToken = () => {
  return `mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken {
          accessToken
          expiresAt
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
    `
}
export const getCustomerCart = (id) => {
  return `query{
    cart(id: "${id}"){
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
                priceV2 {
                  amount 
                }
                sku
                title
                product {
                  title
                  vendor
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
      buyerIdentity {
        email
        phone
        countryCode
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
      }
  }
  `
}

export const getCustomerOrders = (token) => {
  return `{
    customer(customerAccessToken: "${token}") {
      orders(first: 10) {
        pageInfo{
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            id
            orderNumber
            processedAt
            financialStatus
            fulfillmentStatus
            successfulFulfillments(first: 3){
              trackingInfo{
                number
                url
              }
              trackingCompany
            }
            email
            subtotalPriceV2 {
              amount
            }
            totalShippingPriceV2{
              amount
            }
            totalTaxV2{
              amount
            }
            totalPriceV2 {
              amount
            }
            shippingAddress{
              name
              address1
              address2
              city
              provinceCode
              zip
              countryCodeV2
            }
            
            
            lineItems(first: 15) {
              edges {
                node {
                  originalTotalPrice {
                    amount
                  }
                  quantity
                  variant {
                    id
                    priceV2 {
                      amount
                    }
                    sku
                    title
                    product {
                      title
                      vendor
                      images(first: 1) {
                        edges {
                          node {
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
        }
      }
    }
  }
  `
}

export const updateCartBuyer = () => {
  return `mutation cartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        id
        buyerIdentity {
          email
          phone
          countryCode
        }
      }
    }
  }
  `
}

export const createCustomer = () => {
  return `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        firstName  
        id
        email
      }
    }
  }
  `
}