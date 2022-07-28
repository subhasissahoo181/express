
        function ajaxpost(){
            //GET FROM DATA
            var data = new FormData();
            data.append("server", document.getElementById("server").value);
            data.append("port-number", document.getElementById("port-number").value);
            data.append("UserName", document.getElementById("UserName").value);
            data.append("Password", document.getElementById("Password").value);
            data.append("upload_file", document.getElementById("upload_file").value);

            //AJAX REQUEST
            var xhr = new XMLHttpRequest();
            xhr.open("POST","insert.php"); //YOUR SERVER-SIDE SCRIPT
            xhr.onload = function () {
                alert(This.response);
            };
            xhr.send(data)


            //PREVENT FROM SUBMIT
            return false;
        }








        // function getTextBox(){
        //     var k = document.getElementById("server").value;
        //     var k = document.getElementById("port-number").value;
        //     var k = document.getElementById("UserName").value;
        //     var k = document.getElementById("Password").value;
        //     var k = document.getElementById("upload_file").value;

        //     alert(k)
        // }
    