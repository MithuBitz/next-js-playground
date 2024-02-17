export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-white bg-gray-700 text-center text-3xl">
        mibits Header part
      </h1>
      {children}
      <h1 className="text-white bg-green-800 text-center text-3xl">
        mibits Footer part
      </h1>
    </>
  );
}
