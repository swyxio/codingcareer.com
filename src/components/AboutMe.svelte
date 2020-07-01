<style>
  .theme-bg-primary {
    background: #5e3e0f;
  }
  .author-section {
    color: #fff;
  }
  .author-pic {
    border-radius: 50%;
  }
  .author-section .author-pic {
    width: 150px;
    height: 150px;
  }
  .section-heading {
    font-size: 1.5rem;
  }
  .text-white {
    color: #fff !important;
  }
  .author-section .social-list li {
    background: rgba(0, 0, 0, 0.1);
    width: 36px;
    height: 36px;
    display: inline-block;
    border-radius: 50%;
    padding-top: 6px;
  }
  .author-section .social-list a {
    color: #fff;
  }
  .author-section .social-list a:focus,
  .author-section .social-list a:hover {
    color: #2daae1;
  }
  ul {
    margin: 0;
  }
  a {
    color: #edf518;
    /* color: var(--yellow); */
  }
  .about-me {
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
    -webkit-box-align: start;
    margin-right: 1em;
    margin-left: 1em;
  }
  .titlegroup {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    .about-me {
      flex-direction: row;
      margin-right: auto;
      margin-left: auto;
      max-width: 760px;
    }
    .titlegroup {
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>

<section class="author-section section theme-bg-primary py-5">
  <div class="about-me">
    <div class="author-profile text-center mr-3">
      <img
        class="lazyload author-pic"
        data-src="https://pbs.twimg.com/profile_images/1201029434054041606/efWs7Lr9_400x400.jpg"
        alt="meee" />
    </div>
    <div>
      <div class="titlegroup">
        <h2 class="section-heading text-center text-white">About The Author</h2>
        <div class="author-links text-center pt-4">
          <ul class="social-list list-unstyled">
            <li class="list-inline-item">
              <a href="https://twitter.com/swyx" aria-label="swyx Twitter">
                <svg
                  class="svg-inline--fa fa-twitter fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg="">
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0
                    138.72-105.583 298.558-298.558 298.558-59.452
                    0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34
                    1.299 49.055 0 94.213-16.568
                    130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772
                    6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3
                    27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969
                    7.797 30.214 12.67 47.431
                    13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492
                    5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258
                    216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04
                    0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502
                    12.67 76.67 33.137 23.715-4.548 46.456-13.32
                    66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827
                    21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161
                    39.308-52.628 54.253z" />
                </svg>
                <!-- <i class="fab fa-twitter"></i> -->
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/sw-yx" aria-label="swyx GitHub">
                <svg
                  class="svg-inline--fa fa-github-alt fa-w-15"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github-alt"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 512"
                  data-fa-i2svg="">
                  <path
                    fill="currentColor"
                    d="M186.1 328.7c0 20.9-10.9 55.1-36.7
                    55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7
                    55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1
                    74.8-216.7 74.8-75.8 0-186.2
                    2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5
                    41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3
                    14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0
                    54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6
                    30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39
                    114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37
                    3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2
                    0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5
                    82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4
                    150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9
                    55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
                </svg>
                <!-- <i class="fab fa-github-alt"></i> -->
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://swyx.io" aria-label="swyx website">
                <svg
                  class="svg-inline--fa fa-globe-europe fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="globe-europe"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  data-fa-i2svg="">
                  <path
                    fill="currentColor"
                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111
                    248-248S385 8 248 8zm200 248c0 22.5-3.9 44.2-10.8
                    64.4h-20.3c-4.3
                    0-8.4-1.7-11.4-4.8l-32-32.6c-4.5-4.6-4.5-12.1.1-16.7l12.5-12.5v-8.7c0-3-1.2-5.9-3.3-8l-9.4-9.4c-2.1-2.1-5-3.3-8-3.3h-16c-6.2
                    0-11.3-5.1-11.3-11.3 0-3 1.2-5.9 3.3-8l9.4-9.4c2.1-2.1 5-3.3
                    8-3.3h32c6.2 0 11.3-5.1
                    11.3-11.3v-9.4c0-6.2-5.1-11.3-11.3-11.3h-36.7c-8.8 0-16
                    7.2-16 16v4.5c0 6.9-4.4 13-10.9 15.2l-31.6 10.5c-3.3 1.1-5.5
                    4.1-5.5 7.6v2.2c0 4.4-3.6 8-8 8h-16c-4.4
                    0-8-3.6-8-8s-3.6-8-8-8H247c-3 0-5.8 1.7-7.2 4.4l-9.4
                    18.7c-2.7 5.4-8.2 8.8-14.3 8.8H194c-8.8
                    0-16-7.2-16-16V199c0-4.2 1.7-8.3 4.7-11.3l20.1-20.1c4.6-4.6
                    7.2-10.9 7.2-17.5 0-3.4 2.2-6.5 5.5-7.6l40-13.3c1.7-.6
                    3.2-1.5 4.4-2.7l26.8-26.8c2.1-2.1 3.3-5 3.3-8
                    0-6.2-5.1-11.3-11.3-11.3H258l-16 16v8c0 4.4-3.6 8-8
                    8h-16c-4.4 0-8-3.6-8-8v-20c0-2.5 1.2-4.9
                    3.2-6.4l28.9-21.7c1.9-.1 3.8-.3 5.7-.3C358.3 56 448 145.7
                    448 256zM130.1 149.1c0-3 1.2-5.9 3.3-8l25.4-25.4c2.1-2.1
                    5-3.3 8-3.3 6.2 0 11.3 5.1 11.3 11.3v16c0 3-1.2 5.9-3.3
                    8l-9.4 9.4c-2.1 2.1-5 3.3-8 3.3h-16c-6.2
                    0-11.3-5.1-11.3-11.3zm128
                    306.4v-7.1c0-8.8-7.2-16-16-16h-20.2c-10.8
                    0-26.7-5.3-35.4-11.8l-22.2-16.7c-11.5-8.6-18.2-22.1-18.2-36.4v-23.9c0-16
                    8.4-30.8 22.1-39l42.9-25.7c7.1-4.2 15.2-6.5
                    23.4-6.5h31.2c10.9 0 21.4 3.9 29.6 10.9l43.2 37.1h18.3c8.5 0
                    16.6 3.4 22.6 9.4l17.3 17.3c3.4 3.4 8.1 5.3 12.9
                    5.3H423c-32.4 58.9-93.8 99.5-164.9 103.1z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="author-bio">
        <p>
          Hello, I'm @swyx! I
          <a
            href="https://medium.com/hackernoon/no-zero-days-my-path-from-code-newbie-to-full-stack-developer-in-12-months-214122a8948f">
            changed careers at age 30
          </a>
          , starting from doing
          <a
            href="https://www.freecodecamp.org/news/shawn-wang-podcast-interview/">
            freeCodeCamp
          </a>
          during nights and weekends in 2017, to
          <a href="https://www.swyx.io/writing/hello-aws/">
            getting hired as a Senior Dev Advocate
          </a>
          at AWS in 2020.
        </p>
        <p>
          In my other pursuits, I
          <a href="https://www.swyx.io/writing/">write</a>
          and
          <a href="https://www.swyx.io/speaking/">speak</a>
          and teach React, TypeScript, Storybook and Node.js (including as an
          <a href="https://egghead.io/s/26zf5">Egghead.io</a>
          instructor). I am a cofounder of
          <a href="https://twitter.com/SvelteSociety">the Svelte Society</a>
          global meetup community and up til recently served as a moderator for
          the 200k-strong
          <a href="https://reddit.com/r/reactjs">/r/reactjs</a>
          community.
        </p>
      </div>
    </div>
  </div>
</section>
