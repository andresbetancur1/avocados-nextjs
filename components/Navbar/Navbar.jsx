import Link from "next/link";

export default function About() {
  return (
    <nav>
      <menu>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </menu>
    </nav>
  );
}
