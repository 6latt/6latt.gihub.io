(function () {
  var html = document.documentElement;
  html.classList.add("js");

  var mediaQueryObj = window.matchMedia("(prefers-color-scheme: dark)");
  var isDarkMode = mediaQueryObj.matches;

  if (typeof localStorage !== "undefined") {
    var localDarkMode = localStorage.getItem("darkmode");
    if (localDarkMode === "1" || (localDarkMode === null && isDarkMode)) {
      html.classList.add("darkmode");
    }
    if (localStorage.getItem("rainbowmode") === "1") {
      html.classList.add("rainbowmode");
    }
    if (localStorage.g    etItem("textmode") === "1") {
      html.classList.add("textmode");
    }
  }

  var charWidth = 8;
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  function onResize() {
    var width = innerWidth;
    var height = innerHeight;
    charWidth = 7;
    if (width > 900) {
      charWidth = 8;
    }
    if (width > 1200) {
      charWidth = 9;
    }
    if (width > 1500 || width < 768) {
      charWidth = 10;
    }
    var targetLineHeight = width < 500 ? 2 : 2.1;
    var cols = Math.floor(width / charWidth);
    if (width > 767) {
      var charsColumns = cols - 9;
      var evenCharsColumns = charsColumns - (charsColumns % 8);
      cols = evenCharsColumns + 7;
      charWidth = width / (cols + 2);
    } else {
      charWidth = width / cols;
    }
    var siteHeight = height - charWidth * 2;
    var rows = Math.floor(siteHeight / (charWidth * targetLineHeight));
    var lineHeight = height / (rows * charWidth);
    rows = Math.floor(siteHeight / (charWidth * lineHeight));

    var lineHeightPx = lineHeight * charWidth;
    if (isSafari) {
      lineHeightPx = Math.ceil(lineHeightPx);
      rows = Math.floor(siteHeight / lineHeightPx);
    }

    var fontSize = charWidth / 0.6 - 0.9;
    var letterSpacing = (charWidth / 0.6 - fontSize) * 0.6;
    if (isSafari) {
      var fontSizeRounded = Math.floor(charWidth / 0.6 - 0.3);
      letterSpacing = (charWidth / 0.6 - fontSizeRounded) * 0.6;
      fontSize = fontSizeRounded;
    }
    html.style = `
      --char-width: ${charWidth};
      --cols: ${cols};
      --rows: ${rows};
      --line-height: ${lineHeightPx}px;
      --letter-spacing: ${letterSpacing}px;
      --font-size:${fontSize}px;
      --screen-height: ${screen.availHeight};
      --half-rows: ${Math.floor(rows / 2)};
      --vh-height: ${height * 0.01}px;
    `;

    window._charWidth = charWidth;
    window._charHeight = lineHeight * charWidth;
    window._rows = rows;
    window._cols = cols;
    window._lineHeight = lineHeightPx;
  }
  if (!("ontouchstart" in window)) {
    window.addEventListener("resize", onResize);
  }
  window.addEventListener("orientationchange", onResize);
  onResize();
})();
