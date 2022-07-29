function mostrar_tabla(){
var n= parseInt(document.tablas.numero.value);
var r= " ";

if(n>10 || n<1 ){
    alert("Error");
}

else {
for(var i=1; i<=10; i++){
    
r=r+n+"*"+i+"  =  "+
(n*i) + "<br>";

}

var capa_resultado=document.getElementById("resultado");
capa_resultado.innerHTML=r;
}

}