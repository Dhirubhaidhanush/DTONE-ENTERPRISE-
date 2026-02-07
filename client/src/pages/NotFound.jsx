import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="p-4 rounded-full bg-red-500/10 text-red-500 mb-6">
        <AlertTriangle className="h-12 w-12" />
      </div>
      <h1 className="text-4xl font-bold font-display mb-4">404 Page Not Found</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
