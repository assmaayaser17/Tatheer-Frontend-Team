import NotFoundComponent from "@/components/common/not-found-component";


export default function NotFound() {
  return (
    <main className="h-screen flex items-center flex-col gap-12 justify-center">
      {/* Message */}
      <NotFoundComponent />

      {/* Homepage link */}
      {/* <Link href="/">Go back to homepage</Link> */}
    </main>
  );
}