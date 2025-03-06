"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RotateCcw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card>
        <CardContent className="text-center space-y-12">
          <h2 className="text-red-500 text-3xl font-semibold">
            Something went wrong!
          </h2>
          <Button onClick={() => reset()}>
            Try again <RotateCcw />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
