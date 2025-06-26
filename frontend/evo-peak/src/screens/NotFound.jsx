import "./NotFound.css";

const NotFound = () => {
    return (
    <>
    <div class="error-page d-flex align-items-center justify-content-center">
    <div class="error-container text-center p-4">
        <h1 class="error-code mb-0">404</h1>
        <h2 class="display-6 error-message mb-3">La página no existe</h2>
        <div class="d-flex justify-content-center gap-3">
            <a href="/inicio" class="btn btn-glass px-4 py-2">Inicio</a>
        </div>
    </div>
</div>
    </>
    );
};

export default NotFound;