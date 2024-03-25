import Header from "~/components/header";
import Socails from "~/components/auth/socials";
import { Spotlight } from "~/components/ui/spotlight";

import { getServerAuthSession } from "~/server/auth";

const HomePage = async () => {
  const session = await getServerAuthSession();

  return (
    <div className="bg-grid-white/[0.02] relative flex h-full w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Spotlight
        className="absolute -top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      {session ? (
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4  md:pt-0">
          <div className="fixed left-0 top-0 w-full">
            <Header />
          </div>

          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Hello <br /> {session.user.name}
          </h1>
        </div>
      ) : (
        <div className="relative z-10  mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Tasks <br /> are everywhere.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
            Start managing them like a pro and forget how boring they could be
            and begin new era of healthy habbiits that would completely change
            your life. This app is designed for those who won&apos;t give up
            that easy. Are you ready?
          </p>

          <div className="mt-10 flex w-full justify-center">
            <div className="w-1/4">
              <Socails />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
