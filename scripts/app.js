console.log("connected");

const new15 = "NEW15";
const couple20 = "COUPLE20";
const totalSeats = 40;
const seatPrice = 550;
let selectedSeats = [];
let grandTotal = 0;
let totalPrice = 0;

const selectedSeatsDetails = document.getElementById("selected-seats-details");

document.getElementById("new15").innerText = new15;
document.getElementById("couple20").innerText = couple20;
document.getElementById("available-seats").innerText = totalSeats;
document.getElementById("seat-price").innerText = seatPrice;
document.getElementById("selected-seats").innerText = selectedSeats.length;
document.getElementById("grand-total").innerText = grandTotal;
document.getElementById("total-price").innerText = totalPrice;

document.addEventListener("click", (e) => {
  // handeling if clicked same seat twice
  const index = selectedSeats.indexOf(e.target.id);
  if (index !== -1) {
    selectedSeats.splice(index, 1);
    document.getElementById(e.target.id).classList.remove("bg-[#1DD100]");
    document.getElementById("selected-seats").innerText = selectedSeats.length;

    selectedSeatsDetails.innerHTML = "";
    for (const seat of selectedSeats) {
      selectedSeatsDetails.innerHTML += `<p class="font-inter text-[#03071299] py-3">${seat}</p>
            <p class="font-inter text-[#03071299] py-3">Economy</p>
            <p class="font-inter text-[#03071299] py-3">550</p>`;
    }
  }
  //   handeling click
  else if (
    e.target.id !== "" &&
    !selectedSeats.includes(e.target.id) &&
    selectedSeats.length <= 3 &&
    e.target.id.split("").length === 2
  ) {
    selectedSeats.push(e.target.id);
    document.getElementById(e.target.id).classList.add("bg-[#1DD100]");
    document.getElementById("selected-seats").innerText = selectedSeats.length;

    totalPrice = seatPrice * selectedSeats.length;
    document.getElementById("total-price").innerText = totalPrice;
    grandTotal = totalPrice;
    document.getElementById("grand-total").innerText = grandTotal;

    selectedSeatsDetails.innerHTML = "";
    for (const seat of selectedSeats) {
      selectedSeatsDetails.innerHTML += `<p class="font-inter text-[#03071299] py-3">${seat}</p>
            <p class="font-inter text-[#03071299] py-3">Economy</p>
            <p class="font-inter text-[#03071299] py-3">550</p>`;
    }
  }
  let availableSeats = totalSeats - selectedSeats.length;
  document.getElementById("available-seats").innerText = availableSeats;

  const couponInputField = document.getElementById("coupon-input");
  const applyBtn = document.getElementById("apply-btn");
  if (selectedSeats.length <= 2) {
    couponInputField.setAttribute("disabled", "true");
    applyBtn.setAttribute("disabled", "true");
  } else {
    couponInputField.removeAttribute("disabled");
    applyBtn.removeAttribute("disabled");

    applyBtn.addEventListener("click", () => {
      if (couponInputField.value === new15) {
        let discount = totalPrice * 0.15;
        grandTotal = totalPrice - discount;
        document.getElementById("grand-total").innerText = grandTotal;
        document.getElementById("coupon-area").classList.add("hidden");
        document.getElementById("td-1").classList.remove("hidden");
        document.getElementById("td-2").classList.remove("hidden");
        document.getElementById("td-3").classList.remove("hidden");
        document.getElementById("total-discount").innerText = discount;
        document.getElementById("seat-disable").classList.remove("hidden");
        document.getElementById("coupon-alert").classList.add("hidden");
      } else if (couponInputField.value === couple20) {
        let discount = totalPrice * 0.2;
        grandTotal = totalPrice - discount;
        document.getElementById("grand-total").innerText = grandTotal;
        document.getElementById("coupon-area").classList.add("hidden");
        document.getElementById("td-1").classList.remove("hidden");
        document.getElementById("td-2").classList.remove("hidden");
        document.getElementById("td-3").classList.remove("hidden");
        document.getElementById("total-discount").innerText = discount;
        document.getElementById("seat-disable").classList.remove("hidden");
        document.getElementById("coupon-alert").classList.add("hidden");
      } else if (
        couponInputField.value !== couple20 ||
        couponInputField.value !== new15
      ) {
        document.getElementById("coupon-alert").classList.remove("hidden");
        couponInputField.value = "";
      } else {
        grandTotal = totalPrice;
        document.getElementById("grand-total").innerText = grandTotal;
      }
    });
  }
});

const passengerName = document.getElementById("passenger-name").value;
const passengerPhoneInput = document.getElementById("passenger-phone");
const passengerEmail = document.getElementById("passenger-email").value;
const nextBtn = document.getElementById("next-btn");

passengerPhoneInput.addEventListener("input", () => {
  const passengerPhone = parseInt(passengerPhoneInput.value);
  if (
    typeof passengerPhone === "number" &&
    passengerPhone >= 0 &&
    selectedSeats.length > 0
  ) {
    nextBtn.removeAttribute("disabled");
  }
});

nextBtn.addEventListener("click", () => {
  window.location.href = "/success.html";
});
