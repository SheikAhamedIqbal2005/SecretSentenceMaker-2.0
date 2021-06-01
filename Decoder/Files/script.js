function converter () {

   var secretsent = document.getElementById("normalsentence").value;
   var answer = document.getElementById("Answer")

   var a = secretsent.replace(/Y/g, "a");
   secretsent = a;

   var b = secretsent.replace(/W/g, "b");
   secretsent = b;

   var c = secretsent.replace(/Z/g, "c");
   secretsent = c;

   var d = secretsent.replace(/X/g, "d");
   secretsent = d;

   var e = secretsent.replace(/U/g, "e");
   secretsent = e;

   var f = secretsent.replace(/R/g, "f");
   secretsent = f;

   var g = secretsent.replace(/Q/g, "g");
   secretsent = g;

   var h = secretsent.replace(/V/g, "h");
   secretsent = h;

   var i = secretsent.replace(/P/g, "i");
   secretsent = i;

   var j = secretsent.replace(/S/g, "j");
   secretsent = j;

   var k = secretsent.replace(/T/g, "k");
   secretsent = k;

   var l = secretsent.replace(/I/g, "l");
   secretsent = l;

   var m = secretsent.replace(/J/g, "m");
   secretsent = m;

   var n = secretsent.replace(/K/g, "n");
   secretsent = n;

   var o = secretsent.replace(/M/g, "o");
   secretsent = o

   var p = secretsent.replace(/L/g, "p");
   secretsent = p;

   var q = secretsent.replace(/N/g, "q");
   secretsent = q;

   var r = secretsent.replace(/D/g, "r");
   secretsent = r;

   var s = secretsent.replace(/O/g, "s");
   secretsent = s;
  
   var t = secretsent.replace(/A/g, "t");
   secretsent = t;

   var u = secretsent.replace(/H/g, "u");
   secretsent = u;

   var v = secretsent.replace(/E/g, "v");
   secretsent = v;

   var w = secretsent.replace(/C/g, "w");
   secretsent = w;

   var x = secretsent.replace(/G/g, "x");
   secretsent = x;

   var y = secretsent.replace(/B/g, "y");
   secretsent = y;

   var z = secretsent.replace(/F/g, "z");
   secretsent = z;

   Answer.innerHTML = secretsent;

         }