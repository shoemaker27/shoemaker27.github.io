function filter() {
//filters all other Table based on user input vs 1st column data
  const checkboxArray = document.querySelectorAll("input[type='radio']");
  var input, filter, table, tr, td, td2, td3, i, txtValue, txtValue2, txtValue3;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  td1 = tr[1].getElementsByTagName("td")[0];
  if (td1.innerText == "Berthier Mle 1892") {
	if (checkboxArray[0].checked == true || checkboxArray[1].checked == true || checkboxArray[2].checked == true || checkboxArray[3].checked == true 
		|| checkboxArray[4].checked == true || checkboxArray[5].checked == true || checkboxArray[6].checked == true || checkboxArray[7].checked == true) {
			let StorageArray = sessionStorage.getItem("StorageArray");
			let StorageArray2 = sessionStorage.getItem("StorageArray2");
			for (i = 0; i < tr.length; i++) {
				td = tr[i].getElementsByTagName("td")[0];
				td2 = tr[i].getElementsByTagName("td")[3];
				td3 = tr[i].getElementsByTagName("td")[4];
				if (td) {
				  txtValue = td.textContent || td.innerText;
				  txtValue2 = td2.textContent || td2.innerText;
					txtValue3 = td3.textContent || td3.innerText;
				  if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(StorageArray) > -1 && txtValue3.toUpperCase().indexOf(StorageArray2) > -1) { //each row must include something typed in search bar and each row must 	match with something in sessionStorage
					tr[i].style.display = "";
				  } else {
					tr[i].style.display = "none";
				  }
				}
			}
		} else {
			for (i = 0; i < tr.length; i++) {
				td = tr[i].getElementsByTagName("td")[0];
				if (td) {
				  txtValue = td.textContent || td.innerText;
				  if (txtValue.toUpperCase().indexOf(filter) > -1) {
					tr[i].style.display = "";
				  } else {
					tr[i].style.display = "none";
				  }
				}
			  }
		}
  } else {
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
		  txtValue = td.textContent || td.innerText;
		  if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
		  } else {
			tr[i].style.display = "none";
		  }
		}
	  }
  }
 
}

function sortTable(n) {
//Sorts Weapon Table in ascending/descending order Alphabetically.
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.textContent.toLowerCase() > y.textContent.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.textContent.toLowerCase() < y.textContent.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableNum(n) {
  //Sorts Weapon Table in ascending/descending order Numerically
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (isNaN(x.innerHTML)) {
        x.innerHTML = "";
      }
      if (isNaN(y.innerHTML)) {
        y.innerHTML = "";
      }
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
  let nodeList = document.querySelectorAll(".grey");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].innerHTML = "N/A";
  }
}

