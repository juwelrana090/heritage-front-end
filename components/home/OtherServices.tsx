'use client';

import { ServicesItem } from '@/components/home';
import Wrapper from '@/components/layout/Wrapper';

interface Props {
  className?: string;
}

const OtherServices = ({ className }: Props) => {
  return (
    <div
      className={`w-full h-[312px] flex justify-center items-center ${className}`}
    >
      <Wrapper maxWidth="1216px" className="h-[312px] flex items-center">
        <div className="w-full h-full !space-y-[68px]">
          <div className="w-full h-[48px] text-center">
            <h2 className="text-[#181818] text-[40px] font-bold font-montserrat leading-[48px] tracking-[-1%]">
              Other Services
            </h2>
          </div>

          <div className="w-full h-[200px] flex justify-between items-center">
            <ServicesItem
              icon="home"
              title="Advanced Property Search"
              subtitle="Effortlessly find your dream property with advanced search filters."
              className=""
            />

            <ServicesItem
              icon="home"
              title="Virtual Tours and Multimedia"
              subtitle="Explore properties through immersive virtual tours and HD photos."
              className=""
            />

            <ServicesItem
              icon="home"
              title="Secure Online Transactions"
              subtitle="Ensure secure transactions and e-sign documents seamlessly online."
              className=""
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OtherServices;
