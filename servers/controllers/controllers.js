const axios = require("axios");

async function cekJumlahNegara() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    console.log("Jumlah negara:", response.data.length);
  } catch (err) {
    console.log(err);
  }
}

cekJumlahNegara();
