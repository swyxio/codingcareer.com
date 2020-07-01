<script>
  import Quotes from "./_Quotes.svelte";
  import Tweet from "./_Tweet.svelte";

  let data = [
    {
      name: "Randall Kanna",
      title: "Engineer, Author: the Standout Developer",
      img: "/profiles/randall.jpg",
      link: "https://twitter.com/RandallKanna/status/1265506271039496192",
      quote:
        "I was also lucky enough to read @Coding_Career early and I was thoroughly blown away! It’s the book I wish I had when I started my dev career.",
    },
    {
      name: "Samantha Bretous",
      highlight: true,
      title: "Computer magic maker, Software Engineer at Mailchimp",
      img: "/profiles/samantha.jpg",
      link: null,
      quote:
        "I wish I had this book when I was switching jobs. It helps you understand what skills you should leverage and really encourages you not underlevel yourself!",
    },
    {
      name: "Aryan Jabbari",
      title: "The WebDev Coach",
      img: "/profiles/aryan.jpg",
      link: "https://twitter.com/AryanJabbari/status/1263597781286961159",
      quote:
        "The links to high-value blog posts already make the book worth it, never mind the amazing insight and context provided by Shawn. Must buy for #CodeNewbies looking to break in or senior engineers looking to grow!",
    },
    {
      name: "Kent C. Dodds",
      title: "KentCDodds.com",
      highlight: true,
      img: "/profiles/kent.jpg",
      link: null,
      quote: `Wow! The immense wealth of knowledge and experience shared in "The Coding Career Handbook" cannot be overstated. I love how Shawn is able to take his own experience and what he's observed in the careers of others and generalize it to principles that will help others level up their own careers. 5 stars ⭐⭐⭐⭐⭐`,
    },
    {
      name: "Chen Hui Jing",
      title: "CSS lover, Developer Advocate at Nexmo",
      img: "/profiles/hj.png",
      link: null,
      quote:
        "For anyone looking for career advice as a coder but is tired of being told they have to do X or never do Y. Shawn is sharing his personal experiences and knowledge of navigating these sometimes overwhelming waters in the hopes you might find something useful. It's like having a caring big brother in your pocket! (if you read on your phone)",
    },
    {
      name: "Emma Bostian",
      title: "LadyBug.fm, Software Engineer at Spotify",
      img: "/profiles/emma.jpg",
      link: null,
      highlight: true,
      quote:
        "I love that he included information about burnout as this is one of the biggest hurdles new developer encounter early in their career. Shawn has included links to many wonderful resources and graphs from other content creators. The section on negotiation is one I could have used early on in my career.",
    },
    // {
    //   name: "Carlos Roso",
    //   title: "Full Stack Developer, Toptal",
    //   img: "/profiles/carlos.jpg",
    //   // link: "https://twitter.com/caroso1222/status/1266421037689962497?s=20",
    //   link: null,
    //   quote:
    //     "I wish I had this book when I started my career! Every single chapter is like a growth hack but for developers. I'd say this book is worth 1000x long term!",
    // },
    {
      name: "Monica Lent",
      title: "Software engineer, Engineering Manager, Founder",
      img: "/profiles/monica.jpg",
      link: "https://www.producthunt.com/posts/the-coding-career-handbook",
      quote: `Shawn talks about things that experienced engineers and managers learn "the hard way" or by having "already made it" -- but in a way that is accessible for people at all levels of experience. Things that NO ONE talks about, until now!`,
    },
    {
      name: "Dan Abramov",
      title: "JustJavaScript.com",
      highlight: true,
      img: "/profiles/dan.png",
      link: "https://twitter.com/dan_abramov/status/1265463366694440960",
      quote:
        "I’m reading through swyx’s @Coding_Career and I’m genuinely impressed. It’s very dense but reads very lightly. Lots of useful context for someone coming into the industry.",
    },
    // {
    //   name: "Adam Rackis",
    //   title: "JS / C++ Engineer",
    //   img: "/profiles/adam.jpg",
    //   link: null,
    //   quote:
    //     "The Coding Career Handbook is a superb guide to the software engineering career field. I wish I'd had this available to me when I was just starting out 15 years ago!",
    // },
    {
      name: "Forrest Brazeal",
      title: "AWS Serverless Hero, Cloud Bard at ACloudGuru",
      img: "/profiles/forrest.jpg",
      link:
        "https://twitter.com/forrestbrazeal/status/1275846608551317506?s=20",
      quote: `The book could've been called (and I mean this in the best possible way, I really do) "Hacker News: The Good Parts." All the experience-based advice for career success, none of the toxic nonsense.`,
    },
    {
      name: "Scott Hanselman",
      title: "Programmer",
      highlight: true,
      img: "/profiles/scott.jpg",
      link: null,
      quote: `What should I do? Just tell me what to do! There's no One Right Answer for how to become a coder, much less a happy and "successful" one. What there is, however, are thousands of stories of how folks have cracked the coding career themselves! Shawn has put together his story, with a ton of practical and pragmatic real world advice! The great thing about advice? You don't have to take it.  The Coding Career Handbook is a wonderful collection of what's worked and what may not work for you! These are guidelines and tactics that you can incorporate into your coding life and career whether you're a code newbie or a code oldie like me - it's never too late to learn how to be a great programmer!`,
    },
    // {
    //   name: "",
    //   title: "",
    //   img: "/profiles/",
    //   link: null,
    //   quote: ""
    // },
  ];
