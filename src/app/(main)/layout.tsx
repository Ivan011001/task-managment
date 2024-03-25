import Header from "~/components/header";

import { Spotlight } from "~/components/ui/spotlight";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-grid-white/[0.02] relative flex h-full w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Spotlight
        className="absolute -top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4  md:pt-0">
        <div className="fixed left-0 top-0 w-full">
          <Header />
        </div>

        {children}
      </div>
    </div>
  );
};

export default MainLayout;
