function Food()
{
    const food1 = "Lays";
    const food2 = "Watermelon";

    return(
        <ul>
            <li>Pizza</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food