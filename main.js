const roundedElements = document.querySelectorAll("*");

roundedElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    // カーソルが要素に入ったときに、角を丸くするためborder-radiusを元の値に設定します
    element.style.borderRadius = "120px";
  });

  element.addEventListener("mouseleave", () => {
    // カーソルが要素から出たときに、再度角を直角にするためborder-radiusを0に設定します
    element.style.borderRadius = "0";
  });
});





