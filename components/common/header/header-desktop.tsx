import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import { ROUTE_LIST } from './routes'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

export interface HeaderDesktopProps {}

export default function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter()

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink sx={{ ml: 2 }} className={clsx({ active: router.pathname === route.path })}>
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
