'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import "../../../../Css/LayoutCss/common-components.css"

const GamesVideoPlayer = (props) => {
    const {width,height,src,title,source_src,thumbnail} = props.videoPlayerData
    const [showVideo,setShowVideo] = useState(false)

    return(
        <div style={{background:"#000"}} className='rummy-player md:rummy-player-md lg:rummy-player-lg'>

            {showVideo ? (
                <iframe
                width={width}
                height={height}
                src={src}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
                
                />
            ) : (
            
                <Link href={source_src}  onClick={(e) =>{ e.preventDefault(),setShowVideo(true)}} style={{position:'relative'}}>
                    <img src={thumbnail} alt="demo" className='rounded-sm md:rounded h-full w-full object-cover'/>
                    <svg version='1.1' viewBox='0 0 68 48' width='68px' style={{position:'absolute',top:'50%',left:0,right:0,transform:'translate(-50%,-50%)'}}>
                    <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
                    <path d='M 45,24 27,14 27,34' fill='#fff'></path>
                    </svg>
                </Link>
            )}

        </div>
    )
}
export default GamesVideoPlayer