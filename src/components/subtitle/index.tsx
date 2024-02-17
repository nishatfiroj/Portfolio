import Image, { StaticImageData } from "next/image"
import postIt from "../../../public/svg/postIt.svg"

type SubtitleProps = {
  svg: StaticImageData
  alt: string
  id: string
  top?: number
  left?: number
  right?: number
  bottom?: number
}

export default function Subtitle({
  svg,
  alt,
  id,
  top,
  bottom,
  left,
  right,
}: SubtitleProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "200px auto 64px auto",
      }}
      id={id}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <Image src={postIt} alt={alt} className="tape" />
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
    </div>
  )
}
