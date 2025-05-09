import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Named default export for image generation
export default function generateOGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          color: 'white',
          background: 'linear-gradient(90deg, #6B5BFF, #FF6BFF)',
          width: '100%',
          height: '100%',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <h1 style={{ margin: 0, fontSize: 48 }}>JOBS INTERNATIONAL</h1>
        <p style={{ fontSize: 24, margin: '20px 0 0', color: 'white' }}>
          Powering The World&apos;s Most Advanced Companies
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
