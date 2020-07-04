
<script>
  import {onMount} from 'svelte'
  let affiliateCode = ''
  onMount(() => {
    affiliateCode = new URLSearchParams(window.location.search).get(
      "a"
    );
    affiliateCode = affiliateCode ? `/${affiliateCode}`: ''
  })
</script>
<div class="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
  <h2
    class=" text-center text-4xl leading-10 font-display font-semibold
    text-gray-900 md:text-5xl md:leading-none">
    Frequently asked questions
  </h2>
  <div class="mt-6 pt-10">
    <div class="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <div>
          <p class="text-lg leading-6 font-medium text-gray-900">
            Tell me more about the Coding Career Community?
          </p>
          <p class="text-base leading-6 text-gray-600 mt-2">
            Ever feel like you didn’t have anyone outside work to talk to about
            your career? Here’s a dedicated space where you can do exactly that!
            <strong>The Coding Career Community</strong>
            is a moderated Discord chat where you can talk with other readers
            about the ideas from the book and more. Ask questions, give criticism, find
            collaborators, and generally use as a friendly resource as you build
            your coding career.
          </p>
          <p class="text-base leading-6 text-gray-600 mt-2">
            Note: Participation in the Community is subject to a Code of
            Conduct, and your questions are not guaranteed to be answered.
            <strong>This is a new community</strong>
            and therefore there is a lot left to figure out!
          </p>
        </div>
        <div id="workshops" class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Tell me more about the Coding Career Workshops?
          </p>
          <p class="mt-2 text-base leading-6 text-gray-600">
            Get the most out of your Coding Career journey with monthly live
            workshops. Dive deeper into selected topics from the book and others
            that didn’t make the cut (yet!). Planned sessions in July are
            Sundays at 12pm EST (9am PDT):
          </p>
          <ul class="list-inside text-gray-600 mt-4 ml-3">
            <li class="list-disc"><span class="font-bold">July 12</span>: Learning in Public</li>
            <li class="list-disc"><span class="font-bold">July 19</span>: The Business of Software</li>
            <li class="list-disc"><span class="font-bold">July 26</span>: Writing and Speaking</li>
          </ul>
          <p class="mt-2 text-base leading-6 text-gray-600">
            All workshops will be recorded, so this becomes an ever-growing
            library of career content.
          </p>
          <p class="mt-2 text-base leading-6 text-gray-600">
            Note: Invites will come via email, all recordings will be available
            via your Podia purchase. Standalone workshops are available for
            bootcamps and small teams.
          </p>
        </div>
        <div id="team-pricing" class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Is there any DRM? Can I share this book with my team?
          </p>
          <p class="text-base leading-6 text-gray-600 mt-2">
            No DRM, you should enjoy a hassle-free experience! If you purchase
            an individual license, please respect the license terms and do not
            distribute any copies. Team licenses are available:
          </p>
          <ul class="list-inside text-gray-600 mt-4 ml-3">
            <li class="list-disc">
              The Coding Career Handbook (
                <a
                  class="underline" href={`https://swyx.podia.com/coding-career-handbook-team-5${affiliateCode}`}
                  data-podia-embed="link">
                  5 People - $149
                </a>, 
                <a
                  class="underline" href={`https://swyx.podia.com/coding-career-handbook-team-10${affiliateCode}`}
                  data-podia-embed="link">
                  10 People - $279
                </a>) 
            </li>
            <li class="list-disc">
              The Coding Career Community Package (
              <a
                class="underline" href={`https://swyx.podia.com/coding-career-community-team-5${affiliateCode}`}
                data-podia-embed="link">
                5 People - $249
              </a>, 
              <a
                class="underline" href={`https://swyx.podia.com/coding-career-community-team-5${affiliateCode}`}
                data-podia-embed="link">
                10 People - $479
              </a>
              )
            </li>
          </ul>
          <p class="text-base leading-6 text-gray-600 mt-2">
            Academic, bootcamp, and nonprofit organizations can contact me for a bigger bulk discount.
          </p>
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Do you do Purchasing Power Parity?
          </p>
          <p class="text-base leading-6 text-gray-600 mt-2">
            We use Podia to process payments, and unfortunately PPP is not
            supported at this time. However the Launch Sale discount will be the
            lowest price offered for the book!
          </p>
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Can I use Paypal?
          </p>
          <p class="text-base leading-6 text-gray-600 mt-2">
            Podia doesn't support Paypal, so we have <a href="https://gumroad.com/products/bAZJq">setup a Gumroad mirror</a> that can take payments there! Please contact swyx@hey.com if you need some other payment method.
          </p>
        </div>
      </div>
      <div class="mt-12 sm:mt-0">
        <div class="">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Refund Policy? Upgrades?
          </p>
          <p class=" mt-2 text-base leading-6 text-gray-600">
            Yes, 30 days, no questions asked (but if you have criticisms and feedback, I will gladly hear them!). Same goes if you buy a package and want to upgrade – just email me and you can pay the difference.
          </p>
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            How can I get future updates?
          </p>
          <p class=" mt-2 text-base leading-6 text-gray-600">
            Upon purchase, you will have a Podia account tied to your email. You
            can use this to login and download your purchases any time. We will
            email you every time a new edition of the book comes out!
          </p>
        </div>
        <div id="files" class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            What format are the files?
          </p>
          <p class="mt-2 text-base leading-6 text-gray-600">
            Get the most out of your Coding Career journey with monthly live
            workshops. Dive deeper into selected topics from the book and others
            that didn’t make the cut (yet!). Planned sessions in July are
            Sundays at 12pm EST (9am PDT):
          </p>
          <ul class="list-inside text-gray-600 mt-4 ml-3 ">
            <li class="list-disc">
              The Coding Career Handbook is available in PDF, EPUB and MOBI at
              all 3 tiers.
            </li>
            <li class="list-disc mt-2">
              The <span class="font-bold">Bibliography</span> extracts the 1400+ external links referenced in
              the book as a convenience for those using e-readers on separate
              devices.
            </li>
            <li class="list-disc mt-2">
              The <span class="font-bold">Audiobook</span> version is available with the Community Package as a
              zip of mp3 files. <a href="https://drive.google.com/drive/folders/1s1xB0Qz5GGMWktuQYsgmcZxiC2GHQccd?usp=sharing" class="text-yellow-700">Here is a sample audio chapter! </a><span class="italic">
                Note: due to a recording snafu, only half the chapters are
                available at launch. The rest will be rerecorded soon!
              </span>
            </li>
            <li class="list-disc mt-2">
              The Creator Package comes with <span class="font-bold">2 hours of extra author commentary</span>
              and <span class="font-bold">10 hours of livestreamed writing process</span> (mp4 files)!
            </li>
          </ul>
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Your site is broken!
          </p>
          <p class=" mt-2 text-base leading-6 text-gray-600">
            I use
            <a href="https://www.podia.com/?via=shawn-wang">Podia</a>
            for purchasing and its embedded JavaScript can fail in two ways:
            Either it is blocked by an overzealous
            <a href="https://privacybadger.org/">Privacy Badger</a>
            , or you have ”Block third-party cookies” turned on in desktop
            Chrome (
            <a href="chrome://settings/cookies">chrome://settings/cookies</a>
            ). Either way, there should be a not-very-graceful fallback to send
            you to the Podia purchase page.
            <br />
            <br />
            If the site is broken in some other
            way, please contact me and I’ll fix it right away! Contact info
            below 👇
          </p>
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            I have another question!
          </p>
          <p class=" mt-2 text-base leading-6 text-gray-600">
            Shoot me an email at swyx@hey.com or tweet me
            <a href="https://twitter.com/swyx">@swyx!</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
