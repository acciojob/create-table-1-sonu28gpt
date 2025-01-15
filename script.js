function insert_Row() {
    //Write your code here
	  let table=document.getElementById('sampleTable');
		// let tr=document.createElement('tr');
		let content='<tr><td>New Cell1</td> <td>New Cell2</td><tr/>';
		table.innerHTML=content+table.innerHTML;
  
}
