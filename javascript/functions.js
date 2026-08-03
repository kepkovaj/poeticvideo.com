<!-- Begin
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