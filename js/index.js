const userInput = document
.getElementById("user-inp");

const btGerar = document
.getElementById("bt-gerar");

const qrCodeArea = document
.getElementById("qr-code-area");

btGerar.addEventListener("click", gerarQrCode);

function gerarQrCode()
{
    qrCodeArea.innerHTML = ""
    new QRCode(qrCodeArea,{
        text:userInput.value,
        width:350,
        height:350,
        colorLight:"white",
        colorDark: "black"
    });
}