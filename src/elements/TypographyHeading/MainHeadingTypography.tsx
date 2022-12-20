import { Typography } from '@mui/material'
import React from 'react'

type MainHeadingTypographyProps = {
  mainHeadingText: string
}

export const MainHeadingTypography = ({ mainHeadingText }: MainHeadingTypographyProps) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 400,
          color: '#221f1f',
          marginBottom: 2,
          fontFamily: 'Roboto,sans-serif',
          lineHeight: 1.4,
          letterSpacing: 0,
        }}
        variant="h2"
      >
        {mainHeadingText}
      </Typography>
    </>
  )
}
