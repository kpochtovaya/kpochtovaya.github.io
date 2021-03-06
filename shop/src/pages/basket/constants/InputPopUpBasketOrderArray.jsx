const inputPopUpBasketOrderArray = [{
  type: 'text',
  name: 'clientName',
  className: 'nameInput',
  classNameSymbol: 'nameSymbol',
  removeErrorNotNull: true,
  removeErrorLength: false,
  classerrorLength: false,
  minLength: false,
  maxLength: false,
  placeholder: false,
  onFocus: false,
  onEnterEmail: false,
  classNameOfString: 'nameString -required',
  nameOfString: 'Имя:',
},
{
  type: 'tel',
  name: 'phone',
  className: 'phoneInput',
  classNameSymbol: 'phoneSymbol',
  removeErrorNotNull: true,
  removeErrorLength: false,
  classerrorLength: false,
  minLength: '13',
  maxLength: '13',
  placeholder: '+375 (__) ___-__-__',
  onFocus: true,
  onEnterEmail: false,
  classNameOfString: 'phoneString -required',
  nameOfString: 'Телефон:',
},
{
  type: 'text',
  name: 'clientAddress',
  className: 'addressInput',
  classNameSymbol: 'addressSymbol',
  removeErrorNotNull: true,
  removeErrorLength: false,
  classerrorLength: false,
  minLength: false,
  maxLength: false,
  placeholder: false,
  onFocus: false,
  onEnterEmail: false,
  classNameOfString: 'addressString -required',
  nameOfString: 'Адрес:',
}];
export default inputPopUpBasketOrderArray;
