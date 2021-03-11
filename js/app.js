
function guardar()
{
    localStorage.setItem("fullname", $("#fullname").val());
    localStorage.setItem("phone", $("#phone").val());
    localStorage.setItem("email", $("#email").val());
    localStorage.setItem("address", $("#address").val());
    alert("Información Guardada en el LocalStorage");
}

function getData()
{
    $("#fullname").val(localStorage.getItem("fullname"));
    $("#phone").val(localStorage.getItem("phone"));
    $("#email").val(localStorage.getItem("email"));
    $("#address").val(localStorage.getItem("address"));
}
