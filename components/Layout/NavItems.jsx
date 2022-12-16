import { NavLink } from '@mantine/core';

import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  FaHome,
  FaChevronLeft,
  FaMoneyBillAlt,
  FaShoppingCart,
} from 'react-icons/fa';

const NavItems = () => {
  const router = useRouter();

  return (
    <>
      <Link href='/'>
        <NavLink
          label='خانه'
          icon={<FaHome size={20} stroke={1.5} />}
          rightSection={<FaChevronLeft size={15} stroke={1.5} />}
          variant='light'
          active={router.pathname === '/'}
          mb='sm'
        />
      </Link>
      <Link href='/financial-affairs'>
        <NavLink
          label='امور مالی'
          icon={<FaMoneyBillAlt size={20} stroke={1.5} />}
          rightSection={<FaChevronLeft size={15} stroke={1.5} />}
          variant='light'
          active={router.pathname === '/financial-affairs'}
          mb='sm'
        />
      </Link>
      <Link href='/PU'>
        <NavLink
          label='انتخاب واحد'
          icon={<FaShoppingCart size={20} stroke={1.5} />}
          rightSection={<FaChevronLeft size={15} stroke={1.5} />}
          variant='light'
          active={router.pathname === '/PU'}
          mb='sm'
        />
      </Link>
    </>
  );
};

export default NavItems;
