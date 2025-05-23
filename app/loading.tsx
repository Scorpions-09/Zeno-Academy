export default function Loading() {
  return (
    <div className="container flex items-center justify-center min-h-[70vh]">
      <div className="flex flex-col items-center gap-2">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}
