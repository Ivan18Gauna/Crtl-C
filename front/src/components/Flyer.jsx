import img1 from "./x.png";
import img2 from "./xx.png";
import img3 from "./xxx.png";

export function Flyer() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-row justify-between">
        <div>
          <img
            className="object-contain w-full px-10 py-2 h-80"
            src={img1}
            alt=""
          />
        </div>
        <div className="hidden md:block">
          <img
            className="object-contain w-full px-10 py-2 h-80"
            src={img2}
            alt=""
          />
        </div>
        <div className="hidden md:block">
          <img
            className="object-contain w-full px-10 py-2 h-80 "
            src={img3}
            alt=""
          />
        </div>
      </div>
    </div> 
  );
}
