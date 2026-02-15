"use client";

import { useMemo, useState } from "react";
import { User } from "@/lib/types";
import styles from "./UserList.module.css";
import UserCard from "./UserCard";
import SortToggle from "./SortToggle";
import SearchBar from "./SearchBar";

type Props = {
  initialUsers: User[];
};

export default function UserList({ initialUsers }: Props) {
    const [query, setQuery] = useState("");
    const [sortAsc, setSortAsc] = useState(true);

    const filteredUsers = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        const results = initialUsers.filter((user) =>
        user.name.toLowerCase().includes(normalizedQuery)
        );

        return [...results].sort((a, b) =>
        sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
    }, [initialUsers, query, sortAsc]);


  return (
  <div>
    <div className={styles.controls}>
      <SearchBar value={query} onChange={setQuery} />
      <div className={styles.sortRow}>
        <SortToggle
          asc={sortAsc}
          onToggle={() => setSortAsc((p) => !p)}
          disabled={initialUsers.length === 0}
        />
        <p className={styles.count}>{filteredUsers.length} results</p>
      </div>
    </div>

    <div className={styles.grid}>
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  </div>
);

}
