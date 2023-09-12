import faker from "faker";

// const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
// document.querySelector("#cart-dev").innerHTML = cartText;

const mount = (el) => {
  const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;
  el.innerHTML = cartText;
};
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");
  // Assuming our container doesn't have an element
  // with id 'cart-dev'...
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

export { mount };
