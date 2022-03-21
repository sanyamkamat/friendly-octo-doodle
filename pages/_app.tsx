import type { AppProps } from 'next/app'

import { builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import { Navigation } from '@components/Navigation'
import BuilderRibbon from '@components/Ribbon'
// import '@components/Ribbon';
import '../components/Link/link.css';
import React from 'react'

builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log('pageProps ', pageProps)
  // console.log('MODEL: ', builder.editingModel!)

  return (
    <div>
      <Navigation siteSettings={pageProps.siteSettings} />
      <Component {...pageProps} />
    </div>
  )
}
