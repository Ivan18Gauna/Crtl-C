import { FiTruck } from "react-icons/fi";
import {
  BsFillCreditCardFill,
  BsFillBoxSeamFill,
  BsTelephoneFill,
} from "react-icons/bs";

export function Info() {
  return (
    <div class="bg-gray-200 h-15 md:h-20 lg:h-30 flex items-center justify-center fixed bottom-0 w-full">
      <div class="flex flex-row space-x-4 md:space-x-8 lg:space-x-12 ">
        <div class="text-black text-sm md:text-base lg:text-lg flex items-center max-sm:flex-col">
          <div className="pr-5">
            <FiTruck />
          </div>
          <div>Envio gratis</div>
        </div>
        <div class="text-black text-sm md:text-base lg:text-lg flex items-center max-sm:flex-col">
          <div className="pr-5">
            <BsFillCreditCardFill />
          </div>
          Cuotas sin interes
        </div>
        <div class="text-black text-sm md:text-base lg:text-lg flex items-center max-sm:flex-col">
          <div className="pr-5">
            <BsFillBoxSeamFill />
          </div>
          1° cambio gratis
        </div>
        <div class="text-black text-sm md:text-base lg:text-lg flex items-center max-sm:flex-col">
          <div className="pr-5">
            <BsTelephoneFill />
          </div>
          Contactanos
        </div>
      </div>
    </div>
  );
}
