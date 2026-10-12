"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Forwards an old URL to its new home. The meta refresh works without
 * JavaScript (static hosting has no server redirects); the router call makes
 * it instant when JavaScript is available.
 */
export function LegacyRedirect({ to }: { to: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <section className="container-page flex min-h-[70vh] items-center pt-32">
        <p className="text-muted-foreground">
          This page has moved.{" "}
          <Link href={to} className="text-foreground underline underline-offset-4">
            Continue →
          </Link>
        </p>
      </section>
    </>
  );
}
