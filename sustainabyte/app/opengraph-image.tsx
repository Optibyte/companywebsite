import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Sustainabyte Technologies - AI & IoT for Energy Efficiency';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0D1B3E 0%, #1a2d5e 50%, #0D1B3E 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent bars */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #4DB846 0%, #3DD68C 50%, #00B8A9 100%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            textAlign: 'center',
          }}
        >
          {/* Logo placeholder */}
          <div
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #4DB846 0%, #3DD68C 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px',
            }}
          >
            Sustainabyte
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.2,
              maxWidth: '90%',
            }}
          >
            Energy Intelligence Reimagined
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '44px',
              color: '#4DB846',
              fontWeight: '600',
              letterSpacing: '2px',
              marginTop: '20px',
            }}
          >
            AI • IoT • Net Zero
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #00B8A9 0%, #3DD68C 50%, #4DB846 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
