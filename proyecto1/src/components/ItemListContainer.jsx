const ItemListContainer = ({greeting}) => {

return    (
<div className="container">
    <div className="row">
        <div className="col text-center">
            <div className="alert alert-success" role="alert">
                <p>{greeting}</p>
            </div>
        </div>
    </div>
</div>
)

}

export default ItemListContainer;