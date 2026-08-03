<!-- Begin
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
/* Functions that swaps down images. */
function MM_nbGroup(event, grpName) { //v6.0
var i,img,nbArr,args=MM_nbGroup.arguments;
  if (event == "init" && args.length > 2) {
    if ((img = MM_findObj(args[2])) != null && !img.MM_init) {
      img.MM_init = true; img.MM_up = args[3]; img.MM_dn = img.src;
      if ((nbArr = document[grpName]) == null) nbArr = document[grpName] = new Array();
      nbArr[nbArr.length] = img;
      for (i=4; i < args.length-1; i+=2) if ((img = MM_findObj(args[i])) != null) {
        if (!img.MM_up) img.MM_up = img.src;
        img.src = img.MM_dn = args[i+1];
        nbArr[nbArr.length] = img;
    } }
  } else if (event == "over") {
    document.MM_nbOver = nbArr = new Array();
    for (i=1; i < args.length-1; i+=3) if ((img = MM_findObj(args[i])) != null) {
      if (!img.MM_up) img.MM_up = img.src;
      img.src = (img.MM_dn && args[i+2]) ? args[i+2] : ((args[i+1])?args[i+1] : img.MM_up);
      nbArr[nbArr.length] = img;
    }
  } else if (event == "out" ) {
    for (i=0; i < document.MM_nbOver.length; i++) { img = document.MM_nbOver[i]; img.src = (img.MM_dn) ? img.MM_dn : img.MM_up; }
  } else if (event == "down") {
    nbArr = document[grpName];
    if (nbArr) for (i=0; i < nbArr.length; i++) { img=nbArr[i]; img.src = img.MM_up; img.MM_dn = 0; }
    document[grpName] = nbArr = new Array();
    for (i=2; i < args.length-1; i+=2) if ((img = MM_findObj(args[i])) != null) {
      if (!img.MM_up) img.MM_up = img.src;
      img.src = img.MM_dn = (args[i+1])? args[i+1] : img.MM_up;
      nbArr[nbArr.length] = img;
  } }
}

/* Functions that handle preload. */
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function apply()
{  
      
  if(document.frm0.chk.checked==true)
  {	  
    document.getElementById("click").style.display = "none"; 
	document.getElementById("classes").style.display = "block"; 
  }
  if(document.frm0.chk.checked==false)
  {    
    document.getElementById("click").style.display = "block"; 
	document.getElementById("classes").style.display = "none"; 
  }
}

function initForm()
{
	document.frm0.chk.checked=false;	
	document.getElementById("click").style.display = "block"; 
	document.getElementById("classes").style.display = "none";
}

function validateNumber(field) {
 field.value = field.value.replace(/ /g,"");
 
 var valid = "0123456789";
 var ok = "yes";
 var temp;
 var num = 0;
 
 for (var i=0; i<field.value.length; i++) {
   temp = "" + field.value.substring(i, i+1);
   if (valid.indexOf(temp) == "-1") ok = "no";
 }
 if (ok == "no") {  
     alert("Invalid entry!  Only numbers are accepted!");
     //field.value = 0;
     field.focus();
     field.select();
    
 } else{
 
   if((field.name == "txtArial") && (field.value < 10) && (field.value != 0)){
    field.value = 10;
   }
 
   num = new Number(field.value);
   field.value = num; 
   
 } 
 
 return(num);
 
}

function validatePhone(field) {
 field.value = field.value.replace(/ /g,"");
 
 var valid = "0123456789";
 var ok = "yes";
 var temp;
 var num = 0;
 
 for (var i=0; i<field.value.length; i++) {
   temp = "" + field.value.substring(i, i+1);
   if (valid.indexOf(temp) == "-1") ok = "no";
 }
 if (ok == "no") {  
     alert("Invalid entry!  Only numbers are accepted!");
     field.focus();
     field.select();
    
 } 
 
}

function nonempty(field){
  field.value = field.value.replace(/ /g,"");
  if(field.value == ""){
     alert("Enter value");
     field.focus();
     field.select();  
  }
}
  
  


