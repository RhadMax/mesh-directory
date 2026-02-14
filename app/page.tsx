import { getUsers } from "@/lib/api";

export default async function Home() {
  const users = await getUsers();

  return (
    <main style={{ padding: 24 }}>
      <h1>Mesh Directory</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </main>
  );
}
