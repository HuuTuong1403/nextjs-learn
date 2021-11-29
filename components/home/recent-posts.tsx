import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import { PostCard } from './post-card'
import Link from 'next/link'

const postList = [
  {
    id: 1,
    title: 'Making a design system from scratch',
    date: '12 Feb 2020',
    category: 'Design, Pattern',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    id: 2,
    title: 'Creating pixel perfect icons in Figma',
    date: '12 Feb 2020',
    category: 'Figma, Icon Design',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
]

export function RecentPosts() {
  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
        >
          <Typography variant="h5">Recent Posts</Typography>

          <Link href="/blog" passHref>
            <MuiLink sx={{ display: { xs: 'none', md: 'inline' } }}>View all</MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          spacing={3}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map((item) => (
            <Box key={item.id}>
              <PostCard
                title={item.title}
                date={item.date}
                category={item.category}
                content={item.content}
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
