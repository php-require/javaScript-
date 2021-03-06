//----------���������--------------------//
3+4  
2*3  
1 / 2   // = 0.5 � javascript
//������: �������������
2.0 / 0    // = Infinity
2.0 / 0.0  // = Infinity
2.0 / -0.0 // = -Infinity
console.log(15 > 4); //  true is printed.

// �� true:
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length !== 8);
console.log(8*2 === 16);

// % (������ �����) 
//���� �������� ���������� �������� ������� ��� ������� ������� �������� �� ������. ��������� ����� ����� ��� �� ����, ��� � ������ �������.
7 % 2  // = 1
-1 % 2 // -1
// ++ (���������)
x=3
y = x++ // ����������� x �� 4, ������������� y=3

x=3
y = ++x // ����������� x �� 4, ������������� y=4

// -- (���������) ���������� ����������, �� ��������� �� �������.


//- (������� �����) ���������� �����, ��������������� �� ����� �������.

//+ (������� ����)
//���������� �������.

//��� � ����� �������������� ���������, ������ ������� �������������� �������� � �����, ������� ������������ ������ ��� �������� ���������� �� �������� � ���������.

var value = input.value
value = +value
if (isNaN(value)) alert('�� �����')

//--------------NaN--------------------//
//���� �������������� �������� �� ����� ���� ���������, �� ������������ ����������� �������� NaN (Not-A-Number).

//��������, ������� 0/0 � �������������� ������ ������������, ������� ��� ��������� NaN:
alert( 0 / 0 ); // NaN	

// isNaN //
//�������� NaN ����� ��������� ����������� �������� isNaN(n), ������� ����������� �������� � ����� � ���������� true, ���� ���������� NaN, � false � ��� ������ ������� ��������.
var n = 0 / 0;

alert( isNaN(n) ); // true
alert( isNaN("12") ); // false, ������ ��������������� � �������� ����� 12
//����� �������� � NaN ���������� NaN.
alert( NaN + 1 ); // NaN

//--/�����/--// 
//�������������� �������� � JS ���������
//������� �������������� �������� � JavaScript �� ����� �������� � ������ ��� ���������� ���������.
//� ������ ������, ��������� ����� NaN

//-------------isFinite(n)--------------------//
//����, � JavaScript ���� ������� ����� � ��� ����������� �������� ��������: NaN, Infinity � -Infinity.
//��� ����, ��� ���, ���� � ������ �����, ��������������� ������� ��������� +:
var value = prompt("������� Infinity", 'Infinity');

var number = +value;

alert( number ); // Infinity, ���� ������������ ������ "Infinity" � ������ "�����"
//������ ���� �� ����� �� ���������� �������� �����, �� Infinity ��� NaN ��� �� ��������. ��� ����, ����� �������� �������� ����� �� ����� ����������� ��������, ���������� ������� isFinite.
//������� isFinite(n) ����������� �������� � ����� � ���������� true, ���� ��� �� NaN/Infinity/-Infinity:
alert( isFinite(1) ); // true
alert( isFinite(Infinity) ); // false
alert( isFinite(NaN) ); // false

//----------�������������� � �����--------------------//
//����������� �������������� �������� � �������������� ������� ����������� �������� � ����� �������������.
//��� ����, ����� ������� ��� ����, ������ ����� ��������� ������ ������� ���� '+':
var s = "12.34";
alert( +s ); // 12.34
//��� ����, ���� ������ �� �������� � �������� ������, �� ��������� ����� NaN:
alert( +"12test" ); // NaN
//������������ ���������� � ���������� ������� � ������ � � ����� ������, ������� ������������:
alert( +"  -12" ); // -12
alert( +" \n34  \n" ); // 34, ������� ������ \n �������� ���������� ��������
alert( +"" ); // 0, ������ ������ ���������� �����
alert( +"1 2" ); // NaN, ������ ���������� ����� - ������
alert( '12.34' / "-2" ); // -6.17


//----------������ ��������������: parseInt � parseFloat--------------------//
//� ���� HTML/CSS ������ �������� �� �������� � �������� �������. ��������, ������� CSS: 10pt ��� -12px.

//�������� '+' ��� ����� �������� ��������� NaN:
alert(+"12px") // NaN
//��� �������� ������ ����� �������� ���������� ������� parseInt:
alert( parseInt('12px') ); // 12
//������� parseInt � �� ������ parseFloat ����������� ������ ������ �� ��������, ���� ��� ��������.
//��� ������������� ������ ������������ �����, ������� ����������. ������� parseInt ������ �� ������ ����� �����, � parseFloat � �������.
alert( parseInt('12px') ) // 12, ������ �� ������� 'p'
alert( parseFloat('12.3.4') ) // 12.3, ������ �� ������ �����
//���������� ��������, ����� parseInt/parseFloat ���������� NaN. ��� ���������� ��� ������ �� ������ �� �������:
alert( parseInt('a123') ); // NaN

