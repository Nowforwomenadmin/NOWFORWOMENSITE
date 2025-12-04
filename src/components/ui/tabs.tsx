// src/components/ui/tabs.tsx
export const Tabs = ({ children, defaultValue, className = "", ...props }: any) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export const TabsList = ({ children, className = "", ...props }: any) => (
  <div className={`flex ${className}`} {...props}>
    {children}
  </div>
);

export const TabsTrigger = ({ children, value, className = "", ...props }: any) => (
  <button type="button" className={`px-3 py-2 text-sm font-medium ${className}`} data-value={value} {...props}>
    {children}
  </button>
);

export const TabsContent = ({ children, value, className = "", ...props }: any) => (
  <div className={className} data-value={value} {...props}>
    {children}
  </div>
);
