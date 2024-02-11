"use client"

// third party components
import Image from "next/image"

// custom components
import Base from "@/components/base"

// styled-components
import { Card } from "./styled"

// pngs & svgs
import self from "../../public/self.png"
import nishatsWorkspace from "../../public/svg/nishatsWorkspace.svg"
import fullstackDevStamp from "../../public/svg/fullstackDevStamp.svg"
import webDevStamp from "../../public/svg/webDevStamp.svg"
import Tape from "@/components/tape"

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
            <div style={{ position: "absolute", top: "-16px" }}>
              <Tape />
            </div>
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
            <div style={{ position: "absolute", top: "-16px", right: 0 }}>
              <Tape />
            </div>
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
    </Base>
  )
}
