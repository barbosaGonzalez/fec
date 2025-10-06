<?php if(!$this->session->userdata('id_alumno')): ?>
	No hay cookie
<?php else: ?>
 	Si hay cookie <?php echo $this->session->userdata('id_alumno'); ?>
<?php endif; ?>
<div class = "container">
	<div class="wrapper">
		<form method="post" name="Login_Form" class="form-signin">
		    <h3 class="form-signin-heading">Por favor ingresa la calve otorgada</h3>
			  <hr class="colorgraph"><br>
			  <input type="text" class="form-control" name="clave" id="clave" placeholder="Clave" required="" autofocus="" />
			  <br>
			  <button class="btn btn-lg btn-primary btn-block" onclick="saveClave()" name="Submit" value="Login" type="button">Guardar</button>
		</form>
	</div>
</div>