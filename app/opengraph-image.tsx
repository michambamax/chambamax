import { ImageResponse } from 'next/og'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OGImage() {
  return new ImageResponse(
    (<div style={{height:'100%',width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',padding:64,background:'#0F172A',color:'#FFFFFF'}}>
      <div style={{ fontSize: 56, fontWeight: 800 }}>
        Chamba<span style={{ color: '#3B82F6' }}>Max</span><sup>®</sup>
      </div>
      <div style={{ fontSize: 28, marginTop: 12, maxWidth: 900 }}>
        Tu trabajo, sin fronteras — trabajo remoto, nómadas digitales, migración y pagos globales.
      </div>
    </div>), { ...size }
  )
}
