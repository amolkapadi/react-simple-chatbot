import React, { useEffect } from 'react';
import axios from 'axios'
import qs from 'qs';
// import cors from 'cors';


function FetchData() {

    const data = qs.stringify({
        'client_id': '50f92e9d-dd96-4f09-ad2d-93d56bdea3e2',
        'grant_type': 'password',
        'username': 'anil.nakoti@one-solution.ai',
        'password': 'Tuc94145',
        'scope': 'openid'
    });


    const config = {
        method: 'post',
        url: 'https://login.microsoftonline.com/003e405d-315b-4632-8d13-60e0476ca234/oauth2/v2.0/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    }; 




    //hooks 
    // const [data,setData]=useState([]);


    //functions for getData
    // const getData= async ()=>{
    //    const res= await axios.get("https://jsonplaceholder.typicode.com/users");
    //    console.log(res);
    //    setData(res.data);
    // }

    //calling function 
    useEffect(() => {
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <>
            <h3>Welcome to Meeting</h3>
            {/* {data.map((result) => {
                return (
                    <p key={result.id}>{result.email}</p>
                )
            })} */}
        </>
    )
}

export default FetchData;