   function showMessage() {
            const cnic = document.getElementById('cnic').value;
            if (cnic) {
                document.getElementById('message').style.display = 'block';
                document.getElementById('greenButton').style.display = 'block';
            } else {
                alert('براہ کرم اپنا CNIC درج کریں۔');
            }
        }
