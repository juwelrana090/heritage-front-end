import {
  TopHeroSection,
  PropertyCardImageLeft,
  PropertyCardImageRight,
  OtherServices
} from '@/components/home';

const HomePage = () => {
  return (
    <main className="w-full bg-white">
      <TopHeroSection />
      <div className="w-full pt-24 pb-20 !space-y-24">
        <PropertyCardImageLeft
          title="Efficient and Transparent Home Buying Solutions"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          image_one="/assets/img/property/home-interior-designe-colourful.png"
          image_two="/assets/img/property/interior-design-living-room.png"
          className=""
        />

        <PropertyCardImageRight
          title="Efficient and Transparent Home Buying Solutions"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          image_one="/assets/img/property/home-interior-designe-colourful.png"
          image_two="/assets/img/property/interior-design-living-room.png"
          className=""
        />

        <PropertyCardImageLeft
          title="Efficient and Transparent Home Buying Solutions"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          image_one="/assets/img/property/living-room-with-green-couch-coffee-table-with-plant-it.png"
          image_two="/assets/img/property/living-room-with-green-couch-yellow-green-couch.png"
          className=""
        />

        <OtherServices className="" />
      </div>
    </main>
  );
};

export default HomePage;
