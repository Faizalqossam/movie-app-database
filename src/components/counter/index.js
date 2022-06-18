import { useEffect, useState } from "react";

function Counter(){
    const [angka, setAngka] = useState(0)

    function addAngka(){
        setAngka(angka + 1)
        // console.log(angka);
    }

    function updateDOM(){
        console.log("Lifecycle: Dimount");

        //melakukan side effect: mengakses DOM
        document.title = `Hasil: ${angka}`
    }

    //useEffect
    useEffect(updateDOM ,[angka])

    console.log("Lifecycle: Dirender");

    return (
        <div>
            <p>Hasil: {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    )
}

export default Counter;