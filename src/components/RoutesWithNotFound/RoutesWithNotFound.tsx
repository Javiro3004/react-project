import { ReactNode } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

interface props {
    children : ReactNode
}

export const  RoutesWithNotFound = ({children}:props) => {
    return(
        <Routes>
            {children}
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<h1>upps.. pagina no enontrada </h1>} />
        </Routes>
    )
}