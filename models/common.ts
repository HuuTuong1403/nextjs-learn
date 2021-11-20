import { AppProps } from 'next/dist/shared/lib/router/router'
import { EmotionCache } from '@emotion/cache'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export type NextPageWithLayout = NextPage & {
  Layout?: (page: LayoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  emotionCache?: EmotionCache
}
