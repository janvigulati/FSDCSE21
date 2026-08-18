const EventEmitter=require("events");
// const event=new EventEmitter();
//     event.on("greet",()=>{
//         console.log("this is event emitter");
//     })
//     event.emit("greet");


//     class MyEmitter extends EventEmitter{}
//     const event=new MyEmitter()
    class Button extends EventEmitter{
click(){
    console.log("/n call button click event");
     this.emit("click");

}

    mouseover(){
        console.log("/ncall button mouseoer event");
        this.emit("mouseover");
    }}