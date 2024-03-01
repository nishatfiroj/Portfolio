"use client"

// third party compoentns
import Link from "next/link"
import Image from "next/image"

// styled componenets
import { Break } from "../styled"

// custom components
import Tape from "@/components/tape"
import Paper from "@/components/paper"
import Subtitle from "@/components/subtitle"
import { GoBackButton } from "@/components/go-back"

// svgs
import ncrCard from "../../../public/svg/ncrCard.svg"
import designSystemsByMe from "../../../public/svg/ncr-svg/designSystemsByMe.svg"
import crossFunctionalByMe from "../../../public/svg/ncr-svg/crossFunctionalByMe.svg"
import designSystemsByMe1 from "../../../public/svg/ncr-svg/1designSystemsByMe.svg"
import crossFunctionalByMe2 from "../../../public/svg/ncr-svg/2crossFunctionalByMe.svg"
import uno1 from "../../../public/svg/ncr-svg/uno1.svg"
import uno2 from "../../../public/svg/ncr-svg/uno2.svg"
import uno3 from "../../../public/svg/ncr-svg/uno3.svg"
import wildCard from "../../../public/svg/ncr-svg/wildCard.svg"

export default function NCR() {
  return (
    <>
      {/* Section 0: navigate back to home */}
      <GoBackButton />

      {/* Section 1: NCR card w/ table of contents */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "128px auto",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <Tape top="-12px" left="12px" />
          <Image src={ncrCard} alt="NCR card" />
          <div
            style={{
              position: "absolute",
              bottom: "44px",
              left: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              transform: "rotate(-20deg)",
            }}
          >
            <Link href="#design-systems">
              <Image
                src={designSystemsByMe1}
                alt="Navigate to design systems content"
              />
            </Link>
            <Link href="#cross-functional">
              <Image
                src={crossFunctionalByMe2}
                alt="Navigate to content about my cross-functional work"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2: Design systems section */}

      <Subtitle
        svg={designSystemsByMe}
        alt="Design Systems introduction"
        id="design-systems"
        top={32}
        left={60}
      />

      <Paper>
        Designed and coded for all iterations of NCR design systems, with
        combined 100k+ component insertions for both Figma and NPM libraries
        <Break />
        Used React, TypeScript, and MUI frameworks to code, test, and maintain
        whitelabel components for usage across our products
        <Break />
        Designed, documented, and coded data visualization library components
        for React and React Native implementationsSaved 20+ hours of development
        work by designing and coding design patterns into NPM packages
      </Paper>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "52px",
          paddingTop: "24px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Image
            src={wildCard}
            alt="The thing about failures is that it's the greatest teacher"
          />
        </div>

        <Paper>
          While I noted the my accomplishments at NCR, I also faced a lot of
          failure.
          <Break />
          NCR’s design systems were adopted and replaced three times. We
          observed both failures and successes within the lifespans of each of
          the design systems.
          <Break />
          While we saw all three systems used in retail, hospitality, and
          finance systems (like Walmart and Chick Fil A POS systems), I also saw
          that each library would be suddenly deprecated and then replaced by a
          new design system library that demanded immediate adoption.
          <Break />
          This resulted in mismatching components from each of the libraries
          across various repositories, poorly maintained components and
          libraries, and virtually no backwards compatibility.
        </Paper>

        <div style={{ textAlign: "center" }}>
          <Image
            src={uno1}
            alt="Whitelabeling is not the same as scalability"
          />
        </div>

        <Paper>
          White labeling is an NCR business model that works to make each of our
          products as flexible and scalable to different brand identities as we
          can. The most common fallacy at NCR is that white labeling guarantees
          scalability.
          <Break />
          This fallacy prevents all products from being truly scalable, and
          traps clients into using products that quickly gridlock them to NCR’s
          ecosystem, without the benefit of ever getting better, stronger
          products that keep up with the pace of the industry’s changing
          standards.
          <Break />
          True scalability comes from knowing how system architecture can be
          changed, why system design might have to change in the future,
          understanding and implementing design patterns, leveraging
          documentation to allow new developers to easily understand and add to
          the library, and more.
        </Paper>

        <div style={{ textAlign: "center" }}>
          <Image src={uno2} alt="Real world constraints are real" />
        </div>

        <Paper>
          “Blue sky thinking” is a great way to create unique solutions.
          However, when the constraints of the real world aren’t considered, the
          final product can never withstand the constantly changing world.
          <Break />
          NCR’s design systems never took into account the fact that adoption of
          each design system would cause a domino effect across all their
          products. My team was always being reconstructed with new teammates,
          with each iteration of teammates expecting their prospective
          iterations of the design system to be immediately adopted across all
          our clients. My constantly changing team never took into account the
          lengthy adoption process for legacy products, the amount of tech debt
          that increases almost exponentially every time a new system comes to
          be, or the importance of streamlining the tech stack to industry
          standards.
        </Paper>

        <div style={{ textAlign: "center" }}>
          <Image src={uno3} alt="Decision making is important" />
        </div>

        <Paper small>
          Team brainstorms are important, but strategic decision making is just
          as important. A team can come up with a thousand exciting ideas, but
          if that team cannot make a final decision, those ideas are unusable.
          <Break />
          Decisions should be made by prioritizing scalability and by knowing
          what solutions work best with the given real world constraints that
          face the team.
          <Break />
          Decisions should also be made with ego set aside. Team success should
          always supersede individual egos.
        </Paper>
      </div>

      {/* Section 3: Whitelabeling */}

      <Subtitle
        svg={crossFunctionalByMe}
        alt="Cross Functionality introduction"
        id="cross-functional"
        top={32}
        left={72}
      />

      <Paper>
        I was an active participant in the evolution of design components, from
        creation to production to testing.
        <Break />
        I built Figma plugins to assist and validate the design efforts of my
        peers, including plugins that generate accessible color palettes and
        typography calculators that generate modular type scales.
        <Break />
        I built demos and wrote documentation on how to use all React
        components, data visualization library components, and general
        TypeScript style libraries.
        <Break />I participated in design and accessibility reviews, to ensure
        all components followed client expectations.
      </Paper>
    </>
  )
}
