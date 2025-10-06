<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Inicio extends CI_Controller {
public function __construct()
	{
		parent::__construct();
		$this->load->model("Inicio_model", "inicio");
		$this->load->library('session');
		//Do your magic here
	}

	public function index()
	{
		$data['municipios'] = $this->inicio->getMunicipios();
		$data['actividades'] = $this->inicio->getActividades();
		$this->load->view('includes/header');
		$this->load->view('inicio', $data);
		$this->load->view('includes/footer');
	}

	public function clave()
	{
		//if($this->session->has_userdata('nick'))
		//{
			$this->load->view('includes/header');
			$this->load->view('clave');
			$this->load->view('includes/footer');
		/*}
		else
		{
			$data['municipios'] = $this->inicio->getMunicipios();
			$data['actividades'] = $this->inicio->getActividades();
			$this->load->view('includes/header');
			$this->load->view('inicio', $data);
			$this->load->view('includes/footer');
		}*/
	}

	public function getCodigos($idMunicipio)
	{
		echo json_encode($this->inicio->getCodigos($idMunicipio));
	}

	public function getColonias($idCodigo)
	{
		echo json_encode($this->inicio->getColonias($idCodigo));
	}

	public function agregarAlumno()
	{
		$folio = $this->input->post('folio');
		$nombre = $this->input->post('nombre');
		$ap_pat = $this->input->post('apellido_paterno');
		$ap_mat = $this->input->post('apellido_materno');
		$correo = $this->input->post('correo');
		$municipio = $this->input->post('municipio');
		$codigo = $this->input->post('codigo');
		$colonia = $this->input->post('colonia');
		$domicilio = $this->input->post('domicilio');
		$telefono = $this->input->post('telefono');
		$facebook = $this->input->post('facebook');
		$evento = $this->input->post('evento');
		$campus = $this->input->post('campus');
		$escuela = $this->input->post('escuela');
		$carrera = $this->input->post('carrera');
		
		$id = $this->inicio->registrar($folio, $nombre, $ap_pat, $ap_mat, $municipio, $correo, $facebook, $domicilio, $colonia, $codigo, $telefono, $evento, $campus, $escuela, $carrera);
		if($id>0)
		{
			//$userdata=array("id_alumno"=>$id);
			//$this->session->set_userdata( $userdata );
			$newdata = array(
                   'id_alumno'  => $id,
                   'logged_in' => TRUE
               );
			$this->session->set_userdata($newdata);
			echo json_encode(array('status' => 'OK'));
			//header("Location:".base_url()."panel");
		}
		else
			echo json_encode(array('status' => 'NO'));
		//echo json_encode(array('status' => $folio));
	}
}
/* End of file controllername.php */
/* Location: ./application/controllers/controllername.php */