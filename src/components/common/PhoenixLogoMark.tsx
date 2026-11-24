"use client";

export function PhoenixLogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        filter: "drop-shadow(0 0 10px rgba(178, 210, 52, 0.8)) drop-shadow(0 0 20px rgba(178, 210, 52, 0.45))",
      }}
    >
      {/* Crown Crest */}
      <path d="M50 8 L54 19 L50 17 L46 19 Z" fill="#C5EB2A" />
      {/* Head */}
      <path d="M50 17 C52.5 21 53 25 50 31 C47 25 47.5 21 50 17 Z" fill="#B2D234" />
      {/* Slender Torso */}
      <path d="M50 31 C54 41 53.5 53 50 67 C46.5 53 46 41 50 31 Z" fill="#B2D234" />
      {/* Left Wing Upper Plume */}
      <path d="M48 27 C37 19 23 17 10 25 C18 29 30 32 44 36 Z" fill="#C5EB2A" />
      {/* Left Wing Mid Feather */}
      <path d="M45 35 C33 30 19 31 13 40 C23 41 33 41 43 43 Z" fill="#B2D234" />
      {/* Left Wing Lower Feather */}
      <path d="M43 42 C33 40 21 44 17 53 C25 51 33 48 42 47 Z" fill="#93B824" />
      {/* Right Wing Upper Plume */}
      <path d="M52 27 C63 19 77 17 90 25 C82 29 70 32 56 36 Z" fill="#C5EB2A" />
      {/* Right Wing Mid Feather */}
      <path d="M55 35 C67 30 81 31 87 40 C77 41 67 41 57 43 Z" fill="#B2D234" />
      {/* Right Wing Lower Feather */}
      <path d="M57 42 C67 40 79 44 83 53 C75 51 67 48 58 47 Z" fill="#93B824" />
      {/* Central Flame Tail */}
      <path d="M50 64 C52 73 55 83 50 90 C45 83 48 73 50 64 Z" fill="#B2D234" />
      {/* Left Flame Wisps */}
      <path d="M48 66 C43 75 37 83 33 87 C39 83 44 76 48 66 Z" fill="#93B824" />
      {/* Right Flame Wisps */}
      <path d="M52 66 C57 75 63 83 67 87 C61 83 56 76 52 66 Z" fill="#93B824" />
    </svg>
  );
}
