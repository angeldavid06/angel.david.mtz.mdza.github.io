import { APP } from "../../../js/env.js";

export const generate_slider = (json) => {
    let structure_string = '<div class="slider">';
    let contador = APP.SLIDER.images;
    let slide = 1;
    let clase = '';
    const urls = get_url_image(json.school);

    
    structure_string += '<div id="slider-'+APP.SLIDER.images+'" class="contenedor active">'+
                        '<div class="primario primario-'+APP.SLIDER.images+'">';
    
    json.school.forEach(inf => {
        (contador == APP.SLIDER.images ? clase = 'active' : clase = '')
        if (APP.SLIDER.images > 1 && slide == 1) {
            contador++;
        }
        structure_string += '<img id="actual-'+contador+'" data-principal="'+contador+'" data-slide="'+slide+'" class="'+clase+'" src="'+inf.image+'" alt="" srcset="">';
        contador++;
        slide++;
    });

    slide = 1;
    contador = APP.SLIDER.images;
    
    structure_string += '</div>'+
                        '<div class="secundario secundario-'+APP.SLIDER.images+'">'+
                        '<div class="contenedor-foto">';
    
    urls.map(el => {
        (contador == APP.SLIDER.images ? clase = 'active' : clase = '')
        if (APP.SLIDER.images > 1 && slide == 1) {
            contador++;
        }
        structure_string += '<img id="prev-'+contador+'" data-secundario="'+contador+'" data-slide="'+slide+'" class="'+clase+'" src="'+el+'" alt="" srcset="">';
        contador++;
        slide++;
    });

    structure_string += '</div>'+
                        '<div class="opciones-slider">'+
                            '<button class="material-symbols-rounded" data-slider="'+APP.SLIDER.images+'" data-siguiente="true">arrow_forward_ios</button>'+
                        '</div></div></div></div>';
    
    APP.SLIDER.images += 1;
    
    return structure_string;
}

const get_url_image = (json) => {
    const arr_url = [];
    let contador = 1;

    json.forEach(el => {
        if (contador > 1) {
            arr_url.push(el.image);
        }
        contador++;
    })

    json.forEach(el => {
        if (contador > 1) {
            arr_url.push(el.image);
        }
        contador = 1;
    })

    return arr_url;
}