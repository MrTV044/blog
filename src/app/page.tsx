import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function HomePage() {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative h-[500px] w-full">
          <Image
            src={
              "https://4kwallpapers.com/images/wallpapers/lamborghini-1920x1080-16493.jpg"
            }
            alt="lamborghini"
            className="object-cover object-bottom"
            fill
            // width={1920}
            // height={100}
          ></Image>
          <div className="justify-items-left absolute bottom-2 grid gap-4 p-5">
            <p className="text-left text-4xl text-gray-400">
              <span className="text-4xl font-semibold">Car /kär/</span> <br />
              <span>A sense of freedom, </span> <br />
              <span>identity, exploration.</span>
            </p>

            <p className="max-w-3xl text-left text-lg text-gray-100">
              Welcome to our car blog, where we bring together a passion for
              driving and a love for all things automotive. Whether you’re a
              die-hard car enthusiast or someone who just wants to get from
              point A to point B, we’re here to make your journey more
              enjoyable.
            </p>
          </div>
        </div>

        {/* categories */}
        <div className="mt-5">
          <ul className="categories flex justify-center gap-5">
            <li>
              <Link href="">Sports Cars</Link>
            </li>
            <li>
              <Link href="">SUV</Link>
            </li>
            <li>
              <Link href="">JDM</Link>
            </li>
            <li>
              <Link href="">Offroad Cars</Link>
            </li>
            <li>
              <Link href="">Hatchback</Link>
            </li>
            <li>
              <Link href="">Minivan</Link>
            </li>
            <li>
              <Link href="">Sedan</Link>
            </li>
            <li>
              <Link href="">Coupe</Link>
            </li>
          </ul>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}
