function saveDatos()
{
  var folio = $("#n_cuenta").val(); //ya
  var nombre = $("#nombre").val(); //ya
  var appat =$("#appat").val(); //ya
  var apmat = $("#apmat").val(); //ya
  var municipio = $("#municipio").val(); //ya
  var codigo = $("#codigo").val(); //ya
  var colonia = $("#colonia").val(); //ya
  var domicilio = $("#domicilio").val(); //ya
  var telefono = $("#telefono").val(); //ya
  var correo = $("#correo").val(); //ya
  var facebook = $("#facebook").val(); //ya
  var evento = $("#evento").val();
  var campus = $("#campus").val(); //ya
  var escuela = $("#escuela").val(); //ya
  var carrera = $("#carrera").val(); //ya
  var reTelefono = /^\([0-9]{1,3}\)[0-9]{3}\-[0-9]{4}$/;
  var reCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  var OKcorreo = reCorreo.exec(correo);
  var OKtelefono = reTelefono.exec(telefono);
  var validado = true;
  debugger
  if(!carrera)
  {
        validado = false;
        $('#s_carrera').remove();
        $('#carrera').animate({scrollTop:0}, 1000);
        $('#carrera').focus();
        $('#carrera').parent().addClass('has-error');
        $('#carrera').parent().parent().append('<div class="alert alert-warning" id="s_carrera">Agrega tu carrera</div>');
  }
  else
  {
       $('#s_carrera').remove();
        $('#carrera').parent().removeClass('has-error');
  }
  if(!escuela)
  {
        validado = false;
        $('#s_escuela').remove();
        $('#escuela').animate({scrollTop:0}, 1000);
        $('#escuela').focus();
        $('#escuela').parent().addClass('has-error');
        $('#escuela').parent().parent().append('<div class="alert alert-warning" id="s_escuela">Agrega tu escuela</div>');
  }
  else
  {
       $('#s_escuela').remove();
        $('#escuela').parent().removeClass('has-error');
  }
  if(!campus)
  {
        validado = false;
        $('#s_campus').remove();
        $('#campus').animate({scrollTop:0}, 1000);
        $('#campus').focus();
        $('#campus').parent().addClass('has-error');
        $('#campus').parent().parent().append('<div class="alert alert-warning" id="s_campus">Agrega tu campus</div>');
  }
  else
  {
       $('#s_campus').remove();
        $('#campus').parent().removeClass('has-error');
  }
  if(!evento || evento==0)
  {
        validado = false;
        $('#s_evento').remove();
        $('#evento').animate({scrollTop:0}, 1000);
        $('#evento').focus();
        $('#evento').parent().addClass('has-error');
        $('#evento').parent().parent().append('<div class="alert alert-warning" id="s_evento">Agrega el evento al que participaste</div>');
  }
  else
  {
       $('#s_evento').remove();
        $('#evento').parent().removeClass('has-error');
  }
  if(!facebook)
  {
        validado = false;
        $('#s_facebook').remove();
        $('#facebook').animate({scrollTop:0}, 1000);
        $('#facebook').focus();
        $('#facebook').parent().addClass('has-error');
        $('#facebook').parent().parent().append('<div class="alert alert-warning" id="s_facebook">Agrega tu facebook</div>');
  }
  else
  {
       $('#s_facebook').remove();
        $('#facebook').parent().removeClass('has-error');
  }
  if ((!correo) || (!OKcorreo))
  {
        validado = false;
        $('#s_correo').remove();
        $('#correo').animate({scrollTop:0}, 1000);
        $('#correo').focus();
        $('#correo').parent().addClass('has-error');
        //document.getElementById('tarjeta').setCustomValidity('Este RFC ya esta ocupado');
        $('#correo').parent().parent().append('<div class="alert alert-warning" id="s_correo">Agrega tu correo usando el siguiente ejemplo: micorreo@correo.com</div>');
  }
  else
  {
       $('#s_correo').remove();
        $('#correo').parent().removeClass('has-error');
  }
  if ((!telefono) || (!OKtelefono))
  {
        validado = false;
        $('#s_telefono').remove();
        $('#telefono').animate({scrollTop:0}, 1000);
        $('#telefono').focus();
        $('#telefono').parent().addClass('has-error');
        $('#telefono').parent().parent().append('<div class="alert alert-warning" id="s_telefono">Agrega tu telefono usando el siguiente ejemplo: (312)123-1234</div>');
  }
  else
  {
        $('#s_telefono').remove();
        $('#telefono').parent().removeClass('has-error');
  }
  if(!domicilio)
  {
        validado = false;
        $('#s_domicilio').remove();
        $('#domicilio').animate({scrollTop:0}, 1000);
        $('#domicilio').focus();
        $('#domicilio').parent().addClass('has-error');
        $('#domicilio').parent().parent().append('<div class="alert alert-warning" id="s_domicilio">Agrega tu calle y número</div>');
  }
  else
  {
       $('#s_domicilio').remove();
        $('#domicilio').parent().removeClass('has-error');
  }
  if(!colonia || colonia == 0)
  {
        validado = false;
        $('#s_colonia').remove();
        $('#colonia').animate({scrollTop:0}, 1000);
        $('#colonia').focus();
        $('#colonia').parent().addClass('has-error');
        $('#colonia').parent().parent().append('<div class="alert alert-warning" id="s_colonia">Selecciona tu colonia</div>');
  }
  else
  {
        $('#s_colonia').remove();
        $('#colonia').parent().removeClass('has-error');
  }
  if(!codigo || codigo == 0)
  {
        validado = false;
        $('#s_codigo').remove();
        $('#codigo').animate({scrollTop:0}, 1000);
        $('#codigo').focus();
        $('#codigo').parent().addClass('has-error');
        $('#codigo').parent().parent().append('<div class="alert alert-warning" id="s_codigo">Selecciona tu codigo postal</div>');
  }
  else
  {
        $('#s_codigo').remove();
        $('#codigo').parent().removeClass('has-error');
  }
  if(!municipio || municipio == 0)
  {
        validado = false;
        $('#s_municipio').remove();
        $('#municipio').animate({scrollTop:0}, 1000);
        $('#municipio').focus();
        $('#municipio').parent().addClass('has-error');
        $('#municipio').parent().parent().append('<div class="alert alert-warning" id="s_municipio">Selecciona tu municipio</div>');
  }
  else
  {
       $('#s_municipio').remove();
        $('#municipio').parent().removeClass('has-error');
  }
  if(!apmat)
  {
       validado = false;
        $('#s_apmat').remove();
        $('#apmat').animate({scrollTop:0}, 1000);
        $('#apmat').focus();
        $('#apmat').parent().addClass('has-error');
        $('#apmat').parent().parent().append('<div class="alert alert-warning" id="s_apmat">Agrega tu apellido materno</div>');
  }
  else
  {
        $('#s_apmat').remove();
        $('#apmat').parent().removeClass('has-error');
  }
  if(!appat)
  {
        validado = false;
        $('#s_appat').remove();
        $('#appat').animate({scrollTop:0}, 1000);
        $('#appat').focus();
        $('#appat').parent().addClass('has-error');
        $('#appat').parent().parent().append('<div class="alert alert-warning" id="s_appat">Agrega tu apellido paterno</div>');
  }
  else
  {
        $('#s_appat').remove();
        $('#appat').parent().removeClass('has-error');
  }
  if(!nombre)
  {
        validado = false;
        $('#s_nombre').remove();
        $('#nombre').animate({scrollTop:0}, 1000);
        $('#nombre').focus();
        $('#nombre').parent().addClass('has-error');
        $('#nombre').parent().parent().append('<div class="alert alert-warning" id="s_nombre">Agrega tu nombre completo</div>');
  }
  else
  {
        $('#s_nombre').remove();
        $('#nombre').parent().removeClass('has-error');
  }
  if(!folio)
  {
        validado = false;
        $('#s_n_cuenta').remove();
        $('#n_cuenta').animate({scrollTop:0}, 1000);
        $('#n_cuenta').focus();
        $('#n_cuenta').parent().addClass('has-error');
        $('#n_cuenta').parent().parent().append('<div class="alert alert-warning" id="s_n_cuenta">Agrega tu folio</div>');
  }
  else
  {
       $('#s_n_cuenta').remove();
        $('#n_cuenta').parent().removeClass('has-error');
  }
  if ((validado))
  {
    debugger
    $.ajax({
        url: 'index.php/inicio/agregarAlumno/',
        type: 'POST',
        dataType: 'JSON',
        data: 
        {
          folio : folio,
          nombre : nombre,
          apellido_paterno : appat,
          apellido_materno : apmat,
          correo : correo,
          municipio : municipio,
          codigo : codigo,
          colonia : colonia,
          domicilio : domicilio,
          telefono : telefono,
          facebook : facebook,
          evento : evento,
          campus : campus,
          escuela : escuela,
          carrera : carrera
        },
    })
    .done(function(data) 
    {
        console.log("success");
        console.log(data);
        if(data.status == 'NO')
        {
            console.log("NO Entre");
            alert("Problema");
            //$('#ponermensaje').append('<div id="mensaje" class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><i class="fa fa-info-circle"></i>  <strong>Problema</strong> No se pueden agregar los datos</div>');
        }
        else if(data.status == 'OK')
        {
            debugger
            console.log("Entre");
            var confirm = $("#myModal");
            confirm.modal('show');
            $("#btnOKConfirm").off('click').click(function () {
                OKFn();
                confirm.modal("hide");
            });
        }
    })
    .fail(function() {
        console.log("error");
        //$('html, body').animate({scrollTop:0}, 1000);
        //$('#ponermensaje').append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><i class="fa fa-info-circle"></i>  <strong>Problema</strong> Contacta al programador</div>');
    })
    .always(function() {
        console.log("complete");
    });
  }
}

