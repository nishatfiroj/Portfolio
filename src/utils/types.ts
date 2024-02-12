import { StaticImageData } from "next/image"

export type TarotCardContent = {
  svg: StaticImageData
  altText: string
  yearsOfExperience: number
  githubLinks?: string[]
}
