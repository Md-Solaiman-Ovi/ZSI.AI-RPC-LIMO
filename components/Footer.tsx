import Image from "next/image";
import Logo from "../public/logo.png";
import AppStoreLogo from "../public/app_logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(218,145,0,1)] py-10 text-black">
      <div className="mx-auto flex max-w-7xl flex-col px-6 sm:px-8 md:px-10">
        {/* Main Content */}
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-16">
          {/* Left Section */}
          <div className="flex w-full flex-col gap-8 lg:w-2/5">
            <div className="flex items-center justify-center lg:justify-start">
              <Image src={Logo} alt={""} width={300} height={114} />
            </div>
            <div className="flex flex-col gap-4 text-center leading-7 lg:text-left">
              <p className="text-lg">
                Spanning from the bustling energy of New York to over 300 cities
                worldwide, RPC Limo is your trusted partner in sophisticated
                travel logistics. We pledge to provide a smooth transition from
                the outset of your journey to its conclusion, ensuring every leg
                of your trip is executed with precision and elegance.
              </p>
              <div>
                <div className="w-full rounded bg-black px-6 py-3 text-center text-white md:w-64">
                  Book Now Pay Later
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:w-3/5">
            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-center text-xl font-semibold lg:text-left">
                QUICK LINKS
              </h3>
              <ul className="flex flex-col items-center gap-4 lg:items-start">
                <li>
                  <a href="#" className="text-lg hover:text-white">
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-white">
                    Our Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-white">
                    Book A Ride
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="mb-4 text-center text-xl font-semibold lg:text-left">
                OUR SERVICES
              </h3>
              <ul className="flex flex-col items-center gap-4 lg:items-start">
                <li>
                  <a href="#" className="text-lg hover:text-white">
                    Corporate Travel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-white">
                    Airport Transfer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-white">
                    Wedding Transfer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-white">
                    Charter Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-white">
                    Cruise Port Transfer
                  </a>
                </li>
              </ul>
            </div>

            {/* App Section */}
            <div>
              <div className="flex flex-col items-center gap-6 lg:items-start">
                <div className="flex items-center justify-center lg:justify-start">
                  <Image src={AppStoreLogo} alt={""} width={300} height={114} />
                </div>
                <div className="text-center text-lg leading-7 lg:text-left">
                  If you are a rider or want to use our platform to ride please
                  download RPC LIMO app.
                </div>
                <div className="text-center text-lg leading-7 lg:text-left">
                  If you are a driver or want to drive with us please download
                  RPC DRIVER app.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
