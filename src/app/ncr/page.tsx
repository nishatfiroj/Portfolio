import Link from "next/link"
import Image from "next/image"
import goBack from "../../../public/svg/goBack.svg"

export default function NCR() {
  return (
    <>
      <h1>Pardon my dust y&apos;all</h1>
      <Link href="/">
        <Image
          src={goBack}
          alt="Navigate back to home screen"
          style={{ padding: "16px" }}
        />
      </Link>
    </>
  )
}
