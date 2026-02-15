"use client";

import styles from "./SearchBar.module.css";

type Props = {
  value: string;
  onChange: (next: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="user-search">
        Search users
      </label>
      <input
        id="user-search"
        className={styles.input}
        type="text"
        placeholder="Search users..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
