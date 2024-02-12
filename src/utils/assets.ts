import { TarotCardContent } from "@/utils/types"

// svg logos
import react from "../../public/svg/react.svg"
import nodeJs from "../../public/svg/nodeJs.svg"
import typescript from "../../public/svg/typescript.svg"
import htmlCss from "../../public/svg/htmlCss.svg"
import java from "../../public/svg/java.svg"
import nextJs from "../../public/svg/nextJs.svg"
import nextJsByMe from "../../public/svg/nextJsByMe.svg"
import javaByMe from "../../public/svg/javaByMe.svg"
import htmlCssByMe from "../../public/svg/htmlCssByMe.svg"
import reactByMe from "../../public/svg/reactByMe.svg"
import nodeJsByMe from "../../public/svg/nodeJsByMe.svg"
import typescriptByMe from "../../public/svg/typescriptByMe.svg"

export const tarotCards: TarotCardContent[] = [
  {
    svg: nextJs,
    altText: "NextJS logo",
    yearsOfExperience: 3,
    githubLinks: [
      "https://github.com/nishatfiroj/jupiter",
      "https://github.com/nishatfiroj/call-your-reps",
    ],
    quote: "Long time passion, most likely to opt in for this one",
    labelSvg: nextJsByMe,
  },
  {
    svg: react,
    altText: "React logo",
    yearsOfExperience: 5,
    githubLinks: ["https://github.com/nishatfiroj/TheGerrymanderingApp"],
    quote: "An OG, most likely to know the lore of this one",
    labelSvg: reactByMe,
  },
  {
    svg: nodeJs,
    altText: "NodeJS logo",
    yearsOfExperience: 5,
    githubLinks: [
      "https://github.com/nishatfiroj/TheGerrymanderingApp",
      "https://github.com/nishatfiroj/Collab-Web-Page",
    ],
    quote: "Always there by default, most likely to just... be there",
    labelSvg: nodeJsByMe,
  },
  {
    svg: typescript,
    altText: "TypeScript logo",
    yearsOfExperience: 4,
    githubLinks: ["https://github.com/nishatfiroj/wordle"],
    quote: "An absolute favorite, most likely to be strongly typed code",
    labelSvg: typescriptByMe,
  },
  {
    svg: htmlCss,
    altText: "HTML & CSS logo",
    yearsOfExperience: 6,
    githubLinks: ["https://github.com/nishatfiroj/TWINE-Inspired-Stories"],
    quote: "The building blocks, most likely to be reliable (till it's not)",
    labelSvg: htmlCssByMe,
  },
  {
    svg: java,
    altText: "Java logo",
    yearsOfExperience: 4,
    githubLinks: ["https://github.com/nishatfiroj/Chess-Components"],
    quote:
      "The teacher of all (read: most) concepts, most likely to be a nostalgic one",
    labelSvg: javaByMe,
  },
]
