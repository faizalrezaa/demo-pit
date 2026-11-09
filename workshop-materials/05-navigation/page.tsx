import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Members", href: "/members" },
  { label: "Gallery", href: "/gallery" },
  { label: "Counter", href: "/counter" },
  { label: "Posts", href: "/posts" },
];

export default function HomePage() {
  return (
    <main>
      <h1>Next.js Workshop</h1>
      <p>Selamat datang di workshop Next.js!</p>

      <nav>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                prefetch={item.href === "/posts" ? false : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
