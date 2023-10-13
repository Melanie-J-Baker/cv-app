const ColorPicker = () => {
    const changeColor = (e) => {
        const root = document.querySelector(':root');
        root.style.setProperty('--header', e.target.value);

    }
    
    return (
        <div className="color-div">
            <label className="color" htmlFor="color">Header color:</label>
            <input
                onChange={changeColor}
                id="color"
                type="color"
                name="color"
            />
        </div>
    )
}

export default ColorPicker;