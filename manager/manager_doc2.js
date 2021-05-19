$(document).ready(function() {
    $('#btn_mostrar2').click(()=>{
        $.ajax({
            type: 'POST',
            data: $('#form_doc2').serialize(),
            url: 'control/control_doc2.php',
            success: (r) => {
                console.log(r);
                $('#mostrar_res2').text(r);
            }
        })
    });
});