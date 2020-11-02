<script>
  import { onMount, onDestroy } from "svelte";
  let affiliateCode = "";
  let hash;
  let interval = setInterval(() => {
    hash = window.location.hash;
  }, 500);

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
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response)
        } else {
          return Promise.reject(new Error(response))
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
      .catch(function ({error}) {
        if (error.raw && error.raw.message) {
          alert('Error: ' + error.raw.message)
        } else {
          alert("Some error happened - please report to swyx if there has been a mistake. Sorry! Error: ", error)
        }
        console.error("Error:", error);
      });
  }

  onMount(() => {
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
            Tell me more about the Coding Career Community?
          </p>
          <p class="text-base leading-6 text-gray-600 mt-2">
            Ever feel like you didn’t have anyone outside work to talk to about
            your career? Here’s a dedicated space where you can do exactly that!
            <strong>The Coding Career Community</strong>
            is a moderated Discord chat where you can talk with other readers
            about the ideas from the book and more. Ask questions, give
            criticism, find collaborators, and generally use as a friendly
            resource as you build your coding career!
          </p>
          <p class="text-base leading-6 text-gray-600 mt-2 italic">
            Note: Participation in the Community is subject to a Code of
            Conduct, and your questions are not guaranteed to be answered.
            <strong>This is a new community</strong>
            and therefore there is a lot left to figure out!
          </p>
        </div>
        <div id="workshops" use:highlightHash={hash} class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Tell me more about the Creator Workshops?
          </p>
          <p class="mt-2 text-base leading-6 text-gray-600">
            Get the most out of your Coding Career journey with monthly live
            workshops, and join our
            <a
              href="https://en.wikipedia.org/wiki/Mastermind_group"
              class="underline hover:text-yellow-900 text-yellow-700">Mastermind
              Group</a>
            of fellow Creators - People who want to
            <span class="font-bold">make money Learning in Public</span>!
            Workshops are live over Zoom, Sundays at 12pm ET (9am PT):
          </p>
          <ul class="list-inside text-gray-600 mt-4 ml-3">
            <li class="list-disc">
              <span class="font-bold">July</span>
              ✅: Learning in Public
            </li>
            <li class="list-disc">
              <span class="font-bold">July</span>
              ✅: The Business of Software
            </li>
            <li class="list-disc">
              <span class="font-bold">July</span>
              ✅: Writing and Speaking
            </li>
            <li class="list-disc">
              <span class="font-bold">August</span>✅: Indiehacking
            </li>
            <li class="list-disc">
              <span class="font-bold">September</span>✅: Monica Lent on
              Blogging
            </li>
            <li class="list-disc">
              <span class="font-bold">September</span>✅: Creator Coaching -
              Adrian Twarog
            </li>
            <li class="list-disc">
              <span class="font-bold">October</span>✅: Alex West on
              Indiehacking
            </li>
            <li class="list-disc">
              <span class="font-bold">October</span>: Coding Career Codebase
              Walkthrough
            </li>
            <li class="list-disc">
              More workshops based on demand/inspiration!
            </li>
          </ul>
          <p class="mt-2 text-base leading-6 text-gray-600">
            All workshops will be recorded, so this becomes an ever-growing
            library of creator content.
          </p>
          <p class="mt-2 text-base leading-6 text-gray-600 italic">
            Note: Invites will come via email, all recordings will be available
            via our Circle workspace. Standalone workshops are available on
            request for bootcamps and small teams.
          </p>
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Do you do Purchasing Power Parity?
          </p>
          <p class="text-base leading-6 text-gray-600 mt-2">
            We use Stripe to process payments, and unfortunately PPP is not
            supported at this time. If you have particular special needs, feel
            free to get in touch to work something out.
          </p>
        </div>
        <div class="mt-12 ">
          <p class="mt-2 text-lg leading-6 font-medium text-gray-900">
            Refund Policy? Upgrades?
          </p>
          <p class=" mt-2 text-base leading-6 text-gray-600">
            Yes, 30 days, no questions asked (but if you have criticisms and
            feedback, I will gladly hear them!). Same goes if you buy a package
            and want to upgrade – just email me and you can pay the difference.
          </p>
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            How can I get future updates?
          </p>
          <p class=" mt-2 text-base leading-6 text-gray-600">
            Upon purchase, you will be invited to create a Circle account. You
            can use this to login and download your purchases any time (You can
            <a
              class="text-blue-500 hover:underline"
              href="https://codingcareer.circle.so/">log in here</a>). We will
            email you every time a new edition of the book comes out!
          </p>
        </div>
      </div>
      <div class="mt-12 sm:mt-0">
        <div id="team-pricing" use:highlightHash={hash} class="">
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
              Handbook (
              <button
                on:click={() => checkout({ item: 'book5' })}
                class="underline hover:text-yellow-900 text-yellow-700">
                up to 5 - $149
              </button>,
              <button
                on:click={() => checkout({ item: 'book10' })}
                class="underline hover:text-yellow-900 text-yellow-700">
                up to 10 - $279
              </button>)
            </li>
            <li class="list-disc">
              Community Package (
              <button
                on:click={() => checkout({ item: 'community5' })}
                class="underline hover:text-yellow-900 text-yellow-700">
                up to 5 - $249
              </button>,
              <button
                on:click={() => checkout({ item: 'community10' })}
                class="underline hover:text-yellow-900 text-yellow-700">
                up to 10 - $479
              </button>
              )
            </li>
          </ul>
          <p class="text-base leading-6 text-gray-600 mt-2">
            Academic, bootcamp, and nonprofit organizations can contact me for a
            bigger bulk discount.
          </p>
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Can I use Paypal? Gumroad?
          </p>
          <p class="text-base leading-6 text-gray-600 mt-2">
            Stripe doesn't support Paypal, so we have
            <a
              class="underline hover:text-yellow-900 text-yellow-700"
              href="https://gumroad.com/products/bAZJq">setup a Gumroad mirror</a>
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
          <ul class="list-inside text-gray-600 mt-4 ml-3 ">
            <li class="list-disc">
              The Coding Career Handbook is available in PDF, EPUB and MOBI at
              all 3 tiers.
            </li>
            <li class="list-disc mt-2">
              The
              <span class="font-bold">Bibliography</span>
              extracts the 1400+ external links referenced in the book as a
              convenience for those using e-readers on separate devices.
            </li>
            <li class="list-disc mt-2">
              The
              <span class="font-bold">10 Hour Audiobook</span>
              version is available with the Community Package as a zip of mp3
              files.
              <a
                href="https://drive.google.com/drive/folders/1s1xB0Qz5GGMWktuQYsgmcZxiC2GHQccd?usp=sharing"
                class="text-yellow-700">Here is a sample audio chapter!
              </a><span class="italic">
                Note: due to a recording snafu, only half the chapters are
                available at launch. The rest will be rerecorded soon!
              </span>
            </li>
            <li class="list-disc mt-2">
              The Creator Package comes with
              <span class="font-bold">3+ hours of extra Author Commentary</span>
              and
              <span class="font-bold">10 hours of livestreamed writing process</span>
              (mp4 files)!
            </li>
          </ul>
        </div>
        <div class="mt-12">
          <p class="text-lg leading-6 font-medium text-gray-900">
            Your site is broken!
          </p>
          <p class=" mt-2 text-base leading-6 text-gray-600">
            Adblockers sometimes really get in the way. Have you tried viewing this in incognito?
            <br />
            <br />
            If the site is still broken, please contact me and I’ll
            fix it right away! Contact info below 👇
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
