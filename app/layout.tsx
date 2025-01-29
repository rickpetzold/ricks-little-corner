import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Rick's little corner",
  description: `Rick is an AI engineer at Deloitte with experience in GenAI
   agents using Python and full stack development with React, Nextjs and Vercel.`,
};

// main page
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-200 text-gray-900 relative overflow-hidden`}
      >
        <div
          className="bg-[#d3d3d3] absolute top-[-10vw] right-[-10vw] w-[80vw] h-[40vw] rounded-full blur-[10vw] -z-10" 
        ></div>
        <div
          className="bg-[#222222] absolute top-[-10vw] left-[-10vw] w-[80vw] h-[40vw] rounded-full blur-[40vw] -z-10" 
        ></div>
        <div
          className="bg-[#fbe2e3] absolute bottom-[-100vw] left-[-10vw] w-[80vw] h-[80vw] rounded-full blur-[30vw] -z-10" 
        ></div>
        <div
          className="bg-[#dbd7fb] absolute bottom-[-100vw] right-[-10vw] w-[80vw] h-[80vw] rounded-full blur-[30vw] -z-10" 
        ></div>
      </body>
    </html>
  );
}