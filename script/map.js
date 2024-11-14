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

var pontosEletronicos = [
    {coords: [-26.2868, -48.8708], tipo: "Reset Descarte Tecnológico - Jardim Iririú"}
]
var pontosBateria = [
    {coords: [-26.2741, -48.8547], tipo: "CEU Aventureiro"}
]
var pontosReciclaveis = [
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

//descarte  de Eletronicos.
var eletronicIcon = L.icon({
            iconUrl: 'assets/icon/pin/2.svg',  // URL da imagem do ícone padrão
            iconSize: [32, 32],  // Tamanho do ícone
            iconAnchor: [16, 32],  // Posição do ponto de ancoragem (onde o marcador "aponta")
            popupAnchor: [0, -32],  // Posição do popup
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Sombra do marcador
            shadowSize: [41, 41], // Tamanho da sombra
            shadowAnchor: [13, 41] // Posição da sombra
        });

//descarte de Bateria.
var batteryIcon = L.icon({
            iconUrl: 'assets/icon/pin/7.svg',  // URL da imagem do ícone padrão
            iconSize: [32, 32],  // Tamanho do ícone
            iconAnchor: [16, 32],  // Posição do ponto de ancoragem (onde o marcador "aponta")
            popupAnchor: [0, -32],  // Posição do popup
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Sombra do marcador
            shadowSize: [41, 41], // Tamanho da sombra
            shadowAnchor: [13, 41] // Posição da sombra
        });

// descarte Reciclaveis
var recyclableIcon = L.icon({
            iconUrl: 'assets/icon/pin/4.svg',  // URL da imagem do ícone padrão
            iconSize: [32, 32],  // Tamanho do ícone
            iconAnchor: [16, 32],  // Posição do ponto de ancoragem (onde o marcador "aponta")
            popupAnchor: [0, -32],  // Posição do popup
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Sombra do marcador
            shadowSize: [41, 41], // Tamanho da sombra
            shadowAnchor: [13, 41] // Posição da sombra
        });

// 

// Adiciona os pontos de descarte reais ao mapa
pontosDescarteBateria()
pontosDescarteEletronico()
pontosDescarteReciclaveis()

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

        // Chamar a função para obter a localização do usuário
        obterLocalizacao();

    // Funções que adicionam os pontos de descarte reais ao mapa
function pontosDescarteBateria(){
    pontosBateria.forEach(ponto => {
        L.marker(ponto.coords, {icon: batteryIcon})
            .addTo(map)
            .bindPopup(`Ponto de descarte: ${ponto.tipo}`);
    });
}

function pontosDescarteEletronico(){
    pontosEletronicos.forEach(ponto => {
        L.marker(ponto.coords, {icon: eletronicIcon})
            .addTo(map)
            .bindPopup(`Ponto de descarte: ${ponto.tipo}`);
    });
}

function pontosDescarteReciclaveis(){
    pontosReciclaveis.forEach(ponto => {
        L.marker(ponto.coords, {icon: recyclableIcon})
            .addTo(map)
            .bindPopup(`Ponto de descarte: ${ponto.tipo}`);
    });
}