import React from 'react';

// Extend JSX elements to include amp-ad
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'amp-ad': any;
    }
  }
}

interface AdProps {
  slotId?: string;
  width?: string | number;
  height?: string | number;
  layout?: string;
}

const Ad: React.FC<AdProps> = ({
  slotId,
  width = 300,
  height = 250,
  layout = "fixed"
}) => {
  const adClient = 'ca-pub-8209081290130316';
  const adSlot = slotId || '4002915412'; // Default to user provided slot

  return (
    <div className="flex justify-center my-4">
      <amp-ad
        layout={layout}
        width={width}
        height={height}
        type="adsense"
        data-ad-client={adClient}
        data-ad-slot={adSlot}
      >
      </amp-ad>
    </div>
  );
};

export default Ad;
