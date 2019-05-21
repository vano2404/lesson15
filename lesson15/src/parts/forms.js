function forms() {
    function sendForm (elem){  
            elem.addEventListener('submit', function(event){
                event.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);
                function postData(data){
                    return new Promise(function(resolve,reject){
                        let request = new XMLHttpRequest();

                        request.open('POST','server.php');

                        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                        request.onreadystatechange = function(){
                            if(request.readyState < 4) {
                                resolve()
                                statusMessage.classList.add('loading');
                            }else if (request.readyState === 4 && request.status === 200){
                                resolve()
                                statusMessage.classList.remove('loading');
                                statusMessage.classList.add('success');
                            }else {
                                reject()
                                statusMessage.classList.add('failure');
                            }
                        }
                        request.send(data);
                    });    
                }
                function clearInput(){
                    for (let i =2; i < input.length;i++){
                    input[i].value = '';
                    }
                }
                postData(formData).then(() => statusMessage.innerHTML = mesagge.loadind).then(() => statusMessage.innerHTML = mesagge.success)
                .catch(() => statusMessage.innerHTML = mesagge.failure) 
                            .then(clearInput)      
            });
        }
    sendForm(form);
    sendForm(formContact);
module.exports = forms;
