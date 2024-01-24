// const objOfLangs = {
//   romana: [
//     "Calculați costul comenzii",
//     "Înălțimea",
//     "Lungimea",
//     "Rezultatul",
//     "Calculați",
//   ],
//   russian: [
//     "Рассчитать стоимость заказа",
//     "Высота(см)",
//     "Длина(см)",
//     "Результат",
//     "Рассчитать",
//   ],
//   english: [
//     "Calculate the cost of the order",
//     "Height",
//     "Length",
//     "Result",
//     "Calculate",
//   ],
//   french: [
//     "Calculer le coût de la commande",
//     "Hauteur",
//     "Longueur",
//     "Résultat",
//     "Calculer",
//   ],
//   italian: [
//     "Calcola il costo dellordine",
//     "Altezza",
//     "Lunghezza",
//     "Risultato",
//     "Calcola",
//   ],
//   german: ["Bestellkosten", "Höhe", "Länge", "Ergebnis berechnen", "Berechnen"],
//   spanish: [
//     "Calcular el costo del pedido",
//     "Altura",
//     "Longitud",
//     "Resultado",
//     "Calcular",
//   ],
// };

const photoWallpaper = document.querySelector(".products-menu__container")
  .children[0];

if (
  photoWallpaper.className === ".products-menu__item.__active.j-submenu-item"
) {
  const target = document.querySelector(
    "products-menu__item __active j-submenu-item"
  );

  target.insertAdjacentHTML("afterbegin", createCalcMarkup());
}

function createCalcMarkup() {
  const markup = `<div
      id="calculator_for__width_height_price"
      style="
        width: 300px;
        margin: 0;
        border: 1px solid;
        overflow: hidden;
        border-radius: 5%;
        padding: 0 0 5px 0;
        box-shadow: 10px 7px 5px 3px rgba(0, 0, 0, 0.08);
      "
    >
      <p
        class="calc__promo__title"
        style="
          background-color: red;
          color: white;
          margin-top: 0;
          margin-bottom: 5;
          text-align: center;
        "
      >
        Рассчитать стоимость заказа:
      </p>
      <form
        class="calc__form"
        name="calc"
        autocomplete="on"
        novalidate
        style="
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        "
      >
        <label
          style="
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          "
        >
          <p class="calc__height__title" style="margin: 0; width: 100px">
            Высота(cм)
          </p>
          <input
            class="height__input"
            type="number"
            name="height"
            style="
              display: block;
              width: 100px;
              background-color: #f0f8ff;
              border: none;
            "
          />
        </label>

        <label
          style="
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          "
        >
          <p class="calc__width__title" style="margin: 0; width: 100px">
            Длина(см)
          </p>
          <input
            class="width__input"
            type="number"
            name="width"
            style="
              width: 100px;
              display: block;
              width: 100px;
              background-color: #f0f8ff;
              border: none;
            "
          />
        </label>
        <label
          style="
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          "
        >
          <p class="calc__price__title" style="margin: 0; width: 100px">Цена</p>
          <input
            class="price__input"
            type="number"
            name="price"
            style="
              width: 100px;
              display: block;
              width: 100px;
              background-color: #f0f8ff;
              border: none;
            "
          />
        </label>
        <button
          class="calc__button__submite"
          type="submit"
          style="background-color: #f0f8ff; border: 1px solid"
        >
          Рассчитать
        </button>
      </form>
    </div>`;

  return markup;
}
