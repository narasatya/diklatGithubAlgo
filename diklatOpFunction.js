// function kali(a, b){
//   return a * b;
// }
// var hasil = kali(10, 5);
// console.log(hasil);

// const tambah = (x, y) => x + y;
// console.log(tambah(3,900));

// function string(a, b){
//   return a + b;
// };

// let jadi = string('Halo', ' Nara🤙🏼');
// console.log(jadi);

// function greet(name){
//   console.log('Halo, ' + name + '!');
// }
// greet('Naraaa');

// ===========================CALL=====================================
// let person = {
//   fullName: function(){
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// let person1 = {
//   firstName: 'Nara',
//   lastName: 'Anoraga'
// }

// let fullName = person.fullName.call(person1);
// console.log(fullName);

// let person = {
//   fullName: function(kota, negara){
//     return this.firstName + ' ' + this.lastName + ' sedang di ' + kota + ', ' + negara + '.';
//   }
// }
// let person1 = {
//   firstName: 'Nara',
//   lastName: 'Anoraga'
// }
// let fullName = person.fullName.apply(person1, ['Kota Semarang', 'Indonesia']);

// console.log(fullName);

// let person = {
//   name: 'Nara',
//   city: 'Kab. Karanganyar',
//   greet: function() {
//     return 'Halo ' + this.name + ', ' + 'Selamat datang di ' + this.city + '!';
//   }
// };
// let greetNara = person.greet.bind(person);
// console.log(greetNara());
