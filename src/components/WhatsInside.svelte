<script>
  import Book from "./WhatsInsideBook.svelte";
  import A from "../layoutcomponents/A.svelte";
  import P from "../layoutcomponents/P.svelte";
  import H2 from "../layoutcomponents/H2.svelte";
  // let withButton = false;
  // let handler = () => (withButton = !withButton);
</script>

<div id="whats-inside" class="bg-white py-16">
  <div class="text-center px-8">
    <h1 class="text-3xl sm:text-5xl font-semibold leading-none mb-6">
      <span class="block font-semibold">The Ultimate Missing Manual</span>
    </h1>
    <p class="text-2xl text-grey-dark leading-normal max-w-sm mx-auto">
      This is not just a book — it's everything you need to create an
      exceptional dev career!
    </p>
  </div>

  <div
    class="relative max-w-screen-md mx-auto px-8 pt-16 text-xl text-gray-700
    leading-normal">
    <P>
      When I first started working on this project, my ambition was pretty
      modest — take
      <A href="https://www.swyx.io/writing/">the best of my writing,</A>
      bundle it up into one resource, and make my first money on the internet
      <A href="https://twitter.com/dvassallo/status/1248482980885983233?s=20">
        (due to a Daniel Vassallo challenge).
      </A>
    </P>

    <P>
      But the more time I put into planning it, the more I realized that I had
      an opportunity to create something better than that. Something that wasn’t
      just a book, but
      <strong>
        more like the ultimate missing manual for early career developers.
      </strong>
    </P>

    <P>Here’s what I ended up with…</P>
  </div>

  <div
    class="relative max-w-screen-md mx-auto px-8 text-xl text-gray-700
    leading-normal">

    <H2 id="the-book">The Book</H2>

    <P>
      A beautiful PDF containing
      <strong>40 extensively researched</strong>
      spread across 450+ painstakingly typeset pages. (Also available in Epub
      and Mobi format)
    </P>

    <div class="px-6">
      <img
        src="https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/illustration-book-optimized.png"
        alt="" />
    </div>

    <P>
      This book contains
      <em>literally everything</em>
      I know about the non-coding part of coding careers, distilled into
      independent, easy to read chapters.
    </P>

    <P>
      <Book title="Career Guides">

        <P>
          A
          <b>linear series of career guides</b>
          for the three early career roles covered in this book (Code Newbie,
          Junior Dev, Senior Dev), and the three major transitions after each
          stage.
        </P>
        <ul class="list-disc mb-6 ml-6">
          <li>Code Newbies</li>
          <li>Job Hunt</li>
          <li>Junior Dev</li>
          <li>Junior to Senior</li>
          <li>Senior Dev</li>
          <li>
            Beyond your Coding Career
            <ul class="list-disc mb-6 ml-6">
              <li>Engineering Management</li>
              <li>Product Management</li>
              <li>Developer Relations</li>
              <li>Developer Education</li>
              <li>Entrepreneurship</li>
            </ul>
          </li>
        </ul>

      </Book>
      <Book title="Principles">

        <P>
          A non-linear list of essays discussing ideas for Always-On
          <b>Principles</b>
          that you can use to supercharge your career.
        </P>
        <ul class="list-disc mb-6 ml-6">
          <li>Learn in Public</li>
          <li>Clone Open Source Apps</li>
          <li>Know Your Tools</li>
          <li>Specialize in the New</li>
          <li>Open Source Your Knowledge</li>
          <li>Spark Joy</li>
          <li>The Platinum Rule</li>
          <li>Good Enough is Better than Best</li>
          <li>First Principles Thinking</li>
          <li>Write, A Lot</li>
          <li>Pick Up What They Put Down</li>
        </ul>

      </Book>
      <Book title="Strategies">

        <P>
          A non-linear list of introductions to Learning Strategy, Career
          Strategy, and Tech Strategy for the ambitious developer making
          <b>big, one-off decisions.</b>
        </P>
        <ul class="list-disc mb-6 ml-6">
          <li>Intro to Strategy</li>
          <li>Learning Gears</li>
          <li>Specialist vs Generalist</li>
          <li>Betting on Technologies</li>
          <li>Profit Center vs Cost Center</li>
          <li>Engineering Career Ladders</li>
          <li>Intro to Tech Strategy</li>
          <li>Strategic Awareness</li>
          <li>Megatrends</li>
        </ul>
      </Book>
      <Book title="Tactics">
        <P>
          A non-linear list of tactical advice for the ambitious developer
          making
          <strong>small, repeated decisions.</strong>
        </P>
        <ul class="list-disc mb-6 ml-6">
          <li>Negotiating</li>
          <li>How to Learn in Private</li>
          <li>Design for Developers in a Hurry</li>
          <li>Lampshading</li>
          <li>Conference CFPs</li>
          <li>Mise en Place Writing</li>
          <li>Side Projects</li>
          <li>Developer's Guide to Twitter</li>
          <li>Marketing Yourself</li>
        </ul>
      </Book>
    </P>
    <!-- <P>You can check out the full table of contents here:</P>

    <P>
      <a href="/table-of-contents/">Check out the full table of contents</a>
    </P> -->

    <P>
      Every chapter is designed to be as independent as possible, so you can
      read them in almost any order. This book is designed to last through the
      <strong>4-8 years from Code Newbie to Senior Dev.</strong>
      You'll want to skim through everything once, and then revisit when needed
      as you develop your coding career. Good thing it's all yours, DRM-free!
    </P>
    <!-- 
    <H2>Video Tutorials</H2>

    <P>
      The book will teach you a ton, but there are some things best learned by
      watching an expert do it themselves.
    </P>

    <div class="px-6">
      <img
        src="https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/illustration-videos-optimized.png"
        alt="" />
    </div>

    <P>
      We’ve put together three in-depth video tutorials that walk through how to
      take all of the ideas in the book and apply them to three common UI design
      scenarios:
    </P>

    <ol>
      <li>
        <strong>Designing a complex form interface</strong>
      </li>
      <li>
        <strong>Building a data-focused dashboard</strong>
      </li>
      <li>
        <strong>Styling a text-focused landing page</strong>
      </li>
    </ol>

    <P>
      Each video is tightly edited and just the right pace, so there’s no wasted
      time watching me “hmm” and “uhh” my way around the design.
    </P> -->

  </div>

</div>
