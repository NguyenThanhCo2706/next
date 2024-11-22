import Image from "next/image";

import ICon from "../favicon.ico";
import Link from "next/link";


export default function Header() {

  return (
    <header className="shadow-md">
      <div className="grid grid-cols-3 px-2">
        <div className="flex flex-row p-2 gap-x-2">
          <Image src={ICon} alt="home" className="w-10 h-10" />
          <div className="flex items-center bg-[#f2f3f5] rounded-full w-80 px-3 py-2 gap-2">
            <label className="">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.71 20.29l-5.33-5.33a8 8 0 1 0-1.42 1.42l5.33 5.33a1 1 0 0 0 1.42-1.42zM10 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"></path>
              </svg>
            </label>
            <input
              type="text"
              placeholder="Tìm kiếm trên Facebook"
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="border-b-2 border-violet-400 p-1">
            <Link
              href={""}
              className="flex justify-center items-center h-full w-full hover:bg-[#f2f3f5] rounded-xl">
              <Image src={ICon} alt="home" className="w-7 h-7" />
            </Link>
          </div>
          <div className="p-1">
            <Link
              href={""}
              className="flex justify-center items-center h-full w-full hover:bg-[#f2f3f5] rounded-xl">
              <Image src={ICon} alt="home" className="w-7 h-7" />
            </Link>
          </div>
          <div className="p-1">
            <Link
              href={""}
              className="flex justify-center items-center h-full w-full hover:bg-[#f2f3f5] rounded-xl">
              <Image src={ICon} alt="home" className="w-7 h-7" />
            </Link>
          </div>
          <div className="p-1">
            <Link
              href={""}
              className="flex justify-center items-center h-full w-full hover:bg-[#f2f3f5] rounded-xl">
              <Image src={ICon} alt="home" className="w-7 h-7" />
            </Link>
          </div>
          <div className="p-1">
            <Link
              href={""}
              className="flex justify-center items-center h-full w-full hover:bg-[#f2f3f5] rounded-xl">
              <Image src={ICon} alt="home" className="w-7 h-7" />
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-end p-2 gap-x-2">
          <Image src={ICon} alt="home" className="w-10 h-10" />
          <Image src={ICon} alt="home" className="w-10 h-10" />
          <Image src={ICon} alt="home" className="w-10 h-10" />
          <Image src={ICon} alt="home" className="w-10 h-10" />
        </div>
      </div>
    </header>
  )
}