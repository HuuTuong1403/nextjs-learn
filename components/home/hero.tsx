import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import avatar from '@/images/avatar.png'

export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, lg: 18 }} pb={{ xs: 7, lg: 9 }}>
      <Container>
        <Stack
          spacing={{ xs: 4, lg: 8 }}
          direction={{ lg: 'row', xs: 'column-reverse' }}
          alignItems={{ xs: 'center', lg: 'flex-start' }}
        >
          <Box textAlign={{ xs: 'center', lg: 'start' }}>
            <Typography
              component="h1"
              variant="h3"
              sx={{ fontWeight: 'bold', fontSize: { xs: '32px', lg: '44px' } }}
            >
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>
            <Typography my={{ xs: 3, lg: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>

          <Box
            sx={{
              minWidth: {
                xs: '175px',
                lg: '240px',
              },
              boxShadow: '-5px 13px',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image src={avatar} layout="responsive" alt="avatar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
