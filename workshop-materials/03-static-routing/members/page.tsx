import Link from "next/link";
import { members } from "@/public/members";

export default function MembersPage() {
  return (
    <main>
      <h1>Member Catalog</h1>

      {members.map((member) => (
        <section key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>

          <Link href={`/members/${member.id}`}>
            View Detail
          </Link>
        </section>
      ))}
    </main>
  );
}
