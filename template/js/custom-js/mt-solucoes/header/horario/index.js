import { createElement } from "../../utils/createElementHTML"

export const setHorario = () => {
  const horario = `Horário ${document.querySelector('.content-contato li:last-child').innerText.split('Horário')[1]}`
  const textHorario = createElement('p', 'texto-horario');
  textHorario.textContent = horario;

  document.querySelector('.content-contato .horario').appendChild(textHorario);
  console.log('set Hours')

  document.querySelector('.content-contato address').textContent = document.querySelector('.content-contato li:last-child').innerText.split('Horário')[0]
}