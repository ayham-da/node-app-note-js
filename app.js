// setInterval(function(){
//     var data = new Date();
//     var timeSeconds= data.getSeconds();
//     var minute = data.getMinutes();
//     var hours = data.getHours();
   
//          if(timeSeconds < 10){
//              timeSeconds = '0' + data.getSeconds()
//             }
//             if(minute < 10){
//                 minute = '0' + data.getMinutes()
//             }
//             if(hours ==0){
//                 hours = '0' + data.getHours()
//             }
//             console.log(hours + ':'+ minute + ':' + timeSeconds)
//         })


class Clock {
    constructor(times){
        setInterval(function(){
            //  this.data = new Date(Date.data());
            this.times = parseFloat() * 3600000
            this.data = new Date();
            this.timeSeconds= this.data.getSeconds();
            this.minute = this.data.getUTCMinutes();
            this.hours = this.data.getUTCHours() + times;
           
                 if(this.timeSeconds < 10){
                     this.timeSeconds = '0' + this.data.getSeconds();
                    }
                    if(this.minute < 10){
                        this.minute = '0' + this.data.getUTCMinutes();
                    }
                    if(this.hours ==0){
                        this.hours = '0' + this.data.getUTCHours();
                    }
                    console.log(`${this.hours}:${this.minute}:${this.timeSeconds}`)
                },1000);
    }
}
new Clock(3.5)