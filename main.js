const cal = document.getElementsByClassName('calculator')[0];
const process = [7,8,9,'+',4,5,6,'*',1,2,3,'-',0,'.','=','/'];
const input = document.querySelector('.processInput')
const clearButton= document.querySelector('.clear');

let Result = "" ;
class UI{ // Arayüz işlemleri için oluşturulan sınıf
    static CreateButtons(value){
        const button = document.createElement('button');
        button.className = "Button"
        button.innerHTML = value;
        cal.appendChild(button);
    }

    static Events(){
        cal.addEventListener('click',function(e){
            if(e.target.className == 'Button'){
                

                if(isNaN(e.target.textContent) == false){
                    Result+=e.target.textContent;
                    Calculator.WriteValue(e.target.textContent)
                    
                }
                else{
                    input.value = "";
                    if(e.target.textContent == "="){
                        input.value = Calculator.ResponseResult(Result);
                        Result = input.value;
                    }
                    else{
                        Result+=e.target.textContent;
                    }
                }

            }
        })
        clearButton.addEventListener('click',function(){ // Temizleme butonuna tıklanması
            input.value = "";
            Result = "";
        })
    }
    
}

class Calculator{
    constructor(processArray){
        
        for(let value of processArray){ // verilen array içindeki değerleri buton şeklinde ekrana döndürür
            UI.CreateButtons(value)
        }
    }
    static WriteValue = function(buttonvalue){ // tıklanılan butona ait textContent datası ilgili Result değişkenine eklenir

        let getInputValue = input.value;
        input.value = parseInt(getInputValue + "" +buttonvalue)
    }
    static ResponseResult(value){// Çağrıldığı anda Result değişken değerini alır ve sonucu ortaya koyar
        const res = eval(value);
        return res;
    }
}
const calculator = new Calculator(process);
if(calculator){
    UI.Events();
}
