'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui';
import Wrapper from '@/components/layout/Wrapper';

interface Props {
  className?: string;
}

const ListedCounts = ({ className }: Props) => {
  return (
    <div
      className={`w-full h-[185px] flex justify-center items-center ${className}`}
    >
      <Wrapper maxWidth="1216px">
        <div className="w-full h-[185px] flex justify-between items-center">
          <div className="w-[280px] h-[185px] bg-orange-50 p-6 !space-y-8">
            <div className="w-full h-[73px]">
              <h2 className="text-orange-500 text-[40px] font-bold font-poppins leading-[48.76px]">
                2K+
              </h2>
              <span className="text-gray-800 text-[16px] font-normal font-poppins leading-[24px]">
                New Flat Listed
              </span>
            </div>
            <Link
              href={'#'}
              className="w-full h-[32px] flex justify-between items-center"
            >
              <span className="text-orange-500 text-[16px] font-normal font-poppins leading-[24px] underline">
                View all
              </span>
              <Icon name="down-arrow-circle" color="orange-500" size="32" />
            </Link>
          </div>

          <div className="w-[280px] h-[185px] bg-blue-50 p-6 !space-y-8">
            <div className="w-full h-[73px]">
              <h2 className="text-blue-500 text-[40px] font-bold font-poppins leading-[48.76px]">
                2K+
              </h2>
              <span className="text-gray-800 text-[16px] font-normal font-poppins leading-[24px]">
                New Flat Listed
              </span>
            </div>
            <Link
              href={'#'}
              className="w-full h-[32px] flex justify-between items-center"
            >
              <span className="text-blue-500 text-[16px] font-normal font-poppins leading-[24px] underline">
                View all
              </span>
              <Icon name="down-arrow-circle" color="blue-500" size="32" />
            </Link>
          </div>

          <div className="w-[280px] h-[185px] bg-orange-50 p-6 !space-y-8">
            <div className="w-full h-[73px]">
              <h2 className="text-orange-500 text-[40px] font-bold font-poppins leading-[48.76px]">
                2K+
              </h2>
              <span className="text-gray-800 text-[16px] font-normal font-poppins leading-[24px]">
                New Flat Listed
              </span>
            </div>
            <Link
              href={'#'}
              className="w-full h-[32px] flex justify-between items-center"
            >
              <span className="text-orange-500 text-[16px] font-normal font-poppins leading-[24px] underline">
                View all
              </span>
              <Icon name="down-arrow-circle" color="orange-500" size="32" />
            </Link>
          </div>

          <div className="w-[280px] h-[185px] bg-blue-50 p-6 !space-y-8">
            <div className="w-full h-[73px]">
              <h2 className="text-blue-500 text-[40px] font-bold font-poppins leading-[48.76px]">
                2K+
              </h2>
              <span className="text-gray-800 text-[16px] font-normal font-poppins leading-[24px]">
                New Flat Listed
              </span>
            </div>
            <Link
              href={'#'}
              className="w-full h-[32px] flex justify-between items-center"
            >
              <span className="text-blue-500 text-[16px] font-normal font-poppins leading-[24px] underline">
                View all
              </span>
              <Icon name="down-arrow-circle" color="blue-500" size="32" />
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ListedCounts;
