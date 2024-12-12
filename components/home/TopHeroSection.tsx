'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui';

const TopHeroSection = () => {
  return (
    <div className="top-hero-section">
      <div className="bg-video w-full h-full z-0">
        <video
          className="bg-video__content w-screen h-screen object-cover brightness-110"
          autoPlay
          muted
          loop
        >
          <source src="./assets/video/heritage-nest.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="top-body">
        <div className="w-[696px]">
          <div className="w-full h-[200px] text-[#FFFFFF] text-center">
            <h2 className="top-title">
              Your Portal to India's Exquisite Real Estate
            </h2>
            <span className="top-subtitle">
              Seamlessly connecting you to the heartbeat of India's prime
              properties.
            </span>
          </div>
          <div className="w-full h-[56px] mt-12 flex justify-center items-center">
            <Link
              href={'/property'}
              className="find-property-btn bg-blue-500 hover:bg-blue-600"
            >
              <Icon name="search-magnifer" color="white" size="24" />
              <span className="text-white text-[18px] font-medium font-montserrat">
                Find Property
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeroSection;
