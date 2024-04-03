import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* 顶部倒计时 */}
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 navbar">
          <b className="mr-2">
            <span className="text-2xl">距离专升本考试还有</span>
          </b>
          <code className="font-mono font-bold">
            <span className="text-2xl">
              {Math.ceil(
                (new Date("2025-03-30T08:00:00.000Z").getTime() - Date.now()) /
                  86400000
              )}
            </span>
            <span className="text-2xl">天</span>
          </code>
        </p>

        {/* 底部logo */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://space.bilibili.com/500442786"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/assets/logo.png"
              alt="Vercel Logo"
              className="dark:invert apple-style-border"
              width={70}
              height={40}
              priority
            />
          </a>
        </div>
      </div>

      {/* logo部分,决定去除logo，改为汉字 */}
      <div className="center relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200 dark:text-gray-900">
          孤烟暮雪
        </h1>
        <p className="desc">
          与你一齐学文常
          <Image
            src="/assets/fangda.svg"
            width={15}
            height={15}
            alt="📚"
            className="w-4 h-4 inline-block"
          />
          .
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/Recite"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            背{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>趁现在.</p>
        </Link>

        <Link
          href="/Review"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            回顾{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            温故&nbsp;而知新!
          </p>
        </Link>
      </div>
    </main>
  );
}
