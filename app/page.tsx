import UserCard from "@/components/UserCard";
import { getUsers } from "@/lib/api";

export default async function Home() {
  const users = await getUsers();

  return (
    <main style={{ padding: 24 }}>
      <h1>Mesh Directory</h1>

      <div style={{ display: "grid", gap: 12 }}>
  {users.map((user) => (
    <UserCard key={user.id} user={user} />
  ))}
      </div>

    </main>
  );
}
