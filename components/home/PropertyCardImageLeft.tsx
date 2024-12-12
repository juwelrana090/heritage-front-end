'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui';
import Wrapper from '@/components/layout/Wrapper';

interface EfficientProps {
  title: string;
  subtitle: string;
  image_one: string;
  image_two: string;
  className?: string;
}

const PropertyCardImageLeft = ({
  title,
  subtitle,
  image_one,
  image_two,
  className
}: EfficientProps) => {
  return (
    <div
      className={`w-full h-[504px] flex justify-center items-center ${className}`}
    >
      <Wrapper maxWidth="1216px" className="h-[504px] flex items-center">
        <div className="w-6/12 h-full flex justify-center items-center">
          <div className="w-[592px] h-[504px] relative z-10">
            <div className="w-[72px] h-[72px] absolute top-[228px] left-[422px] z-40 cursor-pointer">
              <Icon name="play" color="blue-500" size="72" />
            </div>
            <div className="w-[458px] h-[400px] absolute top-0 left-0 z-20 rounded-[8px]">
              <Image
                src={image_one}
                alt="image"
                width={458}
                height={400}
                className="w-full h-full rounded-[8px] object-cover"
              />
            </div>
            <div className="w-[452px] h-[240px] absolute bottom-0 right-8 z-30 rounded-[8px]">
              <Image
                src={image_two}
                alt="image"
                width={452}
                height={240}
                className="w-full h-full rounded-[8px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-6/12 h-full">
          <div className="w-full h-[206px]">
            <div className="w-full h-[134px] space-y-4 mb-8">
              <div className="w-full h-[22px] flex justify-center items-center gap-4">
                <div className="w-[51px] h-[22px] flex justify-center items-center">
                  <div className="w-[51px] h-[4px] bg-[#F06711]"></div>
                </div>
                <div className="w-full h-[22px] flex justify-start items-center">
                  <span className="text-[#F06711] text-[18px] font-semibold font-poppins">
                    Property buying
                  </span>
                </div>
              </div>
              <div className="w-full h-[96px]">
                <h2 className="text-[#111827] text-[40px] font-bold font-montserrat leading-[48px] tracking-[-0.02em]">
                  {title}
                </h2>
              </div>
            </div>
            <div className="w-full h-[96px]">
              <h2 className="text-[#667085] text-[16px] font-medium font-poppins leading-[24px]">
                {subtitle}
              </h2>
            </div>
          </div>
          <div className="w-full h-[56px] mt-16 flex justify-start items-center">
            <Link
              href={'/property'}
              className="find-property-btn bg-blue-50 hover:bg-blue-100"
            >
              <Icon name="search-magnifer" color="blue-500" size="24" />
              <span className="text-blue-500 text-[18px] font-medium font-montserrat">
                Find Property
              </span>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PropertyCardImageLeft;
