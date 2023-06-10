import { gql } from '@apollo/client';

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      client {
        id
      }
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation updateProject(
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
    $id: ID!
  ) {
    updateProject(
      name: $name
      description: $description
      status: $status
      id: $id
    ) {
      id
      name
      description
      status
      client {
        id
        name
        phone
        email
      }
    }
  }
`;

const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        id
        name
        phone
        email
      }
    }
  }
`;

export { DELETE_PROJECT, ADD_PROJECT, UPDATE_PROJECT };
