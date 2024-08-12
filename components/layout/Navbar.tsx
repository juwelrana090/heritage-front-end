import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/img/logo.png';
import Wrapper from './Wrapper';

const Navbar = () => {
  return (
    <header className="w-full h-[96px] bg-[#ECF5FF] flex justify-center items-center">
      <Wrapper className="flex gap-1">
        <div className="w-5/12 h-[96px] flex justify-start items-center">
          <div className="w-full h-[27px] flex justify-start items-center">
            <ul className="flex gap-5">
              <li className="hover:underline hover:underline-offset-[6px]">
                <Link
                  href="#"
                  className="text-[18px] text-black font-normal font-montserrat"
                >
                  Buy
                </Link>
              </li>
              <li className="hover:underline hover:underline-offset-[6px]">
                <Link
                  href="#"
                  className="text-[18px] text-black font-normal font-montserrat"
                >
                  Sell
                </Link>
              </li>
              <li className="hover:underline hover:underline-offset-[6px]">
                <Link
                  href="#"
                  className="text-[18px] text-black font-normal font-montserrat"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/12 flex justify-center items-center">
          <Link href={'/'} className="w-[53.29px] h-[80px]">
            <Image src={logo} alt="logo" width={53.29} height={80} />
          </Link>
        </div>
        <div className="w-5/12 h-[96px] flex justify-end items-center">
          <div className="w-full h-[27px] flex justify-end items-center">
            <ul className="flex gap-5">
              <li className="hover:underline hover:underline-offset-[6px]">
                <Link
                  href="#"
                  className="text-[18px] text-black font-normal font-montserrat"
                >
                  Manage Rentals
                </Link>
              </li>
              <li className="hover:underline hover:underline-offset-[6px]">
                <Link
                  href="#"
                  className="text-[18px] text-black font-normal font-montserrat"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
