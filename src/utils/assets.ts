import { TarotCardContent } from "@/utils/types"

// svg logos
import react from "../../public/svg/react.svg"
import nodeJs from "../../public/svg/nodeJs.svg"
import typescript from "../../public/svg/typescript.svg"
import htmlCss from "../../public/svg/htmlCss.svg"
import java from "../../public/svg/java.svg"
import nextJs from "../../public/svg/nextJs.svg"

export const tarotCards: TarotCardContent[] = [
  {
    svg: nextJs,
    altText: "NextJS logo",
    yearsOfExperience: 6,
  },
  {
    svg: react,
    altText: "React logo",
    yearsOfExperience: 6,
  },
  {
    svg: nodeJs,
    altText: "NodeJS logo",
    yearsOfExperience: 6,
  },
  {
    svg: typescript,
    altText: "TypeScript logo",
    yearsOfExperience: 4,
  },
  {
    svg: htmlCss,
    altText: "HTML & CSS logo",
    yearsOfExperience: 6,
  },
  {
    svg: java,
    altText: "Java logo",
    yearsOfExperience: 6,
  },
]
