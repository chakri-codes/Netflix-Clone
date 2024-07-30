
import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Chakri - Stream TV Shows and Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
