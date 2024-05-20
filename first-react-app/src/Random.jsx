function Random(){
    let number = Math.random() * 100;

    return <h3 style={{background : 'yellow'}} >
        This is random numbers {Math.round(number)}
    </h3>
}

export default Random;