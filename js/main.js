

document
    .getElementById('shop-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        alert("Board Update Successfully")
        
        let innerValue= getIdByInnerText('taskAssignedNumber');
        let sub= innerValue-1;
        document.getElementById('taskAssignedNumber').innerText= sub;

        // complete task
        let completeTask= getIdByInnerText('completeTask');
        let sum= completeTask+1;
        document.getElementById('completeTask').innerText= sum;

        let innerText= addedValue('title', 'transactionContainer');



        this.disabled= true;
        
    })


document
    .getElementById('cloudSync-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        alert("Board Update Successfully")
        
        let innerValue= getIdByInnerText('taskAssignedNumber');
        let sub= innerValue-1;
        document.getElementById('taskAssignedNumber').innerText= sub;

        // complete task
        let completeTask= getIdByInnerText('completeTask');
        let sum= completeTask+1;
        document.getElementById('completeTask').innerText= sum;
        // container
        let innerText= addedValue('cloud-title','transactionContainer');


        this.disabled= true;
        
    })



// 3rd
document
    .getElementById('swiftpay-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        alert("Board Update Successfully")
        
        let innerValue= getIdByInnerText('taskAssignedNumber');
        let sub= innerValue-1;
        document.getElementById('taskAssignedNumber').innerText= sub;

        // complete task
        let completeTask= getIdByInnerText('completeTask');
        let sum= completeTask+1;
        document.getElementById('completeTask').innerText= sum;
        // container
        let innerText= addedValue('swiftpay-title','transactionContainer');


        this.disabled= true;
        
    })

// 4th
document
    .getElementById('meta-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        alert("Board Update Successfully")
        
        let innerValue= getIdByInnerText('taskAssignedNumber');
        let sub= innerValue-1;
        document.getElementById('taskAssignedNumber').innerText= sub;

        // complete task
        let completeTask= getIdByInnerText('completeTask');
        let sum= completeTask+1;
        document.getElementById('completeTask').innerText= sum;
        // container
        let innerText= addedValue('meta-title','transactionContainer');


        this.disabled= true;
        
    })

// 5th
document
    .getElementById('google-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        alert("Board Update Successfully")
        
        let innerValue= getIdByInnerText('taskAssignedNumber');
        let sub= innerValue-1;
        document.getElementById('taskAssignedNumber').innerText= sub;

        // complete task
        let completeTask= getIdByInnerText('completeTask');
        let sum= completeTask+1;
        document.getElementById('completeTask').innerText= sum;
        // container
        let innerText= addedValue('google-title','transactionContainer');


        this.disabled= true;
        
    })


// 6th
document
    .getElementById('rounded-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        alert("Board Update Successfully")
        
        let innerValue= getIdByInnerText('taskAssignedNumber');
        let sub= innerValue-1;
        document.getElementById('taskAssignedNumber').innerText= sub;

        // complete task
        let completeTask= getIdByInnerText('completeTask');
        let sum= completeTask+1;
        document.getElementById('completeTask').innerText= sum;
        // container
        let innerText= addedValue('rounded-title','transactionContainer');


        this.disabled= true;
        
    })
    
// clear histry
document
    .getElementById('clearHistory-Btn')
    .addEventListener('click', function(){
        document.getElementById('transactionContainer').innerText= ''
    })
