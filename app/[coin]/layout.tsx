import AdSection from "@/components/ad-section";
import Arrow from "@/components/icons/arrow-double";

export default function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { coin: string };
}>) {
  return (
    <div className="md:px-16">
      <div className="flex justify-start  pt-8 items-center text-lg">
        <p className="opacity-70">Cryptocurrencies</p>
        <Arrow className="w-4 h-4 mx-2" />
        <p>{params.coin}</p>
      </div>
      <div className="md:grid md:grid-cols-7 p-3">
        <div className="md:col-span-5">{children}</div>
        <div className="hidden md:block col-span-2">
          <AdSection />
        </div>
      </div>
    </div>
  );
}
