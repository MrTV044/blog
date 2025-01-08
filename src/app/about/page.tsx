import Image from "next/image";
import "./about.css";

export default function Blogs() {
  return (
    <div className="bg-black text-white px-5 py-10">
      {/* Vision and Mission */}
      <div className="mb-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Vision
          </h1>
          <p className="text-gray-300 leading-relaxed">
            We aim to be the leading platform for automotive knowledge, where
            enthusiasts, collectors, and professionals can access valuable
            information, spark discussions, and stay updated on everything from
            iconic brands to cutting-edge technologies. Our vision is to create
            a community united by a shared passion for exceptional automobiles.
            We seek to inspire, educate, and celebrate the evolving automotive
            landscape, fostering a love for cars that spans generations.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to provide comprehensive, insightful content for
            automotive enthusiasts, focusing on luxury brands, performance
            vehicles, and classic cars. We strive to be the go-to destination
            for expert reviews, restoration tips, and the latest automotive
            trends. With engaging articles and expert commentary, we connect car
            lovers worldwide and share the excitement of automotive innovation
            and culture.
          </p>
        </div>
      </div>

      {/* Author's Bio */}
      <h1 className="text-3xl font-bold mb-10 text-center">
        Author&apos;s Biography
      </h1>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Author Card */}
        <div className="bg-gray-800 rounded-lg p-5 hover:shadow-lg transition">
          <Image
            src="/headshot-guy-1.jpg"
            alt="Alex Parker"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <h2 className="mt-5 text-xl font-semibold">Alex Parker</h2>
          <p className="mt-3 text-gray-300">
            A seasoned automotive journalist with over 15 years of experience
            covering Italian sports cars. Specializing in Ferrari, Alex has
            closely followed the marque’s evolution from its classic 1960s
            designs to modern-day models.
          </p>
        </div>

        {/* Author Card */}
        <div className="bg-gray-800 rounded-lg p-5 hover:shadow-lg transition">
          <div className="relative h-64 w-full">
            <Image
              src="/headshot-girl-1.jpg"
              alt="Emma Davis"
              fill
              className="rounded-lg object-cover object-top"
            />
          </div>
          <h2 className="mt-5 text-xl font-semibold">Emma Davis</h2>
          <p className="mt-3 text-gray-300">
            With admiration for Ferrari&apos;s rich legacy, Emma delves into its
            designs, motorsports impact, and the growing collector market for
            classic Ferraris. Known for her engaging style and research.
          </p>
        </div>

        {/* Author Card */}
        <div className="bg-gray-800 rounded-lg p-5 hover:shadow-lg transition">
          <Image
            src="/headshot-guy-2.jpg"
            alt="Liam Carter"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <h2 className="mt-5 text-xl font-semibold">Liam Carter</h2>
          <p className="mt-3 text-gray-300">
            Liam writes extensively on Lamborghini innovations in technology
            and aesthetics, focusing on pivotal models like the Diablo,
            Gallardo, and Huracán.
          </p>
        </div>

        {/* Author Card */}
        <div className="bg-gray-800 rounded-lg p-5 hover:shadow-lg transition">
          <Image
            src="/headshot-girl-2.jpg"
            alt="Sophia Morgan"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <h2 className="mt-5 text-xl font-semibold">Sophia Morgan</h2>
          <p className="mt-3 text-gray-300">
            Sophia combines her design background and passion for Lamborghinis
            to deliver rich analyses from the Miura to Aventador.
          </p>
        </div>

        {/* Author Card */}
        <div className="bg-gray-800 rounded-lg p-5 hover:shadow-lg transition">
          <Image
            src="/headshot-guy-3.jpg"
            alt="Michael Davis"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <h2 className="mt-5 text-xl font-semibold">Michael Davis</h2>
          <p className="mt-3 text-gray-300">
            With a focus on British classics, Michael brings a technical lens to
            restoring and understanding the beloved Classic Mini.
          </p>
        </div>

        {/* Author Card */}
        <div className="bg-gray-800 rounded-lg p-5 hover:shadow-lg transition">
          <Image
            src="/headshot-girl-3.jpg"
            alt="Sarah Williams"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <h2 className="mt-5 text-xl font-semibold">Sarah Williams</h2>
          <p className="mt-3 text-gray-300">
            Sarah is a restoration expert specializing in Classic Minis,
            sharing insights and advice for enthusiasts worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
