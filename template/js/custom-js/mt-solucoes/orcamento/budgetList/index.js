import { createElement } from "../../utils/createElementHTML";


const emptyAlert = createElement("p", "alert-empty");
emptyAlert.textContent = "Não existem itens na lista de orçamento.";

const createElementBudget = ({ name, picture, sku, product_id }) => {
  const budgetItem = document.createElement("li");
  budgetItem.classList.add("budgetlist-item");
  console.log(emptyAlert);
  budgetItem.innerHTML = `
    <div class="thumb"><img src="${picture.normal.url}" alt=""></div>
    <div class="info">
      <h2>${name}</h2>
      <div sytle="display: flex"><b>SKU:</b><span>${sku}</span></div>
      <div class="qtda">
        <p>Quantidade <span>*</span></p>
        <input type="number" min="1" placeholder="0" sku-item="${sku}">
      </div>
    </div>
    <div class='remove-budgetitem' id-item="${product_id}"></div>
  `;

  document.querySelector(".budgetList-content").appendChild(budgetItem);
};

function createBudgetList() {
  ecomCart.data.items.forEach((element) => {
    createElementBudget(element);
  });
  
  document.querySelectorAll(".remove-budgetitem").forEach((element) => {
    element.addEventListener("click", (e) => {
      ecomCart.removeItem(e.target.getAttribute("id-item"));
      e.target.parentElement.remove();
      ecomCart.data.items.length == 0
        ? document.querySelector(".budgetList-content").appendChild(emptyAlert)
        : null;
    });


    document.querySelector('.content-form button').classList.add('inative')
    document.querySelector('.content-form button').setAttribute('disable', 'true')
  });

  
}



export const checkItemsList = () => {
  ecomCart.data.items.length > 0
    ? createBudgetList()
    : document.querySelector(".budgetList-content").appendChild(emptyAlert);

  document
    .querySelector(".content-form button")
    .addEventListener("click", (e) => {
      e.preventDefault();

      let skus = [];
      ecomCart.data.items.forEach((element) => {
        skus.push(element.skus);
      });

      document.querySelectorAll('.budgetlist-item input').forEach(element => {
        const objItem = {
            sku: element.getAttribute('sku-item'),
            qtda: element.value
        }
        document.querySelector('input[name="sku-list"]').value += `${objItem.qtda + 'x -'} ${objItem.sku}, `
      })

      // const listSkus = skus.toString();
      const formulario = document.querySelector(".content-form form");
      const data = {
        nome: formulario.elements["nome"].value,
        email: formulario.elements["email"].value,
        telefone: formulario.elements["telefone"].value,
        endereco: formulario.elements["endereco"].value,
        cep: formulario.elements["cep"].value,
        skus: formulario.elements["sku-list"].value,
        mensagem: formulario.elements["mensagem"].value,
      };
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "contato@conexaooffice.com.br",
        Password: "9156899586723675B702A1595861596DC100",
        To: "contato@conexaooffice.com.br",
        From: "contato@conexaooffice.com.br",
        Subject: "Solicitação de orçamento - Conexão Office",
        Body: `
        <table>
          <thead>
            <h2>Solicitação de orçamento</h2>
          </thead>
          <tr>
            <td><strong>Nome:</strong></td>
            <td>${data.nome}</td>
          </tr>
          <tr>
            <td><strong>E-mail:</strong></td>
            <td>${data.email}</td>
          </tr>
          
          <tr>
            <td><strong>Endereço:</strong></td>
            <td>${data.endereco}</td>
          </tr>
          <tr>
            <td><strong>Telefone:</strong></td>
            <td>${data.telefone}</td>
          </tr>
          <tr>
            <td><strong>SKUS:</strong></td>
            <td>${data.skus}</td>
          </tr>
          <tr>
            <td><strong>Mensagem:</strong></td>
            <td>${data.mensagem}</td>
          </tr>
        </table>
        `,
      }).then(function (message) {
        window.location = '/orcamento-enviado'
      });
    });
};
