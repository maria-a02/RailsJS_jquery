//Imitar el comportamiento del componente Alert Dismissing. Considera que hay una única alerta.
$('document').ready(function() {
    $(".collapse").hide();
    $("#alertDismissButton").click(function () {
        $("#alertDismiss").toggle();
    });

//Imitar el comportamiento del componente Collapse. Considera que hay un único contenedor a colapsar.
    $(".btn-primary").click(function (e) {
        e.preventDefault();
        $("#collapseExample").slideToggle('slow');
    });

// Imitar el comportamiento del componente Collapse Accordion. Es importante considerar que un acordeon puede tener un número indeterminado de items (o secciones colapsables).
    $("#headingOne").click(function (e) {
        e.preventDefault();
        $("#collapseOne").toggle();
        $("#collapseTwo").hide();
        $("#collapseThree").hide();
    });
    
    $("#headingTwo").click(function (e) {
        e.preventDefault();
        $("#collapseOne").hide();
        $("#collapseTwo").toggle();
        $("#collapseThree").hide();
    });
        
    $("#headingThree").click(function (e) {
        e.preventDefault();
        $("#collapseOne").hide();
        $("#collapseTwo").hide();
        $("#collapseThree").toggle();
    });
})

// $('.collapsed').click(function (e) {
//     let target = $($(this).data('target'));
//     if (target.is(':visible')) {
//         target.slideUp();
//     } else {
//         $('.targeted').slideUp();
//         target.slideToggle();
//     }
// });
