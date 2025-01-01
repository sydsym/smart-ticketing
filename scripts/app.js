console.log("connected");

const new15 = "NEW15";
const couple20 = "COUPLE20";
const totalSeats = 40;
const seatPrice = 550;
let selectedSeats = [];
const totalPrice = 0;
const grandTotal = 0;

document.getElementById("new15").innerText = new15;
document.getElementById("couple20").innerText = couple20;
document.getElementById("available-seats").innerText = totalSeats;
document.getElementById("seat-price").innerText = seatPrice;
document.getElementById("selected-seats").innerText = selectedSeats.length;
document.getElementById("total-price").innerText = totalPrice;
document.getElementById("grand-total").innerText = grandTotal;

document.addEventListener("click", (e) => {
  // handeling if clicked same seat twice
  const index = selectedSeats.indexOf(e.target.id);
  if (index !== -1) {
    selectedSeats.splice(index, 1);
    document.getElementById(e.target.id).classList.remove("bg-[#1DD100]");
    document.getElementById("selected-seats").innerText = selectedSeats.length;
  }
  //   handeling click
  else if (
    e.target.id !== "" &&
    !selectedSeats.includes(e.target.id) &&
    selectedSeats.length <= 3
  ) {
    selectedSeats.push(e.target.id);
    document.getElementById(e.target.id).classList.add("bg-[#1DD100]");
    document.getElementById("selected-seats").innerText = selectedSeats.length;

    const selectedSeatsDetails = document.getElementById(
      "selected-seats-details"
    );

    for (const seat of selectedSeats) {
      selectedSeatsDetails.innerHTML += `<p class="font-inter text-[#03071299] py-3">${seat}</p>
            <p class="font-inter text-[#03071299] py-3">Economy</p>
            <p class="font-inter text-[#03071299] py-3">550</p>`;

      //   selectedSeatsDetails.innerHTML = "";
    }
  }
  let availableSeats = totalSeats - selectedSeats.length;
  document.getElementById("available-seats").innerText = availableSeats;

  console.log(selectedSeats);
});
