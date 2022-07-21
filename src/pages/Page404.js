import { Link } from "react-router-dom"

export default function Page404(){
    return (
        <div>
            <h1>404 Böyle bir sayfa bulunamadı.</h1>
            <Link to="/">Anasayfaya Dön</Link>
        </div>
    )
}