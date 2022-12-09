//start default timer when the website is loaded
window.onload = btnClick;

// //function that stops timer and returns text & background as it was
// function stop() {
//   clearInterval(check);
//   check = null;
//   document.getElementById("VR").textContent = "VR";
//   document.getElementById("VRcircle").style = "background-color:#0381c1;";
// }

//absense of an object value
var check = null;

function btnClick(element) {
  if (check == null) {
    var count = 10;

    //timer which countdowns from 10 to 1
    check = setInterval(function () {
      count -= 1;
      document.getElementById("VR").textContent = count;
      document.getElementById("VRcircle").style = "background-color:grey";
      if (count <= 0) {
        clearInterval(check);
        check = null;
        //Change VR content as it was
        document.getElementById("VR").textContent = "VR";
        document.getElementById("VRcircle").style = "background-color:#0381c1;";

        //Change circle background colors
        document.getElementById("circ1").style = "background-color:#0381c1;";
        document.getElementById("circ2").style = "background-color:#0381c1;";
        document.getElementById("circ3").style = "background-color:#0381c1;";
        document.getElementById("circ4").style = "background-color:#0381c1;";
      }
    }, 1000);

    //checks which button is clicked to chnage their color
    switch (element) {
      case "1":
        document.getElementById("circ1").style = "background-color:grey;";
        break;
      case "2":
        document.getElementById("circ2").style = "background-color:grey;";
        break;
      case "3":
        document.getElementById("circ3").style = "background-color:grey;";
        break;
      case "4":
        document.getElementById("circ4").style = "background-color:grey;";
        break;
      default:
    }
  }
}
