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
      <span>${sku}</span>
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
      let skus = []
      ecomCart.data.items.forEach((element) => {
        skus.push(element.skus)
      });
      const listSkus = skus.toString();
      const formulario = document.querySelector(".content-form form");
      const data = {
        nome: formulario.elements["nome"].value,
        email: formulario.elements["email"].value,
        empresa: formulario.elements["empresa"].value,
        cnpj: formulario.elements["cnpj"].value,
        endereco: formulario.elements["endereco"].value,
        complemento: formulario.elements["complemento"].value,
        telefone: formulario.elements["telefone"].value,
        cidade: formulario.elements["cidade"].value,
        estado: formulario.elements["estado"].value,
        cep: formulario.elements["cep"].value,
        mensagem: formulario.elements["mensagem"].value,
      };
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "acypriano@mtsolucoes.com.br",
        Password: "43CCFCFB639D1B4268A38DBA2277EDC98F4A",
        To: "andersen.cypriano@gmail.com",
        From: "acypriano@mtsolucoes.com.br",
        Subject: "Sending Email using javascript",
        Html: "<h1>GeeksforGeeks</h1>",
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
            <td><strong>Empresa:</strong></td>
            <td>${data.empresa}</td>
          </tr>
          <tr>
            <td><strong>CNPJ:</strong></td>
            <td>${data.cnpj}</td>
          </tr>
          <tr>
            <td><strong>Endereço:</strong></td>
            <td>${data.endereco}</td>
          </tr>
          <tr>
            <td><strong>Complemento:</strong></td>
            <td>${data.complemento}</td>
          </tr>
          <tr>
            <td><strong>Telefone:</strong></td>
            <td>${data.telefone}</td>
          </tr>
          <tr>
            <td><strong>Cidade:</strong></td>
            <td>${data.cidade}</td>
          </tr>
          <tr>
            <td><strong>Estado:</strong></td>
            <td>${data.estado}</td>
          </tr>
          <tr>
            <td><strong>CEP:</strong></td>
            <td>${data.cep}</td>
          </tr>
          <tr>
            <td><strong>SKUS:</strong></td>
            <td>${listSkus}</td>
          </tr>
          <tr>
            <td><strong>Mensagem:</strong></td>
            <td>${data.mensagem}</td>
          </tr>
        </table>
        `,
      }).then(function (message) {
        alert("E-mail enviado!");
      });
    });
};
