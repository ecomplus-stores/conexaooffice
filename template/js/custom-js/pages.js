// Add your custom JavaScript for storefront pages here.
const insertArrowOnMenuMobile = () => {
    document.querySelectorAll('#categories-nav a[data-toggle]').forEach(element => {
        const contentArrow = document.createElement('div');
        contentArrow.classList.add('arrow-menu');
        element.appendChild(contentArrow)
    })
}
insertArrowOnMenuMobile();
storefront.on('widget:@ecomplus/widget-minicart', function () {
  const checkoutBtn = document.querySelector('.minicart__btn-checkout');

  if (!checkoutBtn || document.querySelector('#block-confirm')) {
    return;
  }

  // Esconde o botão de checkout inicialmente
  checkoutBtn.style.display = 'none';

  checkoutBtn.insertAdjacentHTML('beforebegin', `
    <div id="block-confirm" class="form-group">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" id="input-confirm-checkout" class="custom-control-input">
        <label for="input-confirm-checkout" class="custom-control-label">
          Ao finalizar a compra, confirmo que estou ciente e concordo que os pedidos realizados e aprovados 
          entre 20/12 e 04/01 serão processados a partir do dia 05/01/2026, 
          e o prazo de entrega passará a contar a partir dessa data.
        </label>
      </div>
    </div>
  `);

  document
    .querySelector('#input-confirm-checkout')
    .addEventListener('change', function () {
      if (this.checked) {
        document.querySelector('#block-confirm').style.display = 'none';
        checkoutBtn.style.display = 'block';
      }
    });
});
