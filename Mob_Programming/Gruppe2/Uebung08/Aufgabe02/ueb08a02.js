// using Set to store unique values for exercise 2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
const groupSet = new Set();

const button = document.getElementById("showMembers");
const divTable = document.getElementById("myTable");
const divGroup = document.getElementById("group");
const ul = document.getElementById("myBullet");
const table = document.createElement("table");

button.onclick = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const members = JSON.parse(this.response);
    createTable(members);
  };
  xhttp.open("GET", "mitglieder.json", true);
  xhttp.send();
};

const createTable = (members) => {
  button.style.display = "none";
  divGroup.style.display = "block";
  createTableHeader(members);
  createTableRows(members);
  divTable.append(table);
};

const createTableHeader = (members) => {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  // assumption: all objects in members have the same attributes
  for (key in members[0]) {
    const th = document.createElement("th");
    th.innerHTML = key;
    tr.append(th);
  }

  const group = document.createElement("th");
  group.innerHTML = "gruppe";
  tr.append(group);

  thead.append(tr);
  table.append(thead);
};

const createTableRows = (members) => {
  const tbody = document.createElement("tbody");
  for (let i = 0; i < members.length; i++) {
    const tr = createTableRow(members[i]);
    tbody.append(tr);
  }
  table.append(tbody);
};

const createTableRow = (member) => {
  const tr = document.createElement("tr");

  // create table cells with data of members
  for (key in member) {
    const td = document.createElement("td");
    td.innerHTML = member[key];
    tr.append(td);
  }

  // create table cell with buttons
  const td = createButtons(member);
  tr.append(td);

  return tr;
};

const createButtons = (member) => {
  const td = document.createElement("td");
  const buttonAdd = document.createElement("button");
  const buttonRemove = document.createElement("button");

  buttonAdd.innerHTML = "Add";
  buttonAdd.onclick = function () {
    groupSet.add(member);
    refreshGroupList();
  };
  buttonRemove.innerHTML = "Remove";
  buttonRemove.onclick = function () {
    groupSet.delete(member);
    refreshGroupList();
  };
  td.append(buttonAdd, buttonRemove);

  return td;
};

function add(member) {
  groupSet.add(member);
  refreshGroupList();
}

const refreshGroupList = () => {
  ul.innerHTML = "";
  for (let member of groupSet) {
    const li = document.createElement("li");
    li.innerHTML = `${member.vorname} ${member.name}`;
    ul.append(li);
  }
};
