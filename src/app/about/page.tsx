import Image from "next/image";
import "./about.css";

export default function Blogs() {
  return (
    <div className="ml-5 mr-5">
      {" "}
      {/* vision and mission */}
      <div className="mb-8 flex gap-5">
        <div>
          <h1 className="m-auto mb-2 w-fit text-xl">Vision</h1>
          <p>
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
          <h2 className="m-auto mb-2 w-fit text-xl">Mission</h2>
          <p>
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
      {/* Author's bio */}{" "}
      <h1 className="m-auto mb-2 w-fit text-2xl">Author&apos;s Biography</h1>{" "}
      <div className="author grid grid-cols-1 gap-4 bg-black p-10 pt-5 sm:grid-cols-3 sm:gap-10">
        <div>
          <Image src="/headshot-guy-1.jpg" alt="" width={500} height={500} />
          <h1>Alex Parker</h1>
          <p>
            A seasoned automotive journalist with over 15 years of experience
            covering Italian sports cars. Specializing in Ferrari, Alex has
            closely followed the marque’s evolution from its classic 1960s
            designs to modern-day models. His deep passion for Ferrari’s
            engineering excellence and racing pedigree has made him a respected
            voice in automotive publications worldwide.
          </p>
        </div>
        <div>
          <div className="relative h-[300px] w-full overflow-hidden">
            <Image
              src="/headshot-girl-1.jpg"
              alt=""
              fill
              className="object-cover object-top"
            />
          </div>
          <h1>Emma Davis</h1>
          <p>
            a longstanding admiration for Ferrari and its rich legacy in the
            automotive world. Having worked in both the luxury car and auction
            industries, Emma&apos;s writings often delve into Ferrari’s unique
            designs, its impact on motorsports, and the growing collector market
            for classic Ferraris. She is widely known for her engaging narrative
            style and meticulously researched articles.
          </p>
        </div>
        <div>
          <Image
            src="/headshot-guy-2.jpg"
            alt="picture guy"
            width={500}
            height={500}
          />
          <h1>Liam Carter</h1>
          <p>
            Liam&apos;s passion for Lamborghini lies not only in its superb
            performance but also in its bold and futuristic designs. Over the
            years, he has written extensively on Lamborghini&apos;s innovations
            in technology and aesthetics, with a specific interest in the
            brand&apos;s pivotal models like the Diablo, Gallardo, and Huracán.
            Liam provides insightful commentary on Lamborghini&apos;s impact on
            luxury and supercar culture.
          </p>
        </div>
        <div>
          <Image
            src="/headshot-girl-2.jpg"
            alt="picture girl"
            width={500}
            height={500}
          />
          <h1>Sophia Morgan</h1>
          <p>
            Sophia has spent over a decade immersing herself in the world of
            Lamborghini. With a background in automotive design, Isabella brings
            a unique perspective to her writings on Lamborghini&apos;s design,
            technology, and performance. As a regular contributor to several
            luxury car magazines, her analysis of the Lamborghini brand spans
            from the early Miura to the latest Aventador models.
          </p>
        </div>
        <div>
          <Image
            src="/headshot-guy-3.jpg"
            alt="picture guy"
            width={500}
            height={500}
          />
          <h1>Michael Davis</h1>
          <p>
            Michael Davis is a dedicated automotive historian with a special
            focus on British classics, particularly the iconic Classic Mini.
            With a background in engineering, Michael brings a technical lens to
            his work, diving deep into the history, restoration, and unique
            qualities that made the Classic Mini a beloved automobile across the
            globe.
          </p>
        </div>
        <div>
          <Image
            src="/headshot-girl-3.jpg"
            alt="picture gilr"
            width={500}
            height={500}
          />
          <h1>Sarah Williams</h1>
          <p>
            Sarah is an automotive restoration expert and writer with a
            particular fondness for the Classic Mini. With a keen eye for detail
            and an immense knowledge of its engineering, she specializes in
            restoring and refurbishing Minis. Sarah’s expert advice has helped
            countless Classic Mini enthusiasts maintain and bring back their
            vehicles to their original glory, and her work serves as an
            educational guide for anyone seeking to understand this iconic car.
          </p>
        </div>
      </div>
    </div>
  );
}
