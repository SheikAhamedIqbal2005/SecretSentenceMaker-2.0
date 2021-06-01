function converter() {

   var secretsent = document.getElementById("normalsentence").value;
   var answer = document.getElementById("Answer")


   var a = secretsent.replace(/a/g,"Y");
   secretsent = a;

   var b = secretsent.replace(/b/g, "W");
   secretsent = b;

   var c = secretsent.replace(/c/g, "Z");
   secretsent = c;

   var d = secretsent.replace(/d/g, "X");
   secretsent = d;

   var e = secretsent.replace(/e/g, "U");
   secretsent = e;

   var f = secretsent.replace(/f/g, "R");
   secretsent = f;

   var g = secretsent.replace(/g/g, "Q");
   secretsent = g;

   var h = secretsent.replace(/h/g, "V");
   secretsent = h;

   var i = secretsent.replace(/i/g, "P");
   secretsent = i;

   var j = secretsent.replace(/j/g, "S");
   secretsent = j;

   var k = secretsent.replace(/k/g, "T");
   secretsent = k;

   var l = secretsent.replace(/l/g, "I");
   secretsent = l;

   var m = secretsent.replace(/m/g, "J");
   secretsent = m;

   var n = secretsent.replace(/n/g, "K");
   secretsent = n;

   var o = secretsent.replace(/o/g, "M");
   secretsent = o;

   var p = secretsent.replace(/p/g, "L");
   secretsent = p;

   var q = secretsent.replace(/q/g, "N");
   secretsent = q;

   var r = secretsent.replace(/r/g, "D");
   secretsent = r;

   var s = secretsent.replace(/s/g, "O");
   secretsent = s;

   var t = secretsent.replace(/t/g, "A");
   secretsent = t;

   var u = secretsent.replace(/u/g, "H");
   secretsent = u;

   var v = secretsent.replace(/v/g, "E")
   secretsent = v;

   var w = secretsent.replace(/w/g, "C");
   secretsent = w;

   var x = secretsent.replace(/x/g, "G");
   secretsent = x;

   var y = secretsent.replace(/y/g, "B");
   secretsent = y;

   var z = secretsent.replace(/z/g, "F");
   secretsent = z;

   Answer.innerHTML = secretsent;

   }