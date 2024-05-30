import { delete_users, change_users } from "@prisma/client";

function Table({ data }: { data: delete_users[] } | { data: change_users[] }) {
  return (
    <table >
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="uppercase">{key}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {Object.values(row).map((value) => (
              <td>{value?.toLocaleString()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
