"use client"

// third party components
import Image from "next/image"

// custom components
import Base from "@/components/base"
import TarotCard from "@/components/tarot-card"
import Tape from "@/components/tape"

// styled-components
import { Card } from "./styled"

// pngs & svgs
import self from "../../public/self.png"
import nishatsWorkspace from "../../public/svg/nishatsWorkspace.svg"
import fullstackDevStamp from "../../public/svg/fullstackDevStamp.svg"
import webDevStamp from "../../public/svg/webDevStamp.svg"

// assets
import { tarotCards } from "../utils/assets"
import { TarotCardContent } from "@/utils/types"

export default function Home() {
  return (
    <Base>
      {/* First section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "600px",
          margin: "16px",
          gap: "16px",
        }}
      >
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
            <Card>
              <Image
                src={self}
                alt="Photo of Nishat (me)"
                width={120}
                height={140}
              />
            </Card>
          </div>
          <div style={{ position: "relative" }}>
            <Tape top="-16px" right="0px" />

            <Card>
              <Image src={nishatsWorkspace} alt="Nishat's workspace" />
            </Card>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            maxWidth: "104px",
            justifyContent: "center",
          }}
        >
          <Image
            src={fullstackDevStamp}
            alt="Fullstack developer"
            width={104}
            height={104}
          />
          <Image
            src={webDevStamp}
            alt="Web developer"
            width={104}
            height={104}
          />
          <Image
            src={fullstackDevStamp}
            alt="System designer"
            width={104}
            height={104}
          />
        </div>
      </div>

      {/* Second section */}
      <div>
        <div>
          <p style={{ opacity: "40%", textAlign: "center" }}>
            ...swipe left for more
          </p>
        </div>
        <div
          style={{
            display: "flex",
            overflow: "scroll",
            gap: "48px",
            padding: "0 48px",
            scrollSnapType: "x mandatory",
          }}
        >
          {tarotCards.map((tarotCard: TarotCardContent, i: number) => (
            <TarotCard
              key={i}
              svg={tarotCard.svg}
              altText={tarotCard.altText}
              yearsOfExperience={tarotCard.yearsOfExperience}
            />
          ))}
        </div>
      </div>
    </Base>
  )
}
