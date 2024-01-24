const b = document.querySelector("body");
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
        position: fixed;
    	  bottom: 0;
    	  right: 0;
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
          <p class="calc__result__title" style="margin: 0; width: 100px">
            Результат
          </p>
          <input
            class="result__input"
            value=""
            name="price"
            readonly
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

b.style.position = "inherit";

b.insertAdjacentHTML("beforeend", markup);
