const Producto = () => {
    const hamburguesa = {id:1, nombre:"Hamburguesa", descripcion:"El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada.", imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar", precio:6000}

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2 text-end">
                    <img src={hamburguesa.imagen} alt={hamburguesa.nombre} className="img-fluid" />
                </div>
                <div className="col-md-4 d-flex align-items-center">
                    <div>
                        <h1 className="fw-bold">{hamburguesa.nombre}</h1>
                        <p className="text-secondary">{hamburguesa.descripcion}</p>
                        <p><b>${hamburguesa.precio}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producto