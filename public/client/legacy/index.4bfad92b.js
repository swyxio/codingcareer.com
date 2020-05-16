import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, v as validate_slots, f as element, g as space, t as text, h as svg_element, j as claim_element, k as children, l as detach_dev, m as claim_space, n as claim_text, o as attr_dev, p as add_location, q as insert_dev, r as append_dev, u as noop, w as create_component, x as query_selector_all, y as claim_component, z as mount_component, A as transition_in, B as transition_out, C as destroy_component } from './client.54b7306d.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Hero.svelte";

function create_fragment(ctx) {
  var div17;
  var div0;
  var t0;
  var div16;
  var div15;
  var div1;
  var t1;
  var t2;
  var h10;
  var span0;
  var t3;
  var t4;
  var span1;
  var t5;
  var t6;
  var div14;
  var div12;
  var div3;
  var div2;
  var t7;
  var t8;
  var h11;
  var span2;
  var t9;
  var t10;
  var span3;
  var t11;
  var t12;
  var p;
  var t13;
  var span4;
  var t14;
  var t15;
  var t16;
  var div4;
  var img0;
  var img0_src_value;
  var t17;
  var div8;
  var dl;
  var div5;
  var dt0;
  var t18;
  var t19;
  var dd0;
  var t20;
  var t21;
  var div6;
  var dt1;
  var t22;
  var t23;
  var dd1;
  var t24;
  var t25;
  var div7;
  var dt2;
  var t26;
  var t27;
  var dd2;
  var t28;
  var t29;
  var div11;
  var span6;
  var a0;
  var t30;
  var t31;
  var span5;
  var t32;
  var t33;
  var t34;
  var div9;
  var a1;
  var t35;
  var t36;
  var div10;
  var a2;
  var svg;
  var defs;
  var style;
  var t37;
  var title;
  var t38;
  var g0;
  var rect0;
  var g1;
  var path;
  var rect1;
  var t39;
  var t40;
  var div13;
  var img1;
  var img1_src_value;
  var block = {
    c: function create() {
      div17 = element("div");
      div0 = element("div");
      t0 = space();
      div16 = element("div");
      div15 = element("div");
      div1 = element("div");
      t1 = text("Coming on June 1st");
      t2 = space();
      h10 = element("h1");
      span0 = element("span");
      t3 = text("You cracked the coding interview.");
      t4 = space();
      span1 = element("span");
      t5 = text("Now what?");
      t6 = space();
      div14 = element("div");
      div12 = element("div");
      div3 = element("div");
      div2 = element("div");
      t7 = text("Coming on June 1st");
      t8 = space();
      h11 = element("h1");
      span2 = element("span");
      t9 = text("You cracked the coding interview.");
      t10 = space();
      span3 = element("span");
      t11 = text("Now what?");
      t12 = space();
      p = element("p");
      t13 = text("Get\n              ");
      span4 = element("span");
      t14 = text("Career Guides, Principles, Strategies & Tactics");
      t15 = text("\n              to build an exceptional dev career!");
      t16 = space();
      div4 = element("div");
      img0 = element("img");
      t17 = space();
      div8 = element("div");
      dl = element("dl");
      div5 = element("div");
      dt0 = element("dt");
      t18 = text("Pages");
      t19 = space();
      dd0 = element("dd");
      t20 = text("200");
      t21 = space();
      div6 = element("div");
      dt1 = element("dt");
      t22 = text("Chapters");
      t23 = space();
      dd1 = element("dd");
      t24 = text("38");
      t25 = space();
      div7 = element("div");
      dt2 = element("dt");
      t26 = text("Complete");
      t27 = space();
      dd2 = element("dd");
      t28 = text("80%");
      t29 = space();
      div11 = element("div");
      span6 = element("span");
      a0 = element("a");
      t30 = text("Get on my mailing list");
      t31 = text("\n              to get\n              ");
      span5 = element("span");
      t32 = text("exclusive prelaunch discounts");
      t33 = text("\n              before June 1!");
      t34 = space();
      div9 = element("div");
      a1 = element("a");
      t35 = text("See Table of Contents");
      t36 = space();
      div10 = element("div");
      a2 = element("a");
      svg = svg_element("svg");
      defs = svg_element("defs");
      style = svg_element("style");
      t37 = text(".cls-1 {\n                        fill: #1da1f2;\n                      }\n                      .cls-2 {\n                        fill: currentColor;\n                      }\n                      .cls-3 {\n                        fill: none;\n                      }\n                    ");
      title = svg_element("title");
      t38 = text("Twitter_Logo_White-on-Blue");
      g0 = svg_element("g");
      rect0 = svg_element("rect");
      g1 = svg_element("g");
      path = svg_element("path");
      rect1 = svg_element("rect");
      t39 = text("\n                Follow #BehindtheScenes");
      t40 = space();
      div13 = element("div");
      img1 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div17 = claim_element(nodes, "DIV", {});
      var div17_nodes = children(div17);
      div0 = claim_element(div17_nodes, "DIV", {
        role: true,
        class: true
      });
      children(div0).forEach(detach_dev);
      t0 = claim_space(div17_nodes);
      div16 = claim_element(div17_nodes, "DIV", {
        class: true
      });
      var div16_nodes = children(div16);
      div15 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div15_nodes = children(div15);
      div1 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes, "Coming on June 1st");
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(div15_nodes);
      h10 = claim_element(div15_nodes, "H1", {
        class: true
      });
      var h10_nodes = children(h10);
      span0 = claim_element(h10_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t3 = claim_text(span0_nodes, "You cracked the coding interview.");
      span0_nodes.forEach(detach_dev);
      t4 = claim_space(h10_nodes);
      span1 = claim_element(h10_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t5 = claim_text(span1_nodes, "Now what?");
      span1_nodes.forEach(detach_dev);
      h10_nodes.forEach(detach_dev);
      t6 = claim_space(div15_nodes);
      div14 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      div12 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      div3 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t7 = claim_text(div2_nodes, "Coming on June 1st");
      div2_nodes.forEach(detach_dev);
      t8 = claim_space(div3_nodes);
      h11 = claim_element(div3_nodes, "H1", {
        class: true
      });
      var h11_nodes = children(h11);
      span2 = claim_element(h11_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t9 = claim_text(span2_nodes, "You cracked the coding interview.");
      span2_nodes.forEach(detach_dev);
      t10 = claim_space(h11_nodes);
      span3 = claim_element(h11_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t11 = claim_text(span3_nodes, "Now what?");
      span3_nodes.forEach(detach_dev);
      h11_nodes.forEach(detach_dev);
      t12 = claim_space(div3_nodes);
      p = claim_element(div3_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t13 = claim_text(p_nodes, "Get\n              ");
      span4 = claim_element(p_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      t14 = claim_text(span4_nodes, "Career Guides, Principles, Strategies & Tactics");
      span4_nodes.forEach(detach_dev);
      t15 = claim_text(p_nodes, "\n              to build an exceptional dev career!");
      p_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t16 = claim_space(div12_nodes);
      div4 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      img0 = claim_element(div4_nodes, "IMG", {
        src: true,
        alt: true
      });
      div4_nodes.forEach(detach_dev);
      t17 = claim_space(div12_nodes);
      div8 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      dl = claim_element(div8_nodes, "DL", {
        class: true
      });
      var dl_nodes = children(dl);
      div5 = claim_element(dl_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      dt0 = claim_element(div5_nodes, "DT", {
        class: true
      });
      var dt0_nodes = children(dt0);
      t18 = claim_text(dt0_nodes, "Pages");
      dt0_nodes.forEach(detach_dev);
      t19 = claim_space(div5_nodes);
      dd0 = claim_element(div5_nodes, "DD", {
        class: true
      });
      var dd0_nodes = children(dd0);
      t20 = claim_text(dd0_nodes, "200");
      dd0_nodes.forEach(detach_dev);
      t21 = claim_space(div5_nodes);
      div5_nodes.forEach(detach_dev);
      div6 = claim_element(dl_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      dt1 = claim_element(div6_nodes, "DT", {
        class: true
      });
      var dt1_nodes = children(dt1);
      t22 = claim_text(dt1_nodes, "Chapters");
      dt1_nodes.forEach(detach_dev);
      t23 = claim_space(div6_nodes);
      dd1 = claim_element(div6_nodes, "DD", {
        class: true
      });
      var dd1_nodes = children(dd1);
      t24 = claim_text(dd1_nodes, "38");
      dd1_nodes.forEach(detach_dev);
      t25 = claim_space(div6_nodes);
      div6_nodes.forEach(detach_dev);
      div7 = claim_element(dl_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      dt2 = claim_element(div7_nodes, "DT", {
        class: true
      });
      var dt2_nodes = children(dt2);
      t26 = claim_text(dt2_nodes, "Complete");
      dt2_nodes.forEach(detach_dev);
      t27 = claim_space(div7_nodes);
      dd2 = claim_element(div7_nodes, "DD", {
        class: true
      });
      var dd2_nodes = children(dd2);
      t28 = claim_text(dd2_nodes, "80%");
      dd2_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      dl_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t29 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      span6 = claim_element(div11_nodes, "SPAN", {
        class: true
      });
      var span6_nodes = children(span6);
      a0 = claim_element(span6_nodes, "A", {
        href: true,
        class: true
      });
      var a0_nodes = children(a0);
      t30 = claim_text(a0_nodes, "Get on my mailing list");
      a0_nodes.forEach(detach_dev);
      t31 = claim_text(span6_nodes, "\n              to get\n              ");
      span5 = claim_element(span6_nodes, "SPAN", {
        class: true
      });
      var span5_nodes = children(span5);
      t32 = claim_text(span5_nodes, "exclusive prelaunch discounts");
      span5_nodes.forEach(detach_dev);
      t33 = claim_text(span6_nodes, "\n              before June 1!");
      span6_nodes.forEach(detach_dev);
      t34 = claim_space(div11_nodes);
      div9 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      a1 = claim_element(div9_nodes, "A", {
        href: true,
        class: true
      });
      var a1_nodes = children(a1);
      t35 = claim_text(a1_nodes, "See Table of Contents");
      a1_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      t36 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      a2 = claim_element(div10_nodes, "A", {
        href: true,
        class: true
      });
      var a2_nodes = children(a2);
      svg = claim_element(a2_nodes, "svg", {
        xmlns: true,
        viewBox: true,
        class: true
      }, 1);
      var svg_nodes = children(svg);
      defs = claim_element(svg_nodes, "defs", {}, 1);
      var defs_nodes = children(defs);
      style = claim_element(defs_nodes, "style", {}, 1);
      var style_nodes = children(style);
      t37 = claim_text(style_nodes, ".cls-1 {\n                        fill: #1da1f2;\n                      }\n                      .cls-2 {\n                        fill: currentColor;\n                      }\n                      .cls-3 {\n                        fill: none;\n                      }\n                    ");
      style_nodes.forEach(detach_dev);
      defs_nodes.forEach(detach_dev);
      title = claim_element(svg_nodes, "title", {}, 1);
      var title_nodes = children(title);
      t38 = claim_text(title_nodes, "Twitter_Logo_White-on-Blue");
      title_nodes.forEach(detach_dev);
      g0 = claim_element(svg_nodes, "g", {
        id: true,
        "data-name": true
      }, 1);
      var g0_nodes = children(g0);
      rect0 = claim_element(g0_nodes, "rect", {
        class: true,
        width: true,
        height: true
      }, 1);
      children(rect0).forEach(detach_dev);
      g0_nodes.forEach(detach_dev);
      g1 = claim_element(svg_nodes, "g", {
        id: true,
        "data-name": true
      }, 1);
      var g1_nodes = children(g1);
      path = claim_element(g1_nodes, "path", {
        class: true,
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      rect1 = claim_element(g1_nodes, "rect", {
        class: true,
        width: true,
        height: true
      }, 1);
      children(rect1).forEach(detach_dev);
      g1_nodes.forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      t39 = claim_text(a2_nodes, "\n                Follow #BehindtheScenes");
      a2_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      t40 = claim_space(div14_nodes);
      div13 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      img1 = claim_element(div13_nodes, "IMG", {
        src: true,
        alt: true
      });
      div13_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      div15_nodes.forEach(detach_dev);
      div16_nodes.forEach(detach_dev);
      div17_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "role", "presentation");
      attr_dev(div0, "class", "h-8 bg-top bg-repeat bg-indigo-200");
      add_location(div0, file, 1, 2, 8);
      attr_dev(div1, "class", "text-center md:text-left lg:hidden tracking-wide uppercase\n        text-indigo-500 font-bold text-lg mb-4 opacity-75");
      add_location(div1, file, 5, 6, 256);
      attr_dev(span0, "class", "md:block");
      add_location(span0, file, 13, 8, 588);
      attr_dev(span1, "class", "md:block text-indigo-700");
      add_location(span1, file, 14, 8, 660);
      attr_dev(h10, "class", "relative lg:hidden font-semibold text-center md:text-left\n        text-3xl md:text-4xl font-display leading-none mb-8");
      add_location(h10, file, 10, 6, 441);
      attr_dev(div2, "class", "hidden lg:block tracking-wide uppercase text-indigo-500\n              font-bold text-lg xl:text-xl mb-4 opacity-75");
      add_location(div2, file, 21, 12, 909);
      attr_dev(span2, "class", "sm:block");
      add_location(span2, file, 30, 14, 1322);
      attr_dev(span3, "class", "sm:block text-indigo-700");
      add_location(span3, file, 31, 14, 1400);
      attr_dev(h11, "class", "hidden lg:block font-semibold text-left md:text-left\n              text-3xl md:text-2xl lg:text-3xl xl:text-5xl font-display\n              leading-none mb-6 xl:mb-8");
      add_location(h11, file, 26, 12, 1116);
      attr_dev(span4, "class", "font-semibold text-black");
      add_location(span4, file, 37, 14, 1654);
      attr_dev(p, "class", "text-xl text-center md:text-left md:text-lg lg:text-xl\n              xl:text-2xl text-grey-700 leading-normal");
      add_location(p, file, 33, 12, 1486);
      attr_dev(div3, "class", "mb-12");
      add_location(div3, file, 20, 10, 877);
      if (img0.src !== (img0_src_value = "/CTCC-cover-1.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "book cover");
      add_location(img0, file, 44, 12, 1925);
      attr_dev(div4, "class", "md:hidden px-8 pt-2 pb-4");
      add_location(div4, file, 43, 10, 1874);
      attr_dev(dt0, "class", "order-2 text-base leading-6 font-medium text-gray-600\n                  hover:text-indigo-600");
      add_location(dt0, file, 50, 16, 2189);
      attr_dev(dd0, "class", "order-1 text-2xl leading-8 font-extrabold\n                  text-indigo-600 sm:text-3xl sm:leading-9");
      add_location(dd0, file, 55, 16, 2376);
      attr_dev(div5, "class", "flex flex-col px-8 pt-8");
      add_location(div5, file, 49, 14, 2135);
      attr_dev(dt1, "class", "order-2 text-base leading-6 font-medium text-gray-600\n                  hover:text-indigo-600");
      add_location(dt1, file, 62, 16, 2641);
      attr_dev(dd1, "class", "order-1 text-2xl leading-8 font-extrabold\n                  text-indigo-600 sm:text-3xl sm:leading-9");
      add_location(dd1, file, 67, 16, 2831);
      attr_dev(div6, "class", "flex flex-col px-8 pt-8");
      add_location(div6, file, 61, 14, 2587);
      attr_dev(dt2, "class", "order-2 text-base leading-6 font-medium text-gray-600\n                  hover:text-yellow-600");
      add_location(dt2, file, 74, 16, 3095);
      attr_dev(dd2, "class", "order-1 text-2xl leading-8 font-extrabold\n                  text-indigo-600 sm:text-3xl sm:leading-9");
      add_location(dd2, file, 79, 16, 3285);
      attr_dev(div7, "class", "flex flex-col px-8 pt-8");
      add_location(div7, file, 73, 14, 3041);
      attr_dev(dl, "class", "-mx-8 -mt-8 flex flex-wrap justify-center");
      add_location(dl, file, 48, 12, 2066);
      attr_dev(div8, "class", "mt-8 overflow-hidden pb-8 text-center");
      add_location(div8, file, 47, 10, 2002);
      attr_dev(a0, "href", "https://tinyletter.com/swyx");
      attr_dev(a0, "class", "underline font-semibold text-blue-700\n                hover:text-indigo-900");
      add_location(a0, file, 91, 14, 3762);
      attr_dev(span5, "class", "text-black font-bold");
      add_location(span5, file, 98, 14, 4010);
      attr_dev(span6, "class", "block text-grey-700 leading-normal text-center md:text-left\n              text-base xl:text-lg font-semibold mb-6 pb-6");
      add_location(span6, file, 88, 12, 3600);
      attr_dev(a1, "href", "https://gum.co/bAZJq");
      attr_dev(a1, "class", "text-sm shadow sm:shadow-none sm:w-auto rounded-lg\n                sm:rounded-none focus:outline-none bg-indigo-500\n                hover:bg-indigo-700 focus:bg-indigo-700 text-white text-shadow\n                uppercase tracking-wide font-semibold px-6 py-4 lg:py-5");
      add_location(a1, file, 105, 14, 4246);
      attr_dev(div9, "class", "sm:focus-within:shadow-outline rounded-lg");
      add_location(div9, file, 104, 12, 4176);
      add_location(style, file, 126, 20, 5218);
      add_location(defs, file, 125, 18, 5191);
      add_location(title, file, 138, 18, 5583);
      attr_dev(rect0, "class", "cls-1");
      attr_dev(rect0, "width", "400");
      attr_dev(rect0, "height", "400");
      add_location(rect0, file, 140, 20, 5704);
      attr_dev(g0, "id", "Dark_Blue");
      attr_dev(g0, "data-name", "Dark Blue");
      add_location(g0, file, 139, 18, 5643);
      attr_dev(path, "class", "cls-2");
      attr_dev(path, "d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23");
      add_location(path, file, 143, 20, 5858);
      attr_dev(rect1, "class", "cls-3");
      attr_dev(rect1, "width", "400");
      attr_dev(rect1, "height", "400");
      add_location(rect1, file, 146, 20, 6458);
      attr_dev(g1, "id", "Logo_FIXED");
      attr_dev(g1, "data-name", "Logo — FIXED");
      add_location(g1, file, 142, 18, 5793);
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 400 400");
      attr_dev(svg, "class", "h-6 w-6 inline pl-1");
      add_location(svg, file, 121, 16, 5028);
      attr_dev(a2, "href", "https://twitter.com/coding_career");
      attr_dev(a2, "class", "text-sm shadow sm:w-auto rounded-lg sm:rounded-none\n                hover:text-teal-700 uppercase tracking-wide font-semibold py-8\n                lg:py-5");
      add_location(a2, file, 116, 14, 4772);
      attr_dev(div10, "class", "sm:focus-within:shadow-outline pt-12 hover:text-teal-700");
      add_location(div10, file, 114, 12, 4673);
      attr_dev(div11, "class", "relative md:max-w-sm text-center md:text-left ");
      add_location(div11, file, 87, 10, 3527);
      attr_dev(div12, "class", "md:w-3/5 px-8");
      add_location(div12, file, 19, 8, 839);
      if (img1.src !== (img1_src_value = "/CTCC-cover-1.png")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "book cover");
      add_location(img1, file, 155, 10, 6738);
      attr_dev(div13, "class", "hidden md:block md:w-2/5 px-8 pt-2 lg:pt-16");
      add_location(div13, file, 154, 8, 6670);
      attr_dev(div14, "class", "relative flex flex-wrap flex-col md:flex-row lg:items-center\n        -mx-8");
      add_location(div14, file, 16, 6, 734);
      attr_dev(div15, "class", "relative container mx-auto px-8");
      add_location(div15, file, 4, 4, 204);
      attr_dev(div16, "class", "py-16 bg-gray-300 overflow-x-hidden");
      add_location(div16, file, 3, 2, 150);
      add_location(div17, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div17, anchor);
      append_dev(div17, div0);
      append_dev(div17, t0);
      append_dev(div17, div16);
      append_dev(div16, div15);
      append_dev(div15, div1);
      append_dev(div1, t1);
      append_dev(div15, t2);
      append_dev(div15, h10);
      append_dev(h10, span0);
      append_dev(span0, t3);
      append_dev(h10, t4);
      append_dev(h10, span1);
      append_dev(span1, t5);
      append_dev(div15, t6);
      append_dev(div15, div14);
      append_dev(div14, div12);
      append_dev(div12, div3);
      append_dev(div3, div2);
      append_dev(div2, t7);
      append_dev(div3, t8);
      append_dev(div3, h11);
      append_dev(h11, span2);
      append_dev(span2, t9);
      append_dev(h11, t10);
      append_dev(h11, span3);
      append_dev(span3, t11);
      append_dev(div3, t12);
      append_dev(div3, p);
      append_dev(p, t13);
      append_dev(p, span4);
      append_dev(span4, t14);
      append_dev(p, t15);
      append_dev(div12, t16);
      append_dev(div12, div4);
      append_dev(div4, img0);
      append_dev(div12, t17);
      append_dev(div12, div8);
      append_dev(div8, dl);
      append_dev(dl, div5);
      append_dev(div5, dt0);
      append_dev(dt0, t18);
      append_dev(div5, t19);
      append_dev(div5, dd0);
      append_dev(dd0, t20);
      append_dev(div5, t21);
      append_dev(dl, div6);
      append_dev(div6, dt1);
      append_dev(dt1, t22);
      append_dev(div6, t23);
      append_dev(div6, dd1);
      append_dev(dd1, t24);
      append_dev(div6, t25);
      append_dev(dl, div7);
      append_dev(div7, dt2);
      append_dev(dt2, t26);
      append_dev(div7, t27);
      append_dev(div7, dd2);
      append_dev(dd2, t28);
      append_dev(div12, t29);
      append_dev(div12, div11);
      append_dev(div11, span6);
      append_dev(span6, a0);
      append_dev(a0, t30);
      append_dev(span6, t31);
      append_dev(span6, span5);
      append_dev(span5, t32);
      append_dev(span6, t33);
      append_dev(div11, t34);
      append_dev(div11, div9);
      append_dev(div9, a1);
      append_dev(a1, t35);
      append_dev(div11, t36);
      append_dev(div11, div10);
      append_dev(div10, a2);
      append_dev(a2, svg);
      append_dev(svg, defs);
      append_dev(defs, style);
      append_dev(style, t37);
      append_dev(svg, title);
      append_dev(title, t38);
      append_dev(svg, g0);
      append_dev(g0, rect0);
      append_dev(svg, g1);
      append_dev(g1, path);
      append_dev(g1, rect1);
      append_dev(a2, t39);
      append_dev(div14, t40);
      append_dev(div14, div13);
      append_dev(div13, img1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div17);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Hero> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Hero", $$slots, []);
  return [];
}

var Hero = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Hero, _SvelteComponentDev);

  var _super = _createSuper(Hero);

  function Hero(options) {
    var _this;

    _classCallCheck(this, Hero);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Hero",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Hero;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/Why.svelte";

function create_fragment$1(ctx) {
  var div5;
  var div4;
  var div3;
  var h20;
  var t0;
  var t1;
  var p0;
  var t2;
  var a0;
  var t3;
  var t4;
  var t5;
  var p1;
  var t6;
  var t7;
  var h21;
  var t8;
  var t9;
  var p2;
  var t10;
  var t11;
  var p3;
  var strong;
  var t12;
  var t13;
  var p4;
  var t14;
  var t15;
  var p5;
  var t16;
  var t17;
  var div0;
  var img0;
  var img0_src_value;
  var t18;
  var p6;
  var t19;
  var t20;
  var h22;
  var t21;
  var t22;
  var p7;
  var t23;
  var t24;
  var p8;
  var t25;
  var t26;
  var p9;
  var t27;
  var a1;
  var t28;
  var t29;
  var a2;
  var t30;
  var t31;
  var a3;
  var t32;
  var t33;
  var t34;
  var div1;
  var figure;
  var blockquote;
  var t35;
  var t36;
  var figcaption;
  var img1;
  var img1_src_value;
  var t37;
  var a4;
  var t38;
  var t39;
  var p10;
  var em;
  var t40;
  var t41;
  var t42;
  var p11;
  var t43;
  var t44;
  var p12;
  var a5;
  var t45;
  var span;
  var t46;
  var t47;
  var div2;
  var img2;
  var img2_src_value;
  var block = {
    c: function create() {
      div5 = element("div");
      div4 = element("div");
      div3 = element("div");
      h20 = element("h2");
      t0 = text("“I know this looks terrible, but I have no idea why.”");
      t1 = space();
      p0 = element("p");
      t2 = text("Hi! I'm\n        ");
      a0 = element("a");
      t3 = text("My Name");
      t4 = text("\n        , a full stack developer who used to suck at design.");
      t5 = space();
      p1 = element("p");
      t6 = text("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,\n        modi. Dolore dolor blanditiis exercitationem ullam, eum explicabo\n        voluptatum eaque suscipit minus qui aspernatur incidunt molestias minima\n        ducimus veritatis asperiores modi.");
      t7 = space();
      h21 = element("h2");
      t8 = text("Design with tactics, not talent.");
      t9 = space();
      p2 = element("p");
      t10 = text("Here's a concrete design tactic I bet you see applied every day but\n        haven't explicitly noticed:");
      t11 = space();
      p3 = element("p");
      strong = element("strong");
      t12 = text("Use fewer borders.");
      t13 = space();
      p4 = element("p");
      t14 = text("Borders are a great way to distinguish two elements from one another,\n        but using too many of them can make your design feel busy and cluttered.");
      t15 = space();
      p5 = element("p");
      t16 = text("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,\n        modi. Dolore dolor blanditiis exercitationem ullam, eum explicabo\n        voluptatum eaque suscipit minus qui aspernatur incidunt molestias minima\n        ducimus veritatis asperiores modi.");
      t17 = space();
      div0 = element("div");
      img0 = element("img");
      t18 = space();
      p6 = element("p");
      t19 = text("It doesn't take any talent to make changes like this — once you know the\n        tactic you just need to notice the problem and apply the solution.");
      t20 = space();
      h22 = element("h2");
      t21 = text("Most design courses are missing the mark.");
      t22 = space();
      p7 = element("p");
      t23 = text("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,\n        modi. Dolore dolor blanditiis exercitationem ullam, eum explicabo\n        voluptatum eaque suscipit minus qui aspernatur incidunt molestias minima\n        ducimus veritatis asperiores modi.");
      t24 = space();
      p8 = element("p");
      t25 = text("Working together, we knew we could create something better.");
      t26 = space();
      p9 = element("p");
      t27 = text("Over the last few years, we've helped thousands of developers get better\n        at design through\n        ");
      a1 = element("a");
      t28 = text("quick tips");
      t29 = text("\n        ,\n        ");
      a2 = element("a");
      t30 = text("in-depth articles");
      t31 = text("\n        , and\n        ");
      a3 = element("a");
      t32 = text("video tutorials");
      t33 = text("\n        .");
      t34 = space();
      div1 = element("div");
      figure = element("figure");
      blockquote = element("blockquote");
      t35 = text("“Please tell me you’re going to write a book with all your tips\n            someday? I’d give you my money in a heartbeat.”");
      t36 = space();
      figcaption = element("figcaption");
      img1 = element("img");
      t37 = space();
      a4 = element("a");
      t38 = text("Sara Soueidan");
      t39 = space();
      p10 = element("p");
      em = element("em");
      t40 = text("Refactoring UI");
      t41 = text("\n        takes everything we know about design and bundles it into one\n        comprehensive package, including a book, screencasts, a component\n        gallery, custom designed assets, and more.");
      t42 = space();
      p11 = element("p");
      t43 = text("It’s exactly what I needed when I was struggling to make my projects\n        look awesome.");
      t44 = space();
      p12 = element("p");
      a5 = element("a");
      t45 = text("Learn more about what's\n          ");
      span = element("span");
      t46 = text("inside →");
      t47 = space();
      div2 = element("div");
      img2 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      h20 = claim_element(div3_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t0 = claim_text(h20_nodes, "“I know this looks terrible, but I have no idea why.”");
      h20_nodes.forEach(detach_dev);
      t1 = claim_space(div3_nodes);
      p0 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "Hi! I'm\n        ");
      a0 = claim_element(p0_nodes, "A", {
        class: true,
        href: true
      });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "My Name");
      a0_nodes.forEach(detach_dev);
      t4 = claim_text(p0_nodes, "\n        , a full stack developer who used to suck at design.");
      p0_nodes.forEach(detach_dev);
      t5 = claim_space(div3_nodes);
      p1 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,\n        modi. Dolore dolor blanditiis exercitationem ullam, eum explicabo\n        voluptatum eaque suscipit minus qui aspernatur incidunt molestias minima\n        ducimus veritatis asperiores modi.");
      p1_nodes.forEach(detach_dev);
      t7 = claim_space(div3_nodes);
      h21 = claim_element(div3_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t8 = claim_text(h21_nodes, "Design with tactics, not talent.");
      h21_nodes.forEach(detach_dev);
      t9 = claim_space(div3_nodes);
      p2 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t10 = claim_text(p2_nodes, "Here's a concrete design tactic I bet you see applied every day but\n        haven't explicitly noticed:");
      p2_nodes.forEach(detach_dev);
      t11 = claim_space(div3_nodes);
      p3 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      strong = claim_element(p3_nodes, "STRONG", {
        class: true
      });
      var strong_nodes = children(strong);
      t12 = claim_text(strong_nodes, "Use fewer borders.");
      strong_nodes.forEach(detach_dev);
      p3_nodes.forEach(detach_dev);
      t13 = claim_space(div3_nodes);
      p4 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p4_nodes = children(p4);
      t14 = claim_text(p4_nodes, "Borders are a great way to distinguish two elements from one another,\n        but using too many of them can make your design feel busy and cluttered.");
      p4_nodes.forEach(detach_dev);
      t15 = claim_space(div3_nodes);
      p5 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p5_nodes = children(p5);
      t16 = claim_text(p5_nodes, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,\n        modi. Dolore dolor blanditiis exercitationem ullam, eum explicabo\n        voluptatum eaque suscipit minus qui aspernatur incidunt molestias minima\n        ducimus veritatis asperiores modi.");
      p5_nodes.forEach(detach_dev);
      t17 = claim_space(div3_nodes);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img0 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      t18 = claim_space(div3_nodes);
      p6 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p6_nodes = children(p6);
      t19 = claim_text(p6_nodes, "It doesn't take any talent to make changes like this — once you know the\n        tactic you just need to notice the problem and apply the solution.");
      p6_nodes.forEach(detach_dev);
      t20 = claim_space(div3_nodes);
      h22 = claim_element(div3_nodes, "H2", {
        class: true
      });
      var h22_nodes = children(h22);
      t21 = claim_text(h22_nodes, "Most design courses are missing the mark.");
      h22_nodes.forEach(detach_dev);
      t22 = claim_space(div3_nodes);
      p7 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p7_nodes = children(p7);
      t23 = claim_text(p7_nodes, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,\n        modi. Dolore dolor blanditiis exercitationem ullam, eum explicabo\n        voluptatum eaque suscipit minus qui aspernatur incidunt molestias minima\n        ducimus veritatis asperiores modi.");
      p7_nodes.forEach(detach_dev);
      t24 = claim_space(div3_nodes);
      p8 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p8_nodes = children(p8);
      t25 = claim_text(p8_nodes, "Working together, we knew we could create something better.");
      p8_nodes.forEach(detach_dev);
      t26 = claim_space(div3_nodes);
      p9 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p9_nodes = children(p9);
      t27 = claim_text(p9_nodes, "Over the last few years, we've helped thousands of developers get better\n        at design through\n        ");
      a1 = claim_element(p9_nodes, "A", {
        class: true,
        href: true
      });
      var a1_nodes = children(a1);
      t28 = claim_text(a1_nodes, "quick tips");
      a1_nodes.forEach(detach_dev);
      t29 = claim_text(p9_nodes, "\n        ,\n        ");
      a2 = claim_element(p9_nodes, "A", {
        class: true,
        href: true
      });
      var a2_nodes = children(a2);
      t30 = claim_text(a2_nodes, "in-depth articles");
      a2_nodes.forEach(detach_dev);
      t31 = claim_text(p9_nodes, "\n        , and\n        ");
      a3 = claim_element(p9_nodes, "A", {
        class: true,
        href: true
      });
      var a3_nodes = children(a3);
      t32 = claim_text(a3_nodes, "video tutorials");
      a3_nodes.forEach(detach_dev);
      t33 = claim_text(p9_nodes, "\n        .");
      p9_nodes.forEach(detach_dev);
      t34 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      figure = claim_element(div1_nodes, "FIGURE", {
        class: true
      });
      var figure_nodes = children(figure);
      blockquote = claim_element(figure_nodes, "BLOCKQUOTE", {
        class: true
      });
      var blockquote_nodes = children(blockquote);
      t35 = claim_text(blockquote_nodes, "“Please tell me you’re going to write a book with all your tips\n            someday? I’d give you my money in a heartbeat.”");
      blockquote_nodes.forEach(detach_dev);
      t36 = claim_space(figure_nodes);
      figcaption = claim_element(figure_nodes, "FIGCAPTION", {
        class: true
      });
      var figcaption_nodes = children(figcaption);
      img1 = claim_element(figcaption_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t37 = claim_space(figcaption_nodes);
      a4 = claim_element(figcaption_nodes, "A", {
        href: true,
        class: true
      });
      var a4_nodes = children(a4);
      t38 = claim_text(a4_nodes, "Sara Soueidan");
      a4_nodes.forEach(detach_dev);
      figcaption_nodes.forEach(detach_dev);
      figure_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t39 = claim_space(div3_nodes);
      p10 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p10_nodes = children(p10);
      em = claim_element(p10_nodes, "EM", {});
      var em_nodes = children(em);
      t40 = claim_text(em_nodes, "Refactoring UI");
      em_nodes.forEach(detach_dev);
      t41 = claim_text(p10_nodes, "\n        takes everything we know about design and bundles it into one\n        comprehensive package, including a book, screencasts, a component\n        gallery, custom designed assets, and more.");
      p10_nodes.forEach(detach_dev);
      t42 = claim_space(div3_nodes);
      p11 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p11_nodes = children(p11);
      t43 = claim_text(p11_nodes, "It’s exactly what I needed when I was struggling to make my projects\n        look awesome.");
      p11_nodes.forEach(detach_dev);
      t44 = claim_space(div3_nodes);
      p12 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p12_nodes = children(p12);
      a5 = claim_element(p12_nodes, "A", {
        href: true,
        class: true
      });
      var a5_nodes = children(a5);
      t45 = claim_text(a5_nodes, "Learn more about what's\n          ");
      span = claim_element(a5_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t46 = claim_text(span_nodes, "inside →");
      span_nodes.forEach(detach_dev);
      a5_nodes.forEach(detach_dev);
      p12_nodes.forEach(detach_dev);
      t47 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      img2 = claim_element(div2_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h20, "class", "max-w-sm mx-auto text-center text-black text-4xl font-display\n        font-semibold leading-tight mb-10");
      add_location(h20, file$1, 7, 6, 190);
      attr_dev(a0, "class", "text-black font-semibold underline");
      attr_dev(a0, "href", "https://twitter.com/swyx");
      add_location(a0, file$1, 15, 8, 437);
      attr_dev(p0, "class", "mb-6");
      add_location(p0, file$1, 13, 6, 396);
      attr_dev(p1, "class", "mb-6");
      add_location(p1, file$1, 23, 6, 646);
      attr_dev(h21, "class", "text-black text-3xl font-display font-semibold leading-tight\n        mt-12 mb-6");
      add_location(h21, file$1, 30, 6, 955);
      attr_dev(p2, "class", "mb-6");
      add_location(p2, file$1, 36, 6, 1116);
      attr_dev(strong, "class", "text-black");
      add_location(strong, file$1, 41, 8, 1287);
      attr_dev(p3, "class", "mb-6");
      add_location(p3, file$1, 40, 6, 1262);
      attr_dev(p4, "class", "mb-6");
      add_location(p4, file$1, 43, 6, 1359);
      attr_dev(p5, "class", "mb-12");
      add_location(p5, file$1, 47, 6, 1552);
      attr_dev(img0, "class", "block w-full");
      if (img0.src !== (img0_src_value = "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/fewer-borders-tip.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "");
      add_location(img0, file$1, 55, 8, 1899);
      attr_dev(div0, "class", "lg:-mx-24 mb-6");
      add_location(div0, file$1, 54, 6, 1862);
      attr_dev(p6, "class", "mb-6");
      add_location(p6, file$1, 61, 6, 2076);
      attr_dev(h22, "class", "text-black text-3xl font-display font-semibold leading-tight\n        mt-12 mb-6");
      add_location(h22, file$1, 66, 6, 2267);
      attr_dev(p7, "class", "mb-6");
      add_location(p7, file$1, 71, 6, 2436);
      attr_dev(p8, "class", "mb-6");
      add_location(p8, file$1, 78, 6, 2745);
      attr_dev(a1, "class", "text-black font-semibold underline");
      attr_dev(a1, "href", "https://twitter.com/i/moments/994601867987619840");
      add_location(a1, file$1, 85, 8, 2980);
      attr_dev(a2, "class", "text-black font-semibold underline");
      attr_dev(a2, "href", "https://medium.com/@refactoringui");
      add_location(a2, file$1, 91, 8, 3155);
      attr_dev(a3, "class", "text-black font-semibold underline");
      attr_dev(a3, "href", "https://www.youtube.com/steveschoger");
      add_location(a3, file$1, 97, 8, 3326);
      attr_dev(p9, "class", "mb-6");
      add_location(p9, file$1, 82, 6, 2848);
      attr_dev(blockquote, "class", "text-black relative text-2xl mx-auto italic mb-4");
      add_location(blockquote, file$1, 107, 10, 3602);
      attr_dev(img1, "class", "rounded-full block h-8 w-8 mr-4");
      if (img1.src !== (img1_src_value = "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/sara-soueidan.jpg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "");
      add_location(img1, file$1, 112, 12, 3908);
      attr_dev(a4, "href", "https://www.sarasoueidan.com/blog/refactoring-ui/");
      attr_dev(a4, "class", "no-underlinendigo-700 hover:text-indigo uppercase\n              tracking-wide font-bold text-base");
      add_location(a4, file$1, 116, 12, 4104);
      attr_dev(figcaption, "class", "flex items-center justify-center");
      add_location(figcaption, file$1, 111, 10, 3842);
      attr_dev(figure, "class", "font-display");
      add_location(figure, file$1, 106, 8, 3562);
      attr_dev(div1, "class", "relative text-center my-16 lg:-mx-4");
      add_location(div1, file$1, 105, 6, 3504);
      add_location(em, file$1, 127, 8, 4431);
      attr_dev(p10, "class", "mb-6");
      add_location(p10, file$1, 126, 6, 4406);
      attr_dev(p11, "class", "mb-6");
      add_location(p11, file$1, 133, 6, 4668);
      attr_dev(span, "class", "inline-block");
      add_location(span, file$1, 143, 10, 4978);
      attr_dev(a5, "href", "#whats-inside");
      attr_dev(a5, "class", "font-semibold text-indigo-700 hover:text-indigo none");
      add_location(a5, file$1, 139, 8, 4828);
      attr_dev(p12, "class", "mb-12");
      add_location(p12, file$1, 138, 6, 4802);
      attr_dev(img2, "class", "block mx-auto");
      if (img2.src !== (img2_src_value = "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/adam-and-steve.png")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "");
      add_location(img2, file$1, 148, 8, 5066);
      add_location(div2, file$1, 147, 6, 5052);
      attr_dev(div3, "class", "relative");
      add_location(div3, file$1, 5, 4, 160);
      attr_dev(div4, "class", "relative max-w-screen-md mx-auto px-8 pt-16 text-xl text-gray-700\n    leading-normal");
      add_location(div4, file$1, 1, 2, 52);
      attr_dev(div5, "class", "relative bg-white overflow-x-hidden");
      add_location(div5, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div5, anchor);
      append_dev(div5, div4);
      append_dev(div4, div3);
      append_dev(div3, h20);
      append_dev(h20, t0);
      append_dev(div3, t1);
      append_dev(div3, p0);
      append_dev(p0, t2);
      append_dev(p0, a0);
      append_dev(a0, t3);
      append_dev(p0, t4);
      append_dev(div3, t5);
      append_dev(div3, p1);
      append_dev(p1, t6);
      append_dev(div3, t7);
      append_dev(div3, h21);
      append_dev(h21, t8);
      append_dev(div3, t9);
      append_dev(div3, p2);
      append_dev(p2, t10);
      append_dev(div3, t11);
      append_dev(div3, p3);
      append_dev(p3, strong);
      append_dev(strong, t12);
      append_dev(div3, t13);
      append_dev(div3, p4);
      append_dev(p4, t14);
      append_dev(div3, t15);
      append_dev(div3, p5);
      append_dev(p5, t16);
      append_dev(div3, t17);
      append_dev(div3, div0);
      append_dev(div0, img0);
      append_dev(div3, t18);
      append_dev(div3, p6);
      append_dev(p6, t19);
      append_dev(div3, t20);
      append_dev(div3, h22);
      append_dev(h22, t21);
      append_dev(div3, t22);
      append_dev(div3, p7);
      append_dev(p7, t23);
      append_dev(div3, t24);
      append_dev(div3, p8);
      append_dev(p8, t25);
      append_dev(div3, t26);
      append_dev(div3, p9);
      append_dev(p9, t27);
      append_dev(p9, a1);
      append_dev(a1, t28);
      append_dev(p9, t29);
      append_dev(p9, a2);
      append_dev(a2, t30);
      append_dev(p9, t31);
      append_dev(p9, a3);
      append_dev(a3, t32);
      append_dev(p9, t33);
      append_dev(div3, t34);
      append_dev(div3, div1);
      append_dev(div1, figure);
      append_dev(figure, blockquote);
      append_dev(blockquote, t35);
      append_dev(figure, t36);
      append_dev(figure, figcaption);
      append_dev(figcaption, img1);
      append_dev(figcaption, t37);
      append_dev(figcaption, a4);
      append_dev(a4, t38);
      append_dev(div3, t39);
      append_dev(div3, p10);
      append_dev(p10, em);
      append_dev(em, t40);
      append_dev(p10, t41);
      append_dev(div3, t42);
      append_dev(div3, p11);
      append_dev(p11, t43);
      append_dev(div3, t44);
      append_dev(div3, p12);
      append_dev(p12, a5);
      append_dev(a5, t45);
      append_dev(a5, span);
      append_dev(span, t46);
      append_dev(div3, t47);
      append_dev(div3, div2);
      append_dev(div2, img2);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Why> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Why", $$slots, []);
  return [];
}

var Why = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Why, _SvelteComponentDev);

  var _super = _createSuper$1(Why);

  function Why(options) {
    var _this;

    _classCallCheck(this, Why);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Why",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Why;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src/components/PullQuote.svelte";

function create_fragment$2(ctx) {
  var div6;
  var div5;
  var div1;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var div4;
  var figure;
  var blockquote;
  var div2;
  var svg0;
  var path0;
  var t1;
  var div3;
  var svg1;
  var path1;
  var t2;
  var figcaption;
  var a;
  var t3;
  var block = {
    c: function create() {
      div6 = element("div");
      div5 = element("div");
      div1 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div4 = element("div");
      figure = element("figure");
      blockquote = element("blockquote");
      div2 = element("div");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      t1 = text("\n          I’d put money on it: will be the best UI design book ever written.\n          ");
      div3 = element("div");
      svg1 = svg_element("svg");
      path1 = svg_element("path");
      t2 = space();
      figcaption = element("figcaption");
      a = element("a");
      t3 = text("Erik Kennedy");
      this.h();
    },
    l: function claim(nodes) {
      div6 = claim_element(nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div1 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t0 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      figure = claim_element(div4_nodes, "FIGURE", {
        class: true
      });
      var figure_nodes = children(figure);
      blockquote = claim_element(figure_nodes, "BLOCKQUOTE", {
        class: true
      });
      var blockquote_nodes = children(blockquote);
      div2 = claim_element(blockquote_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      svg0 = claim_element(div2_nodes, "svg", {
        class: true,
        viewBox: true,
        xmlns: true
      }, 1);
      var svg0_nodes = children(svg0);
      path0 = claim_element(svg0_nodes, "path", {
        d: true,
        fill: true,
        "fill-rule": true
      }, 1);
      children(path0).forEach(detach_dev);
      svg0_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t1 = claim_text(blockquote_nodes, "\n          I’d put money on it: will be the best UI design book ever written.\n          ");
      div3 = claim_element(blockquote_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      svg1 = claim_element(div3_nodes, "svg", {
        class: true,
        viewBox: true,
        xmlns: true
      }, 1);
      var svg1_nodes = children(svg1);
      path1 = claim_element(svg1_nodes, "path", {
        d: true,
        fill: true,
        "fill-rule": true
      }, 1);
      children(path1).forEach(detach_dev);
      svg1_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      blockquote_nodes.forEach(detach_dev);
      t2 = claim_space(figure_nodes);
      figcaption = claim_element(figure_nodes, "FIGCAPTION", {
        class: true
      });
      var figcaption_nodes = children(figcaption);
      a = claim_element(figcaption_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "Erik Kennedy");
      a_nodes.forEach(detach_dev);
      figcaption_nodes.forEach(detach_dev);
      figure_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "rounded-full block");
      if (img.src !== (img_src_value = "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/erik-kennedy.jpg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "");
      add_location(img, file$2, 4, 8, 228);
      attr_dev(div0, "class", "rounded-full p-1.5 border-2");
      add_location(div0, file$2, 3, 6, 178);
      attr_dev(div1, "class", "relative mx-auto rounded-full h-24 w-24 p-1.5 border-2 mb-4");
      add_location(div1, file$2, 2, 4, 98);
      attr_dev(path0, "d", "M30.216 9H35c-2.591 4.338-4.385 8.474-5.282\n                12.307h4.784L32.907 32H22.542l.697-4.842C24.435 19.289 27.226\n                13.237 30.216 9zM12.674 9h4.884c-2.69 4.338-4.485 8.474-5.382\n                12.307h4.784L15.365 32H5l.698-4.842C6.894 19.289 9.684 13.237\n                12.674 9z");
      attr_dev(path0, "fill", "#4E68D0");
      attr_dev(path0, "fill-rule", "evenodd");
      add_location(path0, file$2, 20, 14, 816);
      attr_dev(svg0, "class", "h-8 w-8 sm:h-12 sm:w-12");
      attr_dev(svg0, "viewBox", "0 0 40 40");
      attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg0, file$2, 16, 12, 667);
      attr_dev(div2, "class", "absolute top-0 left-0 mt-5 pl-2");
      add_location(div2, file$2, 15, 10, 609);
      attr_dev(path1, "d", "M9.784 32H5c2.591-4.338 4.385-8.474 5.282-12.307H5.498L7.093\n                9h10.365l-.697 4.842C15.565 21.711 12.774 27.763 9.784\n                32zm17.542 0h-4.884c2.69-4.338 4.485-8.474\n                5.382-12.307H23.04L24.635 9H35l-.698 4.842C33.106 21.711 30.316\n                27.763 27.326 32z");
      attr_dev(path1, "fill", "#4E68D0");
      attr_dev(path1, "fill-rule", "evenodd");
      add_location(path1, file$2, 36, 14, 1550);
      attr_dev(svg1, "class", "h-8 w-8 sm:h-12 sm:w-12");
      attr_dev(svg1, "viewBox", "0 0 40 40");
      attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg1, file$2, 32, 12, 1401);
      attr_dev(div3, "class", "absolute bottom-0 right-0 mb-5 pr-2");
      add_location(div3, file$2, 31, 10, 1339);
      attr_dev(blockquote, "class", "relative text-2xl sm:text-3xl mx-auto italic mb-4 px-12\n          sm:px-16");
      add_location(blockquote, file$2, 12, 8, 493);
      attr_dev(a, "href", "https://twitter.com/erikdkennedy/status/1001836296501805056");
      attr_dev(a, "class", "text-indigo-700 hover:text-indigo no-underline");
      add_location(a, file$2, 49, 10, 2116);
      attr_dev(figcaption, "class", "uppercase text-indigo-700 tracking-wide font-bold text-lg");
      add_location(figcaption, file$2, 47, 8, 2017);
      attr_dev(figure, "class", "font-display");
      add_location(figure, file$2, 11, 6, 455);
      attr_dev(div4, "class", "relative text-center");
      add_location(div4, file$2, 10, 4, 414);
      attr_dev(div5, "class", "relative max-w-xl mx-auto px-8 py-16 sm:py-32");
      add_location(div5, file$2, 1, 2, 34);
      attr_dev(div6, "class", "overflow-x-hidden");
      add_location(div6, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div6, anchor);
      append_dev(div6, div5);
      append_dev(div5, div1);
      append_dev(div1, div0);
      append_dev(div0, img);
      append_dev(div5, t0);
      append_dev(div5, div4);
      append_dev(div4, figure);
      append_dev(figure, blockquote);
      append_dev(blockquote, div2);
      append_dev(div2, svg0);
      append_dev(svg0, path0);
      append_dev(blockquote, t1);
      append_dev(blockquote, div3);
      append_dev(div3, svg1);
      append_dev(svg1, path1);
      append_dev(figure, t2);
      append_dev(figure, figcaption);
      append_dev(figcaption, a);
      append_dev(a, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div6);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<PullQuote> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("PullQuote", $$slots, []);
  return [];
}

var PullQuote = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(PullQuote, _SvelteComponentDev);

  var _super = _createSuper$2(PullQuote);

  function PullQuote(options) {
    var _this;

    _classCallCheck(this, PullQuote);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PullQuote",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return PullQuote;
}(SvelteComponentDev);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "src/components/WhatsInside.svelte";

function create_fragment$3(ctx) {
  var div8;
  var div0;
  var svg;
  var g;
  var path0;
  var path1;
  var path2;
  var path3;
  var path4;
  var path5;
  var path6;
  var path7;
  var path8;
  var path9;
  var path10;
  var t0;
  var h1;
  var span;
  var t1;
  var t2;
  var p0;
  var t3;
  var t4;
  var div7;
  var p1;
  var t5;
  var a0;
  var t6;
  var t7;
  var t8;
  var p2;
  var t9;
  var strong0;
  var t10;
  var t11;
  var t12;
  var p3;
  var t13;
  var t14;
  var h20;
  var t15;
  var t16;
  var p4;
  var t17;
  var strong1;
  var t18;
  var t19;
  var t20;
  var div1;
  var img0;
  var img0_src_value;
  var t21;
  var p5;
  var t22;
  var em;
  var t23;
  var t24;
  var t25;
  var p6;
  var t26;
  var t27;
  var p7;
  var a1;
  var t28;
  var t29;
  var p8;
  var t30;
  var t31;
  var p9;
  var t32;
  var a2;
  var t33;
  var t34;
  var t35;
  var h21;
  var t36;
  var t37;
  var p10;
  var t38;
  var t39;
  var div2;
  var img1;
  var img1_src_value;
  var t40;
  var p11;
  var t41;
  var t42;
  var ol;
  var li0;
  var strong2;
  var t43;
  var t44;
  var li1;
  var strong3;
  var t45;
  var t46;
  var li2;
  var strong4;
  var t47;
  var t48;
  var p12;
  var t49;
  var t50;
  var h22;
  var t51;
  var t52;
  var p13;
  var t53;
  var t54;
  var p14;
  var t55;
  var strong5;
  var t56;
  var t57;
  var strong6;
  var t58;
  var t59;
  var t60;
  var div3;
  var img2;
  var img2_src_value;
  var t61;
  var p15;
  var t62;
  var t63;
  var ul;
  var li3;
  var t64;
  var t65;
  var li4;
  var t66;
  var t67;
  var li5;
  var t68;
  var t69;
  var li6;
  var t70;
  var t71;
  var li7;
  var t72;
  var t73;
  var li8;
  var t74;
  var t75;
  var p16;
  var t76;
  var t77;
  var p17;
  var t78;
  var t79;
  var h23;
  var t80;
  var t81;
  var p18;
  var t82;
  var t83;
  var p19;
  var t84;
  var strong7;
  var t85;
  var t86;
  var t87;
  var div4;
  var img3;
  var img3_src_value;
  var t88;
  var p20;
  var t89;
  var t90;
  var h24;
  var t91;
  var t92;
  var p21;
  var t93;
  var t94;
  var p22;
  var t95;
  var t96;
  var div5;
  var img4;
  var img4_src_value;
  var t97;
  var p23;
  var t98;
  var t99;
  var p24;
  var t100;
  var t101;
  var h25;
  var t102;
  var t103;
  var p25;
  var t104;
  var t105;
  var div6;
  var img5;
  var img5_src_value;
  var t106;
  var p26;
  var t107;
  var block = {
    c: function create() {
      div8 = element("div");
      div0 = element("div");
      svg = svg_element("svg");
      g = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      path4 = svg_element("path");
      path5 = svg_element("path");
      path6 = svg_element("path");
      path7 = svg_element("path");
      path8 = svg_element("path");
      path9 = svg_element("path");
      path10 = svg_element("path");
      t0 = space();
      h1 = element("h1");
      span = element("span");
      t1 = text("What we've put together");
      t2 = space();
      p0 = element("p");
      t3 = text("It's not just a book — it's everything you need to start producing better\n      designs today.");
      t4 = space();
      div7 = element("div");
      p1 = element("p");
      t5 = text("When we first started working on this project, our ambitions were pretty\n      modest — take all of the\n      ");
      a0 = element("a");
      t6 = text("tips and tricks we’ve shared on Twitter");
      t7 = text("\n      , bundle them up into one resource, and put it out into the world.");
      t8 = space();
      p2 = element("p");
      t9 = text("But the more time we put into planning it, the more we realized that we\n      had an opportunity to create something better than that. Something that\n      wasn’t just a book, but\n      ");
      strong0 = element("strong");
      t10 = text("more like a complete survival kit for designing for the web");
      t11 = text("\n      .");
      t12 = space();
      p3 = element("p");
      t13 = text("Here’s what we ended up with…");
      t14 = space();
      h20 = element("h2");
      t15 = text("The Book");
      t16 = space();
      p4 = element("p");
      t17 = text("A beautiful PDF containing\n      ");
      strong1 = element("strong");
      t18 = text("50 incredibly visual chapters");
      t19 = text("\n      spread across 200+ painstakingly typeset pages.");
      t20 = space();
      div1 = element("div");
      img0 = element("img");
      t21 = space();
      p5 = element("p");
      t22 = text("This book contains\n      ");
      em = element("em");
      t23 = text("literally everything");
      t24 = text("\n      we know about web design, distilled into short, easy to read chapters.");
      t25 = space();
      p6 = element("p");
      t26 = text("You can check out the full table of contents here:");
      t27 = space();
      p7 = element("p");
      a1 = element("a");
      t28 = text("Check out the full table of contents");
      t29 = space();
      p8 = element("p");
      t30 = text("Every chapter is designed to be as independent as possible, so you can\n      read them in almost any order. And if you want to sit down and read the\n      whole thing at once, you’ll have no trouble getting through it in just a\n      couple of hours.");
      t31 = space();
      p9 = element("p");
      t32 = text("We hate books that repeat the same ideas over and over just to fill out\n      the page count. This book is written a lot like our\n      ");
      a2 = element("a");
      t33 = text("blog posts");
      t34 = text("\n      — every sentence is highlight-worthy.");
      t35 = space();
      h21 = element("h2");
      t36 = text("Video Tutorials");
      t37 = space();
      p10 = element("p");
      t38 = text("The book will teach you a ton, but there are some things best learned by\n      watching an expert do it themselves.");
      t39 = space();
      div2 = element("div");
      img1 = element("img");
      t40 = space();
      p11 = element("p");
      t41 = text("We’ve put together three in-depth video tutorials that walk through how to\n      take all of the ideas in the book and apply them to three common UI design\n      scenarios:");
      t42 = space();
      ol = element("ol");
      li0 = element("li");
      strong2 = element("strong");
      t43 = text("Designing a complex form interface");
      t44 = space();
      li1 = element("li");
      strong3 = element("strong");
      t45 = text("Building a data-focused dashboard");
      t46 = space();
      li2 = element("li");
      strong4 = element("strong");
      t47 = text("Styling a text-focused landing page");
      t48 = space();
      p12 = element("p");
      t49 = text("Each video is tightly edited and just the right pace, so there’s no wasted\n      time watching me “hmm” and “uhh” my way around the design.");
      t50 = space();
      h22 = element("h2");
      t51 = text("The Component Gallery");
      t52 = space();
      p13 = element("p");
      t53 = text("How many times have you found yourself looking at other apps to get ideas\n      for things like button styles, form layouts, or navigation treatments?\n      This has always been a huge pain point for us with our own work, so we\n      built the component gallery to solve it.");
      t54 = space();
      p14 = element("p");
      t55 = text("The component gallery is a huge resource of\n      ");
      strong5 = element("strong");
      t56 = text("20+ component/layout categories");
      t57 = text("\n      , and\n      ");
      strong6 = element("strong");
      t58 = text("200+ individual component styles");
      t59 = text("\n      .");
      t60 = space();
      div3 = element("div");
      img2 = element("img");
      t61 = space();
      p15 = element("p");
      t62 = text("It includes medium-fidelity mockups of every idea we could think of, for\n      every component we could think of, including things like:");
      t63 = space();
      ul = element("ul");
      li3 = element("li");
      t64 = text("Button styles");
      t65 = space();
      li4 = element("li");
      t66 = text("Login page layouts");
      t67 = space();
      li5 = element("li");
      t68 = text("Marketing page sections");
      t69 = space();
      li6 = element("li");
      t70 = text("Card layouts");
      t71 = space();
      li7 = element("li");
      t72 = text("Table styles");
      t73 = space();
      li8 = element("li");
      t74 = text("Navigation layouts");
      t75 = space();
      p16 = element("p");
      t76 = text("…and much, much more.");
      t77 = space();
      p17 = element("p");
      t78 = text("You’ll never have to browse another site for layout inspiration again.");
      t79 = space();
      h23 = element("h2");
      t80 = text("Color Palettes");
      t81 = space();
      p18 = element("p");
      t82 = text("If you’ve ever used an online color palette generator, you know that the\n      five swatches they end up giving you are never enough to build out a real\n      interface.");
      t83 = space();
      p19 = element("p");
      t84 = text("We set out to solve this by handcrafting\n      ");
      strong7 = element("strong");
      t85 = text("over a dozen comprehensive color palettes");
      t86 = text("\n      that include 10 shades for each included color, as well as an example UI\n      showing how those colors are intended to be used:");
      t87 = space();
      div4 = element("div");
      img3 = element("img");
      t88 = space();
      p20 = element("p");
      t89 = text("We’ve also put together a huge library of individual color scales that you\n      can use to curate your own palettes, without handpicking every single\n      shade yourself.");
      t90 = space();
      h24 = element("h2");
      t91 = text("Font Recommendations");
      t92 = space();
      p21 = element("p");
      t93 = text("Trying to pick the perfect font for a project is a nightmare. There are\n      thousands of fonts to choose from, and trying to make an informed decision\n      without seeing a particular font in the right context takes forever.");
      t94 = space();
      p22 = element("p");
      t95 = text("We’ve put together a list of over 30 fonts we absolutely love, and broken\n      it down across three categories: UI, headlines, and article copy.");
      t96 = space();
      div5 = element("div");
      img4 = element("img");
      t97 = space();
      p23 = element("p");
      t98 = text("Each font is shown in an example UI for that category, so you can get a\n      feel for exactly how it’s going to look where you intend to use it,\n      without having to try each font yourself.");
      t99 = space();
      p24 = element("p");
      t100 = text("If you’ve ever felt uneasy trying to choose a typeface, this is going to\n      save you a ton of time.");
      t101 = space();
      h25 = element("h2");
      t102 = text("Custom illustrated icons");
      t103 = space();
      p25 = element("p");
      t104 = text("Refactoring UI also includes a set of 200 beautifully illustrated SVG\n      icons:");
      t105 = space();
      div6 = element("div");
      img5 = element("img");
      t106 = space();
      p26 = element("p");
      t107 = text("The SVGs are pre-optimized, and the colors can easily be customized to fit\n      your branding with just CSS — no design tool knowledge required.");
      this.h();
    },
    l: function claim(nodes) {
      div8 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div8_nodes = children(div8);
      div0 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      svg = claim_element(div0_nodes, "svg", {
        class: true,
        viewBox: true,
        xmlns: true
      }, 1);
      var svg_nodes = children(svg);
      g = claim_element(svg_nodes, "g", {
        fill: true,
        "fill-rule": true
      }, 1);
      var g_nodes = children(g);
      path0 = claim_element(g_nodes, "path", {
        d: true,
        fill: true
      }, 1);
      children(path0).forEach(detach_dev);
      path1 = claim_element(g_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path1).forEach(detach_dev);
      path2 = claim_element(g_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path2).forEach(detach_dev);
      path3 = claim_element(g_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path3).forEach(detach_dev);
      path4 = claim_element(g_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path4).forEach(detach_dev);
      path5 = claim_element(g_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path5).forEach(detach_dev);
      path6 = claim_element(g_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path6).forEach(detach_dev);
      path7 = claim_element(g_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path7).forEach(detach_dev);
      path8 = claim_element(g_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path8).forEach(detach_dev);
      path9 = claim_element(g_nodes, "path", {
        d: true,
        fill: true
      }, 1);
      children(path9).forEach(detach_dev);
      path10 = claim_element(g_nodes, "path", {
        d: true,
        fill: true
      }, 1);
      children(path10).forEach(detach_dev);
      g_nodes.forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      t0 = claim_space(div0_nodes);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "What we've put together");
      span_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "It's not just a book — it's everything you need to start producing better\n      designs today.");
      p0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      p1 = claim_element(div7_nodes, "P", {});
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, "When we first started working on this project, our ambitions were pretty\n      modest — take all of the\n      ");
      a0 = claim_element(p1_nodes, "A", {
        href: true
      });
      var a0_nodes = children(a0);
      t6 = claim_text(a0_nodes, "tips and tricks we’ve shared on Twitter");
      a0_nodes.forEach(detach_dev);
      t7 = claim_text(p1_nodes, "\n      , bundle them up into one resource, and put it out into the world.");
      p1_nodes.forEach(detach_dev);
      t8 = claim_space(div7_nodes);
      p2 = claim_element(div7_nodes, "P", {});
      var p2_nodes = children(p2);
      t9 = claim_text(p2_nodes, "But the more time we put into planning it, the more we realized that we\n      had an opportunity to create something better than that. Something that\n      wasn’t just a book, but\n      ");
      strong0 = claim_element(p2_nodes, "STRONG", {});
      var strong0_nodes = children(strong0);
      t10 = claim_text(strong0_nodes, "more like a complete survival kit for designing for the web");
      strong0_nodes.forEach(detach_dev);
      t11 = claim_text(p2_nodes, "\n      .");
      p2_nodes.forEach(detach_dev);
      t12 = claim_space(div7_nodes);
      p3 = claim_element(div7_nodes, "P", {});
      var p3_nodes = children(p3);
      t13 = claim_text(p3_nodes, "Here’s what we ended up with…");
      p3_nodes.forEach(detach_dev);
      t14 = claim_space(div7_nodes);
      h20 = claim_element(div7_nodes, "H2", {
        id: true
      });
      var h20_nodes = children(h20);
      t15 = claim_text(h20_nodes, "The Book");
      h20_nodes.forEach(detach_dev);
      t16 = claim_space(div7_nodes);
      p4 = claim_element(div7_nodes, "P", {});
      var p4_nodes = children(p4);
      t17 = claim_text(p4_nodes, "A beautiful PDF containing\n      ");
      strong1 = claim_element(p4_nodes, "STRONG", {});
      var strong1_nodes = children(strong1);
      t18 = claim_text(strong1_nodes, "50 incredibly visual chapters");
      strong1_nodes.forEach(detach_dev);
      t19 = claim_text(p4_nodes, "\n      spread across 200+ painstakingly typeset pages.");
      p4_nodes.forEach(detach_dev);
      t20 = claim_space(div7_nodes);
      div1 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img0 = claim_element(div1_nodes, "IMG", {
        src: true,
        alt: true
      });
      div1_nodes.forEach(detach_dev);
      t21 = claim_space(div7_nodes);
      p5 = claim_element(div7_nodes, "P", {});
      var p5_nodes = children(p5);
      t22 = claim_text(p5_nodes, "This book contains\n      ");
      em = claim_element(p5_nodes, "EM", {});
      var em_nodes = children(em);
      t23 = claim_text(em_nodes, "literally everything");
      em_nodes.forEach(detach_dev);
      t24 = claim_text(p5_nodes, "\n      we know about web design, distilled into short, easy to read chapters.");
      p5_nodes.forEach(detach_dev);
      t25 = claim_space(div7_nodes);
      p6 = claim_element(div7_nodes, "P", {});
      var p6_nodes = children(p6);
      t26 = claim_text(p6_nodes, "You can check out the full table of contents here:");
      p6_nodes.forEach(detach_dev);
      t27 = claim_space(div7_nodes);
      p7 = claim_element(div7_nodes, "P", {});
      var p7_nodes = children(p7);
      a1 = claim_element(p7_nodes, "A", {
        href: true
      });
      var a1_nodes = children(a1);
      t28 = claim_text(a1_nodes, "Check out the full table of contents");
      a1_nodes.forEach(detach_dev);
      p7_nodes.forEach(detach_dev);
      t29 = claim_space(div7_nodes);
      p8 = claim_element(div7_nodes, "P", {});
      var p8_nodes = children(p8);
      t30 = claim_text(p8_nodes, "Every chapter is designed to be as independent as possible, so you can\n      read them in almost any order. And if you want to sit down and read the\n      whole thing at once, you’ll have no trouble getting through it in just a\n      couple of hours.");
      p8_nodes.forEach(detach_dev);
      t31 = claim_space(div7_nodes);
      p9 = claim_element(div7_nodes, "P", {});
      var p9_nodes = children(p9);
      t32 = claim_text(p9_nodes, "We hate books that repeat the same ideas over and over just to fill out\n      the page count. This book is written a lot like our\n      ");
      a2 = claim_element(p9_nodes, "A", {
        href: true
      });
      var a2_nodes = children(a2);
      t33 = claim_text(a2_nodes, "blog posts");
      a2_nodes.forEach(detach_dev);
      t34 = claim_text(p9_nodes, "\n      — every sentence is highlight-worthy.");
      p9_nodes.forEach(detach_dev);
      t35 = claim_space(div7_nodes);
      h21 = claim_element(div7_nodes, "H2", {});
      var h21_nodes = children(h21);
      t36 = claim_text(h21_nodes, "Video Tutorials");
      h21_nodes.forEach(detach_dev);
      t37 = claim_space(div7_nodes);
      p10 = claim_element(div7_nodes, "P", {});
      var p10_nodes = children(p10);
      t38 = claim_text(p10_nodes, "The book will teach you a ton, but there are some things best learned by\n      watching an expert do it themselves.");
      p10_nodes.forEach(detach_dev);
      t39 = claim_space(div7_nodes);
      div2 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      img1 = claim_element(div2_nodes, "IMG", {
        src: true,
        alt: true
      });
      div2_nodes.forEach(detach_dev);
      t40 = claim_space(div7_nodes);
      p11 = claim_element(div7_nodes, "P", {});
      var p11_nodes = children(p11);
      t41 = claim_text(p11_nodes, "We’ve put together three in-depth video tutorials that walk through how to\n      take all of the ideas in the book and apply them to three common UI design\n      scenarios:");
      p11_nodes.forEach(detach_dev);
      t42 = claim_space(div7_nodes);
      ol = claim_element(div7_nodes, "OL", {});
      var ol_nodes = children(ol);
      li0 = claim_element(ol_nodes, "LI", {});
      var li0_nodes = children(li0);
      strong2 = claim_element(li0_nodes, "STRONG", {});
      var strong2_nodes = children(strong2);
      t43 = claim_text(strong2_nodes, "Designing a complex form interface");
      strong2_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t44 = claim_space(ol_nodes);
      li1 = claim_element(ol_nodes, "LI", {});
      var li1_nodes = children(li1);
      strong3 = claim_element(li1_nodes, "STRONG", {});
      var strong3_nodes = children(strong3);
      t45 = claim_text(strong3_nodes, "Building a data-focused dashboard");
      strong3_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      t46 = claim_space(ol_nodes);
      li2 = claim_element(ol_nodes, "LI", {});
      var li2_nodes = children(li2);
      strong4 = claim_element(li2_nodes, "STRONG", {});
      var strong4_nodes = children(strong4);
      t47 = claim_text(strong4_nodes, "Styling a text-focused landing page");
      strong4_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      ol_nodes.forEach(detach_dev);
      t48 = claim_space(div7_nodes);
      p12 = claim_element(div7_nodes, "P", {});
      var p12_nodes = children(p12);
      t49 = claim_text(p12_nodes, "Each video is tightly edited and just the right pace, so there’s no wasted\n      time watching me “hmm” and “uhh” my way around the design.");
      p12_nodes.forEach(detach_dev);
      t50 = claim_space(div7_nodes);
      h22 = claim_element(div7_nodes, "H2", {});
      var h22_nodes = children(h22);
      t51 = claim_text(h22_nodes, "The Component Gallery");
      h22_nodes.forEach(detach_dev);
      t52 = claim_space(div7_nodes);
      p13 = claim_element(div7_nodes, "P", {});
      var p13_nodes = children(p13);
      t53 = claim_text(p13_nodes, "How many times have you found yourself looking at other apps to get ideas\n      for things like button styles, form layouts, or navigation treatments?\n      This has always been a huge pain point for us with our own work, so we\n      built the component gallery to solve it.");
      p13_nodes.forEach(detach_dev);
      t54 = claim_space(div7_nodes);
      p14 = claim_element(div7_nodes, "P", {});
      var p14_nodes = children(p14);
      t55 = claim_text(p14_nodes, "The component gallery is a huge resource of\n      ");
      strong5 = claim_element(p14_nodes, "STRONG", {});
      var strong5_nodes = children(strong5);
      t56 = claim_text(strong5_nodes, "20+ component/layout categories");
      strong5_nodes.forEach(detach_dev);
      t57 = claim_text(p14_nodes, "\n      , and\n      ");
      strong6 = claim_element(p14_nodes, "STRONG", {});
      var strong6_nodes = children(strong6);
      t58 = claim_text(strong6_nodes, "200+ individual component styles");
      strong6_nodes.forEach(detach_dev);
      t59 = claim_text(p14_nodes, "\n      .");
      p14_nodes.forEach(detach_dev);
      t60 = claim_space(div7_nodes);
      div3 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      img2 = claim_element(div3_nodes, "IMG", {
        src: true,
        alt: true
      });
      div3_nodes.forEach(detach_dev);
      t61 = claim_space(div7_nodes);
      p15 = claim_element(div7_nodes, "P", {});
      var p15_nodes = children(p15);
      t62 = claim_text(p15_nodes, "It includes medium-fidelity mockups of every idea we could think of, for\n      every component we could think of, including things like:");
      p15_nodes.forEach(detach_dev);
      t63 = claim_space(div7_nodes);
      ul = claim_element(div7_nodes, "UL", {});
      var ul_nodes = children(ul);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      t64 = claim_text(li3_nodes, "Button styles");
      li3_nodes.forEach(detach_dev);
      t65 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      t66 = claim_text(li4_nodes, "Login page layouts");
      li4_nodes.forEach(detach_dev);
      t67 = claim_space(ul_nodes);
      li5 = claim_element(ul_nodes, "LI", {});
      var li5_nodes = children(li5);
      t68 = claim_text(li5_nodes, "Marketing page sections");
      li5_nodes.forEach(detach_dev);
      t69 = claim_space(ul_nodes);
      li6 = claim_element(ul_nodes, "LI", {});
      var li6_nodes = children(li6);
      t70 = claim_text(li6_nodes, "Card layouts");
      li6_nodes.forEach(detach_dev);
      t71 = claim_space(ul_nodes);
      li7 = claim_element(ul_nodes, "LI", {});
      var li7_nodes = children(li7);
      t72 = claim_text(li7_nodes, "Table styles");
      li7_nodes.forEach(detach_dev);
      t73 = claim_space(ul_nodes);
      li8 = claim_element(ul_nodes, "LI", {});
      var li8_nodes = children(li8);
      t74 = claim_text(li8_nodes, "Navigation layouts");
      li8_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      t75 = claim_space(div7_nodes);
      p16 = claim_element(div7_nodes, "P", {});
      var p16_nodes = children(p16);
      t76 = claim_text(p16_nodes, "…and much, much more.");
      p16_nodes.forEach(detach_dev);
      t77 = claim_space(div7_nodes);
      p17 = claim_element(div7_nodes, "P", {});
      var p17_nodes = children(p17);
      t78 = claim_text(p17_nodes, "You’ll never have to browse another site for layout inspiration again.");
      p17_nodes.forEach(detach_dev);
      t79 = claim_space(div7_nodes);
      h23 = claim_element(div7_nodes, "H2", {});
      var h23_nodes = children(h23);
      t80 = claim_text(h23_nodes, "Color Palettes");
      h23_nodes.forEach(detach_dev);
      t81 = claim_space(div7_nodes);
      p18 = claim_element(div7_nodes, "P", {});
      var p18_nodes = children(p18);
      t82 = claim_text(p18_nodes, "If you’ve ever used an online color palette generator, you know that the\n      five swatches they end up giving you are never enough to build out a real\n      interface.");
      p18_nodes.forEach(detach_dev);
      t83 = claim_space(div7_nodes);
      p19 = claim_element(div7_nodes, "P", {});
      var p19_nodes = children(p19);
      t84 = claim_text(p19_nodes, "We set out to solve this by handcrafting\n      ");
      strong7 = claim_element(p19_nodes, "STRONG", {});
      var strong7_nodes = children(strong7);
      t85 = claim_text(strong7_nodes, "over a dozen comprehensive color palettes");
      strong7_nodes.forEach(detach_dev);
      t86 = claim_text(p19_nodes, "\n      that include 10 shades for each included color, as well as an example UI\n      showing how those colors are intended to be used:");
      p19_nodes.forEach(detach_dev);
      t87 = claim_space(div7_nodes);
      div4 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      img3 = claim_element(div4_nodes, "IMG", {
        src: true,
        alt: true
      });
      div4_nodes.forEach(detach_dev);
      t88 = claim_space(div7_nodes);
      p20 = claim_element(div7_nodes, "P", {});
      var p20_nodes = children(p20);
      t89 = claim_text(p20_nodes, "We’ve also put together a huge library of individual color scales that you\n      can use to curate your own palettes, without handpicking every single\n      shade yourself.");
      p20_nodes.forEach(detach_dev);
      t90 = claim_space(div7_nodes);
      h24 = claim_element(div7_nodes, "H2", {});
      var h24_nodes = children(h24);
      t91 = claim_text(h24_nodes, "Font Recommendations");
      h24_nodes.forEach(detach_dev);
      t92 = claim_space(div7_nodes);
      p21 = claim_element(div7_nodes, "P", {});
      var p21_nodes = children(p21);
      t93 = claim_text(p21_nodes, "Trying to pick the perfect font for a project is a nightmare. There are\n      thousands of fonts to choose from, and trying to make an informed decision\n      without seeing a particular font in the right context takes forever.");
      p21_nodes.forEach(detach_dev);
      t94 = claim_space(div7_nodes);
      p22 = claim_element(div7_nodes, "P", {});
      var p22_nodes = children(p22);
      t95 = claim_text(p22_nodes, "We’ve put together a list of over 30 fonts we absolutely love, and broken\n      it down across three categories: UI, headlines, and article copy.");
      p22_nodes.forEach(detach_dev);
      t96 = claim_space(div7_nodes);
      div5 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      img4 = claim_element(div5_nodes, "IMG", {
        src: true,
        alt: true
      });
      div5_nodes.forEach(detach_dev);
      t97 = claim_space(div7_nodes);
      p23 = claim_element(div7_nodes, "P", {});
      var p23_nodes = children(p23);
      t98 = claim_text(p23_nodes, "Each font is shown in an example UI for that category, so you can get a\n      feel for exactly how it’s going to look where you intend to use it,\n      without having to try each font yourself.");
      p23_nodes.forEach(detach_dev);
      t99 = claim_space(div7_nodes);
      p24 = claim_element(div7_nodes, "P", {});
      var p24_nodes = children(p24);
      t100 = claim_text(p24_nodes, "If you’ve ever felt uneasy trying to choose a typeface, this is going to\n      save you a ton of time.");
      p24_nodes.forEach(detach_dev);
      t101 = claim_space(div7_nodes);
      h25 = claim_element(div7_nodes, "H2", {});
      var h25_nodes = children(h25);
      t102 = claim_text(h25_nodes, "Custom illustrated icons");
      h25_nodes.forEach(detach_dev);
      t103 = claim_space(div7_nodes);
      p25 = claim_element(div7_nodes, "P", {});
      var p25_nodes = children(p25);
      t104 = claim_text(p25_nodes, "Refactoring UI also includes a set of 200 beautifully illustrated SVG\n      icons:");
      p25_nodes.forEach(detach_dev);
      t105 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      img5 = claim_element(div6_nodes, "IMG", {
        src: true,
        alt: true
      });
      div6_nodes.forEach(detach_dev);
      t106 = claim_space(div7_nodes);
      p26 = claim_element(div7_nodes, "P", {});
      var p26_nodes = children(p26);
      t107 = claim_text(p26_nodes, "The SVGs are pre-optimized, and the colors can easily be customized to fit\n      your branding with just CSS — no design tool knowledge required.");
      p26_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path0, "d", "M11.87 63.903l16.264-40.305c1.886-5.656 8.957-2.356 21.213 9.9\n          12.255 12.255 15.555 19.326 9.9 21.213L18.94\n          70.974c-1.885.943-3.771.472-5.657-1.414-1.885-1.886-2.357-3.771-1.414-5.657zM41.569\n          15.82l2.828-2.829 2.828 2.829-2.828 2.828zM25.305 12.284l2.829-2.828\n          2.828 2.828-2.828 2.829z");
      attr_dev(path0, "fill", "#C3CAEA");
      add_location(path0, file$3, 7, 8, 250);
      attr_dev(path1, "fill", "#7282C6");
      attr_dev(path1, "d", "M22.477 20.77l2.828-2.829 2.829 2.829-2.829 2.828zM63.514\n          49.029l3.464-2 2 3.464-3.464 2z");
      add_location(path1, file$3, 14, 8, 632);
      attr_dev(path2, "fill", "#98A7E7");
      attr_dev(path2, "d", "M58.564 17.21l3.464-2 2 3.463-3.464 2z");
      add_location(path2, file$3, 18, 8, 788);
      attr_dev(path3, "fill", "#7282C6");
      attr_dev(path3, "d", "M44.422 24.28l3.464-2 2 3.464-3.464 2z");
      add_location(path3, file$3, 19, 8, 863);
      attr_dev(path4, "fill", "#98A7E7");
      attr_dev(path4, "d", "M69.17 53.272l3.465-2 2 3.464-3.464 2z");
      add_location(path4, file$3, 20, 8, 938);
      attr_dev(path5, "fill", "#C3CAEA");
      attr_dev(path5, "d", "M62.807 61.1l2-3.465 3.464 2-2 3.465z");
      add_location(path5, file$3, 21, 8, 1013);
      attr_dev(path6, "fill", "#98A7E7");
      attr_dev(path6, "d", "M13.31 44.129l2-3.464 3.463 2-2 3.464z");
      add_location(path6, file$3, 22, 8, 1087);
      attr_dev(path7, "fill", "#7282C6");
      attr_dev(path7, "d", "M64.22 66.707l3.465-2 2 3.464-3.464 2z");
      add_location(path7, file$3, 23, 8, 1162);
      attr_dev(path8, "fill", "#98A7E7");
      attr_dev(path8, "d", "M52.272 59.635l3.464-2 2 3.465-3.464 2zM60.307 52.236c-1.757\n          1.757-9.83-3.466-18.031-11.667-8.201-8.201-13.425-16.274-11.668-18.032\n          1.758-1.757 9.83 3.467 18.032 11.668 8.2 8.2 13.424 16.273 11.667\n          18.03z");
      add_location(path8, file$3, 24, 8, 1237);
      attr_dev(path9, "d", "M52.231 34.968v-7.071c-.037-3.809 1.948-4.417 5.955-1.824 4.006\n          2.593 6.128 3.535 6.364 2.828-2.593-3.535-3.182-6.01-1.768-7.424\n          2.121-2.122 4.95 2.121 7.07 0 1.415-1.415\n          1.18-3.536-.706-6.364l2.121-2.122c2.828 4.243 3.182 7.425 1.06\n          9.546-3.181 3.182-8.131-1.06-8.131.354 0 1.414 3.535 4.95 1.414\n          7.07-2.121\n          2.122-7.778-2.12-8.485-2.827-.472-.472-.707-.236-.707.707v7.07l-4.187.057z");
      attr_dev(path9, "fill", "#C3CAEA");
      add_location(path9, file$3, 30, 8, 1528);
      attr_dev(path10, "d", "M45.385 43.544c8.678-4.812 18.013-7.218\n          28.003-7.218v4.243c-11.34-1.112-19.847.608-25.524 5.159a86.092 86.092\n          0 0 1-2.479-2.184zM38.245\n          36.285c1.796-12.953.193-19.657-4.808-20.112v-3.535c4.714.943 7.424\n          4.125 8.132 9.546.663 5.082.186 10.476-1.43 16.18a91.083 91.083 0 0\n          1-1.894-2.079zM13.991 17.941c.792 1.672 4.597.354 6.01 2.475 1.415\n          2.121-3.535 3.536-5.303 5.303-1.178 1.179.118 1.768 3.89 1.768\n          2.12-.236 3.653.118 4.596 1.06.943.944-.236 3.536-3.536\n          7.779l-1.768-.354c.472-.471 1.415-1.885 2.829-4.242\n          1.414-2.357.353-3.418-3.182-3.182-2.829\n          0-4.478-.707-4.95-2.122-.471-1.414.943-2.828 4.243-4.242-2.829\n          0-4.714-.943-5.657-2.829-.943-1.885.354-4.124 3.889-6.717l1.768\n          1.06c-2.829 1.415-3.62 2.571-2.829 4.243z");
      attr_dev(path10, "fill", "#7282C6");
      add_location(path10, file$3, 39, 8, 2028);
      attr_dev(g, "fill", "none");
      attr_dev(g, "fill-rule", "evenodd");
      add_location(g, file$3, 6, 6, 206);
      attr_dev(svg, "class", "block h-24 w-24 mx-auto mb-8");
      attr_dev(svg, "viewBox", "0 0 80 80");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$3, 2, 4, 84);
      attr_dev(span, "class", "block font-semibold");
      add_location(span, file$3, 57, 6, 3011);
      attr_dev(h1, "class", "text-3xl sm:text-5xl font-display leading-none mb-6");
      add_location(h1, file$3, 56, 4, 2940);
      attr_dev(p0, "class", "text-2xl text-grey-dark leading-normal max-w-sm mx-auto");
      add_location(p0, file$3, 59, 4, 3090);
      attr_dev(div0, "class", "text-center px-8");
      add_location(div0, file$3, 1, 2, 49);
      attr_dev(a0, "href", "https://twitter.com/i/moments/994601867987619840");
      add_location(a0, file$3, 69, 6, 3470);
      add_location(p1, file$3, 66, 4, 3350);
      add_location(strong0, file$3, 79, 6, 3872);
      add_location(p2, file$3, 75, 4, 3676);
      add_location(p3, file$3, 85, 4, 3987);
      attr_dev(h20, "id", "the-book");
      add_location(h20, file$3, 87, 4, 4029);
      add_location(strong1, file$3, 91, 6, 4109);
      add_location(p4, file$3, 89, 4, 4066);
      if (img0.src !== (img0_src_value = "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/illustration-book-optimized.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "");
      add_location(img0, file$3, 96, 6, 4249);
      attr_dev(div1, "class", "px-6");
      add_location(div1, file$3, 95, 4, 4224);
      add_location(em, file$3, 103, 6, 4432);
      add_location(p5, file$3, 101, 4, 4397);
      add_location(p6, file$3, 107, 4, 4553);
      attr_dev(a1, "href", "/table-of-contents/");
      add_location(a1, file$3, 110, 6, 4626);
      add_location(p7, file$3, 109, 4, 4616);
      add_location(p8, file$3, 113, 4, 4711);
      attr_dev(a2, "href", "https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886");
      add_location(a2, file$3, 123, 6, 5132);
      add_location(p9, file$3, 120, 4, 4986);
      add_location(h21, file$3, 130, 4, 5326);
      add_location(p10, file$3, 132, 4, 5356);
      if (img1.src !== (img1_src_value = "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/illustration-videos-optimized.png")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "");
      add_location(img1, file$3, 138, 6, 5521);
      attr_dev(div2, "class", "px-6");
      add_location(div2, file$3, 137, 4, 5496);
      add_location(p11, file$3, 143, 4, 5671);
      add_location(strong2, file$3, 151, 8, 5892);
      add_location(li0, file$3, 150, 6, 5879);
      add_location(strong3, file$3, 154, 8, 5975);
      add_location(li1, file$3, 153, 6, 5962);
      add_location(strong4, file$3, 157, 8, 6057);
      add_location(li2, file$3, 156, 6, 6044);
      add_location(ol, file$3, 149, 4, 5868);
      add_location(p12, file$3, 161, 4, 6137);
      add_location(h22, file$3, 166, 4, 6301);
      add_location(p13, file$3, 168, 4, 6337);
      add_location(strong5, file$3, 177, 6, 6696);
      add_location(strong6, file$3, 179, 6, 6763);
      add_location(p14, file$3, 175, 4, 6636);
      if (img2.src !== (img2_src_value = "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/illustration-gallery-optimized.png")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "");
      add_location(img2, file$3, 184, 6, 6860);
      attr_dev(div3, "class", "px-6");
      add_location(div3, file$3, 183, 4, 6835);
      add_location(p15, file$3, 189, 4, 7011);
      add_location(li3, file$3, 195, 6, 7183);
      add_location(li4, file$3, 196, 6, 7212);
      add_location(li5, file$3, 197, 6, 7246);
      add_location(li6, file$3, 198, 6, 7285);
      add_location(li7, file$3, 199, 6, 7313);
      add_location(li8, file$3, 200, 6, 7341);
      add_location(ul, file$3, 194, 4, 7172);
      add_location(p16, file$3, 203, 4, 7384);
      add_location(p17, file$3, 205, 4, 7418);
      add_location(h23, file$3, 209, 4, 7513);
      add_location(p18, file$3, 211, 4, 7542);
      add_location(strong7, file$3, 219, 6, 7793);
      add_location(p19, file$3, 217, 4, 7736);
      if (img3.src !== (img3_src_value = "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/illustration-colors-optimized.png")) attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "");
      add_location(img3, file$3, 225, 6, 8026);
      attr_dev(div4, "class", "px-6");
      add_location(div4, file$3, 224, 4, 8001);
      add_location(p20, file$3, 230, 4, 8176);
      add_location(h24, file$3, 236, 4, 8373);
      add_location(p21, file$3, 238, 4, 8408);
      add_location(p22, file$3, 244, 4, 8660);
      if (img4.src !== (img4_src_value = "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/illustration-fonts-optimized.png")) attr_dev(img4, "src", img4_src_value);
      attr_dev(img4, "alt", "");
      add_location(img4, file$3, 250, 6, 8855);
      attr_dev(div5, "class", "px-6");
      add_location(div5, file$3, 249, 4, 8830);
      add_location(p23, file$3, 255, 4, 9004);
      add_location(p24, file$3, 261, 4, 9222);
      add_location(h25, file$3, 266, 4, 9349);
      add_location(p25, file$3, 268, 4, 9388);
      if (img5.src !== (img5_src_value = "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/illustration-icons-optimized.png")) attr_dev(img5, "src", img5_src_value);
      attr_dev(img5, "alt", "");
      add_location(img5, file$3, 274, 6, 9526);
      attr_dev(div6, "class", "px-16 mb-8");
      add_location(div6, file$3, 273, 4, 9495);
      add_location(p26, file$3, 279, 4, 9675);
      attr_dev(div7, "class", "markdown max-w-screen-md mx-auto px-8 text-xl py-16");
      add_location(div7, file$3, 65, 2, 3280);
      attr_dev(div8, "id", "whats-inside");
      attr_dev(div8, "class", "bg-white py-16");
      add_location(div8, file$3, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div8, anchor);
      append_dev(div8, div0);
      append_dev(div0, svg);
      append_dev(svg, g);
      append_dev(g, path0);
      append_dev(g, path1);
      append_dev(g, path2);
      append_dev(g, path3);
      append_dev(g, path4);
      append_dev(g, path5);
      append_dev(g, path6);
      append_dev(g, path7);
      append_dev(g, path8);
      append_dev(g, path9);
      append_dev(g, path10);
      append_dev(div0, t0);
      append_dev(div0, h1);
      append_dev(h1, span);
      append_dev(span, t1);
      append_dev(div0, t2);
      append_dev(div0, p0);
      append_dev(p0, t3);
      append_dev(div8, t4);
      append_dev(div8, div7);
      append_dev(div7, p1);
      append_dev(p1, t5);
      append_dev(p1, a0);
      append_dev(a0, t6);
      append_dev(p1, t7);
      append_dev(div7, t8);
      append_dev(div7, p2);
      append_dev(p2, t9);
      append_dev(p2, strong0);
      append_dev(strong0, t10);
      append_dev(p2, t11);
      append_dev(div7, t12);
      append_dev(div7, p3);
      append_dev(p3, t13);
      append_dev(div7, t14);
      append_dev(div7, h20);
      append_dev(h20, t15);
      append_dev(div7, t16);
      append_dev(div7, p4);
      append_dev(p4, t17);
      append_dev(p4, strong1);
      append_dev(strong1, t18);
      append_dev(p4, t19);
      append_dev(div7, t20);
      append_dev(div7, div1);
      append_dev(div1, img0);
      append_dev(div7, t21);
      append_dev(div7, p5);
      append_dev(p5, t22);
      append_dev(p5, em);
      append_dev(em, t23);
      append_dev(p5, t24);
      append_dev(div7, t25);
      append_dev(div7, p6);
      append_dev(p6, t26);
      append_dev(div7, t27);
      append_dev(div7, p7);
      append_dev(p7, a1);
      append_dev(a1, t28);
      append_dev(div7, t29);
      append_dev(div7, p8);
      append_dev(p8, t30);
      append_dev(div7, t31);
      append_dev(div7, p9);
      append_dev(p9, t32);
      append_dev(p9, a2);
      append_dev(a2, t33);
      append_dev(p9, t34);
      append_dev(div7, t35);
      append_dev(div7, h21);
      append_dev(h21, t36);
      append_dev(div7, t37);
      append_dev(div7, p10);
      append_dev(p10, t38);
      append_dev(div7, t39);
      append_dev(div7, div2);
      append_dev(div2, img1);
      append_dev(div7, t40);
      append_dev(div7, p11);
      append_dev(p11, t41);
      append_dev(div7, t42);
      append_dev(div7, ol);
      append_dev(ol, li0);
      append_dev(li0, strong2);
      append_dev(strong2, t43);
      append_dev(ol, t44);
      append_dev(ol, li1);
      append_dev(li1, strong3);
      append_dev(strong3, t45);
      append_dev(ol, t46);
      append_dev(ol, li2);
      append_dev(li2, strong4);
      append_dev(strong4, t47);
      append_dev(div7, t48);
      append_dev(div7, p12);
      append_dev(p12, t49);
      append_dev(div7, t50);
      append_dev(div7, h22);
      append_dev(h22, t51);
      append_dev(div7, t52);
      append_dev(div7, p13);
      append_dev(p13, t53);
      append_dev(div7, t54);
      append_dev(div7, p14);
      append_dev(p14, t55);
      append_dev(p14, strong5);
      append_dev(strong5, t56);
      append_dev(p14, t57);
      append_dev(p14, strong6);
      append_dev(strong6, t58);
      append_dev(p14, t59);
      append_dev(div7, t60);
      append_dev(div7, div3);
      append_dev(div3, img2);
      append_dev(div7, t61);
      append_dev(div7, p15);
      append_dev(p15, t62);
      append_dev(div7, t63);
      append_dev(div7, ul);
      append_dev(ul, li3);
      append_dev(li3, t64);
      append_dev(ul, t65);
      append_dev(ul, li4);
      append_dev(li4, t66);
      append_dev(ul, t67);
      append_dev(ul, li5);
      append_dev(li5, t68);
      append_dev(ul, t69);
      append_dev(ul, li6);
      append_dev(li6, t70);
      append_dev(ul, t71);
      append_dev(ul, li7);
      append_dev(li7, t72);
      append_dev(ul, t73);
      append_dev(ul, li8);
      append_dev(li8, t74);
      append_dev(div7, t75);
      append_dev(div7, p16);
      append_dev(p16, t76);
      append_dev(div7, t77);
      append_dev(div7, p17);
      append_dev(p17, t78);
      append_dev(div7, t79);
      append_dev(div7, h23);
      append_dev(h23, t80);
      append_dev(div7, t81);
      append_dev(div7, p18);
      append_dev(p18, t82);
      append_dev(div7, t83);
      append_dev(div7, p19);
      append_dev(p19, t84);
      append_dev(p19, strong7);
      append_dev(strong7, t85);
      append_dev(p19, t86);
      append_dev(div7, t87);
      append_dev(div7, div4);
      append_dev(div4, img3);
      append_dev(div7, t88);
      append_dev(div7, p20);
      append_dev(p20, t89);
      append_dev(div7, t90);
      append_dev(div7, h24);
      append_dev(h24, t91);
      append_dev(div7, t92);
      append_dev(div7, p21);
      append_dev(p21, t93);
      append_dev(div7, t94);
      append_dev(div7, p22);
      append_dev(p22, t95);
      append_dev(div7, t96);
      append_dev(div7, div5);
      append_dev(div5, img4);
      append_dev(div7, t97);
      append_dev(div7, p23);
      append_dev(p23, t98);
      append_dev(div7, t99);
      append_dev(div7, p24);
      append_dev(p24, t100);
      append_dev(div7, t101);
      append_dev(div7, h25);
      append_dev(h25, t102);
      append_dev(div7, t103);
      append_dev(div7, p25);
      append_dev(p25, t104);
      append_dev(div7, t105);
      append_dev(div7, div6);
      append_dev(div6, img5);
      append_dev(div7, t106);
      append_dev(div7, p26);
      append_dev(p26, t107);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div8);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$3($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<WhatsInside> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("WhatsInside", $$slots, []);
  return [];
}

var WhatsInside = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(WhatsInside, _SvelteComponentDev);

  var _super = _createSuper$3(WhatsInside);

  function WhatsInside(options) {
    var _this;

    _classCallCheck(this, WhatsInside);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "WhatsInside",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  return WhatsInside;
}(SvelteComponentDev);

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$4 = "src/components/PullQuote2.svelte";

function create_fragment$4(ctx) {
  var div6;
  var div5;
  var div1;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var div4;
  var figure;
  var blockquote;
  var div2;
  var svg0;
  var path0;
  var t1;
  var div3;
  var svg1;
  var path1;
  var t2;
  var figcaption;
  var a;
  var t3;
  var block = {
    c: function create() {
      div6 = element("div");
      div5 = element("div");
      div1 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div4 = element("div");
      figure = element("figure");
      blockquote = element("blockquote");
      div2 = element("div");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      t1 = text("\n          I’d put money on it: will be the best UI design book ever written.\n          ");
      div3 = element("div");
      svg1 = svg_element("svg");
      path1 = svg_element("path");
      t2 = space();
      figcaption = element("figcaption");
      a = element("a");
      t3 = text("Erik Kennedy");
      this.h();
    },
    l: function claim(nodes) {
      div6 = claim_element(nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div1 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t0 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      figure = claim_element(div4_nodes, "FIGURE", {
        class: true
      });
      var figure_nodes = children(figure);
      blockquote = claim_element(figure_nodes, "BLOCKQUOTE", {
        class: true
      });
      var blockquote_nodes = children(blockquote);
      div2 = claim_element(blockquote_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      svg0 = claim_element(div2_nodes, "svg", {
        class: true,
        viewBox: true,
        xmlns: true
      }, 1);
      var svg0_nodes = children(svg0);
      path0 = claim_element(svg0_nodes, "path", {
        d: true,
        fill: true,
        "fill-rule": true
      }, 1);
      children(path0).forEach(detach_dev);
      svg0_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t1 = claim_text(blockquote_nodes, "\n          I’d put money on it: will be the best UI design book ever written.\n          ");
      div3 = claim_element(blockquote_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      svg1 = claim_element(div3_nodes, "svg", {
        class: true,
        viewBox: true,
        xmlns: true
      }, 1);
      var svg1_nodes = children(svg1);
      path1 = claim_element(svg1_nodes, "path", {
        d: true,
        fill: true,
        "fill-rule": true
      }, 1);
      children(path1).forEach(detach_dev);
      svg1_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      blockquote_nodes.forEach(detach_dev);
      t2 = claim_space(figure_nodes);
      figcaption = claim_element(figure_nodes, "FIGCAPTION", {
        class: true
      });
      var figcaption_nodes = children(figcaption);
      a = claim_element(figcaption_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "Erik Kennedy");
      a_nodes.forEach(detach_dev);
      figcaption_nodes.forEach(detach_dev);
      figure_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "rounded-full block");
      if (img.src !== (img_src_value = "https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/erik-kennedy.jpg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "");
      add_location(img, file$4, 4, 8, 228);
      attr_dev(div0, "class", "rounded-full p-1.5 border-2");
      add_location(div0, file$4, 3, 6, 178);
      attr_dev(div1, "class", "relative mx-auto rounded-full h-24 w-24 p-1.5 border-2 mb-4");
      add_location(div1, file$4, 2, 4, 98);
      attr_dev(path0, "d", "M30.216 9H35c-2.591 4.338-4.385 8.474-5.282\n                12.307h4.784L32.907 32H22.542l.697-4.842C24.435 19.289 27.226\n                13.237 30.216 9zM12.674 9h4.884c-2.69 4.338-4.485 8.474-5.382\n                12.307h4.784L15.365 32H5l.698-4.842C6.894 19.289 9.684 13.237\n                12.674 9z");
      attr_dev(path0, "fill", "#4E68D0");
      attr_dev(path0, "fill-rule", "evenodd");
      add_location(path0, file$4, 20, 14, 816);
      attr_dev(svg0, "class", "h-8 w-8 sm:h-12 sm:w-12");
      attr_dev(svg0, "viewBox", "0 0 40 40");
      attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg0, file$4, 16, 12, 667);
      attr_dev(div2, "class", "absolute top-0 left-0 mt-5 pl-2");
      add_location(div2, file$4, 15, 10, 609);
      attr_dev(path1, "d", "M9.784 32H5c2.591-4.338 4.385-8.474 5.282-12.307H5.498L7.093\n                9h10.365l-.697 4.842C15.565 21.711 12.774 27.763 9.784\n                32zm17.542 0h-4.884c2.69-4.338 4.485-8.474\n                5.382-12.307H23.04L24.635 9H35l-.698 4.842C33.106 21.711 30.316\n                27.763 27.326 32z");
      attr_dev(path1, "fill", "#4E68D0");
      attr_dev(path1, "fill-rule", "evenodd");
      add_location(path1, file$4, 36, 14, 1550);
      attr_dev(svg1, "class", "h-8 w-8 sm:h-12 sm:w-12");
      attr_dev(svg1, "viewBox", "0 0 40 40");
      attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg1, file$4, 32, 12, 1401);
      attr_dev(div3, "class", "absolute bottom-0 right-0 mb-5 pr-2");
      add_location(div3, file$4, 31, 10, 1339);
      attr_dev(blockquote, "class", "relative text-2xl sm:text-3xl mx-auto italic mb-4 px-12\n          sm:px-16");
      add_location(blockquote, file$4, 12, 8, 493);
      attr_dev(a, "href", "https://twitter.com/erikdkennedy/status/1001836296501805056");
      attr_dev(a, "class", "text-indigo-700 hover:text-indigo no-underline");
      add_location(a, file$4, 49, 10, 2116);
      attr_dev(figcaption, "class", "uppercase text-indigo-700 tracking-wide font-bold text-lg");
      add_location(figcaption, file$4, 47, 8, 2017);
      attr_dev(figure, "class", "font-display");
      add_location(figure, file$4, 11, 6, 455);
      attr_dev(div4, "class", "relative text-center");
      add_location(div4, file$4, 10, 4, 414);
      attr_dev(div5, "class", "relative max-w-xl mx-auto px-8 py-16 sm:py-32");
      add_location(div5, file$4, 1, 2, 34);
      attr_dev(div6, "class", "overflow-x-hidden");
      add_location(div6, file$4, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div6, anchor);
      append_dev(div6, div5);
      append_dev(div5, div1);
      append_dev(div1, div0);
      append_dev(div0, img);
      append_dev(div5, t0);
      append_dev(div5, div4);
      append_dev(div4, figure);
      append_dev(figure, blockquote);
      append_dev(blockquote, div2);
      append_dev(div2, svg0);
      append_dev(svg0, path0);
      append_dev(blockquote, t1);
      append_dev(blockquote, div3);
      append_dev(div3, svg1);
      append_dev(svg1, path1);
      append_dev(figure, t2);
      append_dev(figure, figcaption);
      append_dev(figcaption, a);
      append_dev(a, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div6);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$4($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<PullQuote2> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("PullQuote2", $$slots, []);
  return [];
}

var PullQuote2 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(PullQuote2, _SvelteComponentDev);

  var _super = _createSuper$4(PullQuote2);

  function PullQuote2(options) {
    var _this;

    _classCallCheck(this, PullQuote2);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PullQuote2",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  return PullQuote2;
}(SvelteComponentDev);

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$5 = "src/components/BuyNow.svelte";

function create_fragment$5(ctx) {
  var div15;
  var div14;
  var div0;
  var h2;
  var t0;
  var t1;
  var p0;
  var t2;
  var t3;
  var div13;
  var div6;
  var div1;
  var h30;
  var t4;
  var t5;
  var div5;
  var div2;
  var span2;
  var span0;
  var t6;
  var t7;
  var span1;
  var t8;
  var t9;
  var span5;
  var span3;
  var t10;
  var t11;
  var span4;
  var t12;
  var t13;
  var span6;
  var t14;
  var t15;
  var div4;
  var ul0;
  var li0;
  var span7;
  var svg0;
  var g0;
  var circle0;
  var polyline0;
  var t16;
  var span8;
  var strong0;
  var t17;
  var t18;
  var t19;
  var li1;
  var span9;
  var svg1;
  var g1;
  var circle1;
  var polyline1;
  var t20;
  var span10;
  var t21;
  var strong1;
  var t22;
  var t23;
  var li2;
  var span11;
  var svg2;
  var g2;
  var circle2;
  var polyline2;
  var t24;
  var span12;
  var strong2;
  var t25;
  var t26;
  var t27;
  var li3;
  var span13;
  var svg3;
  var g3;
  var circle3;
  var polyline3;
  var t28;
  var span14;
  var t29;
  var strong3;
  var t30;
  var t31;
  var t32;
  var li4;
  var span15;
  var svg4;
  var g4;
  var circle4;
  var polyline4;
  var t33;
  var span16;
  var strong4;
  var t34;
  var t35;
  var t36;
  var li5;
  var span17;
  var svg5;
  var g5;
  var circle5;
  var polyline5;
  var t37;
  var span18;
  var strong5;
  var t38;
  var t39;
  var t40;
  var div3;
  var a0;
  var t41;
  var t42;
  var p1;
  var t43;
  var a1;
  var t44;
  var t45;
  var t46;
  var div12;
  var div7;
  var h31;
  var t47;
  var t48;
  var div11;
  var div8;
  var span21;
  var span19;
  var t49;
  var t50;
  var span20;
  var t51;
  var t52;
  var span24;
  var span22;
  var t53;
  var t54;
  var span23;
  var t55;
  var t56;
  var span25;
  var t57;
  var t58;
  var div10;
  var ul1;
  var li6;
  var span26;
  var svg6;
  var g6;
  var circle6;
  var polyline6;
  var t59;
  var span27;
  var strong6;
  var t60;
  var t61;
  var t62;
  var li7;
  var span28;
  var svg7;
  var g7;
  var circle7;
  var polyline7;
  var t63;
  var span29;
  var t64;
  var strong7;
  var t65;
  var t66;
  var div9;
  var a2;
  var t67;
  var block = {
    c: function create() {
      div15 = element("div");
      div14 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t0 = text("Get Refactoring UI");
      t1 = space();
      p0 = element("p");
      t2 = text("Choose the package that works for you.");
      t3 = space();
      div13 = element("div");
      div6 = element("div");
      div1 = element("div");
      h30 = element("h3");
      t4 = text("The Complete Package");
      t5 = space();
      div5 = element("div");
      div2 = element("div");
      span2 = element("span");
      span0 = element("span");
      t6 = text("$");
      t7 = space();
      span1 = element("span");
      t8 = text("249");
      t9 = space();
      span5 = element("span");
      span3 = element("span");
      t10 = text("$");
      t11 = space();
      span4 = element("span");
      t12 = text("149");
      t13 = space();
      span6 = element("span");
      t14 = text("USD");
      t15 = space();
      div4 = element("div");
      ul0 = element("ul");
      li0 = element("li");
      span7 = element("span");
      svg0 = svg_element("svg");
      g0 = svg_element("g");
      circle0 = svg_element("circle");
      polyline0 = svg_element("polyline");
      t16 = space();
      span8 = element("span");
      strong0 = element("strong");
      t17 = text("The 218-page book");
      t18 = text("\n                  in PDF format");
      t19 = space();
      li1 = element("li");
      span9 = element("span");
      svg1 = svg_element("svg");
      g1 = svg_element("g");
      circle1 = svg_element("circle");
      polyline1 = svg_element("polyline");
      t20 = space();
      span10 = element("span");
      t21 = text("All three\n                  ");
      strong1 = element("strong");
      t22 = text("in-depth video tutorials");
      t23 = space();
      li2 = element("li");
      span11 = element("span");
      svg2 = svg_element("svg");
      g2 = svg_element("g");
      circle2 = svg_element("circle");
      polyline2 = svg_element("polyline");
      t24 = space();
      span12 = element("span");
      strong2 = element("strong");
      t25 = text("Component inspiration gallery");
      t26 = text("\n                  , featuring 200+ component and layout ideas");
      t27 = space();
      li3 = element("li");
      span13 = element("span");
      svg3 = svg_element("svg");
      g3 = svg_element("g");
      circle3 = svg_element("circle");
      polyline3 = svg_element("polyline");
      t28 = space();
      span14 = element("span");
      t29 = text("Over a dozen\n                  ");
      strong3 = element("strong");
      t30 = text("comprehensive color palettes");
      t31 = text("\n                  , tailored for application UIs");
      t32 = space();
      li4 = element("li");
      span15 = element("span");
      svg4 = svg_element("svg");
      g4 = svg_element("g");
      circle4 = svg_element("circle");
      polyline4 = svg_element("polyline");
      t33 = space();
      span16 = element("span");
      strong4 = element("strong");
      t34 = text("Curated font showcase");
      t35 = text("\n                  , including 30+ font recommendations categorized by use-case");
      t36 = space();
      li5 = element("li");
      span17 = element("span");
      svg5 = svg_element("svg");
      g5 = svg_element("g");
      circle5 = svg_element("circle");
      polyline5 = svg_element("polyline");
      t37 = space();
      span18 = element("span");
      strong5 = element("strong");
      t38 = text("Exclusive icon library");
      t39 = text("\n                  , including 200 easily customizable SVG icons");
      t40 = space();
      div3 = element("div");
      a0 = element("a");
      t41 = text("Buy Now");
      t42 = space();
      p1 = element("p");
      t43 = text("Buying for your team?\n                ");
      a1 = element("a");
      t44 = text("View team pricing options");
      t45 = text("\n                .");
      t46 = space();
      div12 = element("div");
      div7 = element("div");
      h31 = element("h3");
      t47 = text("The Essentials");
      t48 = space();
      div11 = element("div");
      div8 = element("div");
      span21 = element("span");
      span19 = element("span");
      t49 = text("$");
      t50 = space();
      span20 = element("span");
      t51 = text("99");
      t52 = space();
      span24 = element("span");
      span22 = element("span");
      t53 = text("$");
      t54 = space();
      span23 = element("span");
      t55 = text("79");
      t56 = space();
      span25 = element("span");
      t57 = text("USD");
      t58 = space();
      div10 = element("div");
      ul1 = element("ul");
      li6 = element("li");
      span26 = element("span");
      svg6 = svg_element("svg");
      g6 = svg_element("g");
      circle6 = svg_element("circle");
      polyline6 = svg_element("polyline");
      t59 = space();
      span27 = element("span");
      strong6 = element("strong");
      t60 = text("The 218-page book");
      t61 = text("\n                  in PDF format");
      t62 = space();
      li7 = element("li");
      span28 = element("span");
      svg7 = svg_element("svg");
      g7 = svg_element("g");
      circle7 = svg_element("circle");
      polyline7 = svg_element("polyline");
      t63 = space();
      span29 = element("span");
      t64 = text("All three\n                  ");
      strong7 = element("strong");
      t65 = text("in-depth video tutorials");
      t66 = space();
      div9 = element("div");
      a2 = element("a");
      t67 = text("Buy Now");
      this.h();
    },
    l: function claim(nodes) {
      div15 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div15_nodes = children(div15);
      div14 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      div0 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Get Refactoring UI");
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "Choose the package that works for you.");
      p0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div14_nodes);
      div13 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      div6 = claim_element(div13_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div1 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h30 = claim_element(div1_nodes, "H3", {
        class: true
      });
      var h30_nodes = children(h30);
      t4 = claim_text(h30_nodes, "The Complete Package");
      h30_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      span2 = claim_element(div2_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      span0 = claim_element(span2_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t6 = claim_text(span0_nodes, "$");
      span0_nodes.forEach(detach_dev);
      t7 = claim_space(span2_nodes);
      span1 = claim_element(span2_nodes, "SPAN", {});
      var span1_nodes = children(span1);
      t8 = claim_text(span1_nodes, "249");
      span1_nodes.forEach(detach_dev);
      span2_nodes.forEach(detach_dev);
      t9 = claim_space(div2_nodes);
      span5 = claim_element(div2_nodes, "SPAN", {
        class: true
      });
      var span5_nodes = children(span5);
      span3 = claim_element(span5_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t10 = claim_text(span3_nodes, "$");
      span3_nodes.forEach(detach_dev);
      t11 = claim_space(span5_nodes);
      span4 = claim_element(span5_nodes, "SPAN", {});
      var span4_nodes = children(span4);
      t12 = claim_text(span4_nodes, "149");
      span4_nodes.forEach(detach_dev);
      span5_nodes.forEach(detach_dev);
      t13 = claim_space(div2_nodes);
      span6 = claim_element(div2_nodes, "SPAN", {
        class: true
      });
      var span6_nodes = children(span6);
      t14 = claim_text(span6_nodes, "USD");
      span6_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t15 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {});
      var div4_nodes = children(div4);
      ul0 = claim_element(div4_nodes, "UL", {
        class: true
      });
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {
        class: true
      });
      var li0_nodes = children(li0);
      span7 = claim_element(li0_nodes, "SPAN", {
        class: true
      });
      var span7_nodes = children(span7);
      svg0 = claim_element(span7_nodes, "svg", {
        class: true,
        xmlns: true,
        viewBox: true
      }, 1);
      var svg0_nodes = children(svg0);
      g0 = claim_element(svg0_nodes, "g", {
        fill: true,
        "fill-rule": true
      }, 1);
      var g0_nodes = children(g0);
      circle0 = claim_element(g0_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        fill: true
      }, 1);
      children(circle0).forEach(detach_dev);
      polyline0 = claim_element(g0_nodes, "polyline", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        points: true
      }, 1);
      children(polyline0).forEach(detach_dev);
      g0_nodes.forEach(detach_dev);
      svg0_nodes.forEach(detach_dev);
      span7_nodes.forEach(detach_dev);
      t16 = claim_space(li0_nodes);
      span8 = claim_element(li0_nodes, "SPAN", {});
      var span8_nodes = children(span8);
      strong0 = claim_element(span8_nodes, "STRONG", {});
      var strong0_nodes = children(strong0);
      t17 = claim_text(strong0_nodes, "The 218-page book");
      strong0_nodes.forEach(detach_dev);
      t18 = claim_text(span8_nodes, "\n                  in PDF format");
      span8_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t19 = claim_space(ul0_nodes);
      li1 = claim_element(ul0_nodes, "LI", {
        class: true
      });
      var li1_nodes = children(li1);
      span9 = claim_element(li1_nodes, "SPAN", {
        class: true
      });
      var span9_nodes = children(span9);
      svg1 = claim_element(span9_nodes, "svg", {
        class: true,
        xmlns: true,
        viewBox: true
      }, 1);
      var svg1_nodes = children(svg1);
      g1 = claim_element(svg1_nodes, "g", {
        fill: true,
        "fill-rule": true
      }, 1);
      var g1_nodes = children(g1);
      circle1 = claim_element(g1_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        fill: true
      }, 1);
      children(circle1).forEach(detach_dev);
      polyline1 = claim_element(g1_nodes, "polyline", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        points: true
      }, 1);
      children(polyline1).forEach(detach_dev);
      g1_nodes.forEach(detach_dev);
      svg1_nodes.forEach(detach_dev);
      span9_nodes.forEach(detach_dev);
      t20 = claim_space(li1_nodes);
      span10 = claim_element(li1_nodes, "SPAN", {});
      var span10_nodes = children(span10);
      t21 = claim_text(span10_nodes, "All three\n                  ");
      strong1 = claim_element(span10_nodes, "STRONG", {});
      var strong1_nodes = children(strong1);
      t22 = claim_text(strong1_nodes, "in-depth video tutorials");
      strong1_nodes.forEach(detach_dev);
      span10_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      t23 = claim_space(ul0_nodes);
      li2 = claim_element(ul0_nodes, "LI", {
        class: true
      });
      var li2_nodes = children(li2);
      span11 = claim_element(li2_nodes, "SPAN", {
        class: true
      });
      var span11_nodes = children(span11);
      svg2 = claim_element(span11_nodes, "svg", {
        class: true,
        xmlns: true,
        viewBox: true
      }, 1);
      var svg2_nodes = children(svg2);
      g2 = claim_element(svg2_nodes, "g", {
        fill: true,
        "fill-rule": true
      }, 1);
      var g2_nodes = children(g2);
      circle2 = claim_element(g2_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        fill: true
      }, 1);
      children(circle2).forEach(detach_dev);
      polyline2 = claim_element(g2_nodes, "polyline", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        points: true
      }, 1);
      children(polyline2).forEach(detach_dev);
      g2_nodes.forEach(detach_dev);
      svg2_nodes.forEach(detach_dev);
      span11_nodes.forEach(detach_dev);
      t24 = claim_space(li2_nodes);
      span12 = claim_element(li2_nodes, "SPAN", {});
      var span12_nodes = children(span12);
      strong2 = claim_element(span12_nodes, "STRONG", {});
      var strong2_nodes = children(strong2);
      t25 = claim_text(strong2_nodes, "Component inspiration gallery");
      strong2_nodes.forEach(detach_dev);
      t26 = claim_text(span12_nodes, "\n                  , featuring 200+ component and layout ideas");
      span12_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      t27 = claim_space(ul0_nodes);
      li3 = claim_element(ul0_nodes, "LI", {
        class: true
      });
      var li3_nodes = children(li3);
      span13 = claim_element(li3_nodes, "SPAN", {
        class: true
      });
      var span13_nodes = children(span13);
      svg3 = claim_element(span13_nodes, "svg", {
        class: true,
        xmlns: true,
        viewBox: true
      }, 1);
      var svg3_nodes = children(svg3);
      g3 = claim_element(svg3_nodes, "g", {
        fill: true,
        "fill-rule": true
      }, 1);
      var g3_nodes = children(g3);
      circle3 = claim_element(g3_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        fill: true
      }, 1);
      children(circle3).forEach(detach_dev);
      polyline3 = claim_element(g3_nodes, "polyline", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        points: true
      }, 1);
      children(polyline3).forEach(detach_dev);
      g3_nodes.forEach(detach_dev);
      svg3_nodes.forEach(detach_dev);
      span13_nodes.forEach(detach_dev);
      t28 = claim_space(li3_nodes);
      span14 = claim_element(li3_nodes, "SPAN", {});
      var span14_nodes = children(span14);
      t29 = claim_text(span14_nodes, "Over a dozen\n                  ");
      strong3 = claim_element(span14_nodes, "STRONG", {});
      var strong3_nodes = children(strong3);
      t30 = claim_text(strong3_nodes, "comprehensive color palettes");
      strong3_nodes.forEach(detach_dev);
      t31 = claim_text(span14_nodes, "\n                  , tailored for application UIs");
      span14_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      t32 = claim_space(ul0_nodes);
      li4 = claim_element(ul0_nodes, "LI", {
        class: true
      });
      var li4_nodes = children(li4);
      span15 = claim_element(li4_nodes, "SPAN", {
        class: true
      });
      var span15_nodes = children(span15);
      svg4 = claim_element(span15_nodes, "svg", {
        class: true,
        xmlns: true,
        viewBox: true
      }, 1);
      var svg4_nodes = children(svg4);
      g4 = claim_element(svg4_nodes, "g", {
        fill: true,
        "fill-rule": true
      }, 1);
      var g4_nodes = children(g4);
      circle4 = claim_element(g4_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        fill: true
      }, 1);
      children(circle4).forEach(detach_dev);
      polyline4 = claim_element(g4_nodes, "polyline", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        points: true
      }, 1);
      children(polyline4).forEach(detach_dev);
      g4_nodes.forEach(detach_dev);
      svg4_nodes.forEach(detach_dev);
      span15_nodes.forEach(detach_dev);
      t33 = claim_space(li4_nodes);
      span16 = claim_element(li4_nodes, "SPAN", {});
      var span16_nodes = children(span16);
      strong4 = claim_element(span16_nodes, "STRONG", {});
      var strong4_nodes = children(strong4);
      t34 = claim_text(strong4_nodes, "Curated font showcase");
      strong4_nodes.forEach(detach_dev);
      t35 = claim_text(span16_nodes, "\n                  , including 30+ font recommendations categorized by use-case");
      span16_nodes.forEach(detach_dev);
      li4_nodes.forEach(detach_dev);
      t36 = claim_space(ul0_nodes);
      li5 = claim_element(ul0_nodes, "LI", {
        class: true
      });
      var li5_nodes = children(li5);
      span17 = claim_element(li5_nodes, "SPAN", {
        class: true
      });
      var span17_nodes = children(span17);
      svg5 = claim_element(span17_nodes, "svg", {
        class: true,
        xmlns: true,
        viewBox: true
      }, 1);
      var svg5_nodes = children(svg5);
      g5 = claim_element(svg5_nodes, "g", {
        fill: true,
        "fill-rule": true
      }, 1);
      var g5_nodes = children(g5);
      circle5 = claim_element(g5_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        fill: true
      }, 1);
      children(circle5).forEach(detach_dev);
      polyline5 = claim_element(g5_nodes, "polyline", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        points: true
      }, 1);
      children(polyline5).forEach(detach_dev);
      g5_nodes.forEach(detach_dev);
      svg5_nodes.forEach(detach_dev);
      span17_nodes.forEach(detach_dev);
      t37 = claim_space(li5_nodes);
      span18 = claim_element(li5_nodes, "SPAN", {});
      var span18_nodes = children(span18);
      strong5 = claim_element(span18_nodes, "STRONG", {});
      var strong5_nodes = children(strong5);
      t38 = claim_text(strong5_nodes, "Exclusive icon library");
      strong5_nodes.forEach(detach_dev);
      t39 = claim_text(span18_nodes, "\n                  , including 200 easily customizable SVG icons");
      span18_nodes.forEach(detach_dev);
      li5_nodes.forEach(detach_dev);
      ul0_nodes.forEach(detach_dev);
      t40 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      a0 = claim_element(div3_nodes, "A", {
        class: true,
        href: true,
        "data-gumroad-single-product": true
      });
      var a0_nodes = children(a0);
      t41 = claim_text(a0_nodes, "Buy Now");
      a0_nodes.forEach(detach_dev);
      t42 = claim_space(div3_nodes);
      p1 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t43 = claim_text(p1_nodes, "Buying for your team?\n                ");
      a1 = claim_element(p1_nodes, "A", {
        href: true
      });
      var a1_nodes = children(a1);
      t44 = claim_text(a1_nodes, "View team pricing options");
      a1_nodes.forEach(detach_dev);
      t45 = claim_text(p1_nodes, "\n                .");
      p1_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t46 = claim_space(div13_nodes);
      div12 = claim_element(div13_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      div7 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      h31 = claim_element(div7_nodes, "H3", {
        class: true
      });
      var h31_nodes = children(h31);
      t47 = claim_text(h31_nodes, "The Essentials");
      h31_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t48 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      div8 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      span21 = claim_element(div8_nodes, "SPAN", {
        class: true
      });
      var span21_nodes = children(span21);
      span19 = claim_element(span21_nodes, "SPAN", {
        class: true
      });
      var span19_nodes = children(span19);
      t49 = claim_text(span19_nodes, "$");
      span19_nodes.forEach(detach_dev);
      t50 = claim_space(span21_nodes);
      span20 = claim_element(span21_nodes, "SPAN", {});
      var span20_nodes = children(span20);
      t51 = claim_text(span20_nodes, "99");
      span20_nodes.forEach(detach_dev);
      span21_nodes.forEach(detach_dev);
      t52 = claim_space(div8_nodes);
      span24 = claim_element(div8_nodes, "SPAN", {
        class: true
      });
      var span24_nodes = children(span24);
      span22 = claim_element(span24_nodes, "SPAN", {
        class: true
      });
      var span22_nodes = children(span22);
      t53 = claim_text(span22_nodes, "$");
      span22_nodes.forEach(detach_dev);
      t54 = claim_space(span24_nodes);
      span23 = claim_element(span24_nodes, "SPAN", {});
      var span23_nodes = children(span23);
      t55 = claim_text(span23_nodes, "79");
      span23_nodes.forEach(detach_dev);
      span24_nodes.forEach(detach_dev);
      t56 = claim_space(div8_nodes);
      span25 = claim_element(div8_nodes, "SPAN", {
        class: true
      });
      var span25_nodes = children(span25);
      t57 = claim_text(span25_nodes, "USD");
      span25_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t58 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", {});
      var div10_nodes = children(div10);
      ul1 = claim_element(div10_nodes, "UL", {
        class: true
      });
      var ul1_nodes = children(ul1);
      li6 = claim_element(ul1_nodes, "LI", {
        class: true
      });
      var li6_nodes = children(li6);
      span26 = claim_element(li6_nodes, "SPAN", {
        class: true
      });
      var span26_nodes = children(span26);
      svg6 = claim_element(span26_nodes, "svg", {
        class: true,
        xmlns: true,
        viewBox: true
      }, 1);
      var svg6_nodes = children(svg6);
      g6 = claim_element(svg6_nodes, "g", {
        fill: true,
        "fill-rule": true
      }, 1);
      var g6_nodes = children(g6);
      circle6 = claim_element(g6_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        fill: true
      }, 1);
      children(circle6).forEach(detach_dev);
      polyline6 = claim_element(g6_nodes, "polyline", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        points: true
      }, 1);
      children(polyline6).forEach(detach_dev);
      g6_nodes.forEach(detach_dev);
      svg6_nodes.forEach(detach_dev);
      span26_nodes.forEach(detach_dev);
      t59 = claim_space(li6_nodes);
      span27 = claim_element(li6_nodes, "SPAN", {});
      var span27_nodes = children(span27);
      strong6 = claim_element(span27_nodes, "STRONG", {});
      var strong6_nodes = children(strong6);
      t60 = claim_text(strong6_nodes, "The 218-page book");
      strong6_nodes.forEach(detach_dev);
      t61 = claim_text(span27_nodes, "\n                  in PDF format");
      span27_nodes.forEach(detach_dev);
      li6_nodes.forEach(detach_dev);
      t62 = claim_space(ul1_nodes);
      li7 = claim_element(ul1_nodes, "LI", {
        class: true
      });
      var li7_nodes = children(li7);
      span28 = claim_element(li7_nodes, "SPAN", {
        class: true
      });
      var span28_nodes = children(span28);
      svg7 = claim_element(span28_nodes, "svg", {
        class: true,
        xmlns: true,
        viewBox: true
      }, 1);
      var svg7_nodes = children(svg7);
      g7 = claim_element(svg7_nodes, "g", {
        fill: true,
        "fill-rule": true
      }, 1);
      var g7_nodes = children(g7);
      circle7 = claim_element(g7_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        fill: true
      }, 1);
      children(circle7).forEach(detach_dev);
      polyline7 = claim_element(g7_nodes, "polyline", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        points: true
      }, 1);
      children(polyline7).forEach(detach_dev);
      g7_nodes.forEach(detach_dev);
      svg7_nodes.forEach(detach_dev);
      span28_nodes.forEach(detach_dev);
      t63 = claim_space(li7_nodes);
      span29 = claim_element(li7_nodes, "SPAN", {});
      var span29_nodes = children(span29);
      t64 = claim_text(span29_nodes, "All three\n                  ");
      strong7 = claim_element(span29_nodes, "STRONG", {});
      var strong7_nodes = children(strong7);
      t65 = claim_text(strong7_nodes, "in-depth video tutorials");
      strong7_nodes.forEach(detach_dev);
      span29_nodes.forEach(detach_dev);
      li7_nodes.forEach(detach_dev);
      ul1_nodes.forEach(detach_dev);
      t66 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      a2 = claim_element(div9_nodes, "A", {
        class: true,
        href: true,
        "data-gumroad-single-product": true
      });
      var a2_nodes = children(a2);
      t67 = claim_text(a2_nodes, "Buy Now");
      a2_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      div15_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "text-4xl md:text-6xl text-white font-bold mt-0 mb-0");
      add_location(h2, file$5, 3, 6, 156);
      attr_dev(p0, "class", "text-2xl md:text-3xl text-blue-light font-semibold");
      add_location(p0, file$5, 6, 6, 266);
      attr_dev(div0, "class", "text-center");
      add_location(div0, file$5, 2, 4, 124);
      attr_dev(h30, "class", "text-gray-700 uppercase tracking-wide text-lg sm:text-xl\n            text-center font-bold my-0");
      add_location(h30, file$5, 17, 10, 667);
      attr_dev(div1, "class", "px-8 py-6 bg-gray-300");
      add_location(div1, file$5, 16, 8, 621);
      attr_dev(span0, "class", "text-xl");
      add_location(span0, file$5, 30, 14, 1162);
      add_location(span1, file$5, 31, 14, 1207);
      attr_dev(span2, "class", "line-through opacity-75 inline-flex items-center\n              font-display text-xl md:text-2xl font-semibold text-grey-dark mr-3\n              sm:mr-4");
      add_location(span2, file$5, 26, 12, 967);
      attr_dev(span3, "class", "text-2xl md:text-3xl");
      add_location(span3, file$5, 36, 14, 1406);
      add_location(span4, file$5, 37, 14, 1464);
      attr_dev(span5, "class", "inline-flex items-center font-display text-5xl md:text-6xl\n              font-bold text-black mr-3 sm:mr-4");
      add_location(span5, file$5, 33, 12, 1256);
      attr_dev(span6, "class", "inline-flex items-center font-display text-xl md:text-2xl\n              font-bold text-grey-dark mr-3 sm:mr-4");
      add_location(span6, file$5, 39, 12, 1513);
      attr_dev(div2, "class", "text-center py-6 lg:py-4");
      add_location(div2, file$5, 25, 10, 916);
      attr_dev(circle0, "cx", "10");
      attr_dev(circle0, "cy", "10");
      attr_dev(circle0, "r", "10");
      attr_dev(circle0, "fill", "#9CE2B6");
      add_location(circle0, file$5, 54, 22, 2101);
      attr_dev(polyline0, "stroke", "#126D34");
      attr_dev(polyline0, "stroke-linecap", "round");
      attr_dev(polyline0, "stroke-linejoin", "round");
      attr_dev(polyline0, "stroke-width", "2");
      attr_dev(polyline0, "points", "6 10 8.667 12.667 14 7.333");
      add_location(polyline0, file$5, 55, 22, 2172);
      attr_dev(g0, "fill", "none");
      attr_dev(g0, "fill-rule", "evenodd");
      add_location(g0, file$5, 53, 20, 2043);
      attr_dev(svg0, "class", "h-5 w-5 block");
      attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg0, "viewBox", "0 0 20 20");
      add_location(svg0, file$5, 49, 18, 1880);
      attr_dev(span7, "class", "mr-4 mt-1");
      add_location(span7, file$5, 48, 16, 1837);
      add_location(strong0, file$5, 65, 18, 2537);
      add_location(span8, file$5, 64, 16, 2512);
      attr_dev(li0, "class", "flex items-start mb-4");
      add_location(li0, file$5, 47, 14, 1786);
      attr_dev(circle1, "cx", "10");
      attr_dev(circle1, "cy", "10");
      attr_dev(circle1, "r", "10");
      attr_dev(circle1, "fill", "#9CE2B6");
      add_location(circle1, file$5, 76, 22, 2977);
      attr_dev(polyline1, "stroke", "#126D34");
      attr_dev(polyline1, "stroke-linecap", "round");
      attr_dev(polyline1, "stroke-linejoin", "round");
      attr_dev(polyline1, "stroke-width", "2");
      attr_dev(polyline1, "points", "6 10 8.667 12.667 14 7.333");
      add_location(polyline1, file$5, 77, 22, 3048);
      attr_dev(g1, "fill", "none");
      attr_dev(g1, "fill-rule", "evenodd");
      add_location(g1, file$5, 75, 20, 2919);
      attr_dev(svg1, "class", "h-5 w-5 block");
      attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg1, "viewBox", "0 0 20 20");
      add_location(svg1, file$5, 71, 18, 2756);
      attr_dev(span9, "class", "mr-4 mt-1");
      add_location(span9, file$5, 70, 16, 2713);
      add_location(strong1, file$5, 88, 18, 3441);
      add_location(span10, file$5, 86, 16, 3388);
      attr_dev(li1, "class", "flex items-start mb-4");
      add_location(li1, file$5, 69, 14, 2662);
      attr_dev(circle2, "cx", "10");
      attr_dev(circle2, "cy", "10");
      attr_dev(circle2, "r", "10");
      attr_dev(circle2, "fill", "#9CE2B6");
      add_location(circle2, file$5, 98, 22, 3856);
      attr_dev(polyline2, "stroke", "#126D34");
      attr_dev(polyline2, "stroke-linecap", "round");
      attr_dev(polyline2, "stroke-linejoin", "round");
      attr_dev(polyline2, "stroke-width", "2");
      attr_dev(polyline2, "points", "6 10 8.667 12.667 14 7.333");
      add_location(polyline2, file$5, 99, 22, 3927);
      attr_dev(g2, "fill", "none");
      attr_dev(g2, "fill-rule", "evenodd");
      add_location(g2, file$5, 97, 20, 3798);
      attr_dev(svg2, "class", "h-5 w-5 block");
      attr_dev(svg2, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg2, "viewBox", "0 0 20 20");
      add_location(svg2, file$5, 93, 18, 3635);
      attr_dev(span11, "class", "mr-4 mt-1");
      add_location(span11, file$5, 92, 16, 3592);
      add_location(strong2, file$5, 109, 18, 4292);
      add_location(span12, file$5, 108, 16, 4267);
      attr_dev(li2, "class", "flex items-start mb-4");
      add_location(li2, file$5, 91, 14, 3541);
      attr_dev(circle3, "cx", "10");
      attr_dev(circle3, "cy", "10");
      attr_dev(circle3, "r", "10");
      attr_dev(circle3, "fill", "#9CE2B6");
      add_location(circle3, file$5, 120, 22, 4774);
      attr_dev(polyline3, "stroke", "#126D34");
      attr_dev(polyline3, "stroke-linecap", "round");
      attr_dev(polyline3, "stroke-linejoin", "round");
      attr_dev(polyline3, "stroke-width", "2");
      attr_dev(polyline3, "points", "6 10 8.667 12.667 14 7.333");
      add_location(polyline3, file$5, 121, 22, 4845);
      attr_dev(g3, "fill", "none");
      attr_dev(g3, "fill-rule", "evenodd");
      add_location(g3, file$5, 119, 20, 4716);
      attr_dev(svg3, "class", "h-5 w-5 block");
      attr_dev(svg3, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg3, "viewBox", "0 0 20 20");
      add_location(svg3, file$5, 115, 18, 4553);
      attr_dev(span13, "class", "mr-4 mt-1");
      add_location(span13, file$5, 114, 16, 4510);
      add_location(strong3, file$5, 132, 18, 5241);
      add_location(span14, file$5, 130, 16, 5185);
      attr_dev(li3, "class", "flex items-start mb-4");
      add_location(li3, file$5, 113, 14, 4459);
      attr_dev(circle4, "cx", "10");
      attr_dev(circle4, "cy", "10");
      attr_dev(circle4, "r", "10");
      attr_dev(circle4, "fill", "#9CE2B6");
      add_location(circle4, file$5, 143, 22, 5709);
      attr_dev(polyline4, "stroke", "#126D34");
      attr_dev(polyline4, "stroke-linecap", "round");
      attr_dev(polyline4, "stroke-linejoin", "round");
      attr_dev(polyline4, "stroke-width", "2");
      attr_dev(polyline4, "points", "6 10 8.667 12.667 14 7.333");
      add_location(polyline4, file$5, 144, 22, 5780);
      attr_dev(g4, "fill", "none");
      attr_dev(g4, "fill-rule", "evenodd");
      add_location(g4, file$5, 142, 20, 5651);
      attr_dev(svg4, "class", "h-5 w-5 block");
      attr_dev(svg4, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg4, "viewBox", "0 0 20 20");
      add_location(svg4, file$5, 138, 18, 5488);
      attr_dev(span15, "class", "mr-4 mt-1");
      add_location(span15, file$5, 137, 16, 5445);
      add_location(strong4, file$5, 154, 18, 6145);
      add_location(span16, file$5, 153, 16, 6120);
      attr_dev(li4, "class", "flex items-start mb-4");
      add_location(li4, file$5, 136, 14, 5394);
      attr_dev(circle5, "cx", "10");
      attr_dev(circle5, "cy", "10");
      attr_dev(circle5, "r", "10");
      attr_dev(circle5, "fill", "#9CE2B6");
      add_location(circle5, file$5, 165, 22, 6636);
      attr_dev(polyline5, "stroke", "#126D34");
      attr_dev(polyline5, "stroke-linecap", "round");
      attr_dev(polyline5, "stroke-linejoin", "round");
      attr_dev(polyline5, "stroke-width", "2");
      attr_dev(polyline5, "points", "6 10 8.667 12.667 14 7.333");
      add_location(polyline5, file$5, 166, 22, 6707);
      attr_dev(g5, "fill", "none");
      attr_dev(g5, "fill-rule", "evenodd");
      add_location(g5, file$5, 164, 20, 6578);
      attr_dev(svg5, "class", "h-5 w-5 block");
      attr_dev(svg5, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg5, "viewBox", "0 0 20 20");
      add_location(svg5, file$5, 160, 18, 6415);
      attr_dev(span17, "class", "mr-4 mt-1");
      add_location(span17, file$5, 159, 16, 6372);
      add_location(strong5, file$5, 176, 18, 7072);
      add_location(span18, file$5, 175, 16, 7047);
      attr_dev(li5, "class", "flex items-start mb-4");
      add_location(li5, file$5, 158, 14, 6321);
      attr_dev(ul0, "class", "list-reset px-2 sm:px-6");
      add_location(ul0, file$5, 46, 12, 1735);
      attr_dev(a0, "class", "block w-full text-xl sm:text-2xl inline-block bg-no-image\n                rounded-lg focus:outline-none bg-indigo hover:bg-indigo-dark\n                focus:bg-indigo-dark text-white font-semibold px-6 py-4 sm:py-5");
      attr_dev(a0, "href", "https://gum.co/MyQsm/launchday");
      attr_dev(a0, "data-gumroad-single-product", "true");
      add_location(a0, file$5, 183, 14, 7297);
      attr_dev(a1, "href", "https://gum.co/nFsfq");
      add_location(a1, file$5, 193, 16, 7788);
      attr_dev(p1, "class", "text-base mt-4 mb-0");
      add_location(p1, file$5, 191, 14, 7702);
      attr_dev(div3, "class", "text-center mt-12");
      add_location(div3, file$5, 182, 12, 7251);
      add_location(div4, file$5, 45, 10, 1717);
      attr_dev(div5, "class", "px-8 pb-8 text-base md:text-lg");
      add_location(div5, file$5, 24, 8, 861);
      attr_dev(div6, "class", "bg-white shadow rounded-lg max-w-md mx-auto lg:min-w-0 lg:w-3/5\n        relative overflow-hidden");
      add_location(div6, file$5, 13, 6, 494);
      attr_dev(h31, "class", "text-gray-700 uppercase tracking-wide text-xl text-center\n            font-bold my-0");
      add_location(h31, file$5, 205, 10, 8167);
      attr_dev(div7, "class", "px-8 py-6 bg-gray-300");
      add_location(div7, file$5, 204, 8, 8121);
      attr_dev(span19, "class", "text-xl");
      add_location(span19, file$5, 218, 14, 8636);
      add_location(span20, file$5, 219, 14, 8681);
      attr_dev(span21, "class", "line-through opacity-75 inline-flex items-center\n              font-display text-lg md:text-xl font-semibold text-grey-dark mr-2\n              sm:mr-3");
      add_location(span21, file$5, 214, 12, 8442);
      attr_dev(span22, "class", "text-xl md:text-2xl");
      add_location(span22, file$5, 224, 14, 8879);
      add_location(span23, file$5, 225, 14, 8936);
      attr_dev(span24, "class", "inline-flex items-center font-display text-4xl md:text-5xl\n              font-bold text-black mr-2 sm:mr-3");
      add_location(span24, file$5, 221, 12, 8729);
      attr_dev(span25, "class", "inline-flex items-center font-display text-lg md:text-xl\n              font-bold text-grey-dark mr-2 sm:mr-3");
      add_location(span25, file$5, 227, 12, 8984);
      attr_dev(div8, "class", "text-center py-4");
      add_location(div8, file$5, 213, 10, 8399);
      attr_dev(circle6, "cx", "10");
      attr_dev(circle6, "cy", "10");
      attr_dev(circle6, "r", "10");
      attr_dev(circle6, "fill", "#9CE2B6");
      add_location(circle6, file$5, 242, 22, 9571);
      attr_dev(polyline6, "stroke", "#126D34");
      attr_dev(polyline6, "stroke-linecap", "round");
      attr_dev(polyline6, "stroke-linejoin", "round");
      attr_dev(polyline6, "stroke-width", "2");
      attr_dev(polyline6, "points", "6 10 8.667 12.667 14 7.333");
      add_location(polyline6, file$5, 243, 22, 9642);
      attr_dev(g6, "fill", "none");
      attr_dev(g6, "fill-rule", "evenodd");
      add_location(g6, file$5, 241, 20, 9513);
      attr_dev(svg6, "class", "h-5 w-5 block");
      attr_dev(svg6, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg6, "viewBox", "0 0 20 20");
      add_location(svg6, file$5, 237, 18, 9350);
      attr_dev(span26, "class", "mr-4 mt-1");
      add_location(span26, file$5, 236, 16, 9307);
      add_location(strong6, file$5, 253, 18, 10007);
      add_location(span27, file$5, 252, 16, 9982);
      attr_dev(li6, "class", "flex items-start mb-4");
      add_location(li6, file$5, 235, 14, 9256);
      attr_dev(circle7, "cx", "10");
      attr_dev(circle7, "cy", "10");
      attr_dev(circle7, "r", "10");
      attr_dev(circle7, "fill", "#9CE2B6");
      add_location(circle7, file$5, 264, 22, 10447);
      attr_dev(polyline7, "stroke", "#126D34");
      attr_dev(polyline7, "stroke-linecap", "round");
      attr_dev(polyline7, "stroke-linejoin", "round");
      attr_dev(polyline7, "stroke-width", "2");
      attr_dev(polyline7, "points", "6 10 8.667 12.667 14 7.333");
      add_location(polyline7, file$5, 265, 22, 10518);
      attr_dev(g7, "fill", "none");
      attr_dev(g7, "fill-rule", "evenodd");
      add_location(g7, file$5, 263, 20, 10389);
      attr_dev(svg7, "class", "h-5 w-5 block");
      attr_dev(svg7, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg7, "viewBox", "0 0 20 20");
      add_location(svg7, file$5, 259, 18, 10226);
      attr_dev(span28, "class", "mr-4 mt-1");
      add_location(span28, file$5, 258, 16, 10183);
      add_location(strong7, file$5, 276, 18, 10911);
      add_location(span29, file$5, 274, 16, 10858);
      attr_dev(li7, "class", "flex items-start mb-4");
      add_location(li7, file$5, 257, 14, 10132);
      attr_dev(ul1, "class", "list-reset px-2 sm:px-6");
      add_location(ul1, file$5, 234, 12, 9205);
      attr_dev(a2, "class", "w-full text-lg sm:text-xl block bg-no-image rounded-lg\n                focus:outline-none bg-blue-grey hover:bg-blue-grey-dark\n                focus:bg-blue-grey-dark text-gray-700 font-semibold px-6 py-3\n                sm:py-4");
      attr_dev(a2, "href", "https://gum.co/LsTNA/launchday");
      attr_dev(a2, "data-gumroad-single-product", "true");
      add_location(a2, file$5, 282, 14, 11074);
      attr_dev(div9, "class", "text-center mt-12");
      add_location(div9, file$5, 281, 12, 11028);
      add_location(div10, file$5, 233, 10, 9187);
      attr_dev(div11, "class", "px-8 pb-8 text-base md:text-lg");
      add_location(div11, file$5, 212, 8, 8344);
      attr_dev(div12, "class", "bg-white shadow rounded-lg mt-16 max-w-xs mx-auto lg:max-w-full\n        lg:rounded-r-none lg:min-w-0 lg:w-2/5 lg:mt-0 overflow-hidden");
      add_location(div12, file$5, 201, 6, 7957);
      attr_dev(div13, "class", "mt-12 block lg:flex lg:items-center lg:flex-row-reverse lg:mt-16");
      add_location(div13, file$5, 11, 4, 403);
      attr_dev(div14, "class", "markdown max-w-screen-lg mx-auto px-8 text-xl py-16");
      add_location(div14, file$5, 1, 2, 54);
      attr_dev(div15, "id", "get-refactoring-ui");
      attr_dev(div15, "class", "bg-indigo-700");
      add_location(div15, file$5, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div15, anchor);
      append_dev(div15, div14);
      append_dev(div14, div0);
      append_dev(div0, h2);
      append_dev(h2, t0);
      append_dev(div0, t1);
      append_dev(div0, p0);
      append_dev(p0, t2);
      append_dev(div14, t3);
      append_dev(div14, div13);
      append_dev(div13, div6);
      append_dev(div6, div1);
      append_dev(div1, h30);
      append_dev(h30, t4);
      append_dev(div6, t5);
      append_dev(div6, div5);
      append_dev(div5, div2);
      append_dev(div2, span2);
      append_dev(span2, span0);
      append_dev(span0, t6);
      append_dev(span2, t7);
      append_dev(span2, span1);
      append_dev(span1, t8);
      append_dev(div2, t9);
      append_dev(div2, span5);
      append_dev(span5, span3);
      append_dev(span3, t10);
      append_dev(span5, t11);
      append_dev(span5, span4);
      append_dev(span4, t12);
      append_dev(div2, t13);
      append_dev(div2, span6);
      append_dev(span6, t14);
      append_dev(div5, t15);
      append_dev(div5, div4);
      append_dev(div4, ul0);
      append_dev(ul0, li0);
      append_dev(li0, span7);
      append_dev(span7, svg0);
      append_dev(svg0, g0);
      append_dev(g0, circle0);
      append_dev(g0, polyline0);
      append_dev(li0, t16);
      append_dev(li0, span8);
      append_dev(span8, strong0);
      append_dev(strong0, t17);
      append_dev(span8, t18);
      append_dev(ul0, t19);
      append_dev(ul0, li1);
      append_dev(li1, span9);
      append_dev(span9, svg1);
      append_dev(svg1, g1);
      append_dev(g1, circle1);
      append_dev(g1, polyline1);
      append_dev(li1, t20);
      append_dev(li1, span10);
      append_dev(span10, t21);
      append_dev(span10, strong1);
      append_dev(strong1, t22);
      append_dev(ul0, t23);
      append_dev(ul0, li2);
      append_dev(li2, span11);
      append_dev(span11, svg2);
      append_dev(svg2, g2);
      append_dev(g2, circle2);
      append_dev(g2, polyline2);
      append_dev(li2, t24);
      append_dev(li2, span12);
      append_dev(span12, strong2);
      append_dev(strong2, t25);
      append_dev(span12, t26);
      append_dev(ul0, t27);
      append_dev(ul0, li3);
      append_dev(li3, span13);
      append_dev(span13, svg3);
      append_dev(svg3, g3);
      append_dev(g3, circle3);
      append_dev(g3, polyline3);
      append_dev(li3, t28);
      append_dev(li3, span14);
      append_dev(span14, t29);
      append_dev(span14, strong3);
      append_dev(strong3, t30);
      append_dev(span14, t31);
      append_dev(ul0, t32);
      append_dev(ul0, li4);
      append_dev(li4, span15);
      append_dev(span15, svg4);
      append_dev(svg4, g4);
      append_dev(g4, circle4);
      append_dev(g4, polyline4);
      append_dev(li4, t33);
      append_dev(li4, span16);
      append_dev(span16, strong4);
      append_dev(strong4, t34);
      append_dev(span16, t35);
      append_dev(ul0, t36);
      append_dev(ul0, li5);
      append_dev(li5, span17);
      append_dev(span17, svg5);
      append_dev(svg5, g5);
      append_dev(g5, circle5);
      append_dev(g5, polyline5);
      append_dev(li5, t37);
      append_dev(li5, span18);
      append_dev(span18, strong5);
      append_dev(strong5, t38);
      append_dev(span18, t39);
      append_dev(div4, t40);
      append_dev(div4, div3);
      append_dev(div3, a0);
      append_dev(a0, t41);
      append_dev(div3, t42);
      append_dev(div3, p1);
      append_dev(p1, t43);
      append_dev(p1, a1);
      append_dev(a1, t44);
      append_dev(p1, t45);
      append_dev(div13, t46);
      append_dev(div13, div12);
      append_dev(div12, div7);
      append_dev(div7, h31);
      append_dev(h31, t47);
      append_dev(div12, t48);
      append_dev(div12, div11);
      append_dev(div11, div8);
      append_dev(div8, span21);
      append_dev(span21, span19);
      append_dev(span19, t49);
      append_dev(span21, t50);
      append_dev(span21, span20);
      append_dev(span20, t51);
      append_dev(div8, t52);
      append_dev(div8, span24);
      append_dev(span24, span22);
      append_dev(span22, t53);
      append_dev(span24, t54);
      append_dev(span24, span23);
      append_dev(span23, t55);
      append_dev(div8, t56);
      append_dev(div8, span25);
      append_dev(span25, t57);
      append_dev(div11, t58);
      append_dev(div11, div10);
      append_dev(div10, ul1);
      append_dev(ul1, li6);
      append_dev(li6, span26);
      append_dev(span26, svg6);
      append_dev(svg6, g6);
      append_dev(g6, circle6);
      append_dev(g6, polyline6);
      append_dev(li6, t59);
      append_dev(li6, span27);
      append_dev(span27, strong6);
      append_dev(strong6, t60);
      append_dev(span27, t61);
      append_dev(ul1, t62);
      append_dev(ul1, li7);
      append_dev(li7, span28);
      append_dev(span28, svg7);
      append_dev(svg7, g7);
      append_dev(g7, circle7);
      append_dev(g7, polyline7);
      append_dev(li7, t63);
      append_dev(li7, span29);
      append_dev(span29, t64);
      append_dev(span29, strong7);
      append_dev(strong7, t65);
      append_dev(div10, t66);
      append_dev(div10, div9);
      append_dev(div9, a2);
      append_dev(a2, t67);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div15);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$5($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<BuyNow> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("BuyNow", $$slots, []);
  return [];
}

var BuyNow = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(BuyNow, _SvelteComponentDev);

  var _super = _createSuper$5(BuyNow);

  function BuyNow(options) {
    var _this;

    _classCallCheck(this, BuyNow);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "BuyNow",
      options: options,
      id: create_fragment$5.name
    });
    return _this;
  }

  return BuyNow;
}(SvelteComponentDev);

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$6 = "src/components/FAQ.svelte";

function create_fragment$6(ctx) {
  var div25;
  var div24;
  var h2;
  var t0;
  var t1;
  var div2;
  var div0;
  var t2;
  var t3;
  var div1;
  var p0;
  var t4;
  var t5;
  var div5;
  var div3;
  var t6;
  var t7;
  var div4;
  var p1;
  var t8;
  var a0;
  var t9;
  var t10;
  var t11;
  var div8;
  var div6;
  var t12;
  var t13;
  var div7;
  var p2;
  var t14;
  var t15;
  var div11;
  var div9;
  var t16;
  var t17;
  var div10;
  var p3;
  var t18;
  var t19;
  var p4;
  var t20;
  var t21;
  var div14;
  var div12;
  var t22;
  var t23;
  var div13;
  var p5;
  var t24;
  var a1;
  var t25;
  var t26;
  var t27;
  var div17;
  var div15;
  var t28;
  var t29;
  var div16;
  var p6;
  var t30;
  var t31;
  var p7;
  var t32;
  var t33;
  var p8;
  var t34;
  var t35;
  var p9;
  var t36;
  var t37;
  var div20;
  var div18;
  var t38;
  var t39;
  var div19;
  var p10;
  var t40;
  var a2;
  var t41;
  var t42;
  var t43;
  var p11;
  var t44;
  var t45;
  var div23;
  var div21;
  var t46;
  var t47;
  var div22;
  var p12;
  var t48;
  var a3;
  var t49;
  var t50;
  var block = {
    c: function create() {
      div25 = element("div");
      div24 = element("div");
      h2 = element("h2");
      t0 = text("Frequently Asked Questions");
      t1 = space();
      div2 = element("div");
      div0 = element("div");
      t2 = text("Can I get a physical copy?");
      t3 = space();
      div1 = element("div");
      p0 = element("p");
      t4 = text("We're planning to explore a possible physical version next year, but\n          right now everything is only available digitally.");
      t5 = space();
      div5 = element("div");
      div3 = element("div");
      t6 = text("Can I get Refactoring UI for my entire team?");
      t7 = space();
      div4 = element("div");
      p1 = element("p");
      t8 = text("Sure!\n          ");
      a0 = element("a");
      t9 = text("Check out our team pricing options here");
      t10 = text("\n          .");
      t11 = space();
      div8 = element("div");
      div6 = element("div");
      t12 = text("Can I get an invoice?");
      t13 = space();
      div7 = element("div");
      p2 = element("p");
      t14 = text("Totally! Click the \"Generate\" button on your receipt from Gumroad\n          after you purchase and you can generate a detailed invoice with any\n          additional information you need.");
      t15 = space();
      div11 = element("div");
      div9 = element("div");
      t16 = text("What format are the files? Is there any DRM?");
      t17 = space();
      div10 = element("div");
      p3 = element("p");
      t18 = text("The book, component gallery, color palettes, and font recommendations\n          are PDFs, the screencasts are downloadable mp4 files, and the icons\n          are SVG.");
      t19 = space();
      p4 = element("p");
      t20 = text("Everything is DRM-free; that crap is annoying.");
      t21 = space();
      div14 = element("div");
      div12 = element("div");
      t22 = text("Can I upgrade to the complete package later?");
      t23 = space();
      div13 = element("div");
      p5 = element("p");
      t24 = text("Of course! Shoot us an email at\n          ");
      a1 = element("a");
      t25 = text("support@refactoringui.com");
      t26 = text("\n          and we'll sort you out.");
      t27 = space();
      div17 = element("div");
      div15 = element("div");
      t28 = text("Does the component gallery include CSS?");
      t29 = space();
      div16 = element("div");
      p6 = element("p");
      t30 = text("Short answer is no.");
      t31 = space();
      p7 = element("p");
      t32 = text("Long answer is that the goal with the component gallery is to provide\n          layout and treatment ideas with just enough fidelity to be useful.");
      t33 = space();
      p8 = element("p");
      t34 = text("If you need an idea for a pricing page layout, the idea is that you'd\n          browse the component gallery to find one you like, then combine that\n          with what you learn from the book to create a great-looking design\n          yourself.");
      t35 = space();
      p9 = element("p");
      t36 = text("There are a million ways you could style these components, and we\n          don't want the component gallery to encourage you to make every\n          project look the same.");
      t37 = space();
      div20 = element("div");
      div18 = element("div");
      t38 = text("What's the license for the icons?");
      t39 = space();
      div19 = element("div");
      p10 = element("p");
      t40 = text("You can read a copy of the license\n          ");
      a2 = element("a");
      t41 = text("here");
      t42 = text("\n          .");
      t43 = space();
      p11 = element("p");
      t44 = text("TL;DR: Do pretty much whatever you want with them, including using\n          them in open-source projects. Just don't resell them or publish them\n          on npm purely to distribute them for free or anything lame like that.");
      t45 = space();
      div23 = element("div");
      div21 = element("div");
      t46 = text("What if I decide it's not for me?");
      t47 = space();
      div22 = element("div");
      p12 = element("p");
      t48 = text("No problem at all! Email us at\n          ");
      a3 = element("a");
      t49 = text("support@refactoringui.com");
      t50 = text("\n          and we'll refund you in full, no questions asked.");
      this.h();
    },
    l: function claim(nodes) {
      div25 = claim_element(nodes, "DIV", {
        class: true
      });
      var div25_nodes = children(div25);
      div24 = claim_element(div25_nodes, "DIV", {
        class: true
      });
      var div24_nodes = children(div24);
      h2 = claim_element(div24_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Frequently Asked Questions");
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(div24_nodes);
      div2 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t2 = claim_text(div0_nodes, "Can I get a physical copy?");
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "We're planning to explore a possible physical version next year, but\n          right now everything is only available digitally.");
      p0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div24_nodes);
      div5 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div3 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t6 = claim_text(div3_nodes, "Can I get Refactoring UI for my entire team?");
      div3_nodes.forEach(detach_dev);
      t7 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      p1 = claim_element(div4_nodes, "P", {});
      var p1_nodes = children(p1);
      t8 = claim_text(p1_nodes, "Sure!\n          ");
      a0 = claim_element(p1_nodes, "A", {
        class: true,
        href: true
      });
      var a0_nodes = children(a0);
      t9 = claim_text(a0_nodes, "Check out our team pricing options here");
      a0_nodes.forEach(detach_dev);
      t10 = claim_text(p1_nodes, "\n          .");
      p1_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t11 = claim_space(div24_nodes);
      div8 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      div6 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      t12 = claim_text(div6_nodes, "Can I get an invoice?");
      div6_nodes.forEach(detach_dev);
      t13 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      p2 = claim_element(div7_nodes, "P", {});
      var p2_nodes = children(p2);
      t14 = claim_text(p2_nodes, "Totally! Click the \"Generate\" button on your receipt from Gumroad\n          after you purchase and you can generate a detailed invoice with any\n          additional information you need.");
      p2_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t15 = claim_space(div24_nodes);
      div11 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      div9 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      t16 = claim_text(div9_nodes, "What format are the files? Is there any DRM?");
      div9_nodes.forEach(detach_dev);
      t17 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      p3 = claim_element(div10_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t18 = claim_text(p3_nodes, "The book, component gallery, color palettes, and font recommendations\n          are PDFs, the screencasts are downloadable mp4 files, and the icons\n          are SVG.");
      p3_nodes.forEach(detach_dev);
      t19 = claim_space(div10_nodes);
      p4 = claim_element(div10_nodes, "P", {});
      var p4_nodes = children(p4);
      t20 = claim_text(p4_nodes, "Everything is DRM-free; that crap is annoying.");
      p4_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      t21 = claim_space(div24_nodes);
      div14 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      div12 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      t22 = claim_text(div12_nodes, "Can I upgrade to the complete package later?");
      div12_nodes.forEach(detach_dev);
      t23 = claim_space(div14_nodes);
      div13 = claim_element(div14_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      p5 = claim_element(div13_nodes, "P", {});
      var p5_nodes = children(p5);
      t24 = claim_text(p5_nodes, "Of course! Shoot us an email at\n          ");
      a1 = claim_element(p5_nodes, "A", {
        class: true,
        href: true
      });
      var a1_nodes = children(a1);
      t25 = claim_text(a1_nodes, "support@refactoringui.com");
      a1_nodes.forEach(detach_dev);
      t26 = claim_text(p5_nodes, "\n          and we'll sort you out.");
      p5_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      t27 = claim_space(div24_nodes);
      div17 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div17_nodes = children(div17);
      div15 = claim_element(div17_nodes, "DIV", {
        class: true
      });
      var div15_nodes = children(div15);
      t28 = claim_text(div15_nodes, "Does the component gallery include CSS?");
      div15_nodes.forEach(detach_dev);
      t29 = claim_space(div17_nodes);
      div16 = claim_element(div17_nodes, "DIV", {
        class: true
      });
      var div16_nodes = children(div16);
      p6 = claim_element(div16_nodes, "P", {
        class: true
      });
      var p6_nodes = children(p6);
      t30 = claim_text(p6_nodes, "Short answer is no.");
      p6_nodes.forEach(detach_dev);
      t31 = claim_space(div16_nodes);
      p7 = claim_element(div16_nodes, "P", {
        class: true
      });
      var p7_nodes = children(p7);
      t32 = claim_text(p7_nodes, "Long answer is that the goal with the component gallery is to provide\n          layout and treatment ideas with just enough fidelity to be useful.");
      p7_nodes.forEach(detach_dev);
      t33 = claim_space(div16_nodes);
      p8 = claim_element(div16_nodes, "P", {
        class: true
      });
      var p8_nodes = children(p8);
      t34 = claim_text(p8_nodes, "If you need an idea for a pricing page layout, the idea is that you'd\n          browse the component gallery to find one you like, then combine that\n          with what you learn from the book to create a great-looking design\n          yourself.");
      p8_nodes.forEach(detach_dev);
      t35 = claim_space(div16_nodes);
      p9 = claim_element(div16_nodes, "P", {});
      var p9_nodes = children(p9);
      t36 = claim_text(p9_nodes, "There are a million ways you could style these components, and we\n          don't want the component gallery to encourage you to make every\n          project look the same.");
      p9_nodes.forEach(detach_dev);
      div16_nodes.forEach(detach_dev);
      div17_nodes.forEach(detach_dev);
      t37 = claim_space(div24_nodes);
      div20 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div20_nodes = children(div20);
      div18 = claim_element(div20_nodes, "DIV", {
        class: true
      });
      var div18_nodes = children(div18);
      t38 = claim_text(div18_nodes, "What's the license for the icons?");
      div18_nodes.forEach(detach_dev);
      t39 = claim_space(div20_nodes);
      div19 = claim_element(div20_nodes, "DIV", {
        class: true
      });
      var div19_nodes = children(div19);
      p10 = claim_element(div19_nodes, "P", {
        class: true
      });
      var p10_nodes = children(p10);
      t40 = claim_text(p10_nodes, "You can read a copy of the license\n          ");
      a2 = claim_element(p10_nodes, "A", {
        class: true,
        href: true
      });
      var a2_nodes = children(a2);
      t41 = claim_text(a2_nodes, "here");
      a2_nodes.forEach(detach_dev);
      t42 = claim_text(p10_nodes, "\n          .");
      p10_nodes.forEach(detach_dev);
      t43 = claim_space(div19_nodes);
      p11 = claim_element(div19_nodes, "P", {});
      var p11_nodes = children(p11);
      t44 = claim_text(p11_nodes, "TL;DR: Do pretty much whatever you want with them, including using\n          them in open-source projects. Just don't resell them or publish them\n          on npm purely to distribute them for free or anything lame like that.");
      p11_nodes.forEach(detach_dev);
      div19_nodes.forEach(detach_dev);
      div20_nodes.forEach(detach_dev);
      t45 = claim_space(div24_nodes);
      div23 = claim_element(div24_nodes, "DIV", {
        class: true
      });
      var div23_nodes = children(div23);
      div21 = claim_element(div23_nodes, "DIV", {
        class: true
      });
      var div21_nodes = children(div21);
      t46 = claim_text(div21_nodes, "What if I decide it's not for me?");
      div21_nodes.forEach(detach_dev);
      t47 = claim_space(div23_nodes);
      div22 = claim_element(div23_nodes, "DIV", {
        class: true
      });
      var div22_nodes = children(div22);
      p12 = claim_element(div22_nodes, "P", {});
      var p12_nodes = children(p12);
      t48 = claim_text(p12_nodes, "No problem at all! Email us at\n          ");
      a3 = claim_element(p12_nodes, "A", {
        class: true,
        href: true
      });
      var a3_nodes = children(a3);
      t49 = claim_text(a3_nodes, "support@refactoringui.com");
      a3_nodes.forEach(detach_dev);
      t50 = claim_text(p12_nodes, "\n          and we'll refund you in full, no questions asked.");
      p12_nodes.forEach(detach_dev);
      div22_nodes.forEach(detach_dev);
      div23_nodes.forEach(detach_dev);
      div24_nodes.forEach(detach_dev);
      div25_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "text-center font-display text-white text-4xl mb-8");
      add_location(h2, file$6, 2, 4, 75);
      attr_dev(div0, "class", "lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0");
      add_location(div0, file$6, 8, 6, 291);
      add_location(p0, file$6, 12, 8, 478);
      attr_dev(div1, "class", "lg:w-2/3 lg:pl-6 text-teal-300 leading-normal");
      add_location(div1, file$6, 11, 6, 410);
      attr_dev(div2, "class", "lg:flex lg:flex-wrap lg:items-start border-t border-gray-300 py-8\n      text-xl");
      add_location(div2, file$6, 5, 4, 185);
      attr_dev(div3, "class", "lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0");
      add_location(div3, file$6, 21, 6, 768);
      attr_dev(a0, "class", "text-white font-medium");
      attr_dev(a0, "href", "https://gum.co/nFsfq");
      add_location(a0, file$6, 27, 10, 1003);
      add_location(p1, file$6, 25, 8, 973);
      attr_dev(div4, "class", "lg:w-2/3 lg:pl-6 text-teal-300 leading-normal");
      add_location(div4, file$6, 24, 6, 905);
      attr_dev(div5, "class", "lg:flex lg:flex-wrap lg:items-start border-t border-gray-300 py-8\n      text-xl");
      add_location(div5, file$6, 18, 4, 662);
      attr_dev(div6, "class", "lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0");
      add_location(div6, file$6, 37, 6, 1292);
      add_location(p2, file$6, 41, 8, 1474);
      attr_dev(div7, "class", "lg:w-2/3 lg:pl-6 text-teal-300 leading-normal");
      add_location(div7, file$6, 40, 6, 1406);
      attr_dev(div8, "class", "lg:flex lg:flex-wrap lg:items-start border-t border-gray-300 py-8\n      text-xl");
      add_location(div8, file$6, 34, 4, 1186);
      attr_dev(div9, "class", "lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0");
      add_location(div9, file$6, 51, 6, 1822);
      attr_dev(p3, "class", "mb-6");
      add_location(p3, file$6, 55, 8, 2027);
      add_location(p4, file$6, 60, 8, 2242);
      attr_dev(div10, "class", "lg:w-2/3 lg:pl-6 text-teal-300 leading-normal");
      add_location(div10, file$6, 54, 6, 1959);
      attr_dev(div11, "class", "lg:flex lg:flex-wrap lg:items-start border-t border-gray-300 py-8\n      text-xl");
      add_location(div11, file$6, 48, 4, 1716);
      attr_dev(div12, "class", "lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0");
      add_location(div12, file$6, 66, 6, 2430);
      attr_dev(a1, "class", "text-white font-medium");
      attr_dev(a1, "href", "mailto:support@refactoringui.com");
      add_location(a1, file$6, 72, 10, 2691);
      add_location(p5, file$6, 70, 8, 2635);
      attr_dev(div13, "class", "lg:w-2/3 lg:pl-6 text-teal-300 leading-normal");
      add_location(div13, file$6, 69, 6, 2567);
      attr_dev(div14, "class", "lg:flex lg:flex-wrap lg:items-start border-t border-gray-300 py-8\n      text-xl");
      add_location(div14, file$6, 63, 4, 2324);
      attr_dev(div15, "class", "lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0");
      add_location(div15, file$6, 84, 6, 3024);
      attr_dev(p6, "class", "mb-6");
      add_location(p6, file$6, 88, 8, 3224);
      attr_dev(p7, "class", "mb-6");
      add_location(p7, file$6, 89, 8, 3272);
      attr_dev(p8, "class", "mb-6");
      add_location(p8, file$6, 93, 8, 3467);
      add_location(p9, file$6, 99, 8, 3761);
      attr_dev(div16, "class", "lg:w-2/3 lg:pl-6 text-teal-300 leading-normal");
      add_location(div16, file$6, 87, 6, 3156);
      attr_dev(div17, "class", "lg:flex lg:flex-wrap lg:items-start border-t border-gray-300 py-8\n      text-xl");
      add_location(div17, file$6, 81, 4, 2918);
      attr_dev(div18, "class", "lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0");
      add_location(div18, file$6, 109, 6, 4095);
      attr_dev(a2, "class", "text-white font-medium");
      attr_dev(a2, "href", "https://gist.github.com/adamwathan/cbda1bb6c23e3bf4e31f7a98b2ac0edb");
      add_location(a2, file$6, 115, 10, 4361);
      attr_dev(p10, "class", "mb-6");
      add_location(p10, file$6, 113, 8, 4289);
      add_location(p11, file$6, 122, 8, 4560);
      attr_dev(div19, "class", "lg:w-2/3 lg:pl-6 text-teal-300 leading-normal");
      add_location(div19, file$6, 112, 6, 4221);
      attr_dev(div20, "class", "lg:flex lg:flex-wrap lg:items-start border-t border-gray-300 py-8\n      text-xl");
      add_location(div20, file$6, 106, 4, 3989);
      attr_dev(div21, "class", "lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0");
      add_location(div21, file$6, 132, 6, 4947);
      attr_dev(a3, "class", "text-white font-medium");
      attr_dev(a3, "href", "mailto:support@refactoringui.com");
      add_location(a3, file$6, 138, 10, 5196);
      add_location(p12, file$6, 136, 8, 5141);
      attr_dev(div22, "class", "lg:w-2/3 lg:pl-6 text-teal-300 leading-normal");
      add_location(div22, file$6, 135, 6, 5073);
      attr_dev(div23, "class", "lg:flex lg:flex-wrap lg:items-start border-t border-gray-300 py-8\n      text-xl");
      add_location(div23, file$6, 129, 4, 4841);
      attr_dev(div24, "class", "container py-24 px-8 mx-auto");
      add_location(div24, file$6, 1, 2, 28);
      attr_dev(div25, "class", "bg-gray-700");
      add_location(div25, file$6, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div25, anchor);
      append_dev(div25, div24);
      append_dev(div24, h2);
      append_dev(h2, t0);
      append_dev(div24, t1);
      append_dev(div24, div2);
      append_dev(div2, div0);
      append_dev(div0, t2);
      append_dev(div2, t3);
      append_dev(div2, div1);
      append_dev(div1, p0);
      append_dev(p0, t4);
      append_dev(div24, t5);
      append_dev(div24, div5);
      append_dev(div5, div3);
      append_dev(div3, t6);
      append_dev(div5, t7);
      append_dev(div5, div4);
      append_dev(div4, p1);
      append_dev(p1, t8);
      append_dev(p1, a0);
      append_dev(a0, t9);
      append_dev(p1, t10);
      append_dev(div24, t11);
      append_dev(div24, div8);
      append_dev(div8, div6);
      append_dev(div6, t12);
      append_dev(div8, t13);
      append_dev(div8, div7);
      append_dev(div7, p2);
      append_dev(p2, t14);
      append_dev(div24, t15);
      append_dev(div24, div11);
      append_dev(div11, div9);
      append_dev(div9, t16);
      append_dev(div11, t17);
      append_dev(div11, div10);
      append_dev(div10, p3);
      append_dev(p3, t18);
      append_dev(div10, t19);
      append_dev(div10, p4);
      append_dev(p4, t20);
      append_dev(div24, t21);
      append_dev(div24, div14);
      append_dev(div14, div12);
      append_dev(div12, t22);
      append_dev(div14, t23);
      append_dev(div14, div13);
      append_dev(div13, p5);
      append_dev(p5, t24);
      append_dev(p5, a1);
      append_dev(a1, t25);
      append_dev(p5, t26);
      append_dev(div24, t27);
      append_dev(div24, div17);
      append_dev(div17, div15);
      append_dev(div15, t28);
      append_dev(div17, t29);
      append_dev(div17, div16);
      append_dev(div16, p6);
      append_dev(p6, t30);
      append_dev(div16, t31);
      append_dev(div16, p7);
      append_dev(p7, t32);
      append_dev(div16, t33);
      append_dev(div16, p8);
      append_dev(p8, t34);
      append_dev(div16, t35);
      append_dev(div16, p9);
      append_dev(p9, t36);
      append_dev(div24, t37);
      append_dev(div24, div20);
      append_dev(div20, div18);
      append_dev(div18, t38);
      append_dev(div20, t39);
      append_dev(div20, div19);
      append_dev(div19, p10);
      append_dev(p10, t40);
      append_dev(p10, a2);
      append_dev(a2, t41);
      append_dev(p10, t42);
      append_dev(div19, t43);
      append_dev(div19, p11);
      append_dev(p11, t44);
      append_dev(div24, t45);
      append_dev(div24, div23);
      append_dev(div23, div21);
      append_dev(div21, t46);
      append_dev(div23, t47);
      append_dev(div23, div22);
      append_dev(div22, p12);
      append_dev(p12, t48);
      append_dev(p12, a3);
      append_dev(a3, t49);
      append_dev(p12, t50);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div25);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$6($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<FAQ> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("FAQ", $$slots, []);
  return [];
}

var FAQ = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(FAQ, _SvelteComponentDev);

  var _super = _createSuper$6(FAQ);

  function FAQ(options) {
    var _this;

    _classCallCheck(this, FAQ);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "FAQ",
      options: options,
      id: create_fragment$6.name
    });
    return _this;
  }

  return FAQ;
}(SvelteComponentDev);

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$7(ctx) {
  var t;
  var current;
  var hero = new Hero({
    $$inline: true
  });
  var block = {
    c: function create() {
      t = space();
      create_component(hero.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-piune\"]", document.head);
      head_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      claim_component(hero.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "Cracking the Coding Career";
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      mount_component(hero, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(hero.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hero.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      destroy_component(hero, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$7($$self, $$props, $$invalidate) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", $$slots, []);

  $$self.$capture_state = function () {
    return {
      Hero: Hero,
      Why: Why,
      PullQuote: PullQuote,
      WhatsInside: WhatsInside,
      PullQuote2: PullQuote2,
      BuyNow: BuyNow,
      FAQ: FAQ
    };
  };

  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper$7(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$7.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
