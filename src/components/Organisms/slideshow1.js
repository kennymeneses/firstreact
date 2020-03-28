
const rotacion=async(ch1,ch2,ch3,ch4)=>{

    let checks =[]
    checks[0]=ch1;
    checks[1]=ch2;
    checks[2]=ch3;
    checks[3]=ch4;
    
    
    const verificacion0=()=>{
        if(checks[0].checked==true)
        {
            // checks[1].checked=true
            setTimeout(() => {
                checks[1].checked=true
                
            }, 200);
        }
    }
    
    const verificacion1=()=>{
        if(checks[1].checked==true)
        {
            // checks[2].checked=true;
            setTimeout(() => {
                checks[2].checked=true
                
            }, 200);
        }
    }
    
    const verificacion2=()=>{
        if(checks[2].checked==true)
        {
            // checks[3].checked=true;
            setTimeout(() => {
                checks[3].checked=true
                
            }, 200);
        }
    }
    
    const verificacion3=()=>{
        if(checks[3].checked==true)
        {
            // checks[0].checkec=true
            setTimeout(() => {
                checks[0].checked=true
                
            }, 200);
            
        }
    }


    await verificacion0();
    await verificacion1();
    await verificacion2();
    await verificacion3();
    console.log('verificando')
}

const intervalo=(ch1,ch2,ch3,ch4)=>{
 
    setInterval(() => {
    

    rotacion(ch1,ch2,ch3,ch4)


    },6000)

}

export {intervalo}