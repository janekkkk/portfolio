import Head from 'next/head'
import Example from "../shared/components/content";
import Footer from "../shared/core/footer";
import AboutMe from "../shared/components/about-me";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <AboutMe />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Example />
      </main>

    <Footer />
    </div>
  )
}
