document.addEventListener('DOMContentLoaded', function () {

    var botones = document.querySelectorAll('[type="button"]');
    var pantalla = document.querySelector('#pantalla');
    var reset = document.querySelector('#reset');
    var body = document.querySelector('#body');
    var num, tecla;
    var operacion = [];


    botones.forEach(function (item) {
        pantalla.value = 0;
        item.addEventListener('click', function () {
            if (item.id.indexOf('num') != -1) {
                tecla = item.value;
                console.log(tecla);
                num = pantalla.value;
                if (item.id != 'numpunto') {
                    pantalla.value = parseFloat(num + tecla);
                }
                else {
                    pantalla.value = num + tecla;
                }
                reset.value = 'C';
            }
            else if (item.id == 'igual') {
                num = pantalla.value;
                operacion.push(num);
                let resultado = operacion.toString();
                console.log(resultado);
                console.log(resultado.replace(/,/g, ''));
                resultado = eval(resultado.replace(/,/g, ''));
                pantalla.value = resultado;
                operacion.splice(0);
                reset.value = 'AC';
            }
            else if (item.id == 'reset') {
                if (reset.value == 'C') {
                    reset.value = 'AC';
                    operacion.splice(2, 1);
                    pantalla.value = null;
                } else if (reset.value == 'AC') {
                    operacion.splice(0);
                    pantalla.value = 0;
                }
            }
            else {
                tecla = item.value;
                num = pantalla.value;
                operacion.push(num, tecla);
                pantalla.value = null;
            }
        });
    });

    // DRAGGABLE
    dragCalculadora(document.querySelector('.draggable'));

    function dragCalculadora(calculadora) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.querySelector(calculadora.class + "header")) {
            document.querySelector(calculadora.class + "header").onmousedown = dragMouseDown;
        } else {
            calculadora.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragCalculadora;
            document.onmousemove = calculadoraDrag;
        }

        function calculadoraDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            calculadora.style.top = (calculadora.offsetTop - pos2) + "px";
            calculadora.style.left = (calculadora.offsetLeft - pos1) + "px";
        }

        function closeDragCalculadora() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    // ELECCION DE TEMA
    var form = document.querySelector('form');
    var calculadora = document.querySelector('.calculadora');
    var agarradero = document.querySelector('div.agarradero');
    var inputText = document.querySelector('[type="text"]');
    var inputRadio = document.querySelector('[type="radio"]');
    var radioLabel = document.querySelector('.radioLabel');

    var bg01 = document.querySelector('#bg01');
    var bg02 = document.querySelector('#bg02');
    var bg03 = document.querySelector('#bg03');
    var bg04 = document.querySelector('#bg04');
    var bg05 = document.querySelector('#bg05');

    var happyLife = document.querySelector('.happyLife');
    var greenPicnic = document.querySelector('.greenPicnic');
    var presents = document.querySelector('.presents');
    var sunset = document.querySelector('.sunset');
    var neightbours = document.querySelector('.neightbours');

    var tema = 0;
    var temas = ['happyLife', 'greenPicnic', 'presents', 'sunset', 'neightbours'];
    var colores1 = ['#f8cf83', '#ec8b8b', '#7aa0e6', '#ffe49a', '#f0c256'];
    var colores2 = ['#34b198', '#903a62', '#00994d', '#578f60', '#83502e'];
    var colores3 = ['#1e8b76', '#083f49', '#fff', '#f5ae8d', '#46d1ca'];
    var colores4 = ['#fd667a', '#92e7b6', '#366bcf', '#46d180', '#ff7d7d'];
    var colores5 = ['#fff', '#fff', '#f5a0a0', '#6b7e97', '#fff'];
    var fondos = ['bg_01--optimizada.jpg', 'bg_02--optimizada.jpg', 'bg_03--optimizada.jpg', 'bg_04--optimizada.jpg', 'bg_05--optimizada.jpg'];

    window.onload = function carga() {
        bg01.checked = true;
        cambiarTema(tema);
        bg01.addEventListener('click', function () {
            tema = 0;
            cambiarTema(tema);
        });
        bg02.addEventListener('click', function () {
            tema = 1;
            cambiarTema(tema);
        });
        bg03.addEventListener('click', function () {
            tema = 2;
            cambiarTema(tema);
        });
        bg04.addEventListener('click', function () {
            tema = 3;
            cambiarTema(tema);
        });
        bg05.addEventListener('click', function () {
            tema = 4;
            cambiarTema(tema);
        });
    };

    radioLabel.addEventListener('mouseover', function () {

    });

    function cambiarTema(tema) {

        body.style.backgroundImage = 'url(./img/' + fondos[tema] + ')';
        form.style.backgroundColor = colores1[tema];
        calculadora.style.backgroundColor = colores2[tema];
        agarradero.style.backgroundColor = colores2[tema];
        inputText.style.backgroundColor = colores1[tema];
        inputText.style.color = colores3[tema];
        inputText.style.boderColor = colores3[tema];
        botones.forEach(function (item) {
            item.style.color = colores3[tema];
            item.style.borderColor = colores3[tema];
            item.style.backgroundColor = colores5[tema];
            item.addEventListener('mouseover', function () {
                item.style.color = colores5[tema];
                item.style.backgroundColor = colores4[tema];
            });
            item.addEventListener('mouseout', function () {
                item.style.color = colores3[tema];
                item.style.backgroundColor = colores5[tema];
            });
        });
        seleccionar(temas[tema], tema);
    }

    function seleccionar(seleccionado, tema) {
        limpiar(tema);
        switch (seleccionado) {
            case temas[0]:
                happyLife.style.color = colores4[tema];
                happyLife.classList.add('subrayado');
                break;
            case temas[1]:
                greenPicnic.style.color = colores4[tema];
                greenPicnic.classList.add('subrayado');
                break;
            case temas[2]:
                presents.style.color = colores4[tema];
                presents.classList.add('subrayado');
                break;
            case temas[3]:
                sunset.style.color = colores4[tema];
                sunset.classList.add('subrayado');
                break;
            case temas[4]:
                neightbours.style.color = colores4[tema];
                neightbours.classList.add('subrayado');
                break;
        }
    }

    function limpiar(tema) {
        happyLife.style.color = colores5[tema];
        happyLife.classList.remove('subrayado');
        greenPicnic.style.color = colores5[tema];
        greenPicnic.classList.remove('subrayado');
        presents.style.color = colores5[tema];
        presents.classList.remove('subrayado');
        sunset.style.color = colores5[tema];
        sunset.classList.remove('subrayado');
        neightbours.style.color = colores5[tema];
        neightbours.classList.remove('subrayado');
    }
});