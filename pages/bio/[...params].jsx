import React from "react";
import { useRouter } from "next/router";

const Bio = () => {
    const router = useRouter();

    const { params } = router.query
    console.log(params)

    return (
        <div>`individual Bio ${params}`</div>
    )
}


export default Bio;