const percent = 23



function resultBrut() {
    let salaireNet = parseInt(document.querySelector("#salaireNet").value)
    let salaireBrut = parseInt(salaireNet) + (salaireNet / 100) * percent
    document.querySelector("#salaireBrut").value = salaireBrut

}