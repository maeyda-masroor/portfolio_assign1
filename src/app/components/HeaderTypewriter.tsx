// components/TypewriterComponent.tsx
"use client"
import Typewriter from "typewriter-effect";
export default function TypewriterComponent() {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Hello, world!", "Welcome to Next.js 14!"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
