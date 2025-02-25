import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="list-inside list-decimal text-[30px] text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Bhavya Gupta
        </p>
        <p className="list-inside list-decimal text-[30px] text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          MERN Stack Developer, Web-3 Developer, Competitive Programmer
        </p>
      </main>
      *Website under Development*
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/bhavya-gupta-623981280/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/BhavyaGupta315"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Github
        </a>
      </footer>
    </div>
  );
}
