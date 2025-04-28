document.getElementById('loginBtn').addEventListener('click', function()
{
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
})
document.getElementById('signupbtn').addEventListener('click',function(){
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
});

function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}