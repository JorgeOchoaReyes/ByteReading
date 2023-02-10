import type { NextPage } from "next";
import Head from "next/head";
import {
  ActivityActions,
  ActivityCalendar,
  ActivityCard,
  Sidebar,
} from "@acme/ui";
import moment from "moment-timezone";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Byte Reading</title>
        <meta name="description" content="Byte Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar> </Sidebar>
      <main className="flex h-screen max-h-screen w-full items-center justify-center bg-gradient-to-b from-[white] to-[#eeeeee]">
        <div className="flex h-full w-3/5 flex-col justify-around">
          <div className="w-full pb-5">
            <ActivityCalendar />
          </div>
          <div className="h-full w-full overflow-y-scroll">
            {[2, 33, 4, 26, 3, 2323, 43].map((item) => {
              return (
                <ActivityCard
                  date={moment().format("YYYY-MM-DD")}
                  numberOfPages={item}
                  goal={10}
                  key={item}
                />
              );
            })}
          </div>
        </div>
        <ActivityActions />
      </main>
    </>
  );
};

export default Home;
