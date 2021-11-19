import * as React from 'react'
import useSWR from 'swr'

export interface StudentDetailProps {
  studentId: string
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: 2000,
  })

  const handleMutateClick = () => {
    mutate({ name: 'Hữu Tường' }, true)
  }

  return (
    <div>
      Name {data?.name || '--'} <button onClick={handleMutateClick}>mutate</button>{' '}
    </div>
  )
}
