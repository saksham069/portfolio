"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "@/lib/nprogress";

export default function RouteLoader() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();

    const timeout = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
