import styles from "./UserCard.module.css";
import { User } from "@/lib/types";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.meta}>{user.email}</p>
      <p className={styles.company}>{user.company?.name}</p>
    </div>
  );
}
