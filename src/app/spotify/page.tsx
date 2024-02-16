import Tape from "@/components/tape"
import spotifyCard from "../../../public/svg/spotifyCard.svg"
import Image from "next/image"

export default function Jupiter() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Tape top="-12px" right="12px" />
        <Image src={spotifyCard} alt="Spotify card" />
      </div>
    </>
  )
}
