export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-background py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Saksham Arora. All rights reserved.
    </footer>
  );
}
