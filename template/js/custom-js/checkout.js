import { initCheckout } from "./checkout-mt/initCheckout";
import { initCartPage } from "./mt-solucoes/cartPage";

// Add your custom JavaScript for checkout here.


window.addEventListener("load", (event) => {
  dataLayer.forEach(element => element.event == 'checkout' ? initCheckout() : null )
});

// CART PAGE
window.location.hash.split('/')[1] == 'cart' ? initCartPage() : null;

storefront.on('widget:@ecomplus/widget-tag-manager', function () {
    document.querySelector('.cart__btn-checkout').insertAdjacentHTML('beforebegin', `
    <div id="block-confirm" class="form-group"><div class="custom-control custom-checkbox"><input type="checkbox" id="input-confirm-checkout" class="custom-control-input"> <label for="input-confirm-checkout" class="custom-control-label">
          Ao finalizar a compra, confirmo que estou ciente e concordo que, devido ao recesso, os envios serão suspensos entre 20/12 e 06/01. O prazo de entrega começará a contar a partir de 06/01.
        </label></div></div>
    `);
    document.querySelector('#block-confirm').addEventListener('click', (e) => {
        if (e.target.checked) {
            document.querySelector('#block-confirm').style.display = 'none'
            document.querySelector('.cart__btn-checkout').style.display = 'block'
        }
    })
})
