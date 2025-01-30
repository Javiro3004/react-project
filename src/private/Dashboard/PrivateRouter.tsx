import { Navigate, Route } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { RoutesWithNotFound } from "../../components/RoutesWithNotFound/RoutesWithNotFound"

export const PrivateRoter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to ="/dashboard" />} />
            <Route path="/dashboard" element= {<Dashboard />}></Route>
            <Route path="/about" element= {<Dashboard />}></Route>
        </RoutesWithNotFound>
    )
}