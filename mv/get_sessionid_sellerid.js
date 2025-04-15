
let session_id = new URLSearchParams(window.location.search).get('session_id');

let seller_id = new URLSearchParams(window.location.search).get('store_id');;
 
if(session_id && seller_id){

    console.log({session_id, seller_id});
    console.log({"body":{ "session_id": session_id , "seller_id":seller_id}});
    console.log(JSON.stringify({"body":{ "session_id": session_id , "seller_id":seller_id}}));

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var raw = JSON.stringify({"body":{ "session_id": session_id , "seller_id":seller_id}});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://elfunileiro-2-u3615.vm.elestio.app/webhook/abandono_tray", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
 
   /*  fetch('https://elfunileiro-u3615.vm.elestio.app/webhook/abandono_tray', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"body":{ "session_id": session_id , "seller_id":seller_id}})
    })
    .then(response =>  console.log(response.json()))
    .then(response => console.log(JSON.stringify(response))) */
} 
   
 