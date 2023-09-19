// // Get Input Filter Element
// const filterInput = document.getElementById('filterInput');

// filterInput.addEventListener('keyup', filterNames);

// function filterNames(){
//   // Get value of input
//   let filterValue = filterInput.value.toUpperCase();

//   // Get name of UL
//   let ul = document.querySelector('.categories__options');

//   // Get items
//   let li = ul.querySelectorAll('.categories__checkbox');

//   li.forEach(item => {
//     let name = item.getAttribute('data-name');

//     for( let i = 0; i < li.lenght; i++ ) {
//       let a = li[i].getElementByTagName('input')[0];

//       // if matched
//       if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
//         li[i].style.display = '';
//       } else {
//         li[i].style.display = 'none';
//       }
//     }
//   })

//   // Loop throught collections


//   console.log(filterValue)
// }


// document.querySelector('#filterInput').oninput = function(){
//   let valueInput = this.value.trim();

//   const categoriesItems = document.querySelectorAll('.categories__checkbox');

//   categoriesItems.forEach(item => {
//     const name = item.getAttribute('data-name');

//     console.log(name);
//   })


//   // // console.log(categoriesItems);

//   // if ( valueInput != '') {
//   //   // console.log(valueInput);

//   //   categoriesItems.forEach(function(elem){
//   //     // const name = elem.getAttribute('data-name');

//   //     if(elem.getAttribute('data-name') == -1) {
//   //       elem.classList.add('hide');
//   //     } else {
//   //       elem.classList.remove('hide');
//   //     }
//   //   })
//   // }


//   // console.log(categoriesItems);
// }


const inputId = 'filterInput';
const itemsData = '.categories__option';
const dataName = 'data-name'
let displaySet = false;
let displayArr = [];

function getDisplayType(element) {
	var elementStyle = element.currentStyle || window.getComputedStyle(element, "");
	return elementStyle.display;
}

document.getElementById(inputId).onkeyup = function() {
	var searchVal = this.value.toLowerCase();
	var filterItems = document.querySelectorAll(itemsData);

	for(var i = 0; i < filterItems.length; i++) {
		if (!displaySet) {
			displayArr.push(getDisplayType(filterItems[i]));
		}

		filterItems[i].style.display = 'none';

    const innerData = filterItems[i].querySelector(`[${dataName}]`);

		if(innerData.getAttribute(dataName).indexOf(searchVal) >= 0) {
			filterItems[i].style.display = displayArr[i];
		}
	}

	displaySet = true;
}
