// components/TypeItComponent.tsx
import { useEffect, useRef } from "react";
import TypeIt from "typeit";

export default function TypeItComponent() {
  const instance = useRef<any>(null);

  useEffect(() => {
    instance.current = new TypeIt("#typeit", {
      strings: ["Hello, world!", "Welcome to Next.js 14!"],
      speed: 50,
      loop: true,
    }).go();

    return () => {
      if (instance.current) {
        instance.current.destroy();
      }
    };
  }, []);

  return <span id="typeit"></span>;
}
