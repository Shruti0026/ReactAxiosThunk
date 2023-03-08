import { useEffect, useState } from "react";
import { GetDetailsById } from "../api/axiosRequest";


export default (props) => {
    const [detailsById, setDetailsById] = useState({})
    const GetDetailsByHooks = (requestId) => {
        return GetDetailsById(requestId).then((res) => {
            console.log('response data : ', res);
            setDetailsById(res)
        });

    };
    useEffect(() => {
        GetDetailsByHooks(props);
    }, []);
    return [detailsById]
}