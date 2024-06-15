import { isUserAdmin } from "@/actions/admin-actions";
import { redirect } from "next/navigation";
import { Dashboard } from "../_components/Dashboard";

export default async function Admin() {
  const isAdmin = await isUserAdmin();
  console.log(isAdmin);

  if (isAdmin == "USER" || isAdmin !== "ADMIN") {
    redirect("/");
  }

  return (
    <main className="flex min-h-[80vh] min-w-full items-start justify-center pt-1 md:p-5">
      {/* @ts-expect-error */}
      <Dashboard />
    </main>
  );
}
