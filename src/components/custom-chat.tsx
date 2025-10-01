"use client";
import { FormEvent, useState } from "react";
import { RealtimeChat } from "./realtime-chat";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const CustomChat = () => {
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);

  const displayChat = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username.trim().length) return;

    setShowChat(true);
  };

  if (!showChat)
    return (
      <div className="h-svh flex flex-col justify-center items-center w-full gap-10">
        <h1 className="text-4xl">REALTIME CHAT</h1>
        <form
          onSubmit={displayChat}
          className="w-full mx-auto flex flex-col gap-6 justify-center items-center"
        >
          <Input
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="max-w-md"
            size={44}
          />
          <Button type="submit" size="lg" disabled={!username.trim().length}>
            Continue
          </Button>
        </form>
      </div>
    );

  return (
    <div className="flex h-svh w-full items-center justify-center gap-2 bg-background max-w-lg mx-auto py-10">
      <RealtimeChat roomName="my-chat-room" username={username} />
    </div>
  );
};
