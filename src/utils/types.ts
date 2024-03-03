import { StaticImageData } from "next/image"

export type TarotCardContent = {
  svg: StaticImageData
  altText: string
  yearsOfExperience: number
  githubLinks: string[]
  quote: string
  labelSvg?: StaticImageData
}

export type WorkExperience = {
  title: string
  description: string
}

export type ImageCard = {
  img: StaticImageData
  subtitle: string
  caption: string
}
