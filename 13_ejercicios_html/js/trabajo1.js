function resultado(){

    /* se asigna valores 
    a variables
    */
 var a = parseInt(document.Form1.a1.value);
 var b = parseInt(document.Form1.b2.value);
 var c = parseInt(document.Form1.c3.value);

if(a==b & b==c){
document.write("todos son iguales = "+a+"         ");
}
 if(a==b & b>c){
document.write(" Es igual= "+a+"");
document.write("Intermedio es = "+c+"");
document.write("Mayor es = "+b+"");
}
if(b==c & a<b){
    document.write("Es igual "+b+"");
document.write("menor es = "+a+"");
document.write("Mayor es = "+b+"");
}
if(c==b & a>c){
    document.write(" Es igual= "+c+"");
    document.write("menor es = "+c+"");
    document.write("Mayor es = "+a+"");
}
if(a==c & b>c){
        document.write("iguales es= "+a+"");
        document.write("mayor es= "+b+"");
        document.write("Menor  es= "+c+"");
}

else if(a<b & b>c ){
    document.write("menor  es= "+a+"");
    document.write("mayor es= "+b+"");
    document.write("medio  es= "+c+"");
}
else if(a<b & b<c ){
    document.write("menor  es= "+a+"");
    document.write("mayor es= "+c+"");
    document.write("medio  es= "+b+"");
}
else if(b<a & a<c){
document.write("menor es= "+b+"");
document.write("intermedio es= "+a+"");
document.write("mayor es= "+c+"");

}
else if(b<c & c<a){
    document.write("menor= "+b+"");
    document.write("intermedio= "+c+"");
    document.write("Mayor= "+a+"");

}
else	if(c<b & b<a){
    document.write("menor es= "+c+"");
    document.write("intermedio es= "+b+"");
    document.write("Mayor es= "+a+"");

}





}