function OKFn()
{
  window.location.href = "inicio/clave";
}

function saveClave()
{
  var clave = $("#clave").val();
  var validado = true;
  if(!carrera)
  {
        validado = false;
        $('#s_clave').remove();
        $('#clave').animate({scrollTop:0}, 1000);
        $('#clave').focus();
        $('#clave').parent().addClass('has-error');
        $('#clave').parent().parent().append('<div class="alert alert-warning" id="s_clave">Agrega tu clave</div>');
  }
  else
  {
       $('#s_clave').remove();
        $('#clave').parent().removeClass('has-error');
  }
  if ((validado))
  {
    debugger
    console.log("Entre");
    /*$.ajax({
        url: 'index.php/inicio/agregarAlumno/',
        type: 'POST',
        dataType: 'JSON',
        data: 
        {
          folio : folio,
          nombre : nombre,
          apellido_paterno : appat,
          apellido_materno : apmat,
          correo : correo,
          municipio : municipio,
          codigo : codigo,
          colonia : colonia,
          domicilio : domicilio,
          telefono : telefono,
          facebook : facebook,
          evento : evento,
          campus : campus,
          escuela : escuela,
          carrera : carrera
        },
    })
    .done(function(data) 
    {
        console.log("success");
        console.log(data);
        if(data.status == 'NO')
        {
            console.log("NO Entre");
            alert("Problema");
            //$('#ponermensaje').append('<div id="mensaje" class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><i class="fa fa-info-circle"></i>  <strong>Problema</strong> No se pueden agregar los datos</div>');
        }
        else if(data.status == 'OK')
        {
            debugger
            console.log("Entre");
            alert("Datos guardados satisfactoriaente");
            window.location.href = "index.php/inicio/clave";
        }
    })
    .fail(function() {
        console.log("error");
        //$('html, body').animate({scrollTop:0}, 1000);
        //$('#ponermensaje').append('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><i class="fa fa-info-circle"></i>  <strong>Problema</strong> Contacta al programador</div>');
    })
    .always(function() {
        console.log("complete");
    });*/
  }
}

