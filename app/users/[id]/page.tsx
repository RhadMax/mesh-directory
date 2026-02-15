import Link from "next/link";
import { getUser } from "@/lib/api";
import { notFound } from "next/navigation";
import styles from "./UserDetail.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function UserDetailPage({ params }: Props) {
  const { id: idParam } = await params;
  const id = Number(idParam);

  if (!Number.isInteger(id) || id <= 0) notFound();

  const user = await getUser(id);
  if (!user) notFound();

  return (
    <main className={styles.main}>
      <Link className={styles.back} href="/">
        ← Back to directory
      </Link>

      <h1 className={styles.title}>{user.name}</h1>

      <section className={styles.section}>
        <p className={styles.row}>
          <strong>Email:</strong> {user.email}
        </p>
        <p className={styles.row}>
          <strong>Username:</strong> {user.username}
        </p>
        <p className={styles.row}>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className={styles.row}>
          <strong>Website:</strong> {user.website}
        </p>
        <p className={styles.row}>
          <strong>Company:</strong> {user.company?.name}
        </p>
      </section>
    </main>
  );
}