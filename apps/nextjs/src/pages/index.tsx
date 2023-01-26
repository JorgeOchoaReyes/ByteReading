import type { NextPage } from "next";
import Head from "next/head";
import { ActivityCalendar, Sidebar } from "@acme/ui";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Byte Reading</title>
        <meta name="description" content="Byte Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[white] to-[#eeeeee]">
        <Sidebar>
          <div className="container flex flex-col items-center justify-center px-4 py-8 ">
            <ActivityCalendar />
          </div>
        </Sidebar>
      </main>
    </>
  );
};

export default Home;
