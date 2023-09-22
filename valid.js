let form = document.getElementById("form_pendaftaran")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let nama = document.getElementById("nama")
    let email = document.getElementById("email")
    let katasandi = document.getElementById("password")
    let sama = document.getElementById("confirm")
    let nomor = document.getElementById("nomor")
    let jeniskelamin = document.getElementsByName("gender")
    let bijak = document.getElementById("tos")
    let not = document.getElementById("error")
    not.innerHTML = ""

    if(!validateNama(nama.value)) {
        not.innerHTML = "Nama Tidak Sah"
        return
    }

    if(!validateEmail(email.value)){
        not.innerHTML = "Email Tidak Sah"
        return
    }

    if(!validatePassword(katasandi.value)) {
        not.innerHTML = "Katasandi Tidak Sah"
        return
    }

    if(!validateConfirmPassword(sama.value, password.value)) {
        not.innerHTML = "Katasandi Tidak Sama"
        return
    }

    if(!validateNomor(nomor.value)) {
        not.innerHTML = "Nomor Tidak Sah"
        return
    }

    if(!jeniskelamin[0].checked && !jeniskelamin[1].checked) {
        not.innerHTML = "Pilih Jenis Kelamin"
        return
    }

    if(!bijak.checked) {
        not.innerHTML = "Anda Harus Menyetujui Kebijakan"
        return
    }

    let confirmResult = confirm("Apakah anda yakin akan daftar?")
    if(confirmResult) {
        alert("Register Berhasil")
        window.location.replace("home.html");
    }
    else {
        alert("Register Gagal")
    }


})

function validatePassword(katasandi) {
    let length = katasandi.length
    let Angka = false
    let Huruf = false
    for (let i = 0; i < length; i++) {
        let x = katasandi.charCodeAt(i)

        if( (x >= 97 && x <= 122) || (x >= 65 && x <= 90) ) {
            Huruf = true
        } 

        if(!isNaN(katasandi[i])){
            Angka = true
        } 
    }

    if(Huruf && Angka) {
        return true
    } 
    else {
        return false
    }
}

function validateEmail(email) {
    return   email.endsWith('.com') && email.indexOf('@') != -1
}

function validateNama(nama) {
    let length = nama.length
    let Huruf = false
    for (let i = 0; i < length; i++) {
        let x = nama.charCodeAt(i)

        if( (x >= 97 && x <= 122) || (x >= 65 && x <= 90) ) {
            Huruf = true
        } 

    }

    if(Huruf) {
        return true
    } 
    else {
        return false
    }
}

function validateConfirmPassword(sama, katasandi) {
    let length = katasandi.length
    let point = 0
    for (let i = 0; i < length; i++) {
        if(sama[i] == katasandi[i]) {
            point++
        }
    }

    if(point == length) {
        return true
    } 
    else {
        return false
    }
}

function validateNomor(nomor) {
    let length = nomor.length
    let Angka = false
    for (let i = 0; i < length; i++) {
        if(!isNaN(nomor[i])){
            Angka = true
        }  
    }

    if(Angka) {
        return true
    } 
    else {
        return false
    }
}
