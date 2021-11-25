import {
  Box,
  Container,
  Stack,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material'
import { Home, Work, Article } from '@mui/icons-material'
import { useState } from 'react'
import { ROUTE_LIST } from './routes'
import { Menu } from '@mui/icons-material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export interface HeaderMobileProps {}

export default function HeaderMobile(props: HeaderMobileProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <Box display={{ xs: 'block', md: 'none' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          <Menu cursor="pointer" onClick={() => setOpen(true)} />
          <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <Box sx={{ width: { xs: 200, sm: 250 } }}>
              <List>
                {ROUTE_LIST.map((route) => (
                  <ListItem key={route.path} onClick={() => setOpen(false)} disablePadding>
                    <ListItemButton className={clsx({ active: router.pathname === route.path })}>
                      <ListItemIcon className={clsx({ active: router.pathname === route.path })}>
                        {route.path === '/' && <Home />}
                        {route.path === '/works' && <Work />}
                        {route.path === '/blog' && <Article />}
                      </ListItemIcon>
                      <Link href={route.path} passHref>
                        <ListItemText>{route.label}</ListItemText>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </SwipeableDrawer>
        </Stack>
      </Container>
    </Box>
  )
}
