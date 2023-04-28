var reconocervoz = window.webkitSpeechRecognition;
var reconocimiento = new reconocervoz();
reconocimiento.lang = "es-MX";
Webcam.set({
    width: 360,
    height: 260,
    image_format: "png",
    png_quality: 100
})
Webcam.attach("#camara")    
function iniciar() {
    reconocimiento.start();
}
reconocimiento.onresult = function (evento) {
    textodetectado = evento.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = textodetectado
    hablar("Oye," + textodetectado)
    if ("toma mi selfie" == textodetectado.toLowerCase()) {
        hablar("Okey en 10 segundos te tomo una foto ")
        setTimeout(tomarfoto,10000)
    }
}
function hablar(mensaje) {
    var leerenvozalta = window.speechSynthesis
    var lectura = new SpeechSynthesisUtterance(mensaje)
    lectura.lang = "es-MX"
    leerenvozalta.speak(lectura)
}
function tomarfoto() {
    Webcam.snap(function (data_uri) {

        document.getElementById("resultado").innerHTML = '<img src="' + data_uri + '" alt="" id="foto">'
        guardarfoto()
    })
}
function guardarfoto(){
    foto=document.getElementById("foto").src
    document.getElementById("link").href=foto
    document.getElementById("link").click()
}