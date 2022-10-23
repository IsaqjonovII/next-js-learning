import Link from "next/link";
import Head from "next/head";
import c from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={c.container}>
      <Head>
        <title>Learning Next.js</title>
      </Head>
      <h1 className={c.greet}>hi</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
