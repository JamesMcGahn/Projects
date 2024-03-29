import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQuery';
import { GET_PROJECTS } from '../queries/projectQuery';

function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refetchQueries: [{ query: GET_CLIENTS }],
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      });

      const { projects } = cache.readQuery({
        query: GET_PROJECTS,
      });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });

      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: projects.filter(
            (project) => project.client.id !== deleteClient.id,
          ),
        },
      });
    },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
export default ClientRow;
