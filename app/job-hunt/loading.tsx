import { Loader2Icon } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-101px)]">
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className="size-8 animate-spin text-zinc-400"
      />
    </div>
  );
}