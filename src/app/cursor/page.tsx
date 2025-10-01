import { redirect } from "next/navigation";

import { createClient } from "@/lib/server";

import { CustomCursor } from "@/components/custom-cursor";

export default async function ChatPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return <CustomCursor />;
}
