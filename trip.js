const trips = [
    {
        title: "Short Trekking & Jelajah Alam Kaki Gunung Ciremai",
        date: "25 April 2026",
        price: "Rp 600.000",
        image: "https://radarcirebon.disway.id/upload/6b708c7843715b4648238340838f25c3.jpg",
        village: "Desa Wisata Bantar Agung"
    },
    {
        title: "Jelajah Alam Toyomarto",
        date: "20 Mei 2026",
        price: "Rp 540.000",
        image: "https://cdn1.sisiplus.co.id/media/sisiplus/asset/uploads/artikel/JuLosGtaWhh3zZJBzUzjeVW4OiIHoTci6OcaAUxT.jpg",
        village: "Desa Wisata Toyomarto"
    },
    {
        title: "Field Trip Kampung Tematik",
        date: "1 Mei 2026",
        price: "Rp 235.000",
        image: "https://siwisdem.com/_next/image?url=%2Fimages%2Fkawi.jpg&w=3840&q=75",
        village: "Desa Wisata Sumberdem"
    }
];

const tripList = document.getElementById("trip-list");

for (let i = 0; i < trips.length; i++) {
    tripList.innerHTML += `
        <div class="card trip-card shadow-sm mt-5">
            <a href="ticket.html">
                <img src="${trips[i].image}" 
                     class="card-img-top" 
                     alt="${trips[i].title}">
            </a>
            <div class="card-body">
                <a href="ticket.html" class="text-decoration-none text-dark">
                    <h5 class="fw-bold">${trips[i].title}</h5>
                </a>
                <p class="text-muted">${trips[i].date}</p>
                <h5 class="fw-bold">${trips[i].price}</h5>
            </div>
            <div class="card-footer bg-white">
                <a href="article.html">${trips[i].village}</a>
            </div>

        </div>
    `;
}