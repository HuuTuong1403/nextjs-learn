import { LayoutProps } from '@/models/index'
import { Box, Container, Stack } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Footer, Header } from '../common'

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        <Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}>
          SM Container
        </Container>
        <Container sx={{ bgcolor: 'primary.main' }}>MD Container</Container>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/works">
          <a>Works</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>

        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
