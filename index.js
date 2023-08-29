$(document).ready(function () {
  const $gridItems = $(".gallery-grid--item");

  $gridItems
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .addClass("gallery-grid--item--a");
  $gridItems
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .addClass("gallery-grid--item--b");
  $gridItems
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .addClass("gallery-grid--item--c");

  console.log($gridItems);

  $(".gallery-grid").colcade({
    columns: ".gallery-grid--col",
    items: ".gallery-grid--item",
  });
});
