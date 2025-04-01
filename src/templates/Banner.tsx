import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Read docs or listen to AI generated summary."
      subtitle="Automated Invoice Download"
      buttonContainerStyle={{ display: 'flex', gap: '1rem' }}
      buttons={[
        <Link href="https://esker-pending-payment-documentation-8duq3tmgl.vercel.app">
          <Button>Documentation</Button>
        </Link>,
        <Link href="https://notebooklm.google.com/notebook/744a8304-aa83-4a99-9d5b-6f8aadf63118/audio" key="listen-link">
        {/* Use an img tag instead of Button */}
        <img
          src="/listen_button.JPG" // Corrected path. the image is in /public.
          alt="Listen to article"
          style={{
            height: '45px',  //  Adjust as needed.  Original was likely too big.
            width: 'auto',  //  Maintain aspect ratio.
            verticalAlign: 'middle', // Align image with surrounding text if any.
            borderRadius: '6px', // If you want rounded corners like a button
            cursor: 'pointer', // Make it clear it's clickable
          }}
          className="transition-transform hover:scale-105" // Subtle hover effect
        />
      </Link>,
      ]}
    />
  </Section>
);

export { Banner };

