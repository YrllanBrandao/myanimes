export function showToastr(type, message)
{
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "100",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }


      switch(type)
      {
        case "success":
            toastr["success"](message);
        break;

        case "error":
            toastr["error"](message);
        break;

        case "registered":
            toastr["success"](message);
        break;
      }
}