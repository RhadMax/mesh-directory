import { User } from "@/lib/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers(): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/users`);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export async function getUser(id: number): Promise<User | null> {
  const res = await fetch(`${BASE_URL}/users/${id}`);

  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error("Failed to fetch user");
  }

  const data = (await res.json()) as Partial<User>;

  if (typeof data.id !== "number") return null;

  return data as User;
}