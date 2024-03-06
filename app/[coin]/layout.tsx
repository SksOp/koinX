export default function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { coin: string };
}>) {
  return <div className="lg:px-16 ">{children}</div>;
}
