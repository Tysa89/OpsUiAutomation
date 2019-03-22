$(document).ready(function(){
     $("#submitIt").attr("disabled", "disabled");
  $("#submitReq").click(function(){
var input = $("#orgId").val();
console.log("input : "+input);
if(input == "qwert"){
$("#myContent").removeClass('hidden');
$("#submitFooter").removeClass('hidden');
} else {
$("#myContent").addClass('hidden');
$("#submitFooter").addClass('hidden');
}
});
});
var flag = false;
$("#mydrop1").change(function () {
        var drop1 = this.value;
        if(drop1 != "Select"){
           $("#submitIt").removeAttr("disabled");
        }else{
             $("#submitIt").attr("disabled", "disabled");
        }
    //    var firstDropVal = $('#pick').val();
    });
