'use client';
import { Link } from '@chakra-ui/react';

const CustomLink = ({children, href, ...props}: { children: any; href: string; }) => {

  return (
    <Link target="_blank" rel="noopener" href={href} {...props}>
      {children}
    </Link>
  )
};

export default CustomLink