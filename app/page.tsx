//import UserCard from "@/components/UserCard";
import { getUsers } from "@/lib/api";
import UserList from "@/components/UserList";

export default async function Home() {
  const users = await getUsers();

  return (
    <main style={{ padding: 24 }}>
      <h1>Mesh Directory</h1>
      <UserList initialUsers={users} />
    </main>
  );
}
