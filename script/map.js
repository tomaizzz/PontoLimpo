// Inicializa o mapa em Joinville
var map = L.map('map').setView([-26.3044, -48.8464], 13);

// Adiciona o mapa base do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Pontos de descarte reais em Joinville
var pontosDescarte = [
    {coords: [-26.2872, -48.8708], tipo: "Reset Descarte Tecnológico - Jardim Iririú"},
    {coords: [-26.2741, -48.8547], tipo: "CEU Aventureiro"},
    {coords: [-26.2826, -48.8670], tipo: "Unidade Regional de Obras Centro-Oeste"}
];

var pontosPapel = [
    {coords: [-26.2868, -48.8708], tipo: "Reset Descarte Tecnológico - Jardim Iririú"}
]
var pontosPlastico = [
    {coords: [-26.2741, -48.8547], tipo: "CEU Aventureiro"}
]
var pontosAluminio = [
    {coords: [-26.2826, -48.8670], tipo: "Unidade Regional de Obras Centro-Oeste"}
]

//Personalização do ícone.

    //Localização Atual.
    var myIcon = L.icon({
                iconUrl: 'assets/icon/emoji_people_24dp_0000F5_FILL0_wght400_GRAD0_opsz24.svg',  // URL da imagem do ícone padrão
                iconSize: [32, 32],  // Tamanho do ícone
                iconAnchor: [16, 32],  // Posição do ponto de ancoragem (onde o marcador "aponta")
                popupAnchor: [0, -32],  // Posição do popup
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Sombra do marcador
                shadowSize: [41, 41], // Tamanho da sombra
                shadowAnchor: [13, 41] // Posição da sombra
            });

    //descarte  de Papel.
    var papelIcon = L.icon({
                iconUrl: 'assets/icon/pin/azul.svg',  // URL da imagem do ícone padrão
                iconSize: [32, 32],  // Tamanho do ícone
                iconAnchor: [16, 32],  // Posição do ponto de ancoragem (onde o marcador "aponta")
                popupAnchor: [0, -32],  // Posição do popup
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Sombra do marcador
                shadowSize: [41, 41], // Tamanho da sombra
                shadowAnchor: [13, 41] // Posição da sombra
            });

    //descarte de Papelão.
    var papelaoIcon = L.icon({
                iconUrl: 'assets/icon/pin/marrom.svg',  // URL da imagem do ícone padrão
                iconSize: [32, 32],  // Tamanho do ícone
                iconAnchor: [16, 32],  // Posição do ponto de ancoragem (onde o marcador "aponta")
                popupAnchor: [0, -32],  // Posição do popup
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Sombra do marcador
                shadowSize: [41, 41], // Tamanho da sombra
                shadowAnchor: [13, 41] // Posição da sombra
            });

    // descarte Aluminio.
    var aluminioIcon = L.icon({
                iconUrl: 'assets/icon/pin/amarelo.svg',  // URL da imagem do ícone padrão
                iconSize: [32, 32],  // Tamanho do ícone
                iconAnchor: [16, 32],  // Posição do ponto de ancoragem (onde o marcador "aponta")
                popupAnchor: [0, -32],  // Posição do popup
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Sombra do marcador
                shadowSize: [41, 41], // Tamanho da sombra
                shadowAnchor: [13, 41] // Posição da sombra
            });
    
        // descarte Plástico.
        var plasticoIcon = L.icon({
            iconUrl: 'assets/icon/pin/vermelho.svg',  // URL da imagem do ícone padrão
            iconSize: [32, 32],  // Tamanho do ícone
            iconAnchor: [16, 32],  // Posição do ponto de ancoragem (onde o marcador "aponta")
            popupAnchor: [0, -32],  // Posição do popup
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Sombra do marcador
            shadowSize: [41, 41], // Tamanho da sombra
            shadowAnchor: [13, 41] // Posição da sombra
        });

// Filtra, no mapa, os pontos selecionados pelo usuário.
function filtrarPonto(){
    const opcaoFiltro = document.getElementById("filter-opt").value 
    
    var i=0
    switch(opcaoFiltro){
        case "todos":
        pontosDescartePapel()
        pontosDescarteAluminio()
        pontosDescartePlastico()
        break;
        case "papel":
            pontosDescartePapel()
        break;
        case "papelao":
            pontosDescartePapelao()
        break;
        case "aluminio":
            pontosDescarteAluminio()
        break;
    }
}
// Adiciona os pontos de descarte reais ao mapa


// Pesquisa e localização de cidade
function searchCity() {
    const city = document.getElementById('city-input').value;
    if (city) {
        L.Control.Geocoder.nominatim().geocode(city + ", Brazil", function(results) {
            if (results.length > 0) {
                const { center } = results[0];
                map.setView(center, 13);
            } else {
                alert("Cidade não encontrada.");
            }
        });
    }
}

// Menu flutuante
function toggleFloatingMenu() {
    $('#menu-items').toggleClass('d-none');
}

//Localização atual
function obterLocalizacao() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var lat = position.coords.latitude;
                    var lon = position.coords.longitude;
                    
                    // Atualizar o mapa com a localização do usuário
                    map.setView([lat, lon], 13);  // Centraliza o mapa na localização atual
                    L.marker([lat, lon], { icon: myIcon }).addTo(map)  // Adiciona um marcador na localização
                        .bindPopup("Você está aqui!")
                        .openPopup();
                }, function(error) {
                    alert("Erro ao obter a localização: " + error.message);
                });
            } else {
                alert("A geolocalização não é suportada pelo seu navegador.");
            }
        }

// Adicionar Ponto de Descarte
document.addEventListener("DOMContentLoaded", function () {
    const addPointButton = document.getElementById("addPointButton");
    
    if (addPointButton) {
        addPointButton.addEventListener("click", function () {
            const tipo = prompt("Tipo de Ponto de Descarte:");
            const latitude = prompt("Latitude:");
            const longitude = prompt("Longitude:");

            if (tipo && latitude && longitude) {
                L.marker([latitude, longitude], { icon: batteryIcon }).addTo(map)
                    .bindPopup(`Ponto de descarte: ${tipo}`);
            }
        });
    }
});


        // Chamar a função para obter a localização do usuário
        obterLocalizacao();

    // Funções que adicionam os pontos de descarte reais ao mapa
function pontosDescartePapel(){
    pontosPapel.forEach(ponto => {
        L.marker(ponto.coords, {icon: papelIcon})
            .addTo(map)
            .bindPopup(`Ponto de descarte: ${ponto.tipo}`);
    });
}

function pontosDescartePapelao(){
    pontosEletronicos.forEach(ponto => {
        L.marker(ponto.coords, {icon: papelaoIcon})
            .addTo(map)
            .bindPopup(`Ponto de descarte: ${ponto.tipo}`);
    });
}

function pontosDescartePlastico(){
    pontosPlastico.forEach(ponto => {
        L.marker(ponto.coords, {icon: plasticoIcon})
            .addTo(map)
            .bindPopup(`Ponto de descarte: ${ponto.tipo}`);
    });
}

function pontosDescarteAluminio(){
    pontosAluminio.forEach(ponto => {
        L.marker(ponto.coords, {icon: aluminioIcon})
            .addTo(map)
            .bindPopup(`Ponto de descarte: ${ponto.tipo}`);
    });
}