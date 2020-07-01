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

// https://github.com/rster2002/svelte-outside-click/blob/master/index.js
export function clickOutside(node, onEventFunction) {
  const isNestedChild = (parent, child) => {
    var currentNode = child;

    while (currentNode !== null) {
      if (currentNode.parentNode === parent) {
        return true;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return false;
  };

  const handleClick = (event) => {
    var { target } = event;

    if (!node.isSameNode(target) && !isNestedChild(node, target)) {
      onEventFunction();
    }
  };

  document.addEventListener("click", handleClick);

  return {
    destroy() {
      document.removeEventListener("click", handleClick);
    },
  };
}
