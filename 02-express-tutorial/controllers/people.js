const { people } = require("../data.js");

const addPerson = (req, res) => {
  const name = req.body.name;
  if (!name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  } else {
    people.push({ id: people.length + 1, name: name });
    res.status(201).json({ success: true, name: name });
  }
};

const getPeople = (req, res) => {
  res.stauts(201).json(people);
};

const getPersonById = (req, res) => {
  const id = Number(req.params.id);
  const person = people.find((person) => person.id === id);

  if (person) {
    return res.status(201).json(person);
  }
  res
    .status(404)
    .json({ success: false, msg: `No person found with id: ${id}` });
};

const updatePerson = (req, res) => {
  const name = req.body.name;
  const id = Number(req.params.id);
  for (let i = 0; i < people.length; i++) {
    if (people[i].id === id) {
      people[i].name = name;
      return res.status(200).json({ success: true, person: people[i] });
    }
  }
  res
    .status(404)
    .json({ success: false, msg: `No person with found with id ${id}` });
};

const deletePerson = (req, res) => {
  const id = Number(req.params.id);

  for (let i = 0; i < people.length; i++) {
    if (people[i].id === id) {
      people.splice(i, 1);
      return res.status(201).json({ success: true });
    }
  }

  res
    .status(404)
    .json({ success: false, msg: `No person found with id ${id}` });
};

module.exports = {
  addPerson,
  getPeople,
  getPersonById,
  updatePerson,
  deletePerson,
};
