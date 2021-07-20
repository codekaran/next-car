import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  function handle() {}

  return (
    <nav>
      <Link href="/">home</Link>

      <a href="/about" onClick={handle}>
        about
      </a>
    </nav>
  );
};

export default Nav;
