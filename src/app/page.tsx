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
  ResponsiveStamps,
  ResponsiveTarotContainer,
} from "./styled"

// pngs & svgs
import self from "../../public/self.png"
import nishatsPortfolio from "../../public/svg/nishatsPortfolio.svg"
import nishatDescriptor from "../../public/svg/nishatDescriptor.svg"
import fullstackDevStamp from "../../public/svg/fullstackDevStamp.svg"
import webDevStamp from "../../public/svg/webDevStamp.svg"
import systemDesignerStamp from "../../public/svg/systemDesignerStamp.svg"
import spotifyCard from "../../public/svg/spotifyCard.svg"
import jupiterCard from "../../public/svg/jupiterCard.svg"
import ncrCard from "../../public/svg/ncrCard.svg"
import clickForMore from "../../public/svg/clickForMore.svg"
import stickyNote from "../../public/svg/stickyNote.svg"

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

            <Card style={{}}>
              <ResponsiveHandwriting
                src={nishatDescriptor}
                alt=""
                width={178}
                height={102}
              />
            </Card>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "104px",
            justifyContent: "center",
          }}
        >
          <ResponsiveStamps src={fullstackDevStamp} alt="Fullstack developer" />
          <ResponsiveStamps src={webDevStamp} alt="Web developer" />
          <ResponsiveStamps src={systemDesignerStamp} alt="System designer" />
        </div>
      </ResponsiveSectionOne>

      {/* Second section */}
      <div style={{ padding: "64px 0" }}>
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
          <Link
            href="/spotify"
            style={{
              position: "absolute",
              bottom: 12,
              left: 60,
              transform: "rotate(-5deg)",
            }}
          >
            <Image
              src={clickForMore}
              alt="Learn more about Spotify experiences"
            />
          </Link>
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
            <Image
              src={stickyNote}
              alt="Learn more about Jupiter experiences"
              className="tape"
            />
          </Link>
          <Link
            href="/jupiter"
            style={{
              position: "absolute",
              bottom: "-24px",
              right: 42,
              transform: "rotate(10deg)",
            }}
          >
            <Image
              src={clickForMore}
              alt="Learn more about Jupiter experiences"
            />
          </Link>
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
          <Link
            href="/ncr"
            style={{
              position: "absolute",
              bottom: "-24px",
              left: 64,
              transform: "rotate(-10deg)",
            }}
          >
            <Image src={clickForMore} alt="Learn more about NCR experiences" />
          </Link>
        </div>
      </div>
    </Base>
  )
}
