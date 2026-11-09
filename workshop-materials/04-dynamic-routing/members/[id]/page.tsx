import Link from "next/link";
import { members } from "@/public/members";

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const member = members.find(
    (member) => member.id === Number(id)
  );

  if (!member) {
    return <p>Member tidak ditemukan.</p>;
  }

  return (
    <main>
      <h1>Member Detail</h1>

      <h2>{member.name}</h2>
      <p>{member.role}</p>

      {member.bio && <p>{member.bio}</p>}

      <Link href="/members">Back to Members</Link>
    </main>
  );
}
