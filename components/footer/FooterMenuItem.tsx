'use client';

import Link from 'next/link';
import { title } from 'process';

interface ItemProps {
  title: string;
  items: any;
}

const FooterMenuItem = ({ title, items }: ItemProps) => {
  return (
    <div className="w-full">
      <div className="w-full mb-2">
        <span className="text-[14px] text-[#667085] font-semibold font-montserrat">
          {title}
        </span>
      </div>
      {items.length > 0 ? (
        <div className="w-full">
          <ul>
            {items.map((item: any, index: number) => (
              <li key={index}>
                <Link
                  href={item?.link}
                  className="text-[16px] text-[#475467] font-semibold font-montserrat"
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default FooterMenuItem;
