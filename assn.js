//window.onload=function(){
// document.getElementById("add").onclick=function(){
// 	var node=document.createElement("Li");
// 	node.setAttribute("id","ele");
// 	var text=document.getElementById("idea").value;
// 	var textNode=document.createTextNode(text);
// 	var buttonNode=document.createElement("BUTTON");
// 	var button=document.createTextNode("Edit");
// 	buttonNode.appendChild(button);
// 	buttonNode.onclick=function(){

// 	}
// 	var delBut=document.createElement("BUTTON");
// 	var delButNode=document.createTextNode("Delete");
// 	delBut.appendChild(delButNode);
// 	delBut.onclick=function(){
// 		var id=document.getElementById("ele");
// 		document.getElementById("list").removeChild(id);
// 	}
// 	node.appendChild(textNode);
// 	node.appendChild(buttonNode);
// 	node.appendChild(delBut);
// 	//var z=document.createElement('li');
// 	//var li="<li>"+ text +"</li>";
// 	//z.innerHTML=text;
// 	document.getElementById("list").appendChild(node);
// }
// }
function add_row(){
	var name=document.getElementById("idea").value;
	var table=document.getElementById("data_table");
	var table_len=(table.rows.length);
	window.console.log(table_len);
	for(var i=0;i<1000;i++){
		if(!localStorage['row'+i]){
			table_len=i;
			var row=table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+name+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
			window.console.log(row);
			var row_name="row"+table_len;
			document.getElementById("demo").innerHTML="Added";
			document.getElementById("add").value="Add";
			document.getElementById("idea").value="";
			// var jsonObj={
			// 	//window.console.log(row.innerHTML);
			// 	row_name:row
			// };
			localStorage['row'+table_len]=JSON.stringify(row);
			break;
		}
	}
}
function edit_row(no){
	var r =confirm("Are you Sure You want to Edit");
	if(r==true){
	document.getElementById("edit_button"+no).style.display="none";
	document.getElementById("add").style.display="block";
	var name=document.getElementById("name_row"+no).innerHTML;
	window.console.log(name);
	document.getElementById("idea").value=document.getElementById("name_row"+no).innerHTML;
	document.getElementById("row"+no).outerHTML="";
		localStorage.removeItem('row'+no);
		document.getElementById("add").value="Edit";
	}
	else{
		document.getElementById("demo").innerHTML="Your pressed cancel";
	}
	//var name_data=name.innerHTML;
	//name.innerHTML=""
}
function delete_row(no){
	
	var r=confirm("Are you sure you want to Delete");
	if(r==true){
		document.getElementById("row"+no).outerHTML="";
		localStorage.removeItem('row'+no);
		document.getElementById("demo").innerHTML="You have deleted";
	}
	else{
		document.getElementById("demo").innerHTML="You Pressed Cancel";
	}
}
function myFunction(){
	var input,filter,ul,li,i;
	input=document.getElementById('myInput');
	filter=input.value.toUpperCase();
	ul=document.getElementById("data_table");
	li=ul.getElementsByTagName("tr");
	for(i=0;i<li.length;i++){
		window.console.log(li[i].getElementsByTagName("td")[0].innerHTML);
		//window.console.log(li[i].innerHTML.getElementByTagName("td")+" hi ");
		//a=li[i].getElementsByTagName("td");
		a=li[i].getElementsByTagName("td")[0].innerHTML;
		//window.console.log(a.innerText);
		//txtVal=a.textContent || a.innerText;
		txtVal=a;
		if(txtVal.toUpperCase().indexOf(filter)>-1){
			li[i].style.display="";
		}
		else{
			li[i].style.display="none";
		}
	}
}
window.onload=function(){
	var table=document.getElementById("data_table");
	window.console.log(table.length);
	var table_len=localStorage.length;
	window.console.log(table_len);
	var j=0;
	for(var i=0;i<1000;i++){
		if(localStorage['row'+i]){
			window.console.log(localStorage['row'+i]);
			var row=JSON.parse(localStorage['row'+i]);
			//window.console.log(row.getElementsByTagName("td")[0].innerHTML);
			table.insertRow(j).outerHTML=row;
			j++;
		}
}
}