//������� parseInt ����� ��������� ������� ������� ���������, �� ���� ��������� �����, �������� � ����������������� � ������ �������� ���������:
alert( parseInt('FF', 16) ); // 255

//----------�������� �� �����--------------------//
//��� �������� ������ �� ����� ����� ������������ ������� isNaN(str).
//��� ����������� ������ � ����� ���������� +, � ����� ������ true, ���� ��� NaN, �.�. ���� �������������� �� �������:
var x = prompt("������� ��������", "-11.5");

if (isNaN(x)) {
  alert( "������ ��������������� � NaN. �� �����" );
} else {
  alert( "�����" );
}

//���� �� ����� ������������� ������ �������� �� �����, ������� �� ������� ������ ������ �� ��������, ���������� � ����������� ��������, � ����� �������� Infinity � ����������� ��������� ������� isNumeric:
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
//��� �������� ������� parseFloat: ��� ����������� �������� � ������, �.�. true/false/null ���������� "true"/"false"/"null", � ����� ��������� �� �� �����, ��� ���� ������ ������ ��� NaN.

//----------toString(������� ���������)--------------------//
//��� �������� ����, ����� ����� ���������� �� ������ � 10-����, �� � � 16-������ �������. �� ������ � ��������������� ������: �������� 16-������ ������������� �����. ��� ����� ������������ ����� toString(��������� �������), ��������:
var n = 255;

alert( n.toString(16) ); // ff
//� ���������, ��� ���������� ��� ������ � ��������� ���������� � ��������, ���� #AABBCC.
//��������� ����� ���� ����� �� 2 �� 36.

//��������� 2 ������ ������� ��� ������� ��������� ��������:
var n = 4;
alert( n.toString(2) ); // 100
//��������� 36 (�� ���������� ���� � ���������� �������� � 26, ������ � �������, ������� 10) ������������ ��� ����, ����� ������������ ����� � ���� ��������-�������� ������. � ���� ������� ��������� ������� ������������ �����, � ����� ����� �� a �� z:
var n = 1234567890;
alert( n.toString(36) ); // kf12oi

//��� ������ ������ ����������� ����� ����������� ������� �������� �������������, �������� ����� ������ ��� � �������� URL.


////----------����������--------------------//

//���� �� ����� ������ �������� � ������ � ����������. � JavaScript ���������� ����� 3 ������� ��� �����.

Math.floor
//��������� ����
Math.ceil
//��������� �����
Math.round
//��������� �� ���������� ������

alert( Math.floor(3.1) );  // 3
alert( Math.ceil(3.1) );   // 4
alert( Math.round(3.1) );  // 3

////----------���������� �������� �����������--------------//
//������� ��������� ������ ����� ����� 32-������ �����, ������� ���������� �����.

//� ���������� ��������� ��������, ������� �� �������� �����, ��������, ������� ������� �� � ��������� ���:
alert( ~~12.3 ); // 12
//����� ��������� �������� ������ ���� ��������, �������� XOR (����������� ���, "^") � �����:
alert( 12.3 ^ 0 ); // 12
alert( 1.2 + 1.3 ^ 0 ); // 2, ��������� ^ ������, ��� +
//��� ������ � ������ ������� ���, ��� ����� �������� � �� ���������� ������� �������������� ������ ��� Math.floor(...):
var x = a * b / c ^ 0; // �������� ��� "a * b / c � ���������"

////----------���������� �� �������� ��������-------------//
//��� ���������� �� ������ ����� ����� ������� ����� �������� � �������� �� 10 � ������ ����������� �����. ��������, �������� 3.456 �� 2-�� ����� ����� �������:
var n = 3.456;
alert( Math.round(n * 100) / 100 ); // 3.456 -> 345.6 -> 346 -> 3.46
// ����� ������� ����� ��������� ����� � ����� � ����.

////----------num.toFixed(precision)------------//
//���������� ����� ����������� ����� num.toFixed(precision), ������� ��������� ����� num �� �������� precision � ���������� ��������� � ���� ������:
var n = 12.34;
alert( n.toFixed(1) ); // "12.3"

//���������� ��� �� ���������� ��������, ���������� Math.round:
var n = 12.36;
alert( n.toFixed(1) ); // "12.4"

//�������� ������, ��� �������������, ����������� ������ �� ������ ��������:
var n = 12.36;
alert( n.toFixed(1) ); // "12.4"
//���� ��� ����� ������ �����, �� �� ����� �������� ���, �������� '+' � ���������� n.toFixed(..):
var n = 12.34;
alert( +n.toFixed(5) ); // 12.34

////----------����� toFixed �� ������������ Math.round!------------//
//��������, ��������� ���������� �� ������ ����� ����� ������� � �������������� ���� ��������: toFixed � Math.round � ���������� � ��������:
var price = 6.35;

