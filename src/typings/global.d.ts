import { type CSSProperties } from 'react'

declare global {
  type NestedRecord = Record<string, CSSProperties>

  type eligibleProducts = Record<string, boolean>
  interface ProgramCardProps {
    image: string
    name: string
    lateralView: boolean
  }

  interface ProgramDetailsProps {
    image: string
    name: string
  }

  interface ProgramProps {
    header: string
    color: string
    details: ProgramDetailsProps[]
  }
}

export {}
