const harga = {
    transport: 100000,
    konsumsi: 150000,
    foto: 100000,
    masuk: 50000,
    donasi: 200000
};

let tiket = 1;

const popup = document.getElementById("popup");
const buyBtn = document.getElementById("buyBtn");
const closePopup = document.getElementById("closePopup");

buyBtn.addEventListener("click", function () {
    popup.style.display = "flex";
    updateHarga();
});

closePopup.addEventListener("click", function () {
    popup.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

function tambahTiket() {
    tiket++;
    updateHarga();
}

function kurangTiket() {
    if (tiket > 1) {
        tiket--;
        updateHarga();
    }
}

function rupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
}

function updateHarga() {
    document.getElementById("jumlahTiket").innerText = tiket;

    document.getElementById("transport").innerText =
        rupiah(harga.transport * tiket);

    document.getElementById("konsumsi").innerText =
        rupiah(harga.konsumsi * tiket);

    document.getElementById("foto").innerText =
        rupiah(harga.foto * tiket);

    document.getElementById("masuk").innerText =
        rupiah(harga.masuk * tiket);

    document.getElementById("donasi").innerText =
        rupiah(harga.donasi * tiket);

    const total =
        (harga.transport +
            harga.konsumsi +
            harga.foto +
            harga.masuk +
            harga.donasi) * tiket;

    document.getElementById("totalHarga").innerText =
        rupiah(total);
}

updateHarga();