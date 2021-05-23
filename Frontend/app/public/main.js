const cardbtn = document.getElementById("CardPaymentBtn");
const phonebtn = document.getElementById("PhonePaymentBtn");
const cardDiv = document.getElementById("CardPayment");
const phoneDiv = document.getElementById("PhonePayment");
const addressCheckCard = document.getElementById("DifferentAddressCard");
const addressDivCard = document.getElementById("ShippingAddressCard");
const addressCheckPhone = document.getElementById("DifferentAddresPhone");
const addressDivPhone = document.getElementById("ShippingAddressPhone");
cardbtn.addEventListener("click", () => {
  cardDiv.classList.remove("d-none");
  phoneDiv.classList.add("d-none");
});
phonebtn.addEventListener("click", () => {
  phoneDiv.classList.remove("d-none");
  cardDiv.classList.add("d-none");
});

addressCheckCard.addEventListener("change", () => {
  addressDivCard.classList.toggle("d-none");
});

addressCheckPhone.addEventListener("change", () => {
  addressDivPhone.classList.toggle("d-none");
});
