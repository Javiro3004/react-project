import { ReactNode } from "react"
import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Login } from "./public/login/Login"
import { PrivateGuard } from "./guard/PrivateGuard"
import { PrivateRoter } from "./private/Dashboard/PrivateRouter"
import { RoutesWithNotFound } from "./components/RoutesWithNotFound/RoutesWithNotFound"

interface props {
    children : ReactNode
}

export const AppRouter = ({children}: props) =>{
    return(
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={"/login"}/>} / > 
                <Route path="/login" element={<Login />} / >
                <Route element={<PrivateGuard />}>
                    <Route path="/private/* " element={<PrivateRoter/>}  />
                </Route>
            </RoutesWithNotFound>
            {children}
        </BrowserRouter>
    )
}