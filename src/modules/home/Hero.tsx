import alien from "../../assets/Images/alien.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="w-full flex  gap-12 mx-auto p-4">
        <Image
          src={alien}
          alt="alien"
          className="max-w-[400px] rounded-lg shadow-lg"
          width={400}
          height={400}
        />
        <div className="my-6">
          <h1 className="text-[100px] font-bold leading-snug tracking-wide">
            Monetize Your Voice. Scale Your Content.
          </h1>
          <h2 className="text-lg leading-relaxed">
            With VoxRights AI, you can monetize your voice and scale your
            content. Our AI-powered platform makes it easy to create and sell
            content that resonates with your audience. Whether you're a
            journalist, podcast host, or content creator, VoxRights AI has the
            tools to help you take your voice to the next level.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
