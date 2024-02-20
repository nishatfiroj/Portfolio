"use client"

// third party components
import Image from "next/image"
import Link from "next/link"

// custom components
import Tape from "@/components/tape"
import Base from "@/components/base"
import Paper from "@/components/paper"
import Subtitle from "@/components/subtitle"
import StickyNote from "@/components/sticky-note"

// svgs
import goBack from "../../../public/svg/goBack.svg"
import spotifyCard from "../../../public/svg/spotifyCard.svg"
import techStackByMe from "../../../public/svg/techStackByMe.svg"
import leadershipByMe from "../../../public/svg/leadershipByMe.svg"
import testingAndDocsByMe from "../../../public/svg/testingAndDocsByMe.svg"

// spotify specific svgs
import listeningPartiesByMe1 from "../../../public/svg/spotify-svg/1ListeningPartiesByMe.svg"
import merchByMe2 from "../../../public/svg/spotify-svg/2MerchByMe.svg"
import listeningPartiesByMe from "../../../public/svg/spotify-svg/listeningPartiesByMe.svg"
import merchByMe from "../../../public/svg/spotify-svg/merchByMe.svg"
import vinylStats1 from "../../../public/svg/spotify-svg/vinylStats1.svg"
import vinylStats2 from "../../../public/svg/spotify-svg/vinylStats2.svg"
import vinylStats3 from "../../../public/svg/spotify-svg/vinylStats3.svg"
import vinylStats4 from "../../../public/svg/spotify-svg/vinylStats4.svg"
import vinylStats5 from "../../../public/svg/spotify-svg/vinylStats5.svg"
import vinylStats6 from "../../../public/svg/spotify-svg/vinylStats6.svg"
import listeningPartiesiPhone from "../../../public/svg/spotify-svg/listeningPartiesiPhone.svg"
import shopWebiPhone from "../../../public/svg/spotify-svg/shopWebiPhone.svg"
import listeningPartiesDesktop from "../../../public/svg/spotify-svg/listeningPartiesDesktop.svg"
import shopWebDesktop from "../../../public/svg/spotify-svg/shopWebDesktop.svg"
import listeningPartiesTablet from "../../../public/svg/spotify-svg/listeningPartiesTablet.svg"
import { Caption } from "../styled"

