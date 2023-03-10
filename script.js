let form_button = document.getElementById("button");

form_button.addEventListener('click',(event)=>{

  event.preventDefault();

  var input = document.getElementById("input").value; 

  async function national(){

    try{

    let res = await fetch(`https://api.nationalize.io/?name=${input}`);
    let res1 = await res.json();
   
    var a = res1.country[0].country_id;
   
    var b = res1.country[0].probability;
    var x = b.toFixed(2);
    
    var c = res1.country[1].country_id;
    
    var d = res1.country[1].probability;
    var y = d.toFixed(2);
   
    document.getElementById(

        "card-body"
       ).innerHTML="";
    document.getElementById(

           "card-body"
          ).innerHTML=`<div>
          <h5 class="card-title text-uppercase">Name:&nbsp;&nbsp;${input} </h5>
    <div> 
      <span class="card-text mx-5">Country &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;${a}</span> 
      <span class="card-text mx-5">Probability &nbsp;:&nbsp;${x}</span>
    </div>
    <div class="mt-3">
      <span class="card-text mx-5">Country &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;${c}</span>
      <span class="card-text mx-5">Probability &nbsp;:&nbsp;${y}</span>
    </div> `;
    }
    catch(error){

        document.getElementById(
            "card-body"
           ).innerHTML="";
        document.getElementById(
               "card-body"
              ).innerHTML=`<h5 class="card-title text-uppercase">Name:&nbsp;&nbsp;${input} </h5>
              <div> 
              <p class="card-text text-start mx-5">Data not available. Sorry!!! Try different names.</p> 
            </div>
              `;
    }
}

  national();
document.getElementById("submit-form").reset();
});