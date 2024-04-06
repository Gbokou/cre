function date(){
var x=document.querySelector(".date")

	
	var d= new Date()
	var day= d.getDate()
	var month= d.getMonth()+1
	var year= d.getFullYear()
	
	if(day<10){
	day="0"+day;
	}
	
	if(month<10){
	month="0"+month;
	}
	
	x.innerHTML=day+"/"+month+"/"+year
}
setInterval(date , 1000)




const alert=()=>{
swal({
  title: "Compte actif",
  text: "  votre compte est actif",
  icon: "success",
  dangerMode: true,
})}

function vir(){
window.location="virement.html"
}

const alert1=()=>{
swal({
  title: "succès",
  text: "virement effectué",
  icon: "success",
  dangerMode: true,
})}