alert( price.toFixed(1) ); // 6.3
alert( Math.round(price * 10) / 10 ); // 6.4
//��� �����, ��������� ������! ������� ���������� ����� Math.round ��������� ����� ����������, ��� ��� �� ������������ �������� 5 ����������� �����. � toFixed ����� ��������� ��� ��� �����, ��� � ����.  

//////----------����� toFixed �� ������������ Math.round!------------//
//��������� ���� ������:
alert( 0.1 + 0.2 == 0.3 ); //����� false
//������, ������ �� ����� ���� �������: 0.1 + 0.2 ��� �� 0.3. �� ����� ��� �� ���?
alert( 0.1 + 0.2 ); // 0.30000000000000004
//��� ������, ��������� ��������� �������������� ������, ��������� �������� 0.1 + 0.2 ������� ������, ��� 0.3
alert( 0.1 + 0.2 > 0.3 ); // true
//�� ���� � ���, ��� � ��������� IEEE 754 �� ����� ���������� ����� 8 ����(=64 ����), �� ������ � �� ������.

//����� 0.1 (���� �������) ������������ ������ � ���������� �������. �� � �������� ������� ��������� ��� ����������� �����, ��� ��� ������� �� ������ � �������� ������� ��� ������ �� �������. ����� ����������� ������ �������� 0.2 (=2/10).

//�������� �������� ����������� ������ �������� ������ �� ������������� �����, ������� ��������� ����������. Ÿ ���� ����� �������:
alert( 0.1.toFixed(20) ); // 0.10000000000000000555
//����� �� ���������� 0.1 � 0.2, �� ��� ���������� ������������, �������� ��������������, �� �� �� ������ � �����������.

//�������, ��� �� ��������, ��� ������ ���������� ��� ����� ����� ����������. ��� ��������. � ���� ����������.
//��������, ���� ��� ������� ������� 0.1 � 0.2:

//������� �� ������, �������, � ����� ��������:
alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
//��� ��������, �.�. ����� 0.1*10 = 1 � 0.2*10 = 2 ����� ���� ����� ������������ � �������� �������.
//�������, � ����� ��������� �� ��������� ����� ����� �������. ���������� �� 10-�� ����� ������ ������ ����������, ����� ������ ������ ����������:

var result = 0.1 + 0.2;
alert( +result.toFixed(10) ); // 0.3

//�������� ������
//������! � � �����, �������� ���� �� ����!
alert( 9999999999999999 );   // ������� 100000000000000000
//������� �� �� � ������ ��������.
//�� 64 ���, ��������� �� �����, ���� ����� ����� �������� �� 52 ���, ��������� 11 ��� ������ ������� ���������� ����� � ���� ��� � ����. ��� ��� ���� 52 ��� �� ������� �� �����, �� ��� ������ �������� ������� �������.

//������������� �� ������ ������, �� � ���������� ��������� ��� ������ �� �����, ��� �� � ����� � ������� ����. ��� ���������: ���� ����, ��� �������.

//���� �������������� �������, ��� � �������� �� �� ����� ���������� � ����� ������ �����, ��� ������������ ������ IEEE 754, ������� Java, C, PHP, Ruby, Perl.


////----------�������������-----------//
//���������� ������� ��� ������������������ ����������:
Math.acos(x)
//���������� ���������� x (� ��������)
Math.asin(x)
//���������� �������� x (� ��������)
Math.atan(x)
//���������� ���������� x (� ��������)
Math.atan2(y, x)
//���������� ���� �� ����� (y, x). �������� �������: Atan2.
Math.sin(x)
//��������� ����� x (� ��������)
Math.cos(x)
//��������� ������� x (� ��������)
Math.tan(x)
//���������� ������� x (� ��������)

////----------������� ������ ����������-----------//

//������ �������� �������:

Math.sqrt(x)
//���������� ���������� ������ �� x.
Math.log(x)
//���������� ����������� (�� ��������� e) �������� x.
Math.pow(x, exp)
//�������� ����� � �������, ���������� xexp, �������� Math.pow(2,3) = 8. �������� � ��� ����� � �������� � �������������� ���������, ��������: Math.pow(4, -1/2) = 0.5.
Math.abs(x)
//���������� ���������� �������� �����
Math.exp(x)
//���������� ex, ��� e � ��������� ����������� ����������.
Math.max(a, b, c...)
//���������� ���������� �� ������ ����������
Math.min(a, b, c...)
//���������� ���������� �� ������ ����������
Math.random()
//���������� ������-��������� ����� � ��������� [0,1) � �� ���� ����� 0(������������) � 1(�� �������). ��������� ��������� ����� �������������� ������� ��������.


////---------��������������----------//
//��� ��������� ������ ����� � ��������� ECMA 402 ���� ����� toLocaleString():
var number = 123456789;

alert( number.toLocaleString() ); // 123 456 789