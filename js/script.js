function hitungLuas() {
	var alas = document.getElementById("alas").value
	var tinggi = document.getElementById("tinggi").value
	var luas = 0.5 * alas * tinggi
	document.getElementById("hasilluas").innerHTML = "Hasil nya adalah: " + luas
}

function hitungKeliling() {
	var sisi1 = document.getElementById("sisiA").value
	var sisi2 = document.getElementById("sisiB").value
	var sisi3 = document.getElementById("sisiC").value
	var keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3)
	document.getElementById("hasilkeliling").innerHTML = "Hasil nya adalah: " + keliling
}

function resetLuas() {
	document.getElementById("form-luas").reset()
	document.getElementById("hasilluas").innerHTML = ""
}

function resetKeliling() {
	document.getElementById("form-keliling").reset()
	document.getElementById("hasilkeliling").innerHTML = ""
}