function filterSpace() {
  //dropdown function for weapon size
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterSpace2() {
  //dropdown function for ammo
  document.getElementById("myDropdown2").classList.toggle("show");
}

function filterCheckbox() {
  //filters all data based on small, medium, or large?
  const checkboxArray = document.querySelectorAll("input[type='radio']");
  var input, input2, filter, filter2, table, tr, td, td2, i, txtValue, txtValue2;
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  if (checkboxArray[0].checked == true) {
    if (checkboxArray[3].checked == true || checkboxArray[4].checked == true || checkboxArray[5].checked == true || checkboxArray[6].checked == true || checkboxArray[7].checked == true) {
      if (checkboxArray[3].checked == true) {
        input = checkboxArray[0];
        input2 = checkboxArray[3];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
		
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
		  
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
	  sessionStorage.setItem("StorageArray","SMALL");
	  sessionStorage.setItem("StorageArray2","COMPACT");
      }
      if (checkboxArray[4].checked == true) {
        input = checkboxArray[0];
        input2 = checkboxArray[4];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
		
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
		  
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
	  sessionStorage.setItem("StorageArray","SMALL");
	  sessionStorage.setItem("StorageArray2","MEDIUM");
      }
      if (checkboxArray[5].checked == true) {
        input = checkboxArray[0];
        input2 = checkboxArray[5];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
		
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
		  
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
	  sessionStorage.setItem("StorageArray","SMALL");
	  sessionStorage.setItem("StorageArray2","LONG");
      }
      if (checkboxArray[6].checked == true) {
        input = checkboxArray[0];
        input2 = checkboxArray[6];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
		
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
		  
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
	  sessionStorage.setItem("StorageArray","SMALL");
	  sessionStorage.setItem("StorageArray2","SHOTGUN");
      }
      if (checkboxArray[7].checked == true) {
        input = checkboxArray[0];
        input2 = checkboxArray[7];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
		
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
		  
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
	  sessionStorage.setItem("StorageArray","SMALL");
	  sessionStorage.setItem("StorageArray2","SPECIAL");
      }
    } else {
      input = checkboxArray[0];
      filter = input.value.toUpperCase();
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
		
        if (td) {
          txtValue = td.textContent || td.innerText;
		  
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
			
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
	  sessionStorage.setItem("StorageArray","SMALL");
    }
  }
  if (checkboxArray[1].checked == true) {
	if (checkboxArray[3].checked == true || checkboxArray[4].checked == true || checkboxArray[5].checked == true || checkboxArray[6].checked == true || checkboxArray[7].checked == true) {
		if (checkboxArray[3].checked == true) {
		  input = checkboxArray[1];
		  input2 = checkboxArray[3];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","MEDIUM");
	  sessionStorage.setItem("StorageArray2","COMPACT");
		}
		if (checkboxArray[4].checked == true) {
		  input = checkboxArray[1];
		  input2 = checkboxArray[4];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","MEDIUM");
	  sessionStorage.setItem("StorageArray2","MEDIUM");
		}
		if (checkboxArray[5].checked == true) {
		  input = checkboxArray[1];
		  input2 = checkboxArray[5];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","MEDIUM");
	  sessionStorage.setItem("StorageArray2","LONG");
		}
		if (checkboxArray[6].checked == true) {
		  input = checkboxArray[1];
		  input2 = checkboxArray[6];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","MEDIUM");
	  sessionStorage.setItem("StorageArray2","SHOTGUN");
		}
		if (checkboxArray[7].checked == true) {
		  input = checkboxArray[1];
		  input2 = checkboxArray[7];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","MEDIUM");
	  sessionStorage.setItem("StorageArray2","SPECIAL");
		}
	  } else {
		input = checkboxArray[1];
		filter = input.value.toUpperCase();
		for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","MEDIUM");
	  }
  }  
  if (checkboxArray[2].checked == true) {
	if (checkboxArray[3].checked == true || checkboxArray[4].checked == true || checkboxArray[5].checked == true || checkboxArray[6].checked == true || checkboxArray[7].checked == true) {
		if (checkboxArray[3].checked == true) {
		  input = checkboxArray[2];
		  input2 = checkboxArray[3];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","LARGE");
	  	sessionStorage.setItem("StorageArray2","COMPACT");
		}
		if (checkboxArray[4].checked == true) {
		  input = checkboxArray[2];
		  input2 = checkboxArray[4];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","LARGE");
	  	sessionStorage.setItem("StorageArray2","MEDIUM");
		}
		if (checkboxArray[5].checked == true) {
		  input = checkboxArray[2];
		  input2 = checkboxArray[5];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","LARGE");
	  	sessionStorage.setItem("StorageArray2","LONG");
		}
		if (checkboxArray[6].checked == true) {
		  input = checkboxArray[2];
		  input2 = checkboxArray[6];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","LARGE");
	  	sessionStorage.setItem("StorageArray2","SHOTGUN");
		}
		if (checkboxArray[7].checked == true) {
		  input = checkboxArray[2];
		  input2 = checkboxArray[7];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","LARGE");
	  	sessionStorage.setItem("StorageArray2","SPECIAL");
		}
	  } else {
		input = checkboxArray[2];
		filter = input.value.toUpperCase();
		for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","LARGE");
	  }
  }  

}

function filterCheckbox2() {
  //filters all data based on ammo type
  const checkboxArray = document.querySelectorAll("input[type='radio']");
  var input, input2, filter, filter2, table, tr, td, td2, i, txtValue, txtValue2;
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  if (checkboxArray[3].checked == true) {
    if (checkboxArray[0].checked == true || checkboxArray[1].checked == true || checkboxArray[2].checked == true) {
      if (checkboxArray[0].checked == true) {
        input = checkboxArray[3];
        input2 = checkboxArray[0];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
		
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
		  
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
	  sessionStorage.setItem("StorageArray","SMALL");
	  sessionStorage.setItem("StorageArray2","COMPACT");
      }
      if (checkboxArray[1].checked == true) {
        input = checkboxArray[3];
        input2 = checkboxArray[1];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
		
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
		  
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
	  sessionStorage.setItem("StorageArray","MEDIUM");
	  sessionStorage.setItem("StorageArray2","COMPACT");
      }
      if (checkboxArray[2].checked == true) {
        input = checkboxArray[3];
        input2 = checkboxArray[2];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
		
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
		  
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
	  sessionStorage.setItem("StorageArray","LARGE");
	  sessionStorage.setItem("StorageArray2","COMPACT");
      }
    } else {
      input = checkboxArray[3];
      filter = input.value.toUpperCase();
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
		
        if (td) {
          txtValue = td.textContent || td.innerText;
		  
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
			
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
	  sessionStorage.setItem("StorageArray2","COMPACT");
    }
  }
  if (checkboxArray[4].checked == true) {
    if (checkboxArray[0].checked == true || checkboxArray[1].checked == true || checkboxArray[2].checked == true) {
		if (checkboxArray[0].checked == true) {
		  input = checkboxArray[4];
		  input2 = checkboxArray[0];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","SMALL");
	  sessionStorage.setItem("StorageArray2","MEDIUM");
		}
		if (checkboxArray[1].checked == true) {
		  input = checkboxArray[4];
		  input2 = checkboxArray[1];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","MEDIUM");
	  sessionStorage.setItem("StorageArray2","MEDIUM");
		}
		if (checkboxArray[2].checked == true) {
		  input = checkboxArray[4];
		  input2 = checkboxArray[2];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","LARGE");
	  sessionStorage.setItem("StorageArray2","MEDIUM");
		}
	  } else {
		input = checkboxArray[4];
		filter = input.value.toUpperCase();
		for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
	  sessionStorage.setItem("StorageArray2","MEDIUM");
	  }
  }
  if (checkboxArray[5].checked == true) {
    if (checkboxArray[0].checked == true || checkboxArray[1].checked == true || checkboxArray[2].checked == true) {
		if (checkboxArray[0].checked == true) {
		  input = checkboxArray[5];
		  input2 = checkboxArray[0];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","SMALL");
	  sessionStorage.setItem("StorageArray2","LONG");
		}
		if (checkboxArray[1].checked == true) {
		  input = checkboxArray[5];
		  input2 = checkboxArray[1];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","MEDIUM");
	  sessionStorage.setItem("StorageArray2","LONG");
		}
		if (checkboxArray[2].checked == true) {
		  input = checkboxArray[5];
		  input2 = checkboxArray[2];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","LARGE");
	  sessionStorage.setItem("StorageArray2","LONG");
		}
	  } else {
		input = checkboxArray[5];
		filter = input.value.toUpperCase();
		for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
	  sessionStorage.setItem("StorageArray2","LONG");
	  }
  }
  if (checkboxArray[6].checked == true) {
    if (checkboxArray[0].checked == true || checkboxArray[1].checked == true || checkboxArray[2].checked == true) {
		if (checkboxArray[0].checked == true) {
		  input = checkboxArray[6];
		  input2 = checkboxArray[0];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","SMALL");
	  sessionStorage.setItem("StorageArray2","SHOTGUN");
		}
		if (checkboxArray[1].checked == true) {
		  input = checkboxArray[6];
		  input2 = checkboxArray[1];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","MEDIUM");
	  sessionStorage.setItem("StorageArray2","SHOTGUN");
		}
		if (checkboxArray[2].checked == true) {
		  input = checkboxArray[6];
		  input2 = checkboxArray[2];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","LARGE");
	  sessionStorage.setItem("StorageArray2","SHOTGUN");
		}
	  } else {
		input = checkboxArray[6];
		filter = input.value.toUpperCase();
		for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
	  sessionStorage.setItem("StorageArray2","SHOTGUN");
	  }
  }
  if (checkboxArray[7].checked == true) {
    if (checkboxArray[0].checked == true || checkboxArray[1].checked == true || checkboxArray[2].checked == true) {
		if (checkboxArray[0].checked == true) {
		  input = checkboxArray[7];
		  input2 = checkboxArray[0];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","SMALL");
	  sessionStorage.setItem("StorageArray2","SPECIAL");
		}
		if (checkboxArray[1].checked == true) {
		  input = checkboxArray[7];
		  input2 = checkboxArray[1];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","MEDIUM");
	  sessionStorage.setItem("StorageArray2","SPECIAL");
		}
		if (checkboxArray[2].checked == true) {
		  input = checkboxArray[7];
		  input2 = checkboxArray[2];
		  filter = input.value.toUpperCase();
		  filter2 = input2.value.toUpperCase(); 
		  for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[3];
		  td2 = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			txtValue2 = td2.textContent || td2.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
		sessionStorage.setItem("StorageArray","LARGE");
	  sessionStorage.setItem("StorageArray2","SPECIAL");
		}
	  } else {
		input = checkboxArray[7];
		filter = input.value.toUpperCase();
		for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[4];
		  
		  if (td) {
			txtValue = td.textContent || td.innerText;
			
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			  
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
		}
	  sessionStorage.setItem("StorageArray2","SPECIAL");
	  }
  }
}

function loadPage(title, file) {
	let hText = document.getElementById("head2");
  if (hText.parentNode) {
    hText.innerHTML = title;
  }
  //deletes Home Page Dialogue and Changes Headings
  
  let wText = document.getElementById("dynEntry");
  if (wText == null) { //prevents null parentNode error
    
  } else if (wText.parentNode) {
    wText.parentNode.removeChild(wText);
  }
  //deletes dynamically Added content
  var div = document.createElement("div");
  div.setAttribute("id", "dynEntry");
  div.innerHTML = file;

  document.body.appendChild(div);
  //Inserts Home Page HTML
}

function loadHomePage() {
  var title = "Wiki";
  var file = ` 
  <p id="dialogue">
  This website is a resource for the Hunt: Showdown Community containing a variety of information, including:
  <br>Stats for all Weapons, Tools, and Consumeables
  <br>Information on how Damage Drop-Off and Locational Damage Work
  <br>Data Collected on how the in-game Traits Fanning and Levering work
  <br>Data Collected on Shotgun Spread
  <br>Data Collected on the accuracy of dual-wielding
  <br>Maps of the in-game locations
  </p>
  <img id="head3" class="logo" src="resources/hunt_logo.PNG" alt="Hunt Logo">
  `;
  loadPage(title, file);


}

function loadWepPage() {
	var title = "Weapons";
	var file = `
	<div class="filter-input"><input type="text" id="myInput" onkeyup="filter()" placeholder="Search for names, space, or ammo type..."></div>
		<div class="ritz grid-container" dir="ltr">
				<table class="waffle" id="table" cellspacing="0" cellpadding="0" align="center">
					<thead>
						<tr>
							<th id="368926671C0" style="width:200px;" class="column-headers-background" ondblclick="sortTable(0)">Name</th>
							<th id="368926671C1" style="width:100px;" class="column-headers-background" ondblclick="sortTableNum(1)">Cost</th>
							<th id="368926671C2" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(2)">Bloodline Rank</th>
							<th id="368926671C3" style="width:100px;" class="column-headers-background" ondblclick="sortTable(3)">Space
							  <div oncontextmenu="return false;" class="dropdown">
								<button onclick="filterSpace()" class="dropbtn"></button>
								<div id="myDropdown" class="dropdown-content">
									<form>
										<input type="radio" id="small" onclick="filterCheckbox()" name="size" value="small">
										  <label for="small">Small</label><br>
										<input type="radio" id="medium" onclick="filterCheckbox()" name="size" value="medium">
										  <label for="medium">Medium</label><br>
										<input type="radio" id="large" onclick="filterCheckbox()" name="size" value="large">
										  <label for="large">Large</label><br>
									</form>
								</div>
							  </div></th>
							<th id="368926671C4" style="width:150px;" class="column-headers-background" ondblclick="sortTable(4)">Ammo Type
							  <div oncontextmenu="return false;" class="dropdown">
									<button onclick="filterSpace2()" class="dropbtn"></button>
									<div id="myDropdown2" class="dropdown-content">
										<form>
											<input type="radio" id="compact" onclick="filterCheckbox2()" name="ammoType" value="compact">
											  <label for="compact">Compact</label><br>
											<input type="radio" id="medium" onclick="filterCheckbox2()" name="ammoType" value="medium">
											  <label for="medium">Medium</label><br>
											<input type="radio" id="long" onclick="filterCheckbox2()" name="ammoType" value="long">
											  <label for="long">Long</label><br>
											<input type="radio" id="shotgun" onclick="filterCheckbox2()" name="ammoType" value="shotgun">
											  <label for="shotgun">Shotgun</label><br>
											<input type="radio" id="special" onclick="filterCheckbox2()" name="ammoType" value="special">
											  <label for="special">Special</label><br>
										</form>
									</div>
							  </div></th>
							<th id="368926671C5" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(5)">Rate of Fire (rpm)</th>
							<th id="368926671C6" style="width:179px;" class="column-headers-background" ondblclick="sortTableNum(6)">Full Clip Reload Speed (s)</th>
							<th id="368926671C7" style="width:100px;" class="column-headers-background" ondblclick="sortTableNum(7)">Clip Size</th>
							<th id="368926671C8" style="width:100px;" class="column-headers-background" ondblclick="sortTableNum(8)">Damage</th>
							<th id="368926671C9" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(9)">Light Melee Damage</th>
							<th id="368926671C10" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(10)">Heavy Melee Damage</th>
							<th id="368926671C11" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(11)">Effective Range (m)</th>
							<th id="368926671C12" style="width:100px;" class="column-headers-background" ondblclick="sortTableNum(12)">Handling (%)</th>
							<th id="368926671C13" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(13)">Muzzle Velocity (m/s)	</th>
						</tr>
					</thead>
					<tbody>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Berthier Mle 1892</td>
							<td class="s3" dir="ltr">356</td>
							<td class="s3" dir="ltr">48</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">36</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">3</td>
							<td class="s3" dir="ltr">130</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">305</td>
							<td class="s3" dir="ltr">79</td>
							<td class="s3" dir="ltr">590</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Berthier Mle 1893 Deadeye</td>
							<td class="s3" dir="ltr">388</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">36</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">3</td>
							<td class="s3" dir="ltr">130</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">305</td>
							<td class="s3" dir="ltr">75</td>
							<td class="s3" dir="ltr">590</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Berthier Mle 1893 Riposte</td>
							<td class="s3" dir="ltr">370</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">36</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">3</td>
							<td class="s3" dir="ltr">130</td>
							<td class="s3" dir="ltr">82</td>
							<td class="blue" dir="ltr">168</td>
							<td class="s3" dir="ltr">305</td>
							<td class="s3" dir="ltr">71</td>
							<td class="s3" dir="ltr">590</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Bomb Lance</td>
							<td class="s3">199</td>
							<td class="s3" dir="ltr">78</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Special</td>
							<td class="s3" dir="ltr">15</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s3" dir="ltr">1</td>
							<td class="blue">150</td>
							<td class="blue" dir="ltr">180</td>
							<td class="blue" dir="ltr">360</td>
							<td class="s3" dir="ltr">25</td>
							<td class="s3" dir="ltr">87</td>
							<td class="s3" dir="ltr">60</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Bornheim No. 3</td>
							<td class="s3">146</td>
							<td class="s3" dir="ltr">35</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="green" dir="ltr">210</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3">74</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">68</td>
							<td class="s3" dir="ltr">64</td>
							<td class="s3" dir="ltr">380</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Bornheim No. 3 Extended</td>
							<td class="s3">203</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="green" dir="ltr">210</td>
							<td class="s3" dir="ltr">8</td>
							<td class="s3" dir="ltr">9</td>
							<td class="s3">74</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">68</td>
							<td class="s3" dir="ltr">64</td>
							<td class="s3" dir="ltr">380</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Bornheim No. 3 Match</td>
							<td class="s3">180</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="green" dir="ltr">210</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3">80</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">68</td>
							<td class="s3" dir="ltr">85</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Caldwell 92 New Army</td>
							<td class="s3" dir="ltr">103</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">107</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3" dir="ltr">97</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">79</td>
							<td class="s3" dir="ltr">59</td>
							<td class="s3" dir="ltr">230</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Caldwell Conversion Chain Pistol</td>
							<td class="s3">84</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">44</td>
							<td class="s3" dir="ltr">28</td>
							<td class="green" dir="ltr">17</td>
							<td class="green">104</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">84</td>
							<td class="s3" dir="ltr">66</td>
							<td class="s3" dir="ltr">300</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Caldwell Conversion Pistol</td>
							<td class="s3">55</td>
							<td class="s3" dir="ltr">18</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">44</td>
							<td class="s3" dir="ltr">11</td>
							<td class="s3" dir="ltr">6</td>
							<td class="green">104</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">84</td>
							<td class="s3" dir="ltr">60</td>
							<td class="s3" dir="ltr">300</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Caldwell Conversion Uppercut</td>
							<td class="s3">414</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">40</td>
							<td class="s3" dir="ltr">15</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3">130</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">96</td>
							<td class="s3" dir="ltr">57</td>
							<td class="s3" dir="ltr">410</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Caldwell Pax</td>
							<td class="s3">80</td>
							<td class="s3" dir="ltr">30</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">46</td>
							<td class="s3" dir="ltr">11</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">86</td>
							<td class="s3" dir="ltr">60</td>
							<td class="s3" dir="ltr">330</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Caldwell Pax Claw</td>
							<td class="s3">105</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">46</td>
							<td class="s3" dir="ltr">11</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">52</td>
							<td class="s3" dir="ltr">105</td>
							<td class="s3" dir="ltr">86</td>
							<td class="s3" dir="ltr">60</td>
							<td class="s3" dir="ltr">330</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Caldwell Rival 78</td>
							<td class="s3">150</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">90</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s3" dir="ltr">2</td>
							<td class="blue">175</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">87</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							<td class="s0" dir="ltr">Caldwell Rival 78 Handcannon</td>
							<td class="s3">125</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="green" dir="ltr">90</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s3" dir="ltr">2</td>
							<td class="s3">85</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">8</td>
							<td class="s3" dir="ltr">84</td>
							<td class="s3" dir="ltr">350</td>
						</tr>
						<tr style="height: 20px">
							
							<td class="s0" dir="ltr">Calvary Saber</td>
							<td class="s3">60</td>
							<td class="s3" dir="ltr">62</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey">N/A</td>
							<td class="s3" dir="ltr">82</td>
							<td class="blue" dir="ltr">168</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">47</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Combat Axe</td>
							<td class="s3">15</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey">N/A</td>
							<td class="blue" dir="ltr">165</td>
							<td class="blue" dir="ltr">330</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">20</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Crossbow</td>
							<td class="s3">50</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Special</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3" dir="ltr">1</td>
							<td class="blue">260</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">47</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">150</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Crown &amp; King Auto-5</td>
							<td class="s3">600</td>
							<td class="s3" dir="ltr">82</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="green" dir="ltr">100</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3" dir="ltr">5</td>
							<td class="blue">186</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">78</td>
							<td class="s3" dir="ltr">425</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Dolch 96</td>
							<td class="s3">750</td>
							<td class="s3" dir="ltr">71</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Special</td>
							<td class="s3" dir="ltr">164</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3">97</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">78</td>
							<td class="s3" dir="ltr">61</td>
							<td class="s3" dir="ltr">440</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Dolch 96 Precision</td>
							<td class="s3">790</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Special</td>
							<td class="s3" dir="ltr">164</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3">97</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">78</td>
							<td class="s3" dir="ltr">69</td>
							<td class="s3" dir="ltr">440</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Hand Crossbow</td>
							<td class="s3">30</td>
							<td class="s3" dir="ltr">21</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Special</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">5</td>
							<td class="s3" dir="ltr">1</td>
							<td class="blue">195</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">45</td>
							<td class="s3" dir="ltr">53</td>
							<td class="s3" dir="ltr">100</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Hunting Bow</td>
							<td class="s3">57</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Special</td>
							<td class="s3" dir="ltr">45</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3" dir="ltr">1</td>
							<td class="blue">227</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">23</td>
							<td class="s3" dir="ltr">66</td>
							<td class="s3" dir="ltr">150</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Lebel 1886</td>
							<td class="s3">397</td>
							<td class="s3" dir="ltr">52</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">34</td>
							<td class="s3" dir="ltr">18</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3">132</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">310</td>
							<td class="s3" dir="ltr">83</td>
							<td class="green" dir="ltr">630</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Lebel 1886 Aperture</td>
							<td class="s3">425</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">34</td>
							<td class="s3" dir="ltr">18</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3">132</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">310</td>
							<td class="s3" dir="ltr">80</td>
							<td class="green" dir="ltr">630</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Lebel 1886 Marksman</td>
							<td class="s3">607</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">34</td>
							<td class="s3" dir="ltr">18</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3">132</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">310</td>
							<td class="s3" dir="ltr">80</td>
							<td class="green" dir="ltr">630</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Lebel 1886 Talon</td>
							<td class="s3">422</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">34</td>
							<td class="s3" dir="ltr">18</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3">132</td>
							<td class="s3" dir="ltr">27</td>
							<td class="blue" dir="ltr">150</td>
							<td class="s3" dir="ltr">310</td>
							<td class="s3" dir="ltr">81</td>
							<td class="green" dir="ltr">630</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Lemat Mark II</td>
							<td class="s3">95</td>
							<td class="s3" dir="ltr">46</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Compact/Shotgun</td>
							<td class="s3" dir="ltr">42</td>
							<td class="s3" dir="ltr">15</td>
							<td class="s0" dir="ltr">9(1)</td>
							<td class="s3">97</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">79</td>
							<td class="s3" dir="ltr">66</td>
							<td class="s3" dir="ltr">300</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Lemat Mark II Carbine</td>
							<td class="s3">130</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Compact/Shotgun</td>
							<td class="s3" dir="ltr">49</td>
							<td class="s3" dir="ltr">19</td>
							<td class="s0" dir="ltr">9</td>
							<td class="s3">107</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">140</td>
							<td class="s3" dir="ltr">83</td>
							<td class="s3" dir="ltr">375</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Machete</td>
							<td class="s3">18</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey">N/A</td>
							<td class="s3" dir="ltr">90</td>
							<td class="s3" dir="ltr">135</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">64</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Martini-Henry IC1</td>
							<td class="s3">122</td>
							<td class="s3" dir="ltr">9</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3" dir="ltr">3</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3">143</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">334</td>
							<td class="s3" dir="ltr">70</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Martini-Henry IC1 Deadeye</td>
							<td class="s3">145</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3" dir="ltr">3</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3">143</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">334</td>
							<td class="s3" dir="ltr">67</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Martini-Henry IC1 Ironside</td>
							<td class="s3">184</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">33</td>
							<td class="s3" dir="ltr">11</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3">143</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">334</td>
							<td class="s3" dir="ltr">68</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Martini-Henry IC1 Marksman</td>
							<td class="s3">173</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3" dir="ltr">3</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3">143</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">334</td>
							<td class="s3" dir="ltr">68</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Martini-Henry IC1 Riposte</td>
							<td class="s3">164</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3" dir="ltr">3</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3">143</td>
							<td class="s3" dir="ltr">82</td>
							<td class="blue" dir="ltr">168</td>
							<td class="s3" dir="ltr">334</td>
							<td class="s3" dir="ltr">66</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Mosin-Nagant M1891</td>
							<td class="s3">490</td>
							<td class="s3" dir="ltr">75</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">34</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">5</td>
							<td class="green">136</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="green" dir="ltr">319</td>
							<td class="s3" dir="ltr">75</td>
							<td class="s3" dir="ltr">615</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Mosin-Nagant M1891 Avtomat</td>
							<td class="s3">1250</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="green" dir="ltr">400</td>
							<td class="s3" dir="ltr">11</td>
							<td class="s3" dir="ltr">15</td>
							<td class="green">136</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="green" dir="ltr">319</td>
							<td class="s3" dir="ltr">35</td>
							<td class="s3" dir="ltr">615</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Mosin-Nagant M1891 Bayonet</td>
							<td class="s3">540</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">34</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">5</td>
							<td class="green">136</td>
							<td class="s3" dir="ltr">27</td>
							<td class="blue" dir="ltr">168</td>
							<td class="green" dir="ltr">319</td>
							<td class="s3" dir="ltr">70</td>
							<td class="s3" dir="ltr">615</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Mosin-Nagant M1891 Obrez</td>
							<td class="s3">290</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">34</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">5</td>
							<td class="green">136</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="green" dir="ltr">319</td>
							<td class="s3" dir="ltr">68</td>
							<td class="green" dir="ltr">550</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Mosin-Nagant M1891 Obrez Drum</td>
							<td class="s3">350</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">34</td>
							<td class="green" dir="ltr">3</td>
							<td class="green" dir="ltr">15</td>
							<td class="green">136</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="green" dir="ltr">319</td>
							<td class="s3" dir="ltr">65</td>
							<td class="green" dir="ltr">550</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Mosin-Nagant M1891 Obrez Mace</td>
							<td class="s3">310</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">34</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">5</td>
							<td class="green">136</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">90</td>
							<td class="green" dir="ltr">319</td>
							<td class="s3" dir="ltr">65</td>
							<td class="green" dir="ltr">550</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Mosin-Nagant M1891 Sniper</td>
							<td class="s3">730</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">34</td>
							<td class="s3" dir="ltr">5</td>
							<td class="s3" dir="ltr">5</td>
							<td class="green">136</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="green" dir="ltr">319</td>
							<td class="s3" dir="ltr">75</td>
							<td class="s3" dir="ltr">615</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895</td>
							<td class="s3">24</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">40</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">91</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">73</td>
							<td class="s3" dir="ltr">63</td>
							<td class="s3" dir="ltr">330</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895 Deadeye</td>
							<td class="s3">42</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">63</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">91</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">73</td>
							<td class="s3" dir="ltr">85</td>
							<td class="s3" dir="ltr">330</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895 Officer</td>
							<td class="s3">96</td>
							<td class="s3" dir="ltr">56</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">100</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">91</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">73</td>
							<td class="s3" dir="ltr">58</td>
							<td class="s3" dir="ltr">330</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895 Officer Brawler</td>
							<td class="s3">110</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">100</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">91</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">67</td>
							<td class="s3" dir="ltr">73</td>
							<td class="s3" dir="ltr">58</td>
							<td class="s3" dir="ltr">330</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895 Officer Carbine</td>
							<td class="s3">155</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">100</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">104</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">125</td>
							<td class="green" dir="ltr">89</td>
							<td class="s3" dir="ltr">360</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895 Officer Carbine Deadeye</td>
							<td class="s3">211</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">100</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">104</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">125</td>
							<td class="s3" dir="ltr">84</td>
							<td class="s3" dir="ltr">360</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895 Precision</td>
							<td class="s3">29</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">63</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">91</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">73</td>
							<td class="green" dir="ltr">86</td>
							<td class="s3" dir="ltr">330</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895 Silencer</td>
							<td class="s3">93</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">40</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">91</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">56</td>
							<td class="s3" dir="ltr">61</td>
							<td class="s3" dir="ltr">250</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nitro Express Rifle</td>
							<td class="s3">1015</td>
							<td class="s3" dir="ltr">90</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Special</td>
							<td class="s3" dir="ltr">60</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s3" dir="ltr">2</td>
							<td class="blue">364</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">250</td>
							<td class="s3" dir="ltr">41</td>
							<td class="s3" dir="ltr">550</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Romero 77</td>
							<td class="s3">66</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">30</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">1</td>
							<td class="blue">200</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="green" dir="ltr">15</td>
							<td class="green" dir="ltr">92</td>
							<td class="s3" dir="ltr">450</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Romero 77 Alamo</td>
							<td class="s3">98</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">22</td>
							<td class="green" dir="ltr">13</td>
							<td class="s3" dir="ltr">5</td>
							<td class="blue">200</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="green" dir="ltr">15</td>
							<td class="green" dir="ltr">92</td>
							<td class="s3" dir="ltr">450</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Romero 77 Handcannon</td>
							<td class="s3">46</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">30</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">1</td>
							<td class="green">140</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="green" dir="ltr">10</td>
							<td class="green" dir="ltr">86</td>
							<td class="green" dir="ltr">375</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Romero 77 Hatchet</td>
							<td class="s3">82</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">30</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">1</td>
							<td class="green">140</td>
							<td class="s3" dir="ltr">90</td>
							<td class="blue" dir="ltr">150</td>
							<td class="green" dir="ltr">10</td>
							<td class="s3" dir="ltr">80</td>
							<td class="green" dir="ltr">375</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Romero 77 Talon</td>
							<td class="s3">84</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">30</td>
							<td class="green" dir="ltr">3</td>
							<td class="s3" dir="ltr">1</td>
							<td class="blue">200</td>
							<td class="s3" dir="ltr">27</td>
							<td class="blue" dir="ltr">150</td>
							<td class="green" dir="ltr">15</td>
							<td class="s3" dir="ltr">88</td>
							<td class="green" dir="ltr">450</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03</td>
							<td class="s3">77</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">41</td>
							<td class="s3" dir="ltr">9</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3" dir="ltr">107</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">85</td>
							<td class="green" dir="ltr">68</td>
							<td class="s3" dir="ltr">280</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03 Brawler</td>
							<td class="s3" dir="ltr">100</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">41</td>
							<td class="s3" dir="ltr">9</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3" dir="ltr">107</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">67</td>
							<td class="s3" dir="ltr">85</td>
							<td class="green" dir="ltr">68</td>
							<td class="s3" dir="ltr">280</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03 Precision</td>
							<td class="s3" dir="ltr">85</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">52</td>
							<td class="s3" dir="ltr">9</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3" dir="ltr">107</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">85</td>
							<td class="s3" dir="ltr">80</td>
							<td class="s3" dir="ltr">280</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03 Spitfire</td>
							<td class="s3" dir="ltr">108</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">77</td>
							<td class="s3" dir="ltr">9</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3" dir="ltr">107</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">85</td>
							<td class="s3" dir="ltr">62</td>
							<td class="s3" dir="ltr">280</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03 Swift</td>
							<td class="s3" dir="ltr">95</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">41</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3" dir="ltr">107</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">85</td>
							<td class="green" dir="ltr">68</td>
							<td class="s3" dir="ltr">280</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Sparks LRR</td>
							<td class="s3">130</td>
							<td class="s3" dir="ltr">32</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s3" dir="ltr">1</td>
							<td class="green">149</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="green" dir="ltr">347</td>
							<td class="s3" dir="ltr">73</td>
							<td class="green" dir="ltr">533</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Sparks LRR Silencer</td>
							<td class="s3">150</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s3" dir="ltr">1</td>
							<td class="green">149</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">169</td>
							<td class="s3" dir="ltr">71</td>
							<td class="s3" dir="ltr">300</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Sparks LRR Sniper</td>
							<td class="s3">199</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s3" dir="ltr">1</td>
							<td class="green">149</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="green" dir="ltr">347</td>
							<td class="s3" dir="ltr">70</td>
							<td class="green" dir="ltr">533</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Sparks Pistol</td>
							<td class="s3">155</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Small</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s3" dir="ltr">1</td>
							<td class="green">149</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="green" dir="ltr">150</td>
							<td class="s3" dir="ltr">60</td>
							<td class="green" dir="ltr">453</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Specter 1882</td>
							<td class="s3">188</td>
							<td class="s3" dir="ltr">38</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">40</td>
							<td class="s3" dir="ltr">14</td>
							<td class="s3" dir="ltr">5</td>
							<td class="blue">185</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">85</td>
							<td class="s3" dir="ltr">425</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Specter 1882 Bayonet</td>
							<td class="s3">223</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">40</td>
							<td class="s3" dir="ltr">14</td>
							<td class="s3" dir="ltr">5</td>
							<td class="blue">175</td>
							<td class="s3" dir="ltr">27</td>
							<td class="blue" dir="ltr">168</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">81</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Specter 1882 Compact</td>
							<td class="s3">164</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">40</td>
							<td class="s3" dir="ltr">11</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s3">85</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">8</td>
							<td class="s3" dir="ltr">80</td>
							<td class="s3" dir="ltr">350</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Springfield 1866</td>
							<td class="s3">38</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">16</td>
							<td class="green" dir="ltr">2</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3">132</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">212</td>
							<td class="green" dir="ltr">80</td>
							<td class="s3" dir="ltr">490</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Springfield 1866 Compact</td>
							<td class="s3">33</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3" dir="ltr">2</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3">132</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">212</td>
							<td class="s3" dir="ltr">67</td>
							<td class="s3" dir="ltr">450</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Springfield 1866 Compact Deadeye</td>
							<td class="s3">46</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3" dir="ltr">2</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3">132</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">212</td>
							<td class="green" dir="ltr">73</td>
							<td class="s3" dir="ltr">450</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Springfield 1866 Compact Striker</td>
							<td class="s3">56</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3" dir="ltr">2</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3">132</td>
							<td class="s3" dir="ltr">52</td>
							<td class="s3" dir="ltr">105</td>
							<td class="s3" dir="ltr">212</td>
							<td class="s3" dir="ltr">66</td>
							<td class="s3" dir="ltr">450</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Springfield 1866 Marksman</td>
							<td class="s3">73</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">16</td>
							<td class="green" dir="ltr">2</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3">132</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">212</td>
							<td class="s3" dir="ltr">75</td>
							<td class="s3" dir="ltr">490</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Springfield M1892 Krag</td>
							<td class="s3">376</td>
							<td class="grey" dir="ltr"></td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Long</td>
							<td class="green" dir="ltr">43</td>
							<td class="s3" dir="ltr">11</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3">124</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">290</td>
							<td class="s3" dir="ltr">81</td>
							<td class="s3" dir="ltr">610</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Vetterli 71 Karabiner</td>
							<td class="s3">105</td>
							<td class="s3" dir="ltr">14</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">42</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">130</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">203</td>
							<td class="s3" dir="ltr">87</td>
							<td class="s3" dir="ltr">410</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Vetterli 71 Karabiner Bayonet</td>
							<td class="s3">155</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">42</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">130</td>
							<td class="s3" dir="ltr">27</td>
							<td class="blue" dir="ltr">168</td>
							<td class="s3" dir="ltr">203</td>
							<td class="s3" dir="ltr">85</td>
							<td class="s3" dir="ltr">410</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Vetterli 71 Karabiner Deadeye</td>
							<td class="s3">130</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">42</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">130</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">203</td>
							<td class="s3" dir="ltr">83</td>
							<td class="s3" dir="ltr">410</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Vetterli 71 Karabiner Marksman</td>
							<td class="s3">190</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">42</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">130</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">203</td>
							<td class="s3" dir="ltr">80</td>
							<td class="s3" dir="ltr">410</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Vetterli 71 Karabiner Silencer</td>
							<td class="s3">150</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">42</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">130</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">150</td>
							<td class="s3" dir="ltr">82</td>
							<td class="s3" dir="ltr">280</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield 1887 Terminus</td>
							<td class="s3">238</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">36</td>
							<td class="s3" dir="ltr">14</td>
							<td class="green" dir="ltr">7</td>
							<td class="blue">185</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">82</td>
							<td class="s3" dir="ltr">425</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield 1887 Terminus Handcannon</td>
							<td class="s3">218</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">36</td>
							<td class="s3" dir="ltr">12</td>
							<td class="green" dir="ltr">6</td>
							<td class="s3">75</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">8</td>
							<td class="s3" dir="ltr">79</td>
							<td class="s3" dir="ltr">350</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield 1893 Slate</td>
							<td class="s3" dir="ltr">333</td>
							<td class="s3" dir="ltr">65</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Shotgun</td>
							<td class="s3" dir="ltr">58</td>
							<td class="s3" dir="ltr">9</td>
							<td class="s3" dir="ltr">6</td>
							<td class="blue" dir="ltr">180</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">12</td>
							<td class="s3" dir="ltr">75</td>
							<td class="s3" dir="ltr">425</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873 </td>
							<td class="s3">75</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">150</td>
							<td class="s3" dir="ltr">87</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873 Aperture</td>
							<td class="s3">80</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">150</td>
							<td class="s3" dir="ltr">79</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873 Musket Bayonet</td>
							<td class="s3">137</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">18</td>
							<td class="green" dir="ltr">18</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">27</td>
							<td class="blue" dir="ltr">168</td>
							<td class="s3" dir="ltr">150</td>
							<td class="s3" dir="ltr">82</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873 Swift</td>
							<td class="s3">128</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">8</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">150</td>
							<td class="s3" dir="ltr">87</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873 Talon</td>
							<td class="s3">100</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3" dir="ltr">16</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">27</td>
							<td class="blue" dir="ltr">150</td>
							<td class="s3" dir="ltr">150</td>
							<td class="green" dir="ltr">89</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C</td>
							<td class="s3">41</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3" dir="ltr">8</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">150</td>
							<td class="green" dir="ltr">89</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C Marksman</td>
							<td class="s3">56</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3" dir="ltr">8</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">150</td>
							<td class="s3" dir="ltr">83</td>
							<td class="s3" dir="ltr">400</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C Silencer</td>
							<td class="s3">55</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3" dir="ltr">8</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">135</td>
							<td class="s3" dir="ltr">84</td>
							<td class="s3" dir="ltr">250</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C Vandal</td>
							<td class="s3">35</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">8</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">140</td>
							<td class="s3" dir="ltr">71</td>
							<td class="s3" dir="ltr">370</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C Vandal Deadeye</td>
							<td class="s3">45</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">8</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">140</td>
							<td class="s3" dir="ltr">76</td>
							<td class="s3" dir="ltr">370</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C Vandal Striker</td>
							<td class="s3">39</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s0" dir="ltr">Compact</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">8</td>
							<td class="s3" dir="ltr">7</td>
							<td class="s3">110</td>
							<td class="s3" dir="ltr">52</td>
							<td class="s3" dir="ltr">105</td>
							<td class="s3" dir="ltr">140</td>
							<td class="s3" dir="ltr">71</td>
							<td class="s3" dir="ltr">370</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1876 Centennial</td>
							<td class="s3">157</td>
							<td class="s3" dir="ltr">24</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">39</td>
							<td class="s3" dir="ltr">11</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3">123</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">180</td>
							<td class="s3" dir="ltr">76</td>
							<td class="s3" dir="ltr">600</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1876 Centennial Sniper</td>
							<td class="s3">229</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">39</td>
							<td class="s3" dir="ltr">11</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3">123</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">54</td>
							<td class="s3" dir="ltr">180</td>
							<td class="s3" dir="ltr">72</td>
							<td class="s3" dir="ltr">600</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1876 Centennial Trauma</td>
							<td class="s3">200</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s0" dir="ltr">Large</td>
							<td class="s0" dir="ltr">Medium</td>
							<td class="s3" dir="ltr">39</td>
							<td class="s3" dir="ltr">11</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3">123</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">216</td>
							<td class="s3" dir="ltr">180</td>
							<td class="s3" dir="ltr">70</td>
							<td class="s3" dir="ltr">600</td>
						</tr>
					</tbody>
				</table>
				<table class ="pancake" align="center"><tr><td>*Green indicates that a weapon is best in it's class at that stat while blue indicates high enough damage to defeat a player in one hit.</td></tr></table>
		</div>
	`;
	loadPage(title, file);
}

function loadToolsPage() {
	var title = "Tools";
	var file = `
	<div class="filter-input2"><input type="text" id="myInput" onkeyup="filter()" placeholder="Search for names.."></div>
		<div class="ritz grid-container" dir="ltr">
				<table class="waffle" id="table" cellspacing="0" cellpadding="0" align="center">
					<thead>
						<tr>
							<th id="943986312C0" style="width:137px;" class="column-headers-background" ondblclick="sortTable(0)">Name</th>
							<th class="freezebar-cell frozen-column-cell freezebar-vertical-handle"/>
							<th id="943986312C1" style="width:100px;" class="column-headers-background" ondblclick="sortTableNum(2)">Cost</th>
							<th id="943986312C2" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(3)">Bloodline Rank</th>
							<th id="943986312C3" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(4)">Effect Radius (m)</th>
							<th id="943986312C4" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(5)">Effect Duration (s)</th>
							<th id="943986312C5" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(6)">Effective Range (m)</th>
							<th id="943986312C6" style="width:100px;" class="column-headers-background" ondblclick="sortTableNum(7)">Damage</th>
							<th id="943986312C7" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(8)">Light Melee Damage</th>
							<th id="943986312C8" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(9)">Heavy Melee Damage</th>
							<th id="943986312C9" style="width:100px;" class="column-headers-background" ondblclick="sortTableNum(10)">Handling</th>
							<th id="943986312C10" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(11)">Muzzle Velocity (m/s)</th>
							<th id="943986312C11" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(12)">Rate of Fire (rpm)</th>
							<th id="943986312C12" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(13)">Reload Speed (s)</th>
							<th id="943986312C13" style="width:100px;" class="column-headers-background" ondblclick="sortTableNum(14)">Fuse (s)</th>
						</tr>
					</thead>
					<tbody>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Alert Trip Mines</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">60</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Blank Fire Decoys</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">45</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">20</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Choke Bombs</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">25</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3" dir="ltr">5</td>
							<td class="s3" dir="ltr">120</td>
							<td class="s3" dir="ltr">20</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">5.0833</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Concertina Trip Mines</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">90</td>
							<td class="s3" dir="ltr">40</td>
							<td class="s3" dir="ltr">2</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">10</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Decoy Fuses</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">60</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">6</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">7.2</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Decoys</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">6</td>
							<td class="s3" dir="ltr">1</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">20</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Dusters</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">15</td>
							<td class="s3" dir="ltr">1</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">72</td>
							<td class="s3" dir="ltr">71</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Electric Lamp</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">5</td>
							<td class="s3" dir="ltr">1</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">First Aid Kit</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">30</td>
							<td class="s3" dir="ltr">1</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Flare Pistol</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">36</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">35</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">53</td>
							<td class="s3" dir="ltr">75</td>
							<td class="s3" dir="ltr">25</td>
							<td class="s3" dir="ltr">5</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Fusees</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">10</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">300</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Heavy Knife</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">25</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">72</td>
							<td class="s3" dir="ltr">120</td>
							<td class="s3" dir="ltr">45</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Knife</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">20</td>
							<td class="s3" dir="ltr">1</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">52</td>
							<td class="s3" dir="ltr">105</td>
							<td class="s3" dir="ltr">57</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Knuckle Knife</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">15</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">58</td>
							<td class="s3" dir="ltr">92</td>
							<td class="s3" dir="ltr">62</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Poison Trip Mines</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">60</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">1</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Quad Derringer</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">30</td>
							<td class="s3" dir="ltr">80</td>
							<td class="s3" dir="ltr">60</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">60</td>
							<td class="s3" dir="ltr">74</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">59</td>
							<td class="s3" dir="ltr">130</td>
							<td class="s3" dir="ltr">130</td>
							<td class="s3" dir="ltr">3</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Spyglass</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">8</td>
							<td class="s3" dir="ltr">1</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Throwing Axes</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">60</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">20</td>
							<td class="blue" dir="ltr">162</td>
							<td class="s3" dir="ltr">74</td>
							<td class="s3" dir="ltr">142</td>
							<td class="s3" dir="ltr">45</td>
							<td class="s3" dir="ltr">35</td>
							<td class="s3" dir="ltr">20</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Throwing Knives</td>
							<td class="freezebar-cell"/>
							<td class="s3" dir="ltr">40</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">20</td>
							<td class="s3" dir="ltr">130</td>
							<td class="s3" dir="ltr">22</td>
							<td class="s3" dir="ltr">52</td>
							<td class="s3" dir="ltr">66</td>
							<td class="s3" dir="ltr">35</td>
							<td class="s3" dir="ltr">30</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
					</tbody>
				</table>
				<table class ="pancake" align="center"><tr><td>*Blue indicates high enough damage to defeat a player in one hit.</td></tr></table>
		</div>
	`;
	loadPage(title, file);
}

function loadLevPage() {
	var title = "Levering";
	var file = `
	<div class="filter-input5"><input type="text" id="myInput" onkeyup="filter()" placeholder="Search for names.."></div>
		<div class="ritz grid-container" dir="ltr" align="center">
				<table class="waffle" id="table" cellspacing="0" cellpadding="0">
					<thead>
						<tr>
							<th id="1920185124C0" style="width:100px;" class="column-headers-background" ondblclick="sortTable(0)">Name</th>
							<th id="1920185124C1" style="width:200px;" class="column-headers-background" ondblclick="sortTableNum(1)">Base Rate of Fire (rpm)</th>
							<th id="1920185124C2" style="width:250px;" class="column-headers-background" ondblclick="sortTableNum(2)">Rate of Fire with Levering (rpm)</th>
							<th id="1920185124C3" style="width:250px;" class="column-headers-background" ondblclick="sortTableNum(3)">Diameter of Hip-fire Cross-hair (px)</th>
						</tr>
					</thead>
					<tbody>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield 1887 Terminus</td>
							<td class="s3" dir="ltr">36</td>
							<td class="s3" dir="ltr">100</td>
							<td class="s3" dir="ltr">116</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield 1887 Terminus Handcannon</td>
							<td class="s3" dir="ltr">36</td>
							<td class="s3" dir="ltr">100</td>
							<td class="s3" dir="ltr">152</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873 </td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">144</td>
							<td class="green" dir="ltr">42</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873 Aperture</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">144</td>
							<td class="green" dir="ltr">42</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873 Musket Bayonet</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">109</td>
							<td class="green" dir="ltr">42</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873 Swift</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">144</td>
							<td class="green" dir="ltr">42</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873 Talon</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">144</td>
							<td class="green" dir="ltr">42</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">144</td>
							<td class="green" dir="ltr">42</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C Marksman</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">144</td>
							<td class="s3" dir="ltr">54</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C Silencer</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">144</td>
							<td class="s3" dir="ltr">54</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C Vandal</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">150</td>
							<td class="s3" dir="ltr">82</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C Vandal Deadeye</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">150</td>
							<td class="s3" dir="ltr">82</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1873C Vandal Striker</td>
							<td class="s3" dir="ltr">50</td>
							<td class="s3" dir="ltr">150</td>
							<td class="s3" dir="ltr">110</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1876 Centennial</td>
							<td class="s3" dir="ltr">39</td>
							<td class="s3" dir="ltr">109</td>
							<td class="s3" dir="ltr">80</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Winfield M1876 Centennial Sniper</td>
							<td class="s3" dir="ltr">39</td>
							<td class="s3" dir="ltr">109</td>
							<td class="s3" dir="ltr">104</td>
						</tr>
					</tbody>
				</table>
				<table class ="pancake" align="center"><tr><td>*Green Indicates the most accurate weapon to use levering with.</td></tr></table>
		</div>
	`;
	loadPage(title, file);
}

function loadFanPage() {
	var title = "Fanning";
	var file = `
	<div class="filter-input4"><input type="text" id="myInput" onkeyup="filter()" placeholder="Search for names.."></div>
		<div class="ritz grid-container" dir="ltr">
				<table class="waffle" id="table" cellspacing="0" cellpadding="0" align="center">
					<thead>
						<tr>
							<th id="1927763945C0" style="width:100px;" class="column-headers-background" ondblclick="sortTable(0)">Name</th>
							<th id="1927763945C1" style="width:200px;" class="column-headers-background" ondblclick="sortTableNum(1)">Base Rate of Fire (rpm)</th>
							<th id="1927763945C2" style="width:250px;" class="column-headers-background" ondblclick="sortTableNum(2)">Rate of Fire with Fanning (rpm)</th>
							<th id="1927763945C3" style="width:250px;" class="column-headers-background" ondblclick="sortTableNum(3)">Diameter of Hip-fire Cross-hair (px)</th>
						</tr>
					</thead>
					<tbody>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Caldwell Conversion Chain Pistol</td>
							<td class="s3" dir="ltr">44</td>
							<td class="s3" dir="ltr">313</td>
							<td class="s3" dir="ltr">86</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Caldwell Conversion Pistol</td>
							<td class="s3" dir="ltr">44</td>
							<td class="s3" dir="ltr">360</td>
							<td class="s3" dir="ltr">62</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Caldwell Conversion Uppercut</td>
							<td class="s3" dir="ltr">40</td>
							<td class="s3" dir="ltr">225</td>
							<td class="s3" dir="ltr">78</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Caldwell Pax</td>  
							<td class="s3" dir="ltr">46</td>			
							<td class="s3" dir="ltr">277</td>
							<td class="s3" dir="ltr">66</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Caldwell Pax Claw</td>	
							<td class="s3" dir="ltr">46</td>				
							<td class="s3" dir="ltr">277</td>
							<td class="s3" dir="ltr">66</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Lemat Mark II</td>
							<td class="s3" dir="ltr">42</td>
							<td class="s3" dir="ltr">300</td>
							<td class="s3" dir="ltr">78</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895</td>
							<td class="s3" dir="ltr">40</td>
							<td class="s3" dir="ltr">360</td>
							<td class="s3" dir="ltr">78</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895 Silencer</td>
							<td class="s3" dir="ltr">40</td>
							<td class="s3" dir="ltr">360</td>
							<td class="s3" dir="ltr">86</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03</td>
							<td class="s3" dir="ltr">41</td>
							<td class="s3" dir="ltr">257</td>
							<td class="green" dir="ltr">60</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03 Brawler</td>
							<td class="s3" dir="ltr">41</td>
							<td class="s3" dir="ltr">257</td>
							<td class="s3" dir="ltr">100</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03 Spitfire</td>
							<td class="s3" dir="ltr">77</td>
							<td class="s3" dir="ltr">257</td>
							<td class="s3" dir="ltr">100</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03 Swift</td>
							<td class="s3" dir="ltr">41</td>
							<td class="s3" dir="ltr">257</td>
							<td class="green" dir="ltr">60</td>
						</tr>
					</tbody>
				</table>
				<table class ="pancake" align="center"><tr><td>*Green Indicates the most accurate weapon to use fanning with.</td></tr></table>
		</div>
	`;
	loadPage(title, file);
}

function loadDualPage() {
	var title = "Dual-Wielding";
	var file = `
	<div class="filter-input6"><input type="text" id="myInput" onkeyup="filter()" placeholder="Search for names.."></div>
		<div class="ritz grid-container" dir="ltr" align="center">
				<table class="waffle" id="table" cellspacing="0" cellpadding="0">
					<thead>
						<tr>
							<th id="1696482834C0" style="width:100px;" class="column-headers-background" ondblclick="sortTable(0)">Name</th>
							<th id="1696482834C1" style="width:250px;" class="column-headers-background" ondblclick="sortTableNum(1)">Diameter of Hip-fire Cross-hair (px)</th>
							<th id="1696482834C2" style="width:350px;" class="column-headers-background" ondblclick="sortTableNum(2)">Diameter of Zoomed in Hip-Fire Cross-hair (px)</th>
						</tr>
					</thead>
					<tbody>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Bornheim No. 3</td>
							<td class="s3" dir="ltr">62</td>
							<td class="s3" dir="ltr">54</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Bornheim No. 3 Extended</td>
							<td class="s3" dir="ltr">62</td>
							<td class="s3" dir="ltr">54</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Caldwell 92 New Army</td>
							<td class="s3" dir="ltr">82</td>
							<td class="s3" dir="ltr">70</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Caldwell Conversion Chain Pistol</td>
							<td class="s3" dir="ltr">78</td>
							<td class="s3" dir="ltr">66</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Caldwell Conversion Pistol</td>
							<td class="s3" dir="ltr">58</td>
							<td class="s3" dir="ltr">50</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Caldwell Conversion Uppercut</td>
							<td class="s3" dir="ltr">72</td>
							<td class="s3" dir="ltr">60</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Caldwell Pax</td>
							<td class="s3" dir="ltr">62</td>
							<td class="s3" dir="ltr">52</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Caldwell Pax Claw</td>
							<td class="s3" dir="ltr">62</td>
							<td class="s3" dir="ltr">52</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Dolch 96</td>
							<td class="s3" dir="ltr">64</td>
							<td class="s3" dir="ltr">56</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Lemat Mark II</td>
							<td class="s3" dir="ltr">72</td>
							<td class="s3" dir="ltr">60</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Lemat Mark II (Shotgun)</td>
							<td class="s3" dir="ltr">184</td>
							<td class="s3" dir="ltr">334</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895</td>
							<td class="s3" dir="ltr">72</td>
							<td class="s3" dir="ltr">60</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895 Officer</td>
							<td class="s3" dir="ltr">86</td>
							<td class="s3" dir="ltr">72</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895 Officer Brawler</td>
							<td class="s3" dir="ltr">86</td>
							<td class="s3" dir="ltr">72</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Nagant M1895 Silencer</td>
							<td class="s3" dir="ltr">78</td>
							<td class="s3" dir="ltr">66</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03</td>
							<td class="green" dir="ltr">56</td>
							<td class="green" dir="ltr">46</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03 Brawler</td>
							<td class="s3" dir="ltr">90</td>
							<td class="s3" dir="ltr">74</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03 Spitfire</td>
							<td class="s3" dir="ltr">92</td>
							<td class="s3" dir="ltr">76</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Scottfield Model 03 Swift</td>
							<td class="green" dir="ltr">56</td>
							<td class="green" dir="ltr">46</td>
						</tr>
					</tbody>
				</table>
				<table class ="pancake" align="center"><tr><td>*Green Indicates the most accurate weapon to dual-wield.</td></tr></table>
		</div>
	`;
	loadPage(title, file);
}

function loadConsPage() {
	var title = "Consumables";
	var file = `
	<div class="filter-input3"><input type="text" id="myInput" onkeyup="filter()" placeholder="Search for names.."></div>
		<div class="ritz grid-container" dir="ltr">
				<table class="waffle" id="table" cellspacing="0" cellpadding="0" align="center">
					<thead>
						<tr>
							<th id="124359175C0" style="width:141px;" class="column-headers-background" ondblclick="sortTable(0)">Name</th>
							<th class="freezebar-cell frozen-column-cell freezebar-vertical-handle"/>
							<th id="124359175C1" style="width:100px;" class="column-headers-background" ondblclick="sortTableNum(2)">Cost</th>
							<th id="124359175C2" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(3)">Bloodline Rank</th>
							<th id="124359175C3" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(4)">Effect Radius (m)</th>
							<th id="124359175C4" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(5)">Effect Duration (s)</th>
							<th id="124359175C5" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(6)">Effective Range (m)</th>
							<th id="124359175C6" style="width:100px;" class="column-headers-background" ondblclick="sortTableNum(7)">Damage</th>
							<th id="124359175C7" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(8)">Light Melee Damage</th>
							<th id="124359175C8" style="width:150px;" class="column-headers-background" ondblclick="sortTableNum(9)">Heavy Melee Damage</th>
							<th id="124359175C9" style="width:100px;" class="column-headers-background" ondblclick="sortTableNum(10)">Fuse Time (s)</th>
						</tr>
					</thead>
					<tbody>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Ammo Box</td>
							<td class="freezebar-cell"/>
							<td class="s3">65</td>
							<td class="s3" dir="ltr">74</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">31</td>
							<td class="s3" dir="ltr">67</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Antidote Shot</td>
							<td class="freezebar-cell"/>
							<td class="s3">80</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">3600</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Big Dynamite Bundle</td>
							<td class="freezebar-cell"/>
							<td class="s3">110</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">10</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">10</td>
							<td class="blue" dir="ltr">3000</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">5.0833</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Chaos Bomb</td>
							<td class="freezebar-cell"/>
							<td class="s3">15</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">15</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">9.15</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Concertina Bomb</td>
							<td class="freezebar-cell"/>
							<td class="s3">48</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">2</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">10</td>
							<td class="blue" dir="ltr">200</td>
							<td class="s3" dir="ltr">52</td>
							<td class="s3" dir="ltr">112</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Dynamite Bundle</td>
							<td class="freezebar-cell"/>
							<td class="s3">75</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">9</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">15</td>
							<td class="blue" dir="ltr">1500</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">5.0833</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Dynamite Stick</td>
							<td class="freezebar-cell"/>
							<td class="s3">18</td>
							<td class="s3" dir="ltr">6</td>
							<td class="s3" dir="ltr">8</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">20</td>
							<td class="blue" dir="ltr">750</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">5.2</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Fire Bomb</td>
							<td class="freezebar-cell"/>
							<td class="s3">30</td>
							<td class="s3" dir="ltr">1</td>
							<td class="s3" dir="ltr">2</td>
							<td class="s3" dir="ltr">120</td>
							<td class="s3" dir="ltr">20</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Flash Bomb</td>
							<td class="freezebar-cell"/>
							<td class="s3">47</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">8</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">20</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Frag Bomb</td>
							<td class="freezebar-cell"/>
							<td class="s3">103</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">10</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">20</td>
							<td class="blue" dir="ltr">150</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">5.0667</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Hellfire Bomb</td>
							<td class="freezebar-cell"/>
							<td class="s3">70</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">6</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">20</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Hive Bomb</td>
							<td class="freezebar-cell"/>
							<td class="s3">40</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">30</td>
							<td class="s3" dir="ltr">20</td>
							<td class="s3" dir="ltr">4</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Liquid Fire Bomb</td>
							<td class="freezebar-cell"/>
							<td class="s3">35</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">2</td>
							<td class="s3" dir="ltr">120</td>
							<td class="s3" dir="ltr">20</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Poison Bomb</td>
							<td class="freezebar-cell"/>
							<td class="s3">25</td>
							<td class="s3" dir="ltr">48</td>
							<td class="s3" dir="ltr">3</td>
							<td class="s3" dir="ltr">300</td>
							<td class="s3" dir="ltr">20</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Regen Shot</td>
							<td class="freezebar-cell"/>
							<td class="s3">110</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">600</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Stalker Beetle</td>
							<td class="freezebar-cell"/>
							<td class="s3">45</td>
							<td class="s3" dir="ltr">15</td>
							<td class="s3" dir="ltr">5</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">15</td>
							<td class="s3" dir="ltr">5</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Stamina Shot</td>
							<td class="freezebar-cell"/>
							<td class="s3">100</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">600</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Sticky Bomb</td>
							<td class="freezebar-cell"/>
							<td class="s3">64</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">8</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">15</td>
							<td class="blue" dir="ltr">1000</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">9.0833</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Vitality Shot</td>
							<td class="freezebar-cell"/>
							<td class="s3">85</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Waxed Dynamite Stick</td>
							<td class="freezebar-cell"/>
							<td class="s3">24</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">8</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">20</td>
							<td class="blue" dir="ltr">750</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="s3" dir="ltr">5.1833</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Weak Antidote Shot</td>
							<td class="freezebar-cell"/>
							<td class="s3">50</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">1800</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Weak Regen Shot</td>
							<td class="freezebar-cell"/>
							<td class="s3">65</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">300</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Weak Stamina Shot</td>
							<td class="freezebar-cell"/>
							<td class="s3">60</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">300</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
						<tr style="height: 20px">
							 
							<td class="s0" dir="ltr">Weak Vitality Shot</td>
							<td class="freezebar-cell"/>
							<td class="s3">20</td>
							<td class="s3" dir="ltr">1</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="grey" dir="ltr">N/A</td>
							<td class="s3" dir="ltr">13</td>
							<td class="s3" dir="ltr">27</td>
							<td class="grey" dir="ltr">N/A</td>
						</tr>
					</tbody>
				</table>
				<table class ="pancake" align="center"><tr><td>*Blue indicates high enough damage to defeat a player in one hit.</td></tr></table>
		</div>
	`;
	loadPage(title, file);
}

function loadMapPage() {
	var title = "Maps";
	var file = `
	<div class="map-grid-container" align="center">
			<h2>Stillwater Bayou</h2>
			<div class="stillwater"><img src="resources/map1.png" alt="Stillwater Bayou Map"></div>
			<h2>Lawson Delta</h2>
			<div class="lawson"><img src="resources/map2.png" alt="Lawson Delta Map"></div>
			<h2>DeSalle</h2>
			<div class="desalle"><img src="resources/map3.png" alt="DeSalle Map"></div>	
		</div>
	`;
	loadPage(title, file);
}

function loadDamagePage() {
	var title = "Damage";
	var file = `
	<p>
		Every attack has two multipliers applied to it.  One based on how faraway you are from the target (damage drop-off), and one based on where you hit the target (locational damage).
		<br>These charts showoff the damage drop-off multipliers and the locational damage multipliers.
		</p>
		<div>
			<form name="form1" id="form1" action="/action_page.php">
				Weapons: <select name="weapon" id="weapon">
					<option value="">Select</option>
					<option value="130 , long">Berthier Mle 1892</option>
					<option value="130 , long">Berthier Mle 1893 Deadeye</option>
					<option value="130 , long">Berthier Mle 1893 Riposte</option>
					<option value="150 , special">Bomb Lance</option>
					<option value="74 , compact pistol">Bornheim No. 3</option>
					<option value="74 , compact pistol">Bornheim No. 3 Extended</option>
					<option value="80 , compact">Bornheim No. 3 Match</option>
					<option value="97 , compact pistol">Caldwell 92 New Army</option>
					<option value="104 , compact pistol">Caldwell Conversion Chain Pistol</option>
					<option value="104 , compact pistol">Caldwell Conversion Pistol</option>
					<option value="130 , long pistol">	Caldwell Conversion Uppercut</option>
					<option value="110 , medium pistol">Caldwell Pax</option>
					<option value="110 , medium pistol">Caldwell Pax Claw</option>
					<option value="175 , shotgun">Caldwell Rival 78</option>
					<option value="85 , shotgun">Caldwell Rival 78 Handcannon</option>
					<option value="special">Calvary Saber</option>
					<option value="special">Combat Axe</option>
					<option value="260 , special">Crossbow</option>
					<option value="186 , shotgun">Crown &amp; King Auto-5</option>
					<option value="97 , medium pistol">Dolch 96</option>
					<option value="97 , medium pistol">Dolch 96 Precision</option>
					<option value="195 , special">Hand Crossbow</option>
					<option value="227 , special">Hunting Bow</option>
					<option value="132 , long">Lebel 1886</option>
					<option value="132 , long">Lebel 1886 Aperture</option>
					<option value="132 , long">Lebel 1886 Marksman</option>
					<option value="132 , long">Lebel 1886 Talon</option>
					<option value="97 , compact pistol">Lemat Mark II</option>
					<option value="special">Machete</option>
					<option value="143 , long">Martini-Henry IC1</option>
					<option value="143 , long">Martini-Henry IC1 Deadeye</option>
					<option value="143 , long">Martini-Henry IC1 Marksman</option>
					<option value="143 , long">Martini-Henry IC1 Riposte</option>
					<option value="136 , long">Mosin-Nagant M1891</option>
					<option value="136 , long">Mosin-Nagant M1891 Avtomat</option>
					<option value="136 , long">Mosin-Nagant M1891 Bayonet</option>
					<option value="136 , long">Mosin-Nagant M1891 Obrez</option>
					<option value="136 , long">Mosin-Nagant M1891 Obrez Drum</option>
					<option value="136 , long">Mosin-Nagant M1891 Obrez Mace</option>
					<option value="136 , long">Mosin-Nagant M1891 Sniper</option>
					<option value="91 , compact pistol">Nagant M1895</option>
					<option value="91 , compact pistol">Nagant M1895 Deadeye</option>
					<option value="91 , compact pistol">Nagant M1895 Officer</option>
					<option value="91 , compact pistol">Nagant M1895 Officer Brawler</option>
					<option value="104 , compact pistol">Nagant M1895 Officer Carbine</option>
					<option value="104 , compact pistol">Nagant M1895 Officer Carbine Deadeye</option>
					<option value="91 , compact pistol">Nagant M1895 Precision</option>
					<option value="91 , compact silenced pistol">Nagant M1895 Silencer</option>
					<option value="364 , nitro">Nitro Express Rifle</option>
					<option value="200 , shotgun">Romero 77</option>
					<option value="200 , shotgun">Romero 77 Alamo</option>
					<option value="140, shotgun">Romero 77 Handcannon</option>
					<option value="140, shotgun">Romero 77 Hatchet</option>
					<option value="200 , shotgun">Romero 77 Talon</option>
					<option value="107 , medium pistol">Scottfield Model 03</option>
					<option value="107 , medium pistol">Scottfield Model 03 Brawler</option>
					<option value="107 , medium pistol">Scottfield Model 03 Precision</option>
					<option value="107 , medium pistol">Scottfield Model 03 Spitfire</option>
					<option value="107 , medium pistol">Scottfield Model 03 Swift</option>
					<option value="149 , long">Sparks LRR</option>
					<option value="149 , long silenced">Sparks LRR Silencer</option>
					<option value="149 , long">Sparks LRR Sniper</option>
					<option value="149 , long pistol">Sparks Pistol</option>
					<option value="185 , shotgun">Specter 1882</option>
					<option value="175 , shotgun">Specter 1882 Bayonet</option>
					<option value="85 , shotgun">Specter 1882 Compact</option>
					<option value="132 , medium">Springfield 1866</option>
					<option value="132 , medium">Springfield 1866 Compact</option>
					<option value="132 , medium">Springfield 1866 Compact Deadeye</option>
					<option value="132 , medium">Springfield 1866 Compact Striker</option>
					<option value="132 , medium">Springfield 1866 Marksman</option>
					<option value="130 , medium">Vetterli 71 Karabiner</option>
					<option value="130 , medium">Vetterli 71 Karabiner Bayonet</option>
					<option value="130 , medium">Vetterli 71 Karabiner Deadeye</option>
					<option value="130 , medium">Vetterli 71 Karabiner Marksman</option>
					<option value="130 , medium silenced">Vetterli 71 Karabiner Silencer</option>
					<option value="185 , shotgun">Winfield 1887 Terminus</option>
					<option value="75 , shotgun">Winfield 1887 Terminus Handcannon</option>
					<option value="180 , shotgun">Winfield 1893 Slate</option>
					<option value="110 , winnie">Winfield M1873 </option>
					<option value="110 , winnie">Winfield M1873 Aperture</option>
					<option value="110 , winnie">Winfield M1873 Musket Bayonet</option>
					<option value="110 , winnie">Winfield M1873 Swift</option>
					<option value="110 , winnie">Winfield M1873 Talon</option>
					<option value="110 , winnie">Winfield M1873C</option>
					<option value="110 , winnie">Winfield M1873C Marksman</option>
					<option value="110 , winnie silenced">Winfield M1873C Silencer</option>
					<option value="110 , winnie">Winfield M1873C Vandal</option>
					<option value="110 , winnie">Winfield M1873C Vandal Deadeye</option>
					<option value="110 , winnie">Winfield M1873C Vandal Striker</option>
					<option value="123 , medium">Winfield M1876 Centennial</option>
					<option value="123 , medium">Winfield M1876 Centennial Sniper</option>
				</select>	
			</form>
		</div>
		<div>
			<form id="form2" action="/action_page.php" method="get">
				Hit Location: <select id="location">
					<option value="">Select</option>
					<option value="head">Head</option>
					<option value="upperTorso">Upper Torso</option>
					<option value="lowerTorso">Lower Torso</option>
					<option value="arm">Arm</option>
					<option value="leg">Leg</option>
				</select>
			</form>
		</div>
		<div>
			<form id="form3" action="/action_page.php" method="get">
				Custom Ammo: <select id="ammo">
					<option value="">Basic</option>
					<option value="fmj">Full Metal Jacket</option>
					<option value="spitzer">Spitzer</option>
				</select>
			</form>
		</div>
		<div>
			<form id="form4" action="/action_page.php" method="get">
				<label for="distance">Distance (m)</label>
				<input type="range" id="distance" name="distance" min="10" max="500" value="10">
				<p>Value: <input type="text" id="demo"></input></p>
			</form>
		</div>
		<div>
			<input type="button" onclick="calculateDamage()" value="Calculate">
			<p>Damage Result: <span id="result"></span></p>
		</div>
	`;
	loadPage(title, file);
	var slider = document.getElementById("distance");
	var output = document.getElementById("demo");
	output.value = slider.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
	output.value = this.value;
    }
	output.oninput = function() {
		slider.value = output.value;
	}
}

function loadShotgunsPage() {
	var title = "Wiki";
	var file = `
	<div class="map-grid-container" align="center">
			<div class="shotgun"><img src="resources/Shotgun Spread.jpeg" alt="Shotgun Spread comparison image"></div>
		</div>
	`;
	loadPage(title, file);
}

function playHmmm() {
	const myAudioElement = document.querySelector("audio");
	if (!myAudioElement.paused) {
		myAudioElement.pause();
	} else {
		myAudioElement.volume = 0.1;
		myAudioElement.play();
	}
}

function calculateDamage() {
	var d, c, damageResult, selectedValue, Damage, Distance, WeaponType, LocationType, customAmmoType;
		selectedValue = $("#weapon option:selected").val();
		const wStore = selectedValue.split(" , ");
		Damage = wStore[0];
		LocationType = $("#location option:selected").val();
		Distance = $("#demo").val();
		customAmmoType = $("#ammo option:selected").val();
		WeaponType = wStore[1] + customAmmoType;

	if (WeaponType == "compact" || WeaponType == "winnie") {
		if(Distance <= 20) {d = 1;}
				else if((Distance > 20 && Distance <= 30)) {d = 1-0.014*(Distance-20);}
				else if((Distance > 30 && Distance <= 50)) {d = 0.86-0.014*(Distance-30);}
				else if((Distance > 50 && Distance <= 70)) {d = 0.58-0.0075*(Distance-50);}
				else if((Distance > 70 && Distance <= 100)) {d = 0.43-0.005333333*(Distance-70);}
				else if((Distance > 100 && Distance <= 250)) {d = 0.27-0.000333333*(Distance-100);}
				else if(Distance > 250) {d = 0.1;}

	} else if (WeaponType == "compact pistol") {
		if(Distance <= 20) {d = 1;}
		else if((Distance > 20 && Distance <= 30)) {d = 1-0.016*(Distance-20);}
		else if((Distance > 30 && Distance <= 50)) {d = 0.84-0.0155*(Distance-30);}
		else if((Distance > 50 && Distance <= 70)) {d = 0.53-0.008*(Distance-50);}
		else if((Distance > 70 && Distance <= 100)) {d = 0.37-0.004*(Distance-70);}
		else if((Distance > 100 && Distance <= 250)) {d = 0.25-0.0002*(Distance-100);}
		else if(Distance > 250) {d = 0.1;}

	} else if (WeaponType == "compact silenced" || WeaponType == "winnie silenced") {
		if(Distance <= 10) {d = 1;}
		else if((Distance > 10 && Distance <= 25)) {d = 1-0.006666667*(Distance-10);}
		else if((Distance > 25 && Distance <= 40)) {d = 0.9-0.02*(Distance-25);}
		else if((Distance > 40 && Distance <= 60)) {d = 0.6-0.0115*(Distance-40);}
		else if((Distance > 60 && Distance <= 100)) {d = 0.37-0.0035*(Distance-60);}
		else if((Distance > 100 && Distance <= 250)) {d = 0.23-0.0002*(Distance-100);}
		else if(Distance > 250) {d = 0.1;}

	} else if (WeaponType == "compact silenced pistol") {
		if(Distance <= 10) {d = 1;}
		else if((Distance > 10 && Distance <= 30)) {d = 1-0.015333333*(Distance-10);}
		else if((Distance > 30 && Distance <= 50)) {d = 0.77-0.025333333*(Distance-30);}
		else if((Distance > 50 && Distance <= 70)) {d = 0.39-0.0055*(Distance-50);}
		else if((Distance > 70 && Distance <= 100)) {d = 0.28-0.00175*(Distance-70);}
		else if((Distance > 100 && Distance <= 250)) {d = 0.21-6.666666666666E-5*(Distance-100);}
		else if(Distance > 250) {d = 0.1;}

	} else if (WeaponType == "compactfmj") {
		if(Distance <= 30) {d = 1;}
		else if(Distance > 30 && Distance <= 100) {d = 196*(Math.E**(-1.75*Distance));}
		else if(Distance > 100 && Distance <= 150) {d = 0.28;}
		else if(Distance > 150 && Distance <= 200) {d = 0.205;}
		else if(Distance > 200 && Distance <= 250) {d = 0.145;}
		else if(Distance > 250 && Distance <= 300) {d = 0.07;}
		else if(Distance > 300) {d = 0;}

	} else if (WeaponType == "medium") {
		if(Distance <= 20) {d = 1;}
		else if(AmmoType == "Medium" && (Distance > 20 && Distance <= 40)) {d = 1-0.01*(Distance-20);}
		else if(AmmoType == "Medium" && (Distance > 40 && Distance <= 60)) {d = 0.8-0.008*(Distance-40);}
		else if(AmmoType == "Medium" && (Distance > 60 && Distance <= 80)) {d = 0.64-0.01*(Distance-60);}
		else if(AmmoType == "Medium" && (Distance > 80 && Distance <= 100)) {d = 0.44-0.0035*(Distance-80);}
		else if(AmmoType == "Medium" && (Distance > 100 && Distance <= 350)) {d = 0.37-0.00068*(Distance-100);}
		else if(AmmoType == "Medium" && Distance > 350) {d = 0;}

	} else if (WeaponType == "medium pistol") { //dolch uses medium pistol
		if(Distance <= 20) {d = 1;}
		else if((Distance > 20 && Distance <= 30)) {d = 1-0.011*(Distance-20);}
		else if((Distance > 30 && Distance <= 40)) {d = 0.89-0.013*(Distance-30);}
		else if((Distance > 40 && Distance <= 50)) {d = 0.76-0.016*(Distance-40);}
		else if((Distance > 50 && Distance <= 70)) {d = 0.6-0.008*(Distance-50);}
		else if((Distance > 70 && Distance <= 100)) {d = 0.44-0.005333333*(Distance-70);}
		else if((Distance > 100 && Distance <= 350)) {d = 0.28-0.00054*(Distance-100);}
		else if(Distance > 350) {d = 0;}

	} else if (WeaponType == "medium silenced") {
		if(Distance <= 20) {d = 1;}
		else if(Distance > 20 && Distance <= 100) {d = 1.36*(Math.E**(-0.0148*Distance));}
		else if(Distance > 100 && Distance <= 150) {d = 0.26;}
		else if(Distance > 150 && Distance <= 200) {d = 0.225;}
		else if(Distance > 200 && Distance <= 250) {d = 0.175;}
		else if(Distance > 250 && Distance <= 300) {d = 0.14;}
		else if(Distance > 300 && Distance <= 350) {d = 0.1;}
		else if(Distance > 350) {d = 0;}

	} else if (WeaponType == "mediumfmj") {
		if(Distance <= 40) {d = 1;}
		else if((Distance > 40 && Distance <= 60)) {d = 1-0.01*(Distance-40);}
		else if((Distance > 60 && Distance <= 80)) {d = 0.8-0.008*(Distance-60);}
		else if((Distance > 80 && Distance <= 100)) {d = 0.64-0.007*(Distance-80);}
		else if((Distance > 100 && Distance <= 120)) {d = 0.5-0.005*(Distance-100);}
		else if((Distance > 120 && Distance <= 350)) {d = 0.4-0.00087*(Distance-120);}
		else if(Distance > 350) {d = 0;}

	} else if (WeaponType == "long") {
		if(Distance <= 40) {d = 1;}
		else if((Distance > 40 && Distance <= 60)) {d = 1-0.005*(Distance-40);}
		else if((Distance > 60 && Distance <= 80)) {d = 0.9-0.0075*(Distance-60);}
		else if((Distance > 80 && Distance <= 100)) {d = 0.75-0.0065*(Distance-80);}
		else if((Distance > 100 && Distance <= 500)) {d = 0.62-0.00118*(Distance-100);}

	} else if (WeaponType == "long pistol") {
		if(Distance <= 30) {d = 1;}
		else if((Distance > 30 && Distance <= 45)) {d = 1-0.006*(Distance-30);}
		else if((Distance > 45 && Distance <= 70)) {d = 0.91-0.0096*(Distance-45);}
		else if((Distance > 70 && Distance <= 90)) {d = 0.67-0.006*(Distance-70);}
		else if((Distance > 90 && Distance <= 110)) {d = 0.55-0.003*(Distance-90);}
		else if((Distance > 110 && Distance <= 130)) {d = 0.49-0.007*(Distance-110);}
		else if((Distance > 130 && Distance <= 500)) {d = 0.35-0.00068*(Distance-130);}

	} else if (WeaponType == "long silenced") {
		if(Distance <= 30) {d = 1;}
		else if((Distance > 30 && Distance <= 40)) {d = 1-0.009*(Distance-30);}
		else if((Distance > 40 && Distance <= 60)) {d = 0.91-0.008*(Distance-40);}
		else if((Distance > 60 && Distance <= 80)) {d = 0.75-0.0145*(Distance-60);}
		else if((Distance > 80 && Distance <= 100)) {d = 0.46-0.005*(Distance-80);}
		else if((Distance > 100 && Distance <= 250)) {d = 0.36-0.000666667*(Distance-100);}
		else if((Distance > 250 && Distance <= 500)) {d = 0.26-0.00044*(Distance-250);}

	} else if (WeaponType == "longspitzer") {
		if(Distance <= 40) {d = 1;}
		else if((Distance > 40 && Distance <= 60)) {d = 1-0.005*(Distance-40);}
		else if((Distance > 60 && Distance <= 80)) {d = 0.9-0.0075*(Distance-60);}
		else if((Distance > 80 && Distance <= 100)) {d = 0.75-0.0065*(Distance-80);}
		else if((Distance > 100 && Distance <= 270)) {d = 0.62-0.00065*(Distance-100);}
		else if((Distance > 270 && Distance <= 500)) {d = 0.51-0.00135*(Distance-270);}

	} else if (WeaponType == "longfmj") {
		if(Distance <= 60) {d = 1;}
		else if((Distance > 60 && Distance <= 80)) {d = 1-0.005*(Distance-60);}
		else if((Distance > 80 && Distance <= 100)) {d = 0.9-0.0075*(Distance-80);}
		else if((Distance > 100 && Distance <= 120)) {d = 0.75-0.0065*(Distance-100);}
		else if((Distance > 120 && Distance <= 500)) {d = 0.62-0.00124*(Distance-120);}

	} else if (WeaponType == "long silencedfmj") {
		if(Distance <= 40) {d = 1;}
		else if((Distance > 40 && Distance <= 50)) {d = 1-0.009*(Distance-40);}
		else if((Distance > 50 && Distance <= 70)) {d = 0.91-0.008*(Distance-50);}
		else if((Distance > 70 && Distance <= 90)) {d = 0.75-0.0145*(Distance-70);}
		else if((Distance > 90 && Distance <= 110)) {d = 0.46-0.005*(Distance-90);}
		else if((Distance > 110 && Distance <= 250)) {d = 0.36-0.00071*(Distance-110);}
		else if((Distance > 250 && Distance <= 500)) {d = 0.26-0.00044*(Distance-250);}

	} else if (WeaponType == "nitro") {
		if(Distance <= 10) {d = 1;}
		else if((Distance > 10 && Distance <= 25)) {d = 1-0.023333333*(Distance-10);}
		else if((Distance > 25 && Distance <= 40)) {d = 0.65-0.014666667*(Distance-25);}
		else if((Distance > 40 && Distance <= 70)) {d = 0.43-0.006*(Distance-40);}
		else if((Distance > 70 && Distance <= 100)) {d = 0.25-0.001666667*(Distance-70);}
		else if((Distance > 100 && Distance <= 250)) {d = 0.2;}
		else if(Distance > 250) {d = 0.1;}

	} else if (WeaponType == "shotgun") {
		if(Distance <= 5) {d = 1;}
		else if(Distance > 5 && Distance <= 40) {d = 1.81*(Math.E**(-0.0763*Distance));}
		else if(Distance > 40) {d = 0;}
	}
	if (LocationType == "head") {
		if (WeaponType.indexOf("winnie") > -1) {c = 6.99760719512;}
		else if (WeaponType.indexOf("compact") > -1) {c = 6;} 
		else if (WeaponType.indexOf("medium") > -1) {c = 5;}
		else if (WeaponType.indexOf("long") > -1) {c = 4;}
		else if (WeaponType.indexOf("shotgun") > -1) {c = 1.5;}
		else if (WeaponType.indexOf("nitro") > -1) {c = 2;}
		
	} else if (LocationType == "upperTorso") {
		if (WeaponType.indexOf("compact") > -1) {c = 1.3;}
		else if (WeaponType.indexOf("medium") > -1) {c = 1.3;}
		else if (WeaponType.indexOf("long") > -1) {c = 1.3;}
		else if (WeaponType.indexOf("shotgun") > -1) {c = 1.3;}
		else if (WeaponType.indexOf("nitro") > -1) {c = 0.52;}

	} else if (LocationType == "lowerTorso") {
		if (WeaponType.indexOf("compact") > -1) {c = 1;}
		else if (WeaponType.indexOf("medium") > -1) {c = 1;}
		else if (WeaponType.indexOf("long") > -1) {c = 1;}
		else if (WeaponType.indexOf("shotgun") > -1) {c = 1.2;}
		else if (WeaponType.indexOf("nitro") > -1) {c = 0.52;}

	} else if (LocationType == "arm") {
		if (WeaponType.indexOf("compact") > -1) {c = 0.8;}
		else if (WeaponType.indexOf("medium") > -1) {c = 0.8;}
		else if (WeaponType.indexOf("long") > -1) {c = 0.8;}
		else if (WeaponType.indexOf("shotgun") > -1) {c = 0.8;}
		else if (WeaponType.indexOf("nitro") > -1) {c = 0.25;}

	} else if (LocationType == "leg") {
		if (WeaponType.indexOf("compact") > -1) {c = 0.7;}
		else if (WeaponType.indexOf("medium") > -1) {c = 0.7;}
		else if (WeaponType.indexOf("long") > -1) {c = 0.7;}
		else if (WeaponType.indexOf("shotgun") > -1) {c = 0.5;}
		else if (WeaponType.indexOf("nitro") > -1) {c = 0.2;}

	}
	damageResult = Damage/1.3*d*c;
	document.getElementById("result").innerHTML = damageResult.toFixed(0);
}

