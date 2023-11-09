function otp()
{
    var x=Math.random()
    var x1=Math.random()*(9999-1000)+1000
    var otp=Math.floor(x1)
    console.log(otp)
    document.getElementById("output").innerHTML="Dear customer your otp is "+otp
} 