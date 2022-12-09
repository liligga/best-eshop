const product = document.querySelectorAll(".box");

product.forEach((item) => {
  item.addEventListener("click", (e) => {
    window.location.href = "product_view.html";
  });
});
