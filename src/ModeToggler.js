function ModeToggler (){
  let darkModeOn=true;
  const darkMode=<h1>Dark Mode is on </h1>
  const lightMode=<h1>Light mode is on</h1>
  function handleClick(){
    darkModeOn=!darkModeOn;
  }
return(
  <div>
        {darkModeOn? darkMode:lightMode}

    <button onClick={handleClick}> switch Mode</button>
    
  </div>
)
}
export default ModeToggler;