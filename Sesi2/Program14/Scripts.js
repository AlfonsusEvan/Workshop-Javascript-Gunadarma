function buatObjectMahasiswa(nama, npm, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;

}
var mhs3 = buatObjectMahasiswa('nafesha', 56172651,'nafee@gmail.com', 'Psikologi');