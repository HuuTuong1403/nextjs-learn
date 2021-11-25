import { MainLayout } from '@/components/layout'
import React from 'react'
import Head from 'next/head'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  return (
    <>
      <Head>
        <title>Works Page | NextJS Learning-Tom</title>
      </Head>
      <div>Works Page</div>
    </>
  )
}

WorksPage.Layout = MainLayout
