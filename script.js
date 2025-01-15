function insert_Row() {
    //Write your code here
	  let table = document.getElementById('sampleTable');

    // insert a new row at the top of the table
    let newRow = table.insertRow(0);

    // insert cells into the new row
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);

    // set the text of the new cells
    newCell1.textContent = 'New Cell1';
    newCell2.textContent = 'New Cell2';
  
}
