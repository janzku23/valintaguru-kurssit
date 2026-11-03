export default function ShopTheme({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`vg-shop ${className}`} data-theme="system">
      {children}
    </div>
  );
}
