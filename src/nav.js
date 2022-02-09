
// Nav Component
const Nav = (props) => {

    const { handleChange } = props;

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
           <div onClick={() => handleChange('Home')}>Home</div>
           <div onClick={() => handleChange('Cart')}>Cart</div>
        </div>
    )
}

export default Nav;