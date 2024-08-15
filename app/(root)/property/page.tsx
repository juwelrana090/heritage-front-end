import { ListedCounts, PropertySearchBox } from '@/components/property';

const PropertyPage = () => {
  return (
    <main className="w-full bg-white">
      <PropertySearchBox />
      <div className="w-full pt-16 pb-20 !space-y-4">
        <ListedCounts />
      </div>
    </main>
  );
};

export default PropertyPage;
