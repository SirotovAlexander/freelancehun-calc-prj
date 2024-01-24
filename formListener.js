// const text = "350Lei";
// const t = text.slice(0, text.length - 3);
// const text2 = "18EUR";
// const t1 = text2.slice(0, text2.length - 3);
// console.log(t, t1);
// document.querySelector(".product-price__item").textContent;

const form = document.querySelector(".calc__form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const h = Number(form.elements.height.value);
  const w = Number(form.elements.width.value);

  const r = Math.round(h * w * 0.0001 * 18);
  form.elements.height.value = "";
  form.elements.width.value = "";
  form.elements.result.value = r;
}
