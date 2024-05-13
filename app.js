const btn = document.getElementById("btn");
btn.addEventListener('click', function Ram(){
    const memory = navigator.deviceMemory;
    const mem = memory;
    const Ram = `This Device has a total of ${mem}Gb Ram`;
    alert(Ram);
    
});


