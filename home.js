                     
            <!-- <div class="content">
                <h1>Enter the year to find the football scores</h1><br>
                <input type="text" name="yearid" id="yearid"> <br>
                
                <div>
                    <button type="button">ENTER</button>
                    
                </div>
            </div> -->
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="style sheet" href="style.css">
            </head>
            <body>
                <style>
                *{
                    margin:0;
                    padding:0;
                    font-family:sans-serif;
                }
                .banner{
            width:100%;
            height:100vh;
            background-image: linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url("https://www.impressiveinteriordesign.com/wp-content/uploads/2015/05/Modern-House-Interior-Design-Ideas-7.jpg");
            background-size: cover;
            background-position: center;
            }
            .navbar{
            width:85%;
            margin:auto;
            padding:35px 0;
            display:flex;
            align-items:center;
            justify-content:space-between;
            }
            .navbar{
            text-decoration: none;
            color:#fff;
            }
            .logo{
            width:120px;
            cursor:pointer;
            }
            .navbar ul li{
            list-style:none;
            display:inline-block;
            margin:0 20px;
            position:relative;
            }
            .navbar ul li a{
            text-decoration: none;
            color:#fff;
            text-transform: uppercase;
            }
            .navbar ul li::after{
            content: '';
            width:0;
            height: 2px;
            background:#009688;
            display: block;
            margin: auto;
            transition: 0.5s;
            }
            .navbar ul li:hover::after{
            width:100%;
            }
            .content{
            width:100%;
            position:absolute;
            top:50%;
            transform: translateY(-50%);
            text-align: center;
            color:#fff;
            }
            .content h1{
            font-size:60px;
            margin-top:80px;
            }
            .content p{
            margin: 20px auto;
            font-weight: 100;
            line-height: 25px;
            }
            button{
            width:200px;
            padding:15px 0;
            background-color:black ;
            text-align:center;
            color:#fff;
            margin:20px 10px;
            border-radius:25px;
            border-color:#009688 ;
            font-weight:bold;
            cursor: pointer;
            transition: width 2s;
            transition-timing-function: linear;
            }
            body {
                font-family: sans-serif;	
                background-image: url(bg.jpg);
                background-repeat: no-repeat;
                overflow: hidden;
                background-size: cover;
            }
            
            .container {
                width: 500px;
                margin:7% auto;
                border-radius: 16px;
                background-color: rgba(0,0,0,0.1);
                box-shadow: 0 0 17px #333;
            }
            
            .header {
                text-align: center;
                padding-top: 50px;
            }
            
            .header h1 {
                color: #333;
                font-size: 35px;
                margin-bottom: 50px;
            }
            
            .main {
                text-align: center;
            }
            
            .main input, button {
                width: 200px;
                height: 30px;
                border:none;
                outline: none;
                padding-left: 30px;
                box-sizing: border-box;
                font-size: 15px;
                color: #333;
                margin-bottom: 30px;
            }
            
            .main button {
                padding-left: 0;
                background-color: #83acf1;
                letter-spacing: 1px;
                font-weight: bold;
                margin-bottom: 70px;
            }
            
            .main button:hover {
                box-shadow: 2px 2px 5px #555;
                background-color: #7799d4;
            }
            .main input:hover {
                box-shadow: 2px 2px 5px #555;
                background-color: #ddd;
            }
            
            .main span {
                position: relative;
            }
            
            .main i {
                position: absolute;
                left: 15px;
                color: #333;
                font-size: 16px;
                top: 2px;
            }
            </style>
             
                <div class="banner">
                    <div class="navbar">
                        <h1>WEATHER</h1>
                        <!-- <ul>
                            <li><a href="/signup">HOME</a></li>
                            <li><a href="/signup">SIGNUP</a></li>
                            <li><a href="/signin">SIGNIN</a></li>
                        </ul> -->
                        <ul>
                            <li>
                                <Link to="/signup">HOME</Link>
                            </li>
                            <li>
                                <Link to="/signup">SIGNUP</Link>
                            </li>
                            <li>
                                <Link to="/signin">SIGNIN</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="container">
                            <div class="header">
                                <h1>WEATHER</h1>
                            </div>
                            <div class="main">
                                <form action="/weathersubmit" method="GET">
                                    <div class="form-group">
                                        <div class="input-group" >                             
                                            <span class="input-group-text" id="addon-wrapping"><i class="bi bi-geo-alt-fill" style="color: darkblue;"></i></span>
                                                <input type="text" class="form-control" placeholder="Enter the location" name="location">
                                         </div>                         
                                    </div><br>
                                    <div align="center"> 
                                    <input type="submit" value="Weather details" class="btn btn-primary">
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
               
                
               
                
                
            </body>
            </html>
            
       
