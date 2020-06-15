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
</style>

<section class="content-section">
  <div class="container">
    <div class="single-col-max mx-auto">
      <h2 class="section-heading text-center mb-5">What's Included</h2>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="figure-holder mb-5">
            <img
              class="img-fluid"
              src="https://demos.onepagelove.com/html/devbook/assets/images/devbook-devices.png"
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
                List your book's content here.
              </li>
              <li>
                <Check />
                PDF fermentum tincidunt erat.
              </li>
              <li>
                <Check />
                EPUB curabitur fermentum.
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
