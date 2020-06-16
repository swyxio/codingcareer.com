<script>
</script>

<style>
  @media (min-width: 992px) {
    .promo {
      padding-right: 3rem !important;
    }
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
    margin: 0;
  }
  @media (min-width: 768px) {
    .promo {
      padding-right: 1rem !important;
    }
    .img-fluid {
      max-width: 200%;
      margin-left: -50%;
    }
  }
  @media (max-width: 992px) {
    .headline {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  @media (max-width: 992px) {
    .subheadline {
      font-size: 1.125rem;
    }
  }
  .headline {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .subheadline {
    font-size: 1.25rem;
  }
  .book-cover-holder {
    position: relative;
  }
  .hero-quotes .source {
    vertical-align: middle;
    color: #6f75a7;
    font-size: 0.875rem;
  }
  .hero-quotes .source-profile {
    width: 60px;
    height: 60px;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }
  .quote {
    position: relative;
    border-left: 4px solid #f5a782;
    font-style: italic;
  }
  .theme-bg-light {
    background: #f6f8fc;
  }
  .p-4 {
    padding: 1.5rem !important;
  }
  blockquote {
    margin: 0 0 1rem;
  }
  .purple {
    color: darkgoldenrod;
  }
</style>

<section>
  <div class="container">
    <div class="row mb-5">
      <div class="col-12 col-md-7 pt-5 align-self-center">
        <div class="promo pr-md-3 pr-lg-5">
          <h1 class="headline mb-3">
            The
            <span class="purple">Coding</span>
            will always be
            <br />
            the
            <b>easiest</b>
            part
            <br />
            of a
            <span class="purple">Coding Career</span>
          </h1>
          <div class="subheadline mb-4">
            Embarking on a new Dev Career is a scary proposition. There are
            thousands of tutorials helping you learn to code and get that first
            job. But nothing on how to take that technical skill and make a
            great career out of it!
          </div>

          <div class="cta-holder">

            <a class="btn btn-primary mr-lg-2" href="#packages">Buy Now</a>

            <a class="btn btn-secondary scrollto" href="#benefits-section">
              Learn More
            </a>

          </div>

          <div class="hero-quotes mt-5">
            <div
              id="quotes-carousel"
              class="quotes-carousel carousel slide carousel-fade mb-5"
              data-ride="carousel"
              data-interval="8000">

              <div class="carousel-inner">
                <div class="carousel-item">
                  <blockquote class="quote p-4 theme-bg-light">
                    "Excellent Book! Add your book reviews here consectetur
                    adipiscing elit. Aliquam euismod nunc porta urna facilisis
                    tempor. Praesent mauris neque, viverra quis erat vitae,
                    auctor imperdiet nisi."
                  </blockquote>
                  <!--//item-->
                  <div
                    class="source media flex-column flex-md-row
                    align-items-center">
                    <img
                      class="source-profile mr-md-3"
                      src="https://demos.onepagelove.com/html/devbook/assets/images/profiles/profile-3.png"
                      alt="" />
                    <div
                      class="source-info media-body text-center text-md-left">
                      <div class="source-name">James Doe</div>
                      <div class="soure-title">Co-Founder, Startup Week</div>
                    </div>
                  </div>
                  <!--//source-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 align-self-center">
        <div class="book-cover-holder">
          <img
            class="img-fluid book-cover"
            src="/CTCC-cover-1.png"
            alt="book cover" />
          <div class="text-center">
            <a class="theme-link scrollto" href="#reviews-section">
              See all book reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
