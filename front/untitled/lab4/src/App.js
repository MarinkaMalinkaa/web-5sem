import {BrowserRouter, Routes, Route} from "react-router-dom";
import FullVoucher from "./FullVoucher";
import Voucher from "./Voucher";


function App() {

    const voucher  = [
        {   id: 1,
            themes: 'Золотая кнопка',
            date: '01.06 - 12.06 2022 года',
            duration: '13 дней',
            description: 'Медиа-холдинги',
            price: '45700 рублей'
        },
        {
            id: 2,
            themes: 'Парадоксы',
            date: '14.06 - 28.06 2022 года',
            duration: '15 дней',
            description: 'Этого не может быть!',
            price: '52300 рублей'
        },
        {
            id: 3,
            themes: 'Назад в СССР',
            date: '30.06 - 15.07 2022 года',
            duration: '16 дней',
            description: 'Всегда будь готов',
            price: '65900 рублей'
        },
    ]

    return (
        <div className="App">
            <BrowserRouter basename="/">

                <Routes>
                    <Route path="/" element={<Voucher voucher={voucher}/>}/>
                    <Route path="/:themes" element={<FullVoucher voucher={voucher}/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default App;