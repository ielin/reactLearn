function List()
{
    const games = ["The Last Of Us", "Unharted: Lost Legacy", "Apex Legends"];
    games.sort();
    const listItems = games.map(game => <li>{game}</li>);
    return(
        <ol>
            {listItems}
        </ol>
    );
}

export default List