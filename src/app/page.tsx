"use client"

// third party components
import Image from "next/image"

// custom components
import Base from "@/components/base"
import TarotCard from "@/components/tarot-card"
import Tape from "@/components/tape"

// styled-components
import {
  Card,
  ResponsiveHandwriting,
  ResponsiveSectionOne,
  ResponsiveSelfPortrait,
  ResponsiveTarotContainer,
} from "./styled"

// pngs & svgs
import self from "../../public/png/self.png"
import nishatsPortfolio from "../../public/svg/nishatsPortfolio.svg"
import nishatDescriptor from "../../public/svg/nishatDescriptor.svg"
import spotifyCard from "../../public/svg/spotifyCard.svg"
import jupiterCard from "../../public/svg/jupiterCard.svg"
import ncrCard from "../../public/svg/ncrCard.svg"
import clickForMore from "../../public/svg/clickForMore.svg"
import stickyNote from "../../public/svg/stickyNote.svg"
import resumeByMe from "../../public/svg/resumeByMe.svg"

// assets
import {
  jupiterWorkExperiences,
  ncrWorkExperiences,
  spotifyWorkExperiences,
  tarotCards,
} from "../utils/assets"
import { TarotCardContent, WorkExperience } from "@/utils/types"
import Paper from "@/components/paper"
import Link from "next/link"

export default function Home() {
  const generateExperiences = (workExperiences: WorkExperience[]) =>
    workExperiences.map((experience: WorkExperience, i: number) => (
      <div key={i} style={{ padding: "4px 0" }}>
        <h4>{experience.title}</h4>
        <p>{experience.description}</p>
      </div>
    ))
  return (
    <Base>
      {/* First section */}
      <ResponsiveSectionOne>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <Tape top="-16px" />
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <ResponsiveSelfPortrait src={self} alt="Photo of Nishat (me)" />
              <ResponsiveHandwriting
                src={nishatsPortfolio}
                alt="Nishat's portfolio"
              />
            </Card>
          </div>
          <div style={{ position: "relative" }}>
            <Tape top="-16px" right="0px" />

            <Card>
              <ResponsiveHandwriting
                src={nishatDescriptor}
                alt=""
                width={178}
                height={102}
              />
            </Card>
          </div>
          <Link href="/resume" style={{ position: "relative" }}>
            <Tape top="-16px" right="30px" />

            <Card>
              <ResponsiveHandwriting src={resumeByMe} alt="" width={178} />
            </Card>
          </Link>
        </div>
      </ResponsiveSectionOne>

      {/* Second section */}
      <div style={{ padding: "64px 0", textAlign: "center" }}>
        <h1 className="scroll-text-animation">Swipe left for more</h1>
        <ResponsiveTarotContainer>
          {tarotCards.map((tarotCard: TarotCardContent, i: number) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TarotCard
                svg={tarotCard.svg}
                altText={tarotCard.altText}
                yearsOfExperience={tarotCard.yearsOfExperience}
                githubLinks={tarotCard.githubLinks}
                quote={tarotCard.quote}
              />
              <div style={{ position: "relative" }}>
                <p
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: tarotCard.labelSvg?.width,
                  }}
                >
                  <Image
                    src={tarotCard.labelSvg!}
                    alt={`${tarotCard.altText}, handwritten`}
                  />
                </p>
                <Tape large />
              </div>
            </div>
          ))}
        </ResponsiveTarotContainer>
      </div>

      {/* Third section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "64px 0",
        }}
      >
        <div style={{ position: "relative" }}>
          <Tape top="-12px" right="12px" />
          <Image src={spotifyCard} alt="Spotify card" />
        </div>
        <div style={{ position: "relative" }}>
          <Paper>{generateExperiences(spotifyWorkExperiences)}</Paper>
          <Link
            href="/spotify"
            style={{
              position: "absolute",
              bottom: "-32px",
              left: 24,
              transform: "rotate(-5deg)",
            }}
          >
            <Image
              src={stickyNote}
              alt="Learn more about Spotify experiences"
              className="tape"
            />
          </Link>
          <div style={{ position: "relative" }}>
            <Link
              href="/spotify"
              style={{
                position: "absolute",
                bottom: 12,
                left: 50,
                transform: "rotate(-5deg)",
              }}
            >
              <Tape top="-44px" />

              <Image
                src={clickForMore}
                alt="Learn more about Spotify experiences"
              />
            </Link>
          </div>
        </div>

        <div style={{ padding: "64px 0" }} />

        <div style={{ position: "relative" }}>
          <Tape top="-12px" left="24px" />
          <Image src={jupiterCard} alt="Jupiter card" />
        </div>
        <div style={{ position: "relative" }}>
          <Paper small>{generateExperiences(jupiterWorkExperiences)}</Paper>
          <Link
            href="/jupiter"
            style={{
              position: "absolute",
              bottom: "-64px",
              right: 12,
              transform: "rotate(10deg)",
            }}
          >
            <Tape top="-12px" left="24px" />
            <Image
              src={stickyNote}
              alt="Learn more about Jupiter experiences"
              className="tape"
            />
          </Link>
          <div style={{ position: "relative" }}>
            <Link
              href="/jupiter"
              style={{
                position: "absolute",
                bottom: "-24px",
                right: 28,
                transform: "rotate(10deg)",
              }}
            >
              <Image
                src={clickForMore}
                alt="Learn more about Jupiter experiences"
              />
            </Link>
          </div>
        </div>

        <div style={{ padding: "64px 0" }} />

        <div style={{ position: "relative" }}>
          <Tape top="-12px" left="32px" />
          <Image src={ncrCard} alt="Ncr card" />
        </div>
        <div style={{ position: "relative" }}>
          <Paper small>{generateExperiences(ncrWorkExperiences)}</Paper>

          <Link
            href="/ncr"
            style={{
              position: "absolute",
              bottom: "-64px",
              left: 16,

              transform: "rotate(-10deg)",
            }}
          >
            <Image
              src={stickyNote}
              alt="Learn more about NCR experiences"
              className="tape"
            />
          </Link>
          <div style={{ position: "relative" }}>
            <Link
              href="/ncr"
              style={{
                position: "absolute",
                bottom: "-24px",
                left: 48,
                transform: "rotate(-10deg)",
              }}
            >
              <Tape top="-52px" />

              <Image
                src={clickForMore}
                alt="Learn more about NCR experiences"
              />
            </Link>
          </div>
        </div>
      </div>
    </Base>
  )
}
