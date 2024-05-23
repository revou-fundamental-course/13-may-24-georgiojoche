//Rumus luas segitiga
function luasSegitiga() {
  let a = document.getElementById("alas").value;
  let t = document.getElementById("tinggi").value;
  const Hasil1 = (a * t) / 2;
  document.getElementById("luas").value = Hasil1;
}
//Rumus keliling segitiga
function kelilingSegitiga() {
  let s1 = document.getElementById("sisi1").value;
  let s2 = document.getElementById("sisi2").value;
  let s3 = document.getElementById("sisi3").value;
  const Hasil2 = parseInt(s1) + parseInt(s2) + parseInt(s3);
  document.getElementById("keliling").value = Hasil2;
}
