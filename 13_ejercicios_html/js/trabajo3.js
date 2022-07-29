function menor(){

    /* se asigna valores 
    a variables
    */
 var n1 = parseInt(document.Form2.n1.value);
 var n2 = parseInt(document.Form2.n2.value);

if(n1==n2){
    document.write("Estos son iguales= "+n1+"");
}
 if(n1<n2 & n2>n1){
document.write("Mayor es= "+n2+"");
document.write("Menor es= "+n1+"");
 }
if(n2<n1 & n1>n2){
    document.write("Mayor es= "+n1+"");
    document.write("Menor es= "+n2+"");
}








}
