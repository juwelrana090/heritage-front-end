'use client';

import { Input, InputSearch, InputSelect } from '@/components/common/Form';
import { Icon } from '@/components/ui';

const PropertySearchBox = () => {
  return (
    <div className="property-search-box">
      <div className="w-full absolute top-20 flex justify-center items-center ">
        <div className="w-[984px] h-[376px] p-8 rounded-lg bg-white shadow-lg shadow-[#0000001F] !space-y-7">
          <div className="w-full">
            <div className="w-full border-b-2 border-[#ECF5FF]">
              <ul className="flex flex-wrap -mb-px gap-4">
                <li className="me-2">
                  <span className="search-type-active">Buy</span>
                </li>
                <li className="me-2">
                  <span className="search-type">Rent</span>
                </li>
                <li className="me-2">
                  <span className="search-type">PG</span>
                </li>
                <li className="me-2">
                  <span className="search-type">Plot</span>
                </li>
                <li className="me-2">
                  <span className="search-type">Commercial</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-[48px]">
            <InputSearch
              className="w-full h-[48px] placeholder:text-[#6B7280] placeholder:text-[16px] placeholder:font-normal placeholder:font-poppins placeholder:leading-[20px]"
              type="text"
              placeholder="Search properties"
            />
          </div>
          <div className="w-full h-[88px] flex justify-between items-center">
            <div className="w-[285px] h-[88px] gap-4 space-y-4">
              <div className="w-full flex gap-3">
                <Icon name="location" color="orange-500" size="22" />
                <span className="text-[#181818] text-[18px] font-semibold font-inter">
                  Your Location
                </span>
              </div>
              <div className="w-full">
                <InputSelect
                  name=""
                  value=""
                  placeholder="Select Location"
                  options=""
                  className="h-[48px]"
                />
              </div>
            </div>

            <div className="w-[285px] h-[88px] gap-4 space-y-4">
              <div className="w-full flex gap-3">
                <Icon name="home-location" color="orange-500" size="22" />
                <span className="text-[#181818] text-[18px] font-semibold font-inter">
                  Property Type
                </span>
              </div>
              <div className="w-full">
                <InputSelect
                  name=""
                  value=""
                  placeholder="Select Property Type"
                  options=""
                  className="h-[48px]"
                />
              </div>
            </div>

            <div className="w-[285px] h-[88px] gap-4 space-y-4">
              <div className="w-full flex gap-3">
                <Icon name="home-location" color="orange-500" size="22" />
                <span className="text-[#181818] text-[18px] font-semibold font-inter">
                  Budget
                </span>
              </div>
              <div className="w-full">
                <Input
                  type="text"
                  placeholder="Budget"
                  name=""
                  value=""
                  className="!h-[48px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[48px]">
            <button className="!w-full find-property-btn bg-blue-500 hover:bg-blue-600">
              <Icon name="search-magnifer" color="white" size="24" />
              <span className="text-white text-[18px] font-medium font-montserrat">
                Find Property
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="search-bg-image"></div>
      <div className="w-full h-[146px]"></div>
    </div>
  );
};

export default PropertySearchBox;
