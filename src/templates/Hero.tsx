import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.esker.com.sg/">
            Esker
          </Link>
        </li>
        
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Automated Invoice Processing\n'}
            <span className="text-primary-500">Accuracy Efficiency Scalability</span>
          </>
        }
        description="Cost savings, and increased Productivity."
        button={
          <Link href="https://youtu.be/qxFhSLAmvzw">
            <Button xl>Watch Video</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
