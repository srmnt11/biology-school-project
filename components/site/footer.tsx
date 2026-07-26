import Link from 'next/link';
import { Leaf, Github, Twitter, Mail } from 'lucide-react';
import { navItems } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Leaf className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="text-lg font-bold tracking-tight">
                Bio<span className="text-primary">Learn</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A modern educational platform exploring cells and tissues through
              clean, interactive lessons. Content placeholders are ready to be
              filled in.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Topics</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems
                .filter((i) => i.href.startsWith('/topics'))
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Platform</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/references"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  References
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Built for learning cells and tissues.</p>
        </div>
      </div>
    </footer>
  );
}
