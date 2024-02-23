import { CSSProperties } from 'react'

declare global {
  interface NestedRecord {
    [key: string]: CSSProperties
  }

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
