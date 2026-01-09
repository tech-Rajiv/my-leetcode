"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

function BackButton({}: Props) {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="py-2 flex items-center gap-2 cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>
    </div>
  );
}

export default BackButton;
