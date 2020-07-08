//Initialize Github from constructor
const github = new Github;
//Initialize UI from constructor
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;
    //if userText is not empty, Then 
    if (userText !== '') {
        //Make Http call 
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show Alert User not found
                    ui.showAlert('User not found', 'alert alert-danger');

                } else {
                    //Show Profile
                    ui.showProfile(data.profile);

                }
            })
    } else {
        //Clear profile
        ui.clearProfile();
    }
});