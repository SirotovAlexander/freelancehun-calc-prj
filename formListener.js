if (document.querySelector(".calc__form") !== null) {
  const form = document.querySelector(".calc__form");
  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    let price = 0;
    let divText = null;

    const check = document.querySelector(".product-price__item");

    check === null
      ? (divText = document.querySelector(".product-card__price").textContent)
      : (divText = document.querySelector(".product-price__item").textContent);

    if (divText.includes("350Lei")) {
      price = 350;
    } else {
      price = 18;
    }

    const form = event.target;
    const h = Number(form.elements.height.value);
    const w = Number(form.elements.width.value);

    const r = Math.round(h * w * 0.0001 * price);

    form.elements.result.value = r;
  }
}
