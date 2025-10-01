import { redirect } from "next/navigation";

import { createClient } from "@/lib/server";

import { CustomChat } from "@/components/custom-chat";

export default async function ChatPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return <CustomChat />;
}
