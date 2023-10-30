'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import './fontface/stylesheet.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#eabf69"/>
        <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no"/>
        <title>Play Online Rummy | Rummy Online & Fun Game win Real Cash</title>
        <meta name="description" content="A23 Multi Gaming Platform Offers to Play Online Rummy, Fantasy & Fun Games. Playing Online Rummy Cash Games is easy now on A23. Play Rummy Games & Win Big."/>
        <meta name="keywords" content="Play Rummy, online Rummy, Indian Rummy, Rummy Online, Rummy Game, Rummy Games, Rummy Card Game, Rummy Card Games, Play Rummy, Games and Win Real Cash, Play Rummy and Win Real Cash, Play Online Rummy and Win Real Cash, Play Rummy Online, Play Rummy Games, Online Rummy Games, Indian Rummy Games, Play Online Rummy, Rummy card game online, Play Rummy Online, Online Rummy Game, Rummy App, Best Rummy App, 13 card game online "/>
        <meta name="googlebot" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.a23.com" />
        <link rel="alternate" href="https://www.a23.com" hrefLang="en-in" />
        <link rel="alternate" href="https://www.a23.com" hrefLang="x-default" />
        <meta name="author" content="Betrand"/>
        <meta httpEquiv="Cache-control" content="public"/>
        <meta property="og:title" content="Play Online Rummy | Rummy Online & Fun Game win Real Cash"/>
        <meta property="og:description" content="A23 Multi Gaming Platform Offers to Play Online Rummy, Fantasy & Fun Games. Playing Online Rummy Cash Games is easy now on A23. Play Rummy Games & Win Big." />
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="A23 Games"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://www.a23.com/assets/images/promo-banners/a23-sharing-img.png?v=12"/>
        <meta property="og:image:secure_url" content="https://www.a23.com/assets/images/promo-banners/a23-sharing-img.png?v=123"/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://www.a23.com/"/>
        <meta property="og:site_name" content="A23 Rummy Online"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@A23Games"/>
        <meta name="twitter:creator" content="@A23Games"/>
        <meta name="twitter:title" content="Play Online Rummy | Rummy Online & Fun Game win Real Cash" />
        <meta name="twitter:description" content="A23 Multi Gaming Platform Offers to Play Online Rummy, Fantasy & Fun Games. Playing Online Rummy Cash Games is easy now on A23. Play Rummy Games & Win Big."/>
        <meta name="facebook-domain-verification" content="y3b79oo6r1wmqzxvi2i4aum1zbc6fq" />
        <meta name="google-site-verification" content="B5qpTMVMIzyylGP0PMK9rLY4qvpvNmvs2FAiIJ_2lWE"/>
        <meta name="google-site-verification" content="9dy_8W90wSAOMr8nCGZ_NonV5wx6u_ygaJsBU9afw3s"/>
        <meta name="google-site-verification" content="r-4cHTiEnIA1NdpEDHKMYBJTrwju6W3DstL0WVCNy_8" />
        <meta name="verify-v1" content="4u8tWl0MF1056xoLxGTmXguOW7x+dtd0Xxmc76PnA/Y="/>
        <meta name="google-site-verification" content="XRZapO8Odqoi-hQD4r_Cb3fDSitOknPk3edf3Teg-oM"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            setTimeout(() => {!function(e,a,t,n,c,g,s){e.GoogleAnalyticsObject=c,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,g=a.createElement(t),s=a.getElementsByTagName(t)[0],g.async=1,g.src="//www.google-analytics.com/analytics.js",s.parentNode.insertBefore(g,s)}(window,document,"script",0,"ga"),ga("create","UA-5620305-1","a23.com"),ga("require","displayfeatures"),ga("send","pageview")}, 5000);
            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            setTimeout(() => {!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-M8NCCQ9",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer")}, 5000);
            `,
          }}
        />

      </head>
      <body className={inter.className}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.a23.com/",
            "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.a23.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
            }
        })
     }}
      />

    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "A23 Rummy",
            "operatingSystem": "ANDROID, iOS",
            "applicationCategory": "GameApplication",
            "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.1",
            "ratingCount": "30861"
            },
            "offers": {
            "@type": "Offer",
            "price": "00",
            "priceCurrency": "INR"
            }
        
        })
     }}
      />
        {children}
      </body>
    </html>
  )
}
