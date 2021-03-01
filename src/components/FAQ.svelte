<script>
  import { onMount, onDestroy } from "svelte";
  import Button from "./Button.svelte";
  let affiliateCode = "";
  let couponCode = null;
  let hash;
  let interval = setInterval(() => {
    hash = window.location.hash;
  }, 500);

  let search = "";
  onMount(() => {
    search = window.location.search;
  });
  /**
   *
   * stripe stuff
   */
  export let stripe;
  function checkout({ item, coupon }) {
    let prefix = "";
    if (window.location.hostname === "localhost")
      prefix = "http://localhost:3333";
    return fetch(prefix + "/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item,
        coupon,
        referer: "nuzie",
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error && result.error.raw) {
          alert('Error: ' + result.error.raw.message);
          throw 'INVALIDCOUPON'
        } else {
          return result
        }
      })
      .then(
        (session) =>
          console.log({ session }) ||
          stripe.redirectToCheckout({ sessionId: session.id })
      )
      .then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      })
      .catch(function (error) {
        if (error === 'INVALIDCOUPON') return // already errored
        alert("Some error happened - please report to swyx if there has been a mistake. Sorry! Error: ", error)
        console.error("Error:", error);
      });
  }

  let b5 = 149;
  let b10 = 279;
  let b20 = 399;
  let c5 = 249;
  let c10 = 479;
  onMount(() => {
    couponCode =
      new URLSearchParams(window.location.search).get("c") || couponCode;

    if (couponCode === "BLACKFRIYAY") {
      b5 = Math.round(b5 * 0.5);
      b10 = Math.round(b10 * 0.5);
      b20 = Math.round(b20 * 0.5);
      c5 = Math.round(c5 * 0.5);
      c10 = Math.round(c10 * 0.5);
    }

    affiliateCode = new URLSearchParams(window.location.search).get("a");
    affiliateCode =
      {
        tretuna: "p5kuh",
        gergely: "uguka",
        erik: "354p7",
        tlakomy: "5ssju",
        sebastien: "gozhi",
      }[affiliateCode] || affiliateCode;
    if (!affiliateCode) {
      // try to restore from localstorage
      affiliateCode = window.localStorage.getItem("swyxAffiliateCode");
    }
    affiliateCode = affiliateCode ? `/${affiliateCode}` : "";
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  function highlightHash(node) {
    const myhash = "#" + node.id;
    return {
      update(theirhash) {
        console.log({ theirhash });
        if (theirhash === myhash) node.classList.add("bg-yellow-200");
        else node.classList.remove("bg-yellow-200");
      },
    };
  }
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
        <div id="community" use:highlightHash={hash}>
          <p class="text-lg leading-6 font-medium text-gray-900">
            Tell me more about the Coding Career Community!
          </p>
          <p class="text-base leading-6 text-gray-650 mt-2">
            Ever feel like you didn’t have anyone outside work to talk to about
            your career?
          </p>
          <p class="text-base leading-6 text-gray-650 mt-2">
            <strong>The Coding Career Community</strong> has two parts:
            a moderated Discord (realtime live chat) and Circle community (async knowledge base).
            Membership is for life — Engage as much or as little as you need. We'll be here for you.
          </p>
          <p class="text-base leading-6 text-gray-650 mt-2">
            I have extensive dev community moderation experience having served the
            200k-strong
            <a
                    href="https://www.reddit.com/r/reactjs/"
                    target="_blank"
                    rel="noreferrer"
                    class=" text-blue-500">
              /r/reactjs community
            </a> and started the
            <a
                    href="https://twitter.com/SvelteSociety"
                    target="_blank"
                    rel="noreferrer"
                    class=" text-blue-500">
              Svelte Society
            </a>
            global movement.

            We are active with <strong>new topics every day</strong>.
            Ask questions, get feedback, find jobs and collaborators, and use as a friendly
            resource as you build your coding career!
          </p>
          <p class="text-base leading-6 text-gray-650 mt-2 italic">
            Note: This is a professional community. Participation is subject to a Code of
            Conduct. You will be removed if you repeatedly violate it.
          </p>
          <Button text="Buy Now" cta {search} />
        </div>
        <div id="workshops" use:highlightHash={hash} class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Tell me more about the Creator Workshops!
          </p>
          <p class="mt-2 text-base leading-6 text-gray-650">
            Creator Workshops is our growing library of topical discussions on starting your Creator journey.
            You also join our
            <a
              href="https://en.wikipedia.org/wiki/Mastermind_group"
              class="underline hover:text-yellow-900 text-yellow-700">Mastermind
              Group</a>
            of fellow Creators - People who want to
            <span class="font-bold">make money Learning in Public</span>!
            Recorded Workshops included:
          </p>
          <ul class="list-inside text-gray-650 mt-4 ml-3">
            <li class="list-disc">
              <span class="font-bold">Principles</span>: Learning in Public
            </li>
            <li class="list-disc">
              <span class="font-bold">Strategy</span>: The Business of Software
            </li>
            <li class="list-disc">
              <span class="font-bold">Tactics</span>: Writing and Speaking
            </li>
            <li class="list-disc"><span class="font-bold">Indiehacking</span>
            </li>
            <li class="list-disc"><span class="font-bold">Coding Career Codebase
              Walkthrough</span>
            </li>
            <li class="list-disc"><span class="font-bold">Blogging for Developers</span> with <a
                    href="https://bloggingfordevs.com/"
                    class="underline hover:text-yellow-900 text-yellow-700">Monica Lent</a>
            </li>
            <li class="list-disc"><span class="font-bold">Creator Chats</span> with the likes of <a
                    href="https://www.youtube.com/channel/UCvM5YYWwfLwpcQgbRr68JLQ"
                    class="underline hover:text-yellow-900 text-yellow-700">Adrian Twarog</a> (Design), <a
                    href="https://www.youtube.com/channel/UCshZ3rdoCLjDYuTR_RBubzw"
                    class="underline hover:text-yellow-900 text-yellow-700">Erik Hanchett</a> (YouTube), and <a
                    href="https://twitter.com/alexwestco/status/1295767414894768128"
                    class="underline hover:text-yellow-900 text-yellow-700">Alex West</a> (Indiehacking)
            </li>
          </ul>
          <p class="mt-2 text-base leading-6 text-gray-650">
            All workshops are recorded, so this becomes an ever-growing
            library of creator content.
          </p>
          <p class="mt-2 text-base leading-6 text-gray-650 italic">
            Note: The Creator Package will be moving to application-only Cohorts soon. Standalone workshops are available on
            request for bootcamps and small teams.
          </p>
          <Button text="Buy Now" cta {search} />
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Do you do Purchasing Power Parity?
          </p>
          <p class="text-base leading-6 text-gray-650 mt-2">
            We use Stripe to process payments, and unfortunately PPP is not
            supported at this time. If you have particular special needs, feel
            free to get in touch to work something out.
          </p>
        </div>
      </div>
      <div class="mt-12 sm:mt-0">
        <div class="">
          <p class="text-lg leading-6 font-medium text-gray-900">
            How can I get future updates?
          </p>
          <p class=" mt-2 text-base leading-6 text-gray-650">
            Upon purchase, you will be invited to create a Circle account. You
            can use this to login and download your purchases any time (You can
            <a
                    class="text-blue-500 hover:underline"
                    href="https://codingcareer.circle.so/">log in here</a>). We will
            email you every time a new edition of the book comes out!
          </p>
        </div>
        <div class="mt-12 ">
          <p class="mt-2 text-lg leading-6 font-medium text-gray-900">
            Refund Policy? Upgrades?
          </p>
          <p class=" mt-2 text-base leading-6 text-gray-650">
            Yes, 30 days, no questions asked (but feedback greatly appreciated!). Same goes if you buy a package
            and want to upgrade – just email me and you can pay the difference.
          </p>
        </div>
        <div id="team-pricing" use:highlightHash={hash} class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Is there any DRM? Team plans?
          </p>
          <p class="text-base leading-6 text-gray-650 mt-2">
            No DRM, you should enjoy a hassle-free experience! If you purchase
            an individual license, please respect the license terms and do not
            distribute any copies.
          </p>
          <p class="text-base leading-6 text-gray-650 mt-2">
            Team licenses are available:
          </p>
          <ul class="list-inside text-gray-650 mt-4 ml-3">
            <li class="list-disc">
              Handbook (
              <button
                on:click={() => checkout({ item: 'book5' })}
                class="underline hover:text-yellow-900 text-yellow-700">
                ${b5} for 5
              </button>,
              <button
                on:click={() => checkout({ item: 'book10' })}
                class="underline hover:text-yellow-900 text-yellow-700">
                ${b10} for 10
              </button>,
              <button
                on:click={() => checkout({ item: 'book20' })}
                class="underline hover:text-yellow-900 text-yellow-700">
                ${b20} for 20
              </button>)
            </li>
            <li class="list-disc">
              Career Package (
              <button
                on:click={() => checkout({ item: 'community5' })}
                class="underline hover:text-yellow-900 text-yellow-700">
                ${c5} for 5
              </button>,
              <button
                on:click={() => checkout({ item: 'community10' })}
                class="underline hover:text-yellow-900 text-yellow-700">
                ${c10} for 10
              </button>
              )
            </li>
          </ul>
          <p class="text-base leading-6 text-gray-650 mt-2">
            If you are a team lead going through the book, I also offer a 60 minute Q&A session on request.
          </p>
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Can I use Paypal? Gumroad?
          </p>
          <p class="text-base leading-6 text-gray-650 mt-2">
            Stripe doesn't support Paypal, so we have
            <a
              class="underline hover:text-yellow-900 text-yellow-700"
              href="https://gumroad.com/l/bAZJq/">setup a Gumroad mirror</a>
            that can take payments there! Please contact swyx@hey.com if you
            need some other payment method.
          </p>
        </div>
        <div
          id="files"
          use:highlightHash={hash}
          class="mt-12"
          class:border-yellow-700={hash === '#files'}>
          <p class="text-lg leading-6 font-medium text-gray-900">
            What format are the files?
          </p>
          <ul class="list-inside text-gray-650 mt-4 ml-3 ">
            <li class="list-disc">
              The Coding Career Handbook is available in PDF, EPUB and MOBI at
              all 3 tiers. There is no physical print version - yet.
            </li>
            <li class="list-disc mt-2">
              The
              <span class="font-bold">Bibliography</span>
              extracts the 1400+ external links referenced in the book to help those using e-reader devices follow along on mobile.
            </li>
            <li class="list-disc mt-2">
              The
              <span class="font-bold">10 Hour Audiobook</span>
              version is available with the Career Package as a zip of mp3
              files.
              <a
                href="https://drive.google.com/drive/folders/1s1xB0Qz5GGMWktuQYsgmcZxiC2GHQccd?usp=sharing"
                class="text-yellow-700">Here is a sample audio chapter!
              </a>
            </li>
            <li class="list-disc mt-2">
              The Creator Workshops come with
              <span class="font-bold">5 hours</span> of extra Author Commentary,
              <span class="font-bold">10 hours</span> of livestreamed writing process,
              and many more hours of recorded Workshops, all in
              <span class="font-bold">.mp4 files</span>.
            </li>
          </ul>
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            I have another question!
          </p>
          <p class=" mt-2 text-base leading-6 text-gray-650">
            Shoot me an email at swyx@hey.com or tweet me
            <a href="https://twitter.com/swyx">@swyx!</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
