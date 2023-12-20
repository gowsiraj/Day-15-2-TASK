
function submitForm() {
   
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;
    var pincode = document.getElementById('pincode').value;
    var selectedFoods = [];

   
    var foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    foodCheckboxes.forEach(function (checkbox) {
        selectedFoods.push(checkbox.value);
    });

   
    var tableBody = document.getElementById('tableBody');

   
    var newRow = tableBody.insertRow();

    
    var cells = [firstName, lastName, address, gender, country, state, pincode, selectedFoods.join(', ')];
    for (var i = 0; i < cells.length; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = cells[i];

        document.getElementById("myForm").reset();
    }
}
