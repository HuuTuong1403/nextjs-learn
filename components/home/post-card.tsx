import { Card, CardContent, Typography, Stack } from '@mui/material'

export interface PostCardProps {
  title: string
  date: string
  content: string
  category: string
}

export function PostCard({ title, date, content, category }: PostCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>

        <Stack direction="row" py={1.5} spacing={3}>
          <Typography>{date}</Typography>
          <Typography>|</Typography>
          <Typography>{category}</Typography>
        </Stack>

        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  )
}
