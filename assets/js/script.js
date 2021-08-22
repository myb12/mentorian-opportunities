/*==================== LINK ACTIVE ====================*/
/* using jQuery  */
// function activeColor(className) {
//     const links = $(`.${className}`);
//     $(document).ready(function() {
//         for (let link of links) {
//             if (link.href && link.href == window.location) {
//                 link.className += ` active`;
//                 return;
//             } else if (
//                 !link.href &&
//                 link.closest("a").href == window.location
//             ) {
//                 link.className += ` active`;
//                 return;
//             }
//         }

//     });
// }

function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  // IE <= 8
  else
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

function activeColor(className) {
  const links = document.querySelectorAll(`.${className}`);
  ready(function () {
    links.forEach((link) => {
      if (link.href && link.href == window.location) {
        link.classList.add("my-active");
      } else if (!link.href && link.closest("a").href == window.location) {
        link.classList.add("my-active");
      }
    });
  });
}

activeColor("nav-link");

activeColor("li-link");
