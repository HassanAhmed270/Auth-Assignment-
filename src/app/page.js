import Image from "next/image";
import supabase from "@/app/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase.auth.getSession();

  console.log("Data:", data);
  console.log("Error:", error);

  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Supabase Connection Test</h1>
      <pre>
        {JSON.stringify(
          {
            connected: !error,
            error: error?.message || null,
          },
          null,
          2
        )}
      </pre>
    </main>
  );
}