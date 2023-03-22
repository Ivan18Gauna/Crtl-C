import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export function Info() {
  return (
    <div className="bg-gray-200 h-16 md:h-20 lg:h-30 flex items-center justify-center fixed bottom-0 w-full rounded-xl">
      <div className="flex flex-row space-x-4 md:space-x-8 lg:space-x-12 ">
        <div className="text-black text-sm md:text-base lg:text-lg flex items-center max-sm:flex-col">
          <div className="pr-5">
            <BsInstagram />
          </div>
        </div>
        <div className="text-black text-sm md:text-base lg:text-lg flex items-center max-sm:flex-col">
          <div className="pr-5">
            <AiOutlineFacebook />
          </div>
        </div>
        <div className="text-black text-sm md:text-base lg:text-lg flex items-center max-sm:flex-col">
          <div className="pr-5">
            <BsWhatsapp />
          </div>
        </div>
        <div className="text-black text-sm md:text-base lg:text-lg flex items-center max-sm:flex-col">
          <div className="pr-5">
            <AiOutlineLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
