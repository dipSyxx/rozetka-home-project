import { Typography } from '@mui/material'
import React from 'react'

type ProductHeadingTypographyProps = {
  productHeadingText: string
}

export const ProductHeadingTypography = ({ productHeadingText }: ProductHeadingTypographyProps) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: 36,
          fontWeight: 400,
          color: '#221f1f',
          marginBottom: 3,
          fontFamily: 'Roboto,sans-serif',
          lineHeight: 1.4,
          letterSpacing: 0,
        }}
        variant="h1"
      >
        {productHeadingText}
      </Typography>
    </>
  )
}
