'use client';

import { Icon } from '@/components/ui';

interface ItemProps {
  icon: string;
  title: string;
  subtitle: string;
  className?: string;
}

const ServicesItem = ({ icon, title, subtitle, className }: ItemProps) => {
  return (
    <div className="w-[384px] h-[200px] bg-[#ECF5FF] p-[24px] rounded-[4px] flex gap-5">
      <div className="w-[48px]">
        <span className="w-[48px] h-[48px] bg-orange-500 flex justify-center items-center rounded-[4px] cursor-pointer">
          <Icon name={icon} color="white" size="24" />
        </span>
      </div>
      <div className="w-[268px] h-[152px] gap-4 !space-y-4">
        <div className="w-full">
          <h4 className="text-[#111827] text-[24px] font-semibold font-montserrat leading-[32px]">
            {title}
          </h4>
        </div>
        <div className="w-full">
          <p className="text-[#6B7280] text-[16px] font-normal font-montserrat leading-[24px]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
