import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import User from "@/components/user/User";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <User session={session.user}/>
      ) : (
        <h1>homepage without auth</h1>
      )}
    </main>
  );
}
