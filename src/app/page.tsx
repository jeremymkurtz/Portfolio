"use client"
import Image from "next/image";
import WidenAnimator from "@/components/WidenAnimator";

export default function Home() {
  return (
   <div>
     <WidenAnimator indexes={[1]} text={"Home"} cn={"text-4xl font-black uppercase"}/>
   </div>
  );
}
