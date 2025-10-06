
        <div class="conteiner well">
            <form method="POST" role="form">
                <h1 class="text-center">Datos personales</h1>
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="form-group">
                            <label for="nombre">Folio credencial FEC</label>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-credit-card"></i></span>
                                <input autofocus type="text" onkeyup="javascript:this.value=this.value.toUpperCase();" class="form-control" id="n_cuenta" name="n_cuenta" placeholder="Ingresa tu folio de la credencial de la FEC">
                              </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-font"></i></span>
                                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingresa tu nombre">
                              </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="appat">Apellido Paterno</label>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-font"></i></span>
                            <input type="text" class="form-control" id="appat" name="apmat" placeholder="Ingresa tu apellido paterno">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="apmat">Apellido Materno</label>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-font"></i></span>
                            <input type="text" class="form-control" id="apmat" name="apmat" placeholder="Ingresa tu apellido materno">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <div class="form-group">
                          <label class="control-label" for="name">Municipio</label>
                          <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                            <select name="municipio" id="municipio" class="form-control" required="required" onchange="getCodigos()">
                              <option value="0">Seleccione uno</option>
                              <?php foreach ($municipios as $municipio):?>
                                <option value="<?php echo $municipio->id_municipio?>"><?php echo $municipio->Municipio?></option>
                              <?php endforeach;?>
                            </select>
                          </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                          <label class="control-label" for="name">Codigo postal</label>
                          <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                            <select name="codigo" id="codigo" class="form-control" required="required" onchange="getColonias()">
                              <option value="0">Seleccione uno</option>
                            </select>
                          </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                          <label class="control-label" for="name">Colonias</label>
                          <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                            <select name="colonia" id="colonia" class="form-control" required="required">
                              <option value="0">Seleccione una</option>
                            </select>
                            </select>
                          </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                          <label class="control-label" for="name">Calle y número</label>
                          <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"></i></span>
                            <input type="text" class="form-control" id="domicilio" name="domicilio" placeholder="Ingresa tu calle y número">
                          </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="form-group">
                          <label class="control-label" for="name">Teléfono</label>
                          <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-phone"></i></span>
                            <input type="text" class="form-control" id="telefono" name="telefono" placeholder="(123)123-1234">
                          </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                          <label class="control-label" for="name">Correo</label>
                          <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                            <input type="text" class="form-control" id="correo" name="correo" placeholder="ejemplo@dominio.com">
                          </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                          <label class="control-label" for="name">Facebook</label>
                          <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input type="text" class="form-control" id="facebook" name="facebook" placeholder="Ingresa tu nombre de Facebook">
                          </div>
                        </div>
                    </div>
                </div>
                <hr>
                <h1 class="text-center">Datos escolares</h1>
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
            <div class="form-group">
              <label for="nombre">Evento a participar</label>
              <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                  <select name="evento" id="evento" class="form-control" required="required" onchange="getCodigos()">
                    <option value="0">Seleccione uno</option>
                    <?php foreach ($actividades as $actividad):?>
                      <option value="<?php echo $actividad->Pertenencia?>"><?php echo $actividad->Pertenencia?></option>
                    <?php endforeach;?>
                  </select>
                </div>
            </div>
          </div>
                </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="form-group">
              <label class="control-label" for="name">Campus</label>
              <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input type="text" class="form-control" id="campus" name="campus" placeholder="Ingresa tu nombre de campus">
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label class="control-label" for="name">Escuela</label>
              <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input type="text" class="form-control" id="escuela" name="escuela" placeholder="Ingresa tu nombre de escuela">
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label class="control-label" for="name">Carrera</label>
              <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input type="text" class="form-control" id="carrera" name="carrera" placeholder="Ingresa tu nombre de carrera">
              </div>
            </div>
          </div>
        </div>
        <center>
          <button type="button" onclick="saveDatos()" class="btn btn-primary  btn-lg">Enviar</button>
        </center>
      </form>
  </div>
<!--modal inicio-->
<div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="text-danger fa fa-times"></i></button>
                <h4 class="modal-title" id="myModalLabel"><i class="text-muted fa fa-shopping-cart"></i> <strong>Exito</strong></h4>
            </div>
            <div class="modal-body">  
                <p>Ingresado correctamente</p>
            </div>
            <div class="modal-footer">
                <button id="btnOKConfirm" type="button" class="btn btn-primary btn-ok">OK</button>
            </div>
        </div>
    </div>
</div>
<!--modal final-->