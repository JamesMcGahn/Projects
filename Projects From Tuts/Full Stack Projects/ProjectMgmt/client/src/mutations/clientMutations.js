import { gql } from '@apollo/client';

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $phone: String!, $email: String!) {
    addClient(name: $name, phone: $phone, email: $email) {
      id
      name
      email
      phone
    }
  }
`;

export { DELETE_CLIENT, ADD_CLIENT };
