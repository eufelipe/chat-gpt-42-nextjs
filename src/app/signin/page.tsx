"use client";

import { Cachalote, Cloud, Petunia } from "@/components";
import Image from "next/image";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (!status || !router) return;

    if (status === "authenticated") {
      router.push("/chat");
    }
  }, [router, status]);

  return (
    <div className="h-screen w-screen">
      <Cloud />

      <div className="flex justify-center items-center h-screen">
        <Cachalote />
        <Petunia />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <Image
          src="/icon.png"
          alt="Picture of the author"
          className="rounded-full mx-auto"
          width={64}
          height={64}
        />

        <h1 className="text-xl text-center font-bold mt-4 ">
          Welcome to ChatGPT 42
        </h1>
        <p className="text-white text-center text-sm mt-2">
          Log in with your Google account to continue
        </p>

        <button
          onClick={() => signIn()}
          className="bg-teal-900 text-white px-4 py-2 rounded-full mx-auto block mt-4"
        >
          Entrar com o Google
        </button>
      </div>
    </div>
  );
}
