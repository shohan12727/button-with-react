function Button () {
    const clickHandler = (e)  => e.target.textContent = "Clicked🥰" ;

    return(
        <button className="btn" onClick={(e) => clickHandler(e)}>
            Click me😋
        </button>
    )
}
   export default Button  