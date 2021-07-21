import React from 'react'

const UseState = () => {
    const [name, setName] = React.useState({firstName: '', lastName: ''});
    function handleInput(e) {
        setName({...name, firstName: e.target.value})
        // console.log(name.lastName)
        // console.log(name.firstName)
    }
    function handleInput2 (e) {
        setName({...name, lastName: e.target.value})
        // console.log(name.lastName)
        // console.log(name.firstName)
    }
    return (
        <div>
            <input onChange={handleInput}  type="text" />
            <input type="text" onChange={handleInput2}/>
            <h4>first name is: {name.firstName}</h4>
            <h4>LAST name is: {name.lastName}</h4>
        </div>
    )
}

export default UseState
