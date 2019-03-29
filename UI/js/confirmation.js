var accountModal = document.getElementById("create-account-modal");
var account = document.getElementById("btn-create");

var body = document.getElementsByTagName("body")[0];

accountModal.onclick = function(e) {
  if (e.target != this) return;
  accountModal.style.display = "none";
  body.classList.remove("stop-scrolling");
};

account.onclick = e => {
  accountModal.style.display = "block";
  body.classList.add("stop-scrolling");
};

// let createAcctModal = document.querySelector('create-account-modal');
// let btnCreate = document.querySelector('btn-create');

// let body = document.getElementsByTagName("body")[0];

// createAcctModal.addEventListener('click', e => {
//   if (e.target != this) return;
//   createAcctModal.style.display = "none";
//   body.classList.remove("no-scroll");
// });

// btnCreate.addEventListener('click', e => {
//   if (e.target != this) return;
//   createAcctModal.style.display = "block";
//   body.classList.add("no-scroll");
// });