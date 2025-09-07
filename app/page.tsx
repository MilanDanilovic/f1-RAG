"use client";

import Image from "next/image";
import f1RAGLogo from "./assets/f1rag.png";
import { useChat } from "@ai-sdk/react";
import { Message, MessageContent } from "@/components/ai-elements/message";

export default function Home() {
  return (
    <main>
      <Image src={f1RAGLogo} width={"250"} alt="F1RAG logo" />
    </main>
  );
}
