import { HeroSection } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'
import Head from 'next/head'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home Page | NextJS Learning-Tom</title>
      </Head>

      <Box>
        <HeroSection />
      </Box>
    </>
  )
}
Home.Layout = MainLayout

export default Home
