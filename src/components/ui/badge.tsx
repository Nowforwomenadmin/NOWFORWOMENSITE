// src/components/ui/badge.tsx
export const Badge = ({ children, className = "", variant = "secondary", ...props }: any) => {
  const base = "inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-semibold";
  return (
    <span className={`${base} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