</script>

<style>
  .reviews-section .icon-holder {
    position: absolute;
    left: 50%;
    top: -18px;
    margin-left: -18px;
    display: inline-block;
    width: 36px;
    height: 36px;
    background: #b7791f;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    padding-top: 6px;
  }
  .reviews-section .item-inner {
    height: 100%;
    position: relative;
  }
  .theme-bg-light {
    background: rgba(246, 248, 252, 0.4); /* #f6f8fc */
  }
  .tweetHover:focus,
  .tweetHover:hover {
    background: #f5c782;
    box-shadow: 0 0 0 2px #2daae1;
    color: #2daae1 !important;
  }
  .highlight {
    border: 1px solid #b7791f;
  }
</style>

<section id="reviews-section" class="menuitem reviews-section py-5">
  <div class="container">
    <h2 class="section-heading text-center">Book Reviews</h2>
    <div class="section-intro text-center single-col-max mx-auto mb-5">
      See what our early readers are saying!
    </div>
    <div class="row justify-content-center">
      {#each data as item, i}
        <div
          class:col-lg-4={i !== data.length - 1}
          class="item col-12 p-3 mb-4">
          <div
            class="item-inner theme-bg-light rounded p-4"
            class:highlight={item.highlight}>

            <blockquote class="quote">{item.quote}</blockquote>
            {#if item.link}
              <a
                href={item.link}
                class="source media flex-column flex-md-row align-items-center">
                <img
                  class="lazyload source-profile mr-md-3"
                  data-src={item.img}
                  alt="" />
                <div class="source-info media-body text-center text-md-left">
                  <div class="source-name">{item.name}</div>
                  <div class="source-title">{item.title}</div>
                </div>
              </a>
            {:else}
              <div
                class="source media flex-column flex-md-row align-items-center">
                <img
                  class="lazyload source-profile mr-md-3"
                  data-src={item.img}
                  alt="" />
                <div class="source-info media-body text-center text-md-left">
                  <div class="source-name">{item.name}</div>
                  <div class="source-title">{item.title}</div>
                </div>
              </div>
            {/if}
            {#if item.link}
              <a
                class="icon-holder tweetHover"
                aria-label="Link to Tweet"
                href={item.link}>
                <Tweet />
              </a>
            {:else}
              <div class="icon-holder">
                <Quotes />
              </div>
            {/if}
          </div>
          <!--//inner-->
        </div>
      {/each}
    </div>
    <!--//row-->
    <!-- <div class="text-center">
      <a
        class="btn btn-primary"
        href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devbook-free-bootstrap-4-book-ebook-landing-page-template-for-developers/">
        Get Your Copy Today
      </a>
    </div> -->
  </div>
  <!--//container-->
</section>
