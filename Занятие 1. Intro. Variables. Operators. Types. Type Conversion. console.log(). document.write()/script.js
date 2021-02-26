// console.log('Hello, world!',2000);
// console.log(100);

// document.write("<p>Privetik!</p>");
// document.write(100);

// Type: String, Number, Boolean

// x = '100';
// y = 2;

// console.log('x+y+a+b', z = +(x+y));

// console.log('x-y', z = x-y);
// console.log('x*y', z = x*y);
// console.log('x/y', z = x/y);
// console.log('x%y', z = x%y);

// console.log('z =', z);

// a = '10'
// x = +a;
// y = 20;

// z = x<y;

// console.log(z);

// console.log(3 != '3');

x = 50;
y = 2;

if (x<y){
	console.log('ura!');
	z = x+y;
} else if(x == y){
	console.log('ura equal!');
} else if(x % y){
	console.log('ura equal!');
} else {
	document.write('not ura!');
	z = x-y;
}

// console.log('-----');
// console.log(z);

switch( !!(x-y) ){
	case true:
		console.log('oh, true');
		break;
	case false:
		console.log('oh, false');
		break;
	case 1:
		console.log('yes, it is');
		break;
	case 3:
		console.log('tree');
		break;
	case 5:
		console.log('five');
		break;
	case 20:
		console.log('twenty');
		break;
	case 50:
		console.log('fifty');
		break;
	case '50':
		console.log('fifty is a String');
		break;
	default:
		console.log('ohh');
}
