import './Login.css';

function Login() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);
        console.log(event.target.username);
        console.log(event.target.username.value);
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                Username:<input type='text' name='username' id='username' /><br />
                Password:<input type='password' name='password' id='password' /><br />
                <input type='submit' value='login' />
            </form>
        </div>
    );
}


export default Login;
