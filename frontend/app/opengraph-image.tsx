import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: '#0a0c0a',
                    padding: '72px 80px',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 30,
                            letterSpacing: 4,
                            textTransform: 'uppercase',
                            color: '#63614f',
                            marginBottom: 28,
                        }}
                    >
                        Radar phase intelligence
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 104,
                            fontWeight: 800,
                            lineHeight: 0.98,
                            color: '#f1eee2',
                            maxWidth: 980,
                        }}
                    >
                        Sees the drought before the crop does.
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', width: '100%', height: 6, marginBottom: 28 }}>
                        <div style={{ display: 'flex', flex: 1, background: '#3fa8a0' }} />
                        <div style={{ display: 'flex', flex: 1, background: '#8fa05a' }} />
                        <div style={{ display: 'flex', flex: 1, background: '#d9a339' }} />
                        <div style={{ display: 'flex', flex: 1, background: '#c1602c' }} />
                        <div style={{ display: 'flex', flex: 1, background: '#9c3324' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', fontSize: 34, fontWeight: 800, color: '#f1eee2' }}>
                            PHASQ<span style={{ color: '#c1602c' }}>.com</span>
                        </div>
                        <div style={{ display: 'flex', fontSize: 22, color: '#a6a38c' }}>
                            Physics-based SAR intelligence
                        </div>
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
