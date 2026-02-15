"use client";

import styles from "./SortToggle.module.css";

type Props = {
  asc: boolean;
  onToggle: () => void;
  disabled?: boolean;
};

export default function SortToggle({ asc, onToggle, disabled }: Props) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onToggle}
      disabled={disabled}
    >
      Sort {asc ? "A → Z" : "Z → A"}
    </button>
  );
}
