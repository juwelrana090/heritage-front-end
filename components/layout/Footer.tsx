import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/img/logo.png';
import Wrapper from '@/components/layout/Wrapper';
import FooterMenuItem from '@/components/footer/FooterMenuItem';
import { Icon } from '@/components/ui';

const Footer = () => {
  return (
    <footer className="w-full h-[472px] bg-[#ECF5FF] flex justify-center items-center">
      <Wrapper className="h-[328px] flex flex-col">
        <div className="w-[1216px] h-[240px] mb-14 flex gap-4">
          <div className="w-3/12">
            <div className="w-full mb-4">
              <Link href={'/'} className="w-[53.29px] h-[80px]">
                <Image src={logo} alt="logo" width={53.29} height={80} />
              </Link>
            </div>
            <div className="w-full">
              <p className="text-[16px] text-[#475467] font-medium font-montserrat">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>
          </div>
          <div className="w-9/12 flex justify-end">
            <div className="w-[832px] h-[240px] grid grid-cols-5 content-end gap-2">
              <FooterMenuItem
                title="Product"
                items={[
                  {
                    link: '#',
                    title: 'Overview'
                  },
                  {
                    link: '#',
                    title: 'Features'
                  },
                  {
                    link: '#',
                    title: 'Solutions'
                  },
                  {
                    link: '#',
                    title: 'Tutorials'
                  },
                  {
                    link: '#',
                    title: 'Pricing'
                  },
                  {
                    link: '#',
                    title: 'Releases'
                  }
                ]}
              />
              <FooterMenuItem
                title="Company"
                items={[
                  {
                    link: '/about-us',
                    title: 'About us'
                  },
                  {
                    link: '#',
                    title: 'Careers'
                  },
                  {
                    link: '#',
                    title: 'Press'
                  },
                  {
                    link: '#',
                    title: 'News'
                  },
                  {
                    link: '#',
                    title: 'Media kit'
                  },
                  {
                    link: '#',
                    title: 'Contact'
                  }
                ]}
              />
              <FooterMenuItem
                title="Resources"
                items={[
                  {
                    link: '#',
                    title: 'Blog'
                  },
                  {
                    link: '#',
                    title: 'Newsletter'
                  },
                  {
                    link: '#',
                    title: 'Events'
                  },
                  {
                    link: '#',
                    title: 'Help centre'
                  },
                  {
                    link: '#',
                    title: 'Tutorials'
                  },
                  {
                    link: '#',
                    title: 'Support'
                  }
                ]}
              />
              <FooterMenuItem
                title="Social"
                items={[
                  {
                    link: '#',
                    title: 'Twitter'
                  },
                  {
                    link: '#',
                    title: 'LinkedIn'
                  },
                  {
                    link: '#',
                    title: 'Facebook'
                  },
                  {
                    link: '#',
                    title: 'GitHub'
                  },
                  {
                    link: '#',
                    title: 'AngelList'
                  },
                  {
                    link: '#',
                    title: 'Dribbble'
                  }
                ]}
              />
              <FooterMenuItem
                title="Legal"
                items={[
                  {
                    link: '#',
                    title: 'Terms'
                  },
                  {
                    link: '#',
                    title: 'Privacy'
                  },
                  {
                    link: '#',
                    title: 'Cookies'
                  },
                  {
                    link: '#',
                    title: 'Licenses'
                  },
                  {
                    link: '#',
                    title: 'Settings'
                  },
                  {
                    link: '#',
                    title: 'Contact'
                  }
                ]}
              />
            </div>
          </div>
        </div>
        <div className="w-[1216px] h-[240px] border-t border-[#C5E2FF] flex gap-4 mb-4">
          <div className="w-9/12 pt-8">
            <span className="text-[16px] text-[#667085] font-normal font-montserrat">
              © 2024 Heritage- Nest . All rights reserved.
            </span>
          </div>
          <div className="w-3/12 pt-8 flex flex-row justify-end items-center gap-8">
            <Link href="#" className="w-[24px] h-[24px]">
              <Icon name="twitter" color="blue-500" size="24" />
            </Link>
            <Link href="#" className="w-[24px] h-[24px]">
              <Icon name="linkedin" color="blue-500" size="24" />
            </Link>
            <Link href="#" className="w-[24px] h-[24px]">
              <Icon name="facebook" color="blue-500" size="24" />
            </Link>
            <Link href="#" className="w-[24px] h-[24px]">
              <Icon name="angelList" color="blue-500" size="24" />
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
