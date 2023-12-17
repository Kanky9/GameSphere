/*function eliminar(id) {
    swal({
        title: "Esta seguro de eliminar el usuario?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((OK) => { 
            if (OK) {
                $.ajax({
                    url: "/eliminar/" + id,
                    success: function(res) {
                        console.log(res);
                    }
                });
                swal("Su usuario se ha eliminado con éxito", {
                    icon: "success",
                }).then((ok) => {
                    if (ok) {
                        location.href = "/listar";
                   }
                });
            } else {
                swal("Su usuario no se eliminó");
            }    
        });
}*/