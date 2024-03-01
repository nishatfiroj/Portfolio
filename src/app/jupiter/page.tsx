"use client"

// third party components
import Link from "next/link"
import Image from "next/image"

// custom components
import Base from "@/components/base"
import Tape from "@/components/tape"
import StickyNote from "@/components/sticky-note"
import Subtitle from "@/components/subtitle"
import Paper from "@/components/paper"

// styled components
import { Break, Caption } from "../styled"

// svgs
import jupiterCard from "../../../public/svg/jupiterCard.svg"
import techStackByMe from "../../../public/svg/techStackByMe.svg"
import leadershipByMe from "../../../public/svg/leadershipByMe.svg"

// jupiter specific svgs
import c1 from "../../../public/svg/jupiter-svg/c1.svg"
import c2 from "../../../public/svg/jupiter-svg/c2.svg"
import e from "../../../public/svg/jupiter-svg/e.svg"
import i from "../../../public/svg/jupiter-svg/i.svg"
import theMagazineByMe1 from "../../../public/svg/jupiter-svg/1TheMagazineByMe.svg"
import theMagazineByMe from "../../../public/svg/jupiter-svg/theMagazineByMe.svg"
import jupiteriPhone from "../../../public/svg/jupiter-svg/jupiteriPhone.svg"
import jupiterDesktop from "../../../public/svg/jupiter-svg/jupiterDesktop.svg"
import pressAttentionByMe from "../../../public/svg/jupiter-svg/pressAttentionByMe.svg"
import { GoBackButton } from "@/components/go-back"

export default function Jupiter() {
  return (
    <Base>
      {/* Section 0: navigate back to home */}
      <GoBackButton />

      {/* Section 1: Jupiter card w/ table of contents */}
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
          <Image src={jupiterCard} alt="Jupiter card" />
          <div
            style={{
              position: "absolute",
              bottom: "36px",
              left: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Link href="#the-magazine">
              <Image
                src={theMagazineByMe1}
                alt="Navigate to Jupiter Magazine content"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2: Jupiter title */}
      <Subtitle
        svg={theMagazineByMe}
        alt="Jupiter introduction"
        id="the-magazine"
        top={12}
        left={32}
      />

      {/* Section 3: Jupiter content */}
      <div
        style={{
          textAlign: "center",
          marginTop: "64px",
          paddingBottom: "16px",
        }}
      >
        <Paper small>
          I was the founding engineer for an independent arts and culture
          magazine that entered New York City&apos;s literary scene as a
          publication that calls out the industry for its low pay and
          unsustainable workloads, while also working to change how publishing
          works within that same industry. Jupiter centers the Black diasporic
          experience with authors ranging from NYT best selling authors and
          staff writers to NYC gallery curators.
        </Paper>

        <div style={{ padding: "156px 0 16px" }}>
          <StickyNote
            svg={pressAttentionByMe}
            alt="News publications that have recognized Jupiter Magazine"
            top={24}
            left={36}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: "48px",
            paddingBottom: "128px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Link href="https://www.chicagotribune.com/2024/02/15/jupiter-magazine-launch/">
              <Image src={c1} alt="Link to Chicago Tribune article" />
            </Link>
            <p
              style={{
                fontSize: 12,
                fontStyle: "italic",
                paddingBottom: "32px",
              }}
            >
              Chicago Tribune
            </p>

            <Link href="https://www.essence.com/fashion/jupiter-magazine-interview/">
              <Image src={e} alt="Link to Essence article" />
            </Link>
            <p style={{ fontSize: 12, fontStyle: "italic" }}>Essence Tribune</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Link href="https://www.culturetype.com/2024/01/26/latest-news-in-black-art-2024-united-states-artists-fellows-announced-james-claiborne-returns-to-barnes-foundation-jupiter-magazine-debuts-more/">
              <Image src={c2} alt="Link to Culture Type article" />
            </Link>

            <p
              style={{
                fontSize: 12,
                fontStyle: "italic",
                paddingBottom: "32px",
              }}
            >
              Culture Type
            </p>

            <Link href="https://www.interviewmagazine.com/film/trailer-face-off-maleficent-vs-jupiter-ascending">
              <Image src={i} alt="Link to Interview Magazine article" />
            </Link>
            <p style={{ fontSize: 12, fontStyle: "italic" }}>
              Interview Magazine
            </p>
          </div>
        </div>

        <div style={{ padding: "156px 0 16px" }}>
          <StickyNote
            svg={techStackByMe}
            alt="Jupiter Magazine tech stack"
            top={24}
            left={42}
          />
        </div>

        <Paper>
          Jupiter Magazine is built using NextJS, React, and Typescript on the
          frontend. The entire website is responsive, robust, and performant,
          thanks to relying on dynamic rendering of elements and lazy loading
          with SVGs when applicable.
          <Break />
          On the backend, Jupiter Magazine relies on a simple postgreSQL
          database to collect email addresses from the thousands of readers that
          have frequented jupiter-mag.com. Beyond that, it relies on a simple
          endpoint to pull data on the planet Jupiter’s current characteristics,
          including current location, eccentricity, and more.
        </Paper>

        <div style={{ marginTop: "64px" }}>
          <Image src={jupiteriPhone} alt="Mobile view of Jupiter home page" />
          <Caption>
            A reader of Jupiter magazine would see this home page upon
            navigating to{" "}
            <a href="https://www.jupiter-mag.com">jupiter-mag.com</a>
          </Caption>
        </div>

        <div style={{ padding: "156px 0 16px" }}>
          <StickyNote
            svg={leadershipByMe}
            alt="Jupiter Magazine tech stack"
            top={24}
            left={36}
          />
        </div>

        <Paper small>
          As the founding engineer for this project, I’ve created the entire
          system design and implementation for this magazine.
          <Break />I set up all tickets, their subtasks, and relevant scopes for
          said subtasks. I’ve organized the repository in a pattern that mimics
          current industry standards for React projects so that new developers
          can easily acclimate to the codebase. I additionally have written
          documentation and comments through out the repository to mark when,
          where, and how future developers can begin to contribute.
        </Paper>

        <div
          style={{
            marginTop: "64px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={jupiterDesktop}
            alt="Desktop view of Jupiter article page"
          />
          <Caption>
            A reader of Jupiter magazine would see this article upon navigating
            to{" "}
            <a href="https://www.jupiter-mag.com/magazine/akwaeke">
              jupiter-mag.com/magazine/akwaeke
            </a>
          </Caption>
        </div>
      </div>
    </Base>
  )
}
