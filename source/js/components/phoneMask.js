import  Inputmask from '../vendor/inputmask.js';

// imput Mask
// let selector = document.querySelectorAll('input[type="tel"]');
// let im = new Inputmask('+38 (999) 999-99-99');
// im.mask(selector);

// new window.JustValidate('.form', {
//   rules: {
//     tel: {
//       required: true,
//       function: () => {
//         const phone = telSelector.inputmask.unmaskedvalue();
//         return Number(phone) && phone.length === 10;
//       }
//     },
//     telegram: {
//       required: true,
//     }
//   },
//   colorWrong: 'red',

//   messages: {
//     name: {
//       required: 'Заполните поле',
//       minLength: 'Введите 3 и более символов',
//       maxLength: 'Запрещено вводить более 15 символов',
//     },
//     telegram: {
//       required: 'Заполните поле',
//     },
//     email: {
//       required: 'Введите email'
//     },
//     tel: {
//       required: 'Введите номер телефона',
//     }
//   }
// })

// Кастомная маска телефона
// const mask = (selector, pattern) => {

//   let setCursorPosition = (pos, elem) => {
//       elem.focus();

//       if (elem.setSelectionRange) {
//           elem.setSelectionRange(pos, pos);
//       } else if (elem.createTextRange) {
//           let range = elem.createTextRange();

//           range.collapse(true);
//           range.moveEnd('character', pos);
//           range.moveStart('character', pos);
//           range.select();
//       }
//   };

//   function createMask(event) {
//       let matrix = pattern,
//           i = 0,
//           def = matrix.replace(/\D/g, ''),
//           val = this.value.replace(/\D/g, '');

//       if (def.length >= val.length) {
//           val = def;
//       }

//       this.value = matrix.replace(/./g, function(a) {
//           return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
//       });

//       if (event.type === 'blur') {
//           if (this.value.length == 2) {
//               this.value = '';
//           }
//       } else {
//           setCursorPosition(this.value.length, this);
//       }
//   }

//   let inputs = document.querySelectorAll('input[type="tel"]');

//   console.log(inputs);

//   inputs.forEach(input => {
//       input.addEventListener('input', createMask);
//       input.addEventListener('focus', createMask);
//       input.addEventListener('blur', createMask);
//   });
// };

// mask(".phone-ukr", '+38 (___) ___ __ __');
// mask(".phone", '+ (___) ___  __');
// Кастомная маска телефона
