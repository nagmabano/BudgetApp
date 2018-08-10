// Module Pattern




// BUDGET CONTROLLER
var budgetController = (function(){
    // some code
    
    
})();




// UI CONTROLLER
var UIController = (function(){
    // some code
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        btnType: '.add__btn'
    }
    
    return{
        getInput: function(){
            return{
             type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
             description: document.querySelector(DOMStrings.inputDescription).value,
             value: document.querySelector(DOMStrings.inputValue).value,
            };
        },
        
        getDOMString: function(){
            return DOMStrings;
        }
    };
    
    
})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){
    // some code
    
    var setupEventListeners = function(){
        
         var DOM = UICtrl.getDOMString();
        
        document.querySelector(DOM.btnType).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event){
         
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();             
             }
        
        });
                
    };
    
    
    var ctrlAddItem = function(){
        
         // 1. Get the field input data
        
        var input = UICtrl.getInput();
        console.log(input);
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        
        
    };
    
        return{
            init: function(){
                console.log("Application initialized");
                setupEventListeners();
            }
        };
    
    
    
    
    
    
})(budgetController,UIController);
    
    
    controller.init();