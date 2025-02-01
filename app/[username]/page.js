import { notFound } from "next/navigation";

async function getUser(username) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${username}`
  );
  if (!res.ok) return null;
  const data = await res.json();
  console.log(data);
  return data.name;
}

export default async function UserPage({ params }) {
  const { username } = await params;
  const name = getUser(username);

  if (!name) return notFound();
  return <h1 className="text-2xl">Welcome, {name}!</h1>;
}