function calculateTxt(field, price){

  var num = validateNumber(field);  
  
  var value = computeValue(num, price);
  
  var formMember = field.name + "Value";
  var oldValue = parseInt(document.myForm.elements[formMember].value);
  
  document.myForm.elements[formMember].value = value + ".00";   
  var totalValue = parseInt(document.myForm.elements["txtTotalOptValue"].value);
  
  totalValue -= oldValue;
  totalValue += value;
  document.myForm.elements["txtTotalOptValue"].value = totalValue + ".00";   
  
  calculateFinalPrice(totalValue);
}

function calculateChk(field, price){

  var value = 0;
  if(field.checked){
    value = parseInt(price);
  }
  var formMember = field.name + "Value";
  var oldValue = parseInt(document.myForm.elements[formMember].value);  
   
  document.myForm.elements[formMember].value = value + ".00";    
  
  var totalValue = parseInt(document.myForm.elements["txtTotalOptValue"].value);  
  
  if(oldValue > value){
    totalValue -= oldValue;
  }

  if(oldValue < value){  
    totalValue += value;
  }
  
  document.myForm.elements["txtTotalOptValue"].value = totalValue + ".00";   
  
  calculateFinalPrice(totalValue);
}

function calculateFinalPrice(totalSelected){

  var finalPrice;
  
  var totalBasic = getTotalBasicValue();
  var totalBasicSelected = totalBasic + totalSelected;
  
  var discount = 0; 
   
  if((totalBasicSelected > 5000) && (totalBasicSelected <= 7000)){
    discount = 50;
  }else if ((totalBasicSelected > 7000) && (totalBasicSelected <= 8000)){
    discount = 75;
  }else if ((totalBasicSelected > 8000) && (totalBasicSelected <= 9000)){
    discount = 100;
  }else if(totalBasicSelected > 9000){
    discount = 150;
  }
  
  finalPrice = totalBasicSelected - discount;
  
  
  document.myForm.elements["txtTotalBoth"].value = totalBasicSelected + ".00";
  
  document.myForm.elements["txtDiscountValue"].value = discount + ".00";  
  
  document.myForm.elements["txtFinalValue"].value = finalPrice + ".00";   
}

function computeValue(count, price) {
   var value = parseInt(count) * parseInt(price);
   return(value);
}

function getTotalBasicValue(){
  var total = parseInt(document.myForm.elements["txtTotalBasicValue"].value);
  return(total);
}

function submitForm(){
     
      document.myForm.elements["txtContactFirstName"].value = document.myForm.elements["txtContactFirstName"].value.replace(/ /g,"");
      
      document.myForm.elements["txtContactLastName"].value = document.myForm.elements["txtContactLastName"].value.replace(/ /g,"");
      document.myForm.elements["txtHear"].value = document.myForm.elements["txtHear"].value.replace(/ /g,"");
      
      if (document.myForm.elements["datebox"].value == ""){
        alert("Wedding date is required");
        document.myForm.elements["datebox"].focus();
        document.myForm.elements["datebox"].select(); 
        
      }else if(document.myForm.elements["txtContactFirstName"].value == ""){
        alert("Contact's First Name is required");
        document.myForm.elements["txtContactFirstName"].focus();
        document.myForm.elements["txtContactFirstName"].select();
        
      } else if(document.myForm.elements["txtContactLastName"].value == ""){
        alert("Contact's Last Name is required");
        document.myForm.elements["txtContactLastName"].focus();
        document.myForm.elements["txtContactLastName"].select();
        
      } else if (document.myForm.elements["txtContactPhoneArea"].value == ""){
        alert("Contact's Phone Area is required");   
        document.myForm.elements["txtContactPhoneArea"].focus();
        document.myForm.elements["txtContactPhoneArea"].select();     
          
      } else if (document.myForm.elements["txtContactPhone1"].value == ""){
        alert("Contact's Phone is required");   
        document.myForm.elements["txtContactPhone1"].focus();
        document.myForm.elements["txtContactPhone1"].select();     
     
      } else if (document.myForm.elements["txtContactPhone2"].value == ""){
        alert("Contact's Phone is required");   
        document.myForm.elements["txtContactPhone2"].focus();
        document.myForm.elements["txtContactPhone2"].select();     
      
      
      } else if (document.myForm.elements["txtHear"].value == ""){
        alert("Please specify how you found out about Poetic Video or type N/A");
        document.myForm.elements["txtHear"].focus();
        document.myForm.elements["txtHear"].select();
      }else{        
        document.myForm.submit();
      }
}
//-->