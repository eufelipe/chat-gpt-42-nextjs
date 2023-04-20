"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const { status } = useSession({
    required: true,
  });

  useEffect(() => {
    if (!status || !router) return;

    const isAuthenticated = status === "authenticated";
    router.push(isAuthenticated ? "/chat" : "/signin");
  }, [router, status]);

  return (
    <div className="h-screen flex">
      <p>loading...</p>
    </div>
  );
}
