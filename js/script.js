function hitungLuas() {
	var alas = document.getElementById("alas").value
	var tinggi = document.getElementById("tinggi").value
	var luas = 0.5 * alas * tinggi
	document.getElementById("hasilluas").innerHTML = "Hasil nya adalah: " + luas
}

function hitungKeliling() {
	var sisi1 = parseFloat(document.getElementById("sisiA").value)
	var sisi2 = parseFloat(document.getElementById("sisiB").value)
	var sisi3 = parseFloat(document.getElementById("sisiC").value)
	var keliling = sisi1 + sisi2 + sisi3;
	document.getElementById("hasilkeliling").innerHTML = "Hasil nya adalah: " + keliling
}

function resetLuas() {
	document.getElementById("form").reset()
	document.getElementById("hasilluas").innerHTML = ""
}

function resetKeliling() {
	document.getElementById("form").reset()
	document.getElementById("hasilkeliling").innerHTML = ""
}