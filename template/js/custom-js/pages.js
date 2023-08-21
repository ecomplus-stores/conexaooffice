// Add your custom JavaScript for storefront pages here.
const insertArrowOnMenuMobile = () => {
    document.querySelectorAll('#categories-nav a[data-toggle]').forEach(element => {
        const contentArrow = document.createElement('div');
        contentArrow.classList.add('arrow-menu');
        element.appendChild(contentArrow)
    })
}
insertArrowOnMenuMobile();



