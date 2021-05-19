$(document).ready(function() {
    $('#btn_mostrar3').click(()=>{
        $.ajax({
            type: 'POST',
            data: $('#form_doc3').serialize(),
            url: 'control/control_doc3.php',
            success: (r) => {
                console.log(r);
                $('#mostrar_res3').text(r);
            }
        })
    });
});