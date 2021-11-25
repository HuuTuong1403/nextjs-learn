import { MainLayout } from '@/components/layout'
import Head from 'next/head'

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
  return (
    <>
      <Head>
        <title>Blog Page | NextJS Learning-Tom</title>
      </Head>
      <div>Blog Page</div>
    </>
  )
}

BlogPage.Layout = MainLayout
