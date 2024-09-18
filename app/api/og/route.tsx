import { arrayBufferToBase64 } from '@/lib/utils';
import { ImageResponse } from 'next/og';

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get('title')
    const description = searchParams.get('description')
    const tag = searchParams.get('tag')
    const createdAt = searchParams.get('createdAt')
    const cover = searchParams.get('cover')

    const DM_sans_Black_fontdata = await fetch(new URL('../../../assets/fonts/dm-sans/dm-sans-900-normal.ttf', import.meta.url)).then((res) => res.arrayBuffer());
    const DM_sans_Regular_fontdata = await fetch(new URL('../../../assets/fonts/dm-sans/dm-sans-400-normal.ttf', import.meta.url)).then((res) => res.arrayBuffer());

    const altCoverData = await fetch(new URL('../../../assets/images/icon.png', import.meta.url))
      .then((res) => res.arrayBuffer())
      .then((buffer) => `data:image/png;base64,${arrayBufferToBase64(buffer)}`)

    return new ImageResponse((
      <div tw='bg-[#030712] w-full h-full flex items-center p-20'>
        <div tw='flex flex-col flex-1 mr-10'>
          <div tw='flex items-center'>
            <span style={{ fontFamily: "DM_sans_Black" }} tw='bg-[#6D28D9] text-[#F9FAFB] p-1 px-3 rounded-full capitalize'>{tag}</span>
            <span style={{ fontFamily: "DM_sans_Black" }} tw='ml-3 text-[#F9FAFB]/75 uppercase'>{createdAt}</span>
          </div>
          <h1 style={{ fontFamily: "DM_sans_Black" }} tw='text-[#F9FAFB] text-6xl'>{title}</h1>
          <p style={{ fontFamily: "DM_sans_Regular" }} tw='text-[#F9FAFB]/75 text-2xl'>{description}</p> </div>
        <img tw='w-[300px] h-[300px] rounded-3xl' style={{ objectFit: 'cover' }} src={cover ?? altCoverData} />
      </div>
    ), {
      fonts: [{
        name: 'DM_sans_Black',
        data: DM_sans_Black_fontdata,
        style: 'normal',
      }, {
        name: 'DM_sans_Regular',
        data: DM_sans_Regular_fontdata,
        style: 'normal',
      }]
    })
  } catch (err) {
    return new Response("Failed to generate OG image" + err, { status: 500 })
  }
}