function getMunicipios()
{
  var idEstado = $('#estado').val();
  $.ajax({
    url: 'api/getMunicipios/'+idEstado,
    type: 'GET',
    dataType: 'JSON'
  })
  .done(function(data) {
    $('#municipio').empty();
    $.each(data[0], function(index, val) {
     /* iterate through array or object */
     debugger
     $('#municipio').append(new Option(val.ciudad, val.idCiudad));
    });
  })
  .fail(function(data) {
    console.log("error");
  })
  .always(function(data) {
    console.log("complete");
  });
}

function getCodigos()
{
  var idCiudad = $('#municipio').val();
  $.ajax({
    url: 'inicio/getCodigos/'+idCiudad,
    type: 'GET',
    dataType: 'JSON'
  })
  .done(function(data) {
    $('#codigo').empty();
    $.each(data, function(index, val) {
      /* iterate through array or object */
      $('#codigo').append(new Option(val.codigo));
    });   
  })
  .fail(function(data) {
    console.log("error");
  })
  .always(function(data) {
    console.log("complete");
  });
}

function getColonias()
{
  var codigo = $('#codigo').val();
  $.ajax({
    url: 'inicio/getColonias/'+codigo,
    type: 'GET',
    dataType: 'JSON'
  })
  .done(function(data) {
    $('#colonia').empty();
    $.each(data, function(index, val) {
       /* iterate through array or object */
       $('#colonia').append(new Option(val.colonia, val.idColonia));
    });
        
  })
  .fail(function(data) {
    console.log("error");
  })
  .always(function(data) {
    console.log("complete");
  });
}