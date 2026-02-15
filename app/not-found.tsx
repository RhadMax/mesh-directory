import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Not found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link href="/">Back to directory</Link>
    </main>
  );
}
