// src/components/ui/card.tsx
export const Card = ({ children, className = "", ...props }: any) => (
  <div className={`bg-white rounded-lg shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = "", ...props }: any) => (
  <div className={`p-4 border-b ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "", ...props }: any) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = "", ...props }: any) => (
  <div className={`font-semibold text-lg ${className}`} {...props}>
    {children}
  </div>
);

export const CardDescription = ({ children, className = "", ...props }: any) => (
  <div className={`text-sm text-gray-600 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
