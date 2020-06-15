<script>
  import Quotes from "./_Quotes.svelte";
</script>

<style>
  .reviews-section .source-profile {
    width: 60px;
  }
  .reviews-section .quote {
    font-style: italic;
  }
  .reviews-section .icon-holder {
    position: absolute;
    left: 50%;
    top: -18px;
    margin-left: -18px;
    display: inline-block;
    width: 36px;
    height: 36px;
    background: #f5a782;
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
    background: #f6f8fc;
  }
</style>

<section id="reviews-section" class="reviews-section py-5">
  <div class="container">
    <h2 class="section-heading text-center">Book Reviews</h2>
    <div class="section-intro text-center single-col-max mx-auto mb-5">
      See what our readers are saying.
    </div>
    <div class="row justify-content-center">
      <div class="item col-12 col-lg-4 p-3 mb-4">
        <div class="item-inner theme-bg-light rounded p-4">

          <blockquote class="quote">
            "Excellent Book! Add your book review here consectetur adipiscing
            elit. Aliquam euismod nunc porta urna facilisis tempor. "
          </blockquote>
          <!--//item-->
          <div class="source media flex-column flex-md-row align-items-center">
            <img
              class="source-profile mr-md-3"
              src="https://demos.onepagelove.com/html/devbook/assets/images/profiles/profile-1.png"
              alt="" />
            <div class="source-info media-body text-center text-md-left">
              <div class="source-name">James Doe</div>
              <div class="soure-title">Co-Founder, Startup Week</div>
            </div>
          </div>
          <!--//source-->
          <div class="icon-holder">
            <Quotes />
          </div>
        </div>
        <!--//inner-->
      </div>
      <!--//item-->
      <div class="item col-12 col-lg-4 p-3 mb-4">
        <div class="item-inner theme-bg-light rounded p-4">
          <blockquote class="quote">
            "Great Book! Add your book review here consectetur adipiscing elit.
            Aliquam euismod nunc porta urna facilisis tempor. Praesent mauris
            neque."
          </blockquote>
          <!--//item-->
          <div class="source media flex-column flex-md-row align-items-center">
            <img
              class="source-profile mr-md-3"
              src="https://demos.onepagelove.com/html/devbook/assets/images/profiles/profile-2.png"
              alt="" />
            <div class="source-info media-body text-center text-md-left">
              <div class="source-name">Jean Doe</div>
              <div class="soure-title">Co-Founder, Company Tristique</div>
            </div>
          </div>
          <!--//source-->
          <div class="icon-holder">
            <Quotes />
          </div>
        </div>
        <!--//inner-->
      </div>
      <!--//item-->
      <div class="item col-12 col-lg-4 p-3 mb-4">
        <div class="item-inner theme-bg-light rounded p-4">
          <blockquote class="quote">
            "Excellent Book! Add your book review here consectetur adipiscing
            elit. Pellentesque ac leo turpis. Phasellus imperdiet id ligula
            tempor imperdiet."
          </blockquote>
          <!--//item-->
          <div class="source media flex-column flex-md-row align-items-center">
            <img
              class="source-profile mr-md-3"
              src="https://demos.onepagelove.com/html/devbook/assets/images/profiles/profile-3.png"
              alt="" />
            <div class="source-info media-body text-center text-md-left">
              <div class="source-name">Tom Doe</div>
              <div class="soure-title">Product Designer, Company Lorem</div>
            </div>
          </div>
          <!--//source-->
          <div class="icon-holder">
            <Quotes />
          </div>
        </div>
        <!--//inner-->
      </div>
      <!--//item-->
      <div class="item col-12 col-lg-4 p-3 mb-4">
        <div class="item-inner theme-bg-light rounded p-4">
          <blockquote class="quote">
            "Another book review here consectetur adipiscing elit. Pellentesque
            ac leo turpis. Phasellus imperdiet id ligula tempor imperdiet."
          </blockquote>
          <!--//item-->
          <div class="source media flex-column flex-md-row align-items-center">
            <img
              class="source-profile mr-md-3"
              src="https://demos.onepagelove.com/html/devbook/assets/images/profiles/profile-4.png"
              alt="" />
            <div class="source-info media-body text-center text-md-left">
              <div class="source-name">Alice Doe</div>
              <div class="soure-title">App Developer, Company Ipsum</div>
            </div>
          </div>
          <!--//source-->
          <div class="icon-holder">
            <Quotes />
          </div>
        </div>
        <!--//inner-->
      </div>
      <!--//item-->
      <div class="item col-12 col-lg-4 p-3 mb-4">
        <div class="item-inner theme-bg-light rounded p-4">
          <blockquote class="quote">
            "Another book review here consectetur adipiscing elit. Pellentesque
            ac leo turpis. Phasellus imperdiet id ligula tempor imperdiet."
          </blockquote>
          <!--//item-->
          <div class="source media flex-column flex-md-row align-items-center">
            <img
              class="source-profile mr-md-3"
              src="https://demos.onepagelove.com/html/devbook/assets/images/profiles/profile-5.png"
              alt="" />
            <div class="source-info media-body text-center text-md-left">
              <div class="source-name">Sam Doe</div>
              <div class="soure-title">Co-Founder, Company Integer</div>
            </div>
          </div>
          <!--//source-->
          <div class="icon-holder">
            <Quotes />
          </div>
        </div>
        <!--//inner-->
      </div>
      <!--//item-->
    </div>
    <!--//row-->
    <div class="text-center">
      <a
        class="btn btn-primary"
        href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devbook-free-bootstrap-4-book-ebook-landing-page-template-for-developers/">
        Get Your Copy Today
      </a>
    </div>
  </div>
  <!--//container-->
</section>
