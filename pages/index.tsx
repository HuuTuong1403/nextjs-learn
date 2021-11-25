import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  const goToDetaiLpage = () => {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 123,
        ref: 'social',
      },
    })
  }

  return (
    <>
      <Head>
        <title>Home Page | NextJS Learning-Tom</title>
      </Head>

      <Box>Home Page</Box>
    </>
  )
}
Home.Layout = MainLayout

export default Home
