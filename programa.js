function calcular (base, altura){
    const area=base*altura;
    const perimetro=2*(base+altura);
    return [area,perimetro];
}

function calcular_hipotenusa (a,b){
    const hipotenusa= Math.sqrt(a**2+b**2)
    return hipotenusa;
}
let resultado= calcular_hipotenusa (20, 30);
console.log (resultado [0])

function calcular(a,b){
    document.writeln(a+b);
    document.writeln(a-b);
    document.writeln(a*b);
    document.writeln(a/b);

console.log(a+b);
console.warn(a-b);
console.error(a*b)
console.info (a/b);
}

function media(){
    let campo_x = document.getElementById("x");
    let campo_y = document.getElementById("y");
    let campo_z = document.getElementById("z");

    let x=parseInt(campo_x.value);
    let y=parseInt(campo_y.value);
    let z=parseInt(campo_z.value);

    let promedio= (x+z+y)/3;
    console.log(promedio);
    return promedio;
}

function calcular_tiempo (){
    let v1= parseInt (document.getElementById ("x").value);
    let v2= parseInt (document.getElementById ("y").value);
    let d= parseInt (document.getElementById ("x").value);

    let t=d/(v1-v2);
    let tf=t*60

    let resultado= document.getElementById("resultado");
    resultado.value= tf;
    return tf;
}

