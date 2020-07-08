//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;
    //if userText is not empty, Then 
    if (userText !== '') {
        console.log(userText);
    }
});