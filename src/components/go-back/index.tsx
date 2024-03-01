import Link from "next/link"
import Image from "next/image"
import goBack from "../../../public/svg/goBack.svg"

export function GoBackButton() {
  return (
    <Link href="/">
      <Image
        src={goBack}
        alt="Navigate back to home screen"
        style={{ padding: "16px" }}
      />
    </Link>
  )
}
