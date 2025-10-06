<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Inicio_model extends CI_Model {
	public function __construct()
	{
		parent::__construct();
		//Do your magic here
	}

	public function getMunicipios()
	{
		$this->db->select('id_municipio, Municipio');
		$this->db->where('Estado',6);
		$result = $this->db->get('municipios');
		return $result->result();
	}

	public function getCodigos($idMunicipio)
	{
		$sql = "SELECT DISTINCT (codigo) FROM colonias WHERE municipio = ".$idMunicipio;
		$result = $this->db->query($sql);
		return $result->result();
	}

	public function getActividades()
	{
		$sql = "SELECT DISTINCT (Pertenencia) FROM acreditaciones WHERE Activado = 1";
		$result = $this->db->query($sql);
		return $result->result();
	}

	public function getColonias($idCodigo)
	{
		$sql= "SELECT idColonia, UPPER(colonia) AS colonia FROM colonias WHERE codigo = ".$idCodigo;
		$result = $this->db->query($sql);
		return $result->result();
	}

	public function registrar($folio, $nombre, $ap_pat, $ap_mat, $municipio, $correo, $facebook, $domicilio, $colonia, $codigo, $telefono, $evento, $campus, $escuela, $carrera)
	{
		$sql= "INSERT INTO alumnos (folio, nombre, appat, apmat, municipio, cp, colonia, calle, telefono, correo, facebook, evento, campus, escuela, carrera) VALUES ('".$folio."','".$nombre."','".$ap_pat."','".$ap_mat."','".$municipio."','".$codigo."','".$colonia."','".$domicilio."','".$telefono."','".$correo."','".$facebook."','".$evento."','".$campus."','".$escuela."','".$carrera."')";
		$result = $this->db->query($sql);
		return $this->db->insert_id();
	}
}

/* End of file blog_model.php */
/* Location: ./application/models/blog_model.php */