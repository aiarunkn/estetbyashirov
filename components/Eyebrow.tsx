interface EyebrowProps {
  children: React.ReactNode;
  tone?: "taupe" | "gold" | "sand";
  className?: string;
}

const tones = {
  taupe: "text-taupe",
  gold: "text-gold",
  sand: "text-sand",
};

export default function Eyebrow({ children, tone = "taupe", className = "" }: EyebrowProps) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.25em] ${tones[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
