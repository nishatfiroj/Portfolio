import Image, { StaticImageData } from "next/image"
import stickyNote from "../../../public/svg/stickyNote.svg"

type StickyNoteProps = {
  svg: StaticImageData
  alt: string
  top?: number
  left?: number
  right?: number
  bottom?: number
}

export default function StickyNote({
  svg,
  alt,
  top,
  bottom,
  left,
  right,
}: StickyNoteProps) {
  return (
    <div style={{ position: "relative", marginBottom: "32px" }}>
      <Image src={stickyNote} alt={alt} className="tape" />
      <div
        style={{
          position: "absolute",
          top,
          bottom,
          left,
          right,
        }}
      >
        <Image src={svg} alt={alt} />
      </div>
    </div>
  )
}
