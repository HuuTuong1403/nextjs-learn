import { Box } from '@mui/material'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { useRouter } from 'next/dist/client/router'

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

  return <Box>Home Page</Box>
}
Home.Layout = MainLayout

export default Home
