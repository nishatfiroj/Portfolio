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
    yearsOfExperience: 6,
    githubLinks: [
      "https://github.com/nishatfiroj/jupiter",
      "https://github.com/nishatfiroj/call-your-reps",
    ],
    quote: "a fave, she's so cute",
    labelSvg: nextJsByMe,
  },
  {
    svg: react,
    altText: "React logo",
    yearsOfExperience: 6,
    githubLinks: ["https://github.com/nishatfiroj/TheGerrymanderingApp"],
    quote: "",
    labelSvg: reactByMe,
  },
  {
    svg: nodeJs,
    altText: "NodeJS logo",
    yearsOfExperience: 6,
    githubLinks: [
      "https://github.com/nishatfiroj/TheGerrymanderingApp",
      "https://github.com/nishatfiroj/Collab-Web-Page",
    ],
    quote: "",
    labelSvg: nodeJsByMe,
  },
  {
    svg: typescript,
    altText: "TypeScript logo",
    yearsOfExperience: 4,
    githubLinks: ["https://github.com/nishatfiroj/wordle"],
    quote: "",
    labelSvg: typescriptByMe,
  },
  {
    svg: htmlCss,
    altText: "HTML & CSS logo",
    yearsOfExperience: 6,
    githubLinks: ["https://github.com/nishatfiroj/TWINE-Inspired-Stories"],
    quote: "",
    labelSvg: htmlCssByMe,
  },
  {
    svg: java,
    altText: "Java logo",
    yearsOfExperience: 6,
    githubLinks: ["https://github.com/nishatfiroj/Chess-Components"],
    quote: "",
    labelSvg: javaByMe,
  },
]
