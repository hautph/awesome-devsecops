import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get title from query params or use default
    const title = searchParams.get('title') || 'Awesome DevSecOps';
    const description = searchParams.get('description') || 'Master DevSecOps practices and implementation';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            backgroundImage:
              'linear-gradient(45deg, #0f172a 25%, transparent 25%), linear-gradient(-45deg, #0f172a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #0f172a 75%), linear-gradient(-45deg, transparent 75%, #0f172a 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              borderRadius: '16px',
              border: '2px solid #4f46e5',
              maxWidth: '80%',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '20px',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '28px',
                color: '#cbd5e1',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.4',
              }}
            >
              {description}
            </div>
            <div
              style={{
                marginTop: '30px',
                fontSize: '24px',
                color: '#818cf8',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
              }}
            >
              awesome-devsecops.example.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}