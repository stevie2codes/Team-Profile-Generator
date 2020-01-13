

const man_card = (name, id, email, officeNumber) => {
    return `<div class="card" style="width: 18rem;">
      <div class="card-header p-4">
      <h2>${name}</h2>
      <h4>Manager<h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">office Number: ${officeNumber}</li>
      </ul>
    </div>`
  }


const genEngineerCard = (name, id, email, github) => {
  return `<div class="card" style="width: 18rem;">
    <div class="card-header p-4">
    <h2>${name}</h2>
    <h4>Engineer<h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${id}</li>
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">Github: ${github}</li>
    </ul>
  </div>`
}

module.exports = {
    genEngineerCard: genEngineerCard,
    man_card: man_card
};