// // swap an <a> tag's href with a smooth scroller
// // so that site still works without javascript
// export function scrollToHref(node) {
//   const hash = node.hash;
//   node.hash = "";
//   function listener() {
//     document.getElementById(hash.slice(1)).scrollIntoView({
//       behavior: "smooth",
//       block: "end",
//       inline: "nearest",
//     });
//   }
//   node.addEventListener("click", listener);
//   return {
//     destroy() {
//       node.removeEventListener("click", listener);
//     },
//   };
// }
