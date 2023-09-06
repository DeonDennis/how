let x =document.getElementById("menuCont");
let g =document.getElementById("prevbtn");
function displayMenu(){
  x.style.display="block";
  if(x.style.display == "block"){
    g.style.display="none";
  } else{
    g.style.display="block";
  }
}

function removeMenu(){
  x.style.display="none";
  g.style.display="block";
}

window.onclick=function(event){
  if(event.target == x){
    x.style.display="none";
    g.style.display="block";
  }
};

function backHistory(){
  window.history.back();
}

function forwardHistory(){
  window.history.forward();
}

document.querySelector("footer  p").innerHTML="DeonDennis &copy; Copyright";



//code for sorting the Menu Lists
let menu =document.getElementById("Menu");
let switching=true;
let shouldSwitch;
while(switching){
  switching=false;
  let links =menu.getElementsByTagName("a");
  let i;
  for(i=0; i < links.length; i++){
    shouldSwitch=false;
    if(links[i].innerHTML.toLowerCase() > links[i+1].innerHTML.toLowerCase()){
      shouldSwitch=true;
      break;
    }
  }
  if(shouldSwitch){
    links[i].parentNode.insertBefore(links[i+1],links[i]);
    switching=true;
  }
}



//code for filter search in Menu
function Filter(){
let MenuSearch = document.getElementById("searchBar");
  let menuList =menu.getElementsByTagName("a");
  let inputV =MenuSearch.value.toUpperCase();
  let i;
  for(i=0; i < menuList.length; i++){
    let A =menuList[i].textContent;
    if(A.toUpperCase().indexOf(inputV) > -1){
      menuList[i].style.display="";
    }else{
      menuList[i].style.display="none";
    }
  }
}
