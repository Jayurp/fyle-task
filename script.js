document.addEventListener('DOMContentLoaded', function () {
    const contactUsBtn = document.getElementById('contactUsBtn');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.getElementById('closeBtn');
    const submitBtn = document.getElementById("submit-btn");
    const email = document.getElementById("email");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const agree = document.getElementById("agree");

    contactUsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        popupForm.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
        popupForm.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === popupForm) {
            popupForm.style.display = 'none';
        }
    });

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var emailAdd = email.value; 
        var fName = firstName.value;
        var lName = lastName.value;

        var data = 
        {
            "email": emailAdd,
            "firstName": fName,
            "lastName": lName
        };

        if(!agree.checked)
        {
            alert("You must agree to the terms and conditions");
        }
        else if(email.length == 0)
        {
            alert("Please enter your email address");
        }
        else if(fName.length == 0)
        {
            alert("Please enter your first name");
        }
        else if(lName.length == 0)
        {
            alert("Please enter your last name");
        }
        else
        {
            fetch('https://getform.io/f/warkmyrb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                else
                {
                    location.reload();
                }
                return response.json();
            });
        }
    });
});