import { initCheckout } from "./checkout-mt/initCheckout";
import { initCartPage } from "./mt-solucoes/cartPage";

// Add your custom JavaScript for checkout here.


window.addEventListener("load", (event) => {
  dataLayer.forEach(element => element.event == 'checkout' ? initCheckout() : null )
});

// CART PAGE
window.location.hash.split('/')[1] == 'cart' ? initCartPage() : null;