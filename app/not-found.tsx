import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
    return (
      <div className="relative w-full h-screen overflow-hidden">
      <Image src="/404error.jpg" alt="Full Screen Image" 
        width={0}
        height={0}
      className="absolute inset-0 w-full h-full object-cover" />
    </div>
    
    )
  }