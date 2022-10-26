/** @jsxImportSource theme-ui */
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      sx={{
        background: "primary",
        margin: "0px",
        padding: "0.8rem",
        fontWeight: "heading",
        cursor: "pointer",
      }}
    >
      <Link href="/">
        <h1
          sx={{
            margin: "0px",
            padding: "0px",
          }}
        >
          Movies App
        </h1>
      </Link>
    </header>
  );
}
