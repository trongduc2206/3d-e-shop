import { AppRoutes } from "./AppRoutes"
import Footer from "./components/Footer"
import Header from './components/Header'

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div>
                <AppRoutes />
            </div>
            <Footer/>      
        </div>
    )
}

export default MainLayout