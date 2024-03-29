const objOfLangs = {
  "ro-RO": [
    "Calculați costul comenzii",
    "Înălțimea (cm)",
    "Lungimea (cm)",
    "Rezultatul",
    "Calculați",
  ],
  "ru-RU": [
    "Рассчитать стоимость заказа",
    "Высота(см)",
    "Длина(см)",
    "Результат",
    "Рассчитать",
  ],
  "en-US": [
    "Calculate the cost of the order",
    "Height (cm)",
    "Length (cm)",
    "Result",
    "Calculate",
  ],
  "fr-FR": [
    "Calculer le coût de la commande",
    "Hauteur (cm)",
    "Longueur (cm)",
    "Résultat",
    "Calculer",
  ],
  "it-IT": [
    "Calcola il costo dellordine",
    "Altezza (cm)",
    "Lunghezza (cm)",
    "Risultato",
    "Calcola",
  ],
  "de-DE": [
    "Bestellkosten",
    "Höhe (cm)",
    "Länge (cm)",
    "Ergebnis berechnen",
    "Berechnen",
  ],
  "es-ES": [
    "Calcular el costo del pedido",
    "Altura (cm)",
    "Longitud (cm)",
    "Resultado",
    "Calcular",
  ],
};

const URL = JSON.stringify(window.location.href);

if (URL.includes("fototapet")) {
  const target = document.querySelector(
    ".product__section.product__section--price"
  );

  if (target !== null) {
    target.insertAdjacentHTML("afterbegin", createCalcMarkup(objOfLangs));
  }
}

function createCalcMarkup(objOfLangs) {
  const bodyClass = document.querySelector("body").className;
  const keys = Object.keys(objOfLangs);
  const filterKeys = keys.filter((key) => bodyClass.includes(key));

  const markup = `<div
      id="calculator_for__width_height_price"
      style="
        width: 300px;
        margin: 0;
        border: 1px solid;
        overflow: hidden;
        border-radius: 5%;
        padding: 0 0 5px 0;
        margin-bottom: 10px;
      "
    >
      <p
        class="calc__promo__title"
        style="
          background-color: red;
          color: white;
          margin-top: 0;
          margin-bottom: 10px;
          text-align: center;
        "
      >
        ${objOfLangs[filterKeys[0]][0]}
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
            ${objOfLangs[filterKeys[0]][1]}
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
              text-align: center;
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
            ${objOfLangs[filterKeys[0]][2]}
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
              text-align: center;
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
          <p class="calc__result__title" style="margin: 0; width: 100px">
            ${objOfLangs[filterKeys[0]][3]}
          </p>
          <input
            class="result__input"
            value=""
            name="result"
            readonly
            style="
              width: 100px;
              display: block;
              width: 100px;
              background-color: #f0f8ff;
              border: none;
              text-align: center;
            "
          />
        </label>
        <button
          class="calc__button__submite"
          type="submit"
          style="
            color: #fff;
            border: #000;
            background: #ef1617;
            box-shadow: none;
            border-radius: 6%;
            width: 90px;
            height: 25px;
          "
        >
          ${objOfLangs[filterKeys[0]][4]}
        </button>
      </form>
    </div>`;

  return markup;
}
