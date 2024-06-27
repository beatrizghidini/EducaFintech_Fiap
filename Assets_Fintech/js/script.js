function previewPhoto(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('photo-upload');
      output.innerHTML = '<img src="' + reader.result + '" alt="Foto de Perfil">';
    };
    reader.readAsDataURL(event.target.files[0]);
  }