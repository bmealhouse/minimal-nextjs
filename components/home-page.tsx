import React from "react";
import Head from "next/head";

export function HomePage() {
  return (
    <>
      <Head>
        <title>minimal-nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen flex justify-center items-center">
        <h1 className="font-mono text-3xl">minimal-nextjs</h1>
      </main>
    </>
  );
}
