class Person {
    nama;
    NIK;
    gender;

    setNama(nama) {
        this.nama = nama;
    }
    setNIK(NIK) {
        this.NIK = NIK;
    }
    setGender(gender) {
        this.gender = gender;
    }
    getNama(){
        return this.nama;
    }
    getNIK() {
        return this.NIK;
    }
    getGender(){
        return this.gender;
    }
}

class Employee extends Person{
    title;
    salary;
    constructor(nama,NIK,gender,title,salary) {
        super()
        this.nama = nama
        this.title = title;
        this.salary = salary;
        this.NIK = NIK;
        this.gender = gender;
    }
    getData(){
        return{
            nama: this.getNama(),
            NIK: this.getNIK(),
            gender : this.getGender(),
            salary: this.salary,
            title: this.title,
        }
    }
}
class Students extends Person{
    dataKampus;
    jurusan;
    constructor(nama,NIK,gender,dataKampus,jurusan) {
        super()
        this.nama = nama
        this.dataKampus = dataKampus;
        this.jurusan = jurusan;
        this.NIK = NIK;
        this.gender = gender;
    }
    getData(){
        return{
            nama: this.getNama(),
            NIK: this.getNIK(),
            gender : this.getGender(),
            dataKampus: this.dataKampus,
            jurusan: this.jurusan,
        }
    }
}
const a = new Employee('Bhanu','4374634','L','Undergraduate',10000)
console.log(a.getData());
const s = new Students('Bhanu','135138','L','Universitas Indonesia','Geologi')
console.log(s.getData());