import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>misalkan saja sebagai home elemen</h1>
      <br />
      <Link href={'/posts'}>posts</Link>
    </>
  );
}
