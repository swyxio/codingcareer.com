<script>
  import Check from "./_Check.svelte";
</script>

<style>
  .content-section .key-points-list {
    font-size: 1.125rem;
  }
  .content-section .key-points-list li {
    margin-bottom: 1rem;
  }
  @media (min-width: 576px) {
    .img-big {
      max-width: 140%;
    }
  }
</style>

<section class="content-section">
  <div class="container">
    <div class="mx-auto">
      <h2 class="section-heading text-center mb-5">The Complete Package</h2>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="figure-holder mb-5">
            <img
              class="img-fluid img-big"
              src="/book-mock-3.png"
              alt="book demo" />
          </div>
          <!--//figure-holder-->
        </div>
        <!--//col-->
        <div class="col-12 col-md-6 mb-5">
          <div class="key-points mb-4 text-center">
            <ul
              class="key-points-list list-unstyled mb-4 mx-auto d-inline-block
              text-left">
              <li>
                <Check />
                450+ pages of concentrated career advice
              </li>
              <li>
                <Check />
                PDF, EPUB, MOBI versions for all readers
              </li>
              <li>
                <Check />
                Lorem ipsum dolor sit amet.
              </li>
              <li>
                <Check />
                Praesent molestie odio risus.
              </li>
              <li>
                <Check />
                Kindle curabitur fermentum.
              </li>
              <li>
                <Check />
                Kindle curabitur fermentum.
              </li>
              <li>
                <Check />
                Kindle curabitur fermentum.
              </li>
            </ul>
            <div class="text-center">
              <a
                class="btn btn-primary"
                href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devbook-free-bootstrap-4-book-ebook-landing-page-template-for-developers/">
                I want this book
              </a>
            </div>
          </div>
          <!--//key-points-->

        </div>
        <!--//col-12-->
      </div>
      <!--//row-->
    </div>
    <!--//single-col-max-->
  </div>
  <!--//container-->
</section>
