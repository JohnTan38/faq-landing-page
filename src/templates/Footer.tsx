import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={null}
        
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        
        
        <li>
          <Link href="https://esker-pending-payment-documentation-8duq3tmgl.vercel.app">
            Docs
          </Link>
        </li>
        
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };

