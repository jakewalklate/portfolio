import { Loader2Icon } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-16rem)] min-h-52">
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className="size-8 animate-spin text-zinc-400"
      />
    </div>
  );
}