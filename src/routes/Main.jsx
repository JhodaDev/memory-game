import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from '../pages/Menu'
import { Start } from '../pages/Start'

export const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </BrowserRouter>
  )
}
