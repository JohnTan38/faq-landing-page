import { useRef, useState } from 'react';
import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/Automated_Invoice_Processing_Efficiency_Accuracy_Scalability.wav');
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Section>
      <CTABanner
        title="Read docs or listen to AI generated summary."
        subtitle="Automated Invoice Download"
        buttonContainerStyle={{ display: 'flex', gap: '1rem' }}
        buttons={[
          <Link href="https://esker-pending-payment-documentation-git-master-johntan38s-projects.vercel.app" key="doc-link">
            <Button>Documentation</Button>
          </Link>,
          <div onClick={handleTogglePlay} key="audio-link" style={{ display: 'inline-block' }}>
            <img
              src={isPlaying ? '/pause_button.JPG' : '/listen_button.JPG'}
              alt={isPlaying ? 'Pause audio' : 'Play audio'}
              style={{
                height: '45px',
                width: 'auto',
                verticalAlign: 'middle',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
              className="transition-transform hover:scale-105"
            />
          </div>,
        ]}
      />
    </Section>
  );
};

export { Banner };
