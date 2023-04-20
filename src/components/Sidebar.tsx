import { signOut } from "next-auth/react";

export default function Sidebar() {
  return (
    <div className="bg-zinc-900 w-72">
      <div className="flex flex-col justify-end h-full p-10  h-30">
        <button onClick={() => signOut()}>Logout</button>
      </div>
    </div>
  );
}