export default function Spotify() {
  return (
    <Base>
      {/* Section 0: navigate back to home */}
      <Link href="/">
        <Image
          src={goBack}
          alt="Navigate back to home screen"
          style={{ padding: "16px" }}
        />
      </Link>

      {/* Section 1: Spotify card w/ table of contents */}
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
          <Image src={spotifyCard} alt="Spotify card" />
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
            <Link href="#listening-parties">
              <Image
                src={listeningPartiesByMe1}
                alt="Navigate to Listening Parties content"
              />
            </Link>
            <Link href="#shop-web">
              <Image src={merchByMe2} alt="Navigate to Merch content" />
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2: Listening parties title */}
      <Subtitle
        svg={listeningPartiesByMe}
        alt="Listening Parties introduction"
        id="listening-parties"
        top={32}
        left={12}
      />

      {/* Listening parties content */}

      <Paper small>
        I co-created Listening Parties (LPs), with music playback, live
        interaction and chat, streaming to the main app, and an artist store, to
        enable artists to communicate and earn revenue with thousands of fans at
        once. I accomplished this in under 6 months to enable artists to connect
        with their fans, earn thousands of dollars, and create new streams of
        revenue for Spotify
      </Paper>

      <div style={{ textAlign: "center", marginTop: "64px" }}>
        <div style={{ display: "inline-block", margin: "4px auto" }}>
          <Image
            style={{ margin: "8px" }}
            src={vinylStats1}
            alt="Over 90 LPs conducted"
          />
          <Image
            style={{ margin: "8px" }}
            src={vinylStats2}
            alt="Over 20,000 fans hosted on the application"
          />
          <Image
            style={{ margin: "8px" }}
            src={vinylStats3}
            alt="95% satisfaction rate amongst attendees"
          />
          <br />

          <p style={{ padding: "0 12px", marginBottom: "64px" }}>
            Ran 90+ LPs, rewarding over 20,000 fans with an opportunity to
            interact with their favorite artists, with 95% satisfied, 60%
            actively engaged
          </p>
          <br />

          <Image
            style={{ margin: "8px" }}
            src={vinylStats4}
            alt="125% average causal lift in streaming in the week following the LP"
          />
          <Image
            style={{ margin: "8px" }}
            src={vinylStats5}
            alt="444% average lift in song saves among attendees on the day of the event"
          />
          <Image
            style={{ margin: "8px" }}
            src={vinylStats6}
            alt="44% average causal lift in users listening to the artist in the week following the event"
          />
          <br />
          <p style={{ padding: "0 12px" }}>
            98% of artists registering a causal lift in streams in the week
            following the LP, with 125% avg. causal lift in streaming in the
            week following the LP and 444% avg. lift in song saves among
            attendees on the day of the event
          </p>
        </div>

        <div style={{ padding: "96px 0", textAlign: "center" }}>
          <Image src={listeningPartiesiPhone} alt="iPhone layout of LP event" />
          <Caption>
            This is the view an artist sees when they are testing out their
            audio and music playback capabilities on their mobile, before going
            live in an LP.
          </Caption>
        </div>

        <StickyNote
          svg={techStackByMe}
          alt="Tech stack for LPs"
          top={20}
          left={44}
        />

        <Paper>
          Single page app, built with Next.js, utilizing React and Typescript
          technologies, that has a lifecycle of its own that cycles through an
          RSVP stage, artist testing stage, a Live phase, and an Ended phase.
          <Break />
          App maintained constantly changing state of an LP event by having each
          client send updates via HTTP requests to a data layer that
          orchestrated all data points to relevant backend micro services.
          <Break />
          Aggregated data disseminated to all LP attendees over a WebSocket
          connection, where the client synchronizes all streamed content via
          client level state management system.
          <Break />
          Client state management built in house, using custom reducers, hooks,
          and providers, to synchronize streamed Spotify playback and LiveKit
          audio.
        </Paper>

        <div style={{ padding: "96px 0", textAlign: "center" }}>
          <Image
            src={listeningPartiesDesktop}
            alt="Desktop layout of LP event"
          />
          <Caption>
            This is the view an attendee sees when the hosts of the LP end the
            event.
          </Caption>
        </div>

        <StickyNote
          svg={leadershipByMe}
          alt="My leadership role in implementing LPs"
          top={24}
          left={32}
        />

        <Paper>
          One of my key achievements was the planning, design, and
          implementation of a data orchestration layer, that enabled users to
          make purchases directly from their favorite artists. TL;DR, my plan
          involved horizontally slicing the architectural build, to meet tight
          deadlines and still effectively merge old and new backend services
          into one orchestration layer. In addition to improving the user
          experience, this helped Spotify see a notable rise in revenue and
          streams.
          <Break /> I led the demos and QA sessions for LPs, not only within the
          immediate team, but also for hundreds of other Spotifiers, engineering
          directors, and other Spotify leadership.
        </Paper>

        <div style={{ padding: "96px 0", textAlign: "center" }}>
          <Image src={listeningPartiesTablet} alt="Tablet layout of LP event" />
          <Caption>
            This is the view an artist sees when they are testing out their
            audio and music playback capabilities on their tablet, before going
            live in an LP.
          </Caption>
        </div>

        <StickyNote
          svg={testingAndDocsByMe}
          alt="My testing and documentation work for LPs"
          top={24}
          left={24}
        />

        <Paper small>
          These frontend and backend systems were all built using a tech
          principles document that I co-wrote, to guide all engineers towards
          building a well organized, robust, future-proof system of
          repositories.
          <Break />
          The entire repository had over 100k lines of code and had 50% coverage
          in terms of unit tests, synthetic tests, and more.
          <Break /> I wrote documentation for all testing and QA procedures for
          LPs.
        </Paper>
      </div>

      {/* Section 3: Shop web title */}
      <Subtitle
        svg={merchByMe}
        alt="Merch introduction"
        id="shop-web"
        top={42}
        left={96}
      />

      {/* Section 4: shop web content */}

      <div style={{ textAlign: "center", padding: "16px 0" }}>
        <Paper small>
          I oversaw the deployment and ongoing upkeep of Spotify&apos;s retail
          store, bringing about improvements that benefited millions of users on
          a site that brought in $40 million in income. My work included
          maintenance of the Shopify integration, UTM attribution mapping, user
          behavior instrumentation, and responsive styling.
        </Paper>

        <Image
          src={shopWebDesktop}
          alt="Desktop view of Spotify's online merch store"
          style={{ marginTop: "48px" }}
        />
        <Caption>
          This is what a Spotify user will see upon{" "}
          <a href="https://shop.spotify.com/en/artist/06HL4z0CvFAxyc27GXpf02/product/the-tortured-poets-department-cassette-bonus-track-the-manuscript">
            navigating to this product page for Taylor Swift&apos;s Cassette +
            Bonus Track on the desktop shop.
          </a>
        </Caption>

        <Image
          src={shopWebiPhone}
          alt="Mobile view of Spotify's online merch store"
          style={{ paddingTop: "64px" }}
        />
        <Caption>
          This is what a Spotify user will see upon{" "}
          <a href="https://shop.spotify.com/en/artist/06HL4z0CvFAxyc27GXpf02/store?container_platform=">
            navigating to Taylor Swift&apos;s store on mobile.
          </a>
        </Caption>
      </div>
    </Base>
  )
}

function Break() {
  return (
    <>
      <br />
      <br />
    </>
  )
}
