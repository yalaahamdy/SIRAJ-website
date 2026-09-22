export function PhoneFrame({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="phone-frame" role="img" aria-label={label ?? "معاينة شاشة من تطبيق سِراج"}>
      <div className="phone-notch" aria-hidden />
      <div className="phone-screen">{children}</div>
    </div>
  );
}
