import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background px-4 py-6 text-sm text-muted-foreground">
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-4 items-center text-center sm:text-left">

        <div>
          <p>© {new Date().getFullYear()} Saksham Arora. All rights reserved.</p>
        </div>

        <div className="flex flex-col sm:items-end items-center gap-2">
          <div className="flex gap-4">
            <a
              href="mailto:sakshamarorax02@gmail.com"
              className="hover:text-foreground transition"
              aria-label="Email"
            >
              <TbMailFilled className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/saksham069"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/saksham-arora"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
