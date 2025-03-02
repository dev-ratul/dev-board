
function checkCompletion() {
    let remainingTasks = parseInt(document.getElementById('taskAssignedNumber').innerText);
    if (remainingTasks === 0) {
        alert("Congratulations! All tasks are completed.");
    }
}

function handleButtonClick(buttonId, titleId) {
    document.getElementById(buttonId).addEventListener('click', function (event) {
        event.preventDefault();
        // 1st
        alert("Board Update Successfully");
        // 2nd
        let innerValue = getIdByInnerText('taskAssignedNumber');
        let sub = innerValue - 1;
        document.getElementById('taskAssignedNumber').innerText = sub;

        // 3rd
        let completeTask = getIdByInnerText('completeTask');
        let sum = completeTask + 1;
        document.getElementById('completeTask').innerText = sum;

        // container update
        let innerText = addedValue(titleId, 'transactionContainer');

        this.disabled = true; 

        checkCompletion();
    });
}


handleButtonClick('shop-btn', 'title');
handleButtonClick('cloudSync-btn', 'cloud-title');
handleButtonClick('swiftpay-btn', 'swiftpay-title');
handleButtonClick('meta-btn', 'meta-title');
handleButtonClick('google-btn', 'google-title');
handleButtonClick('rounded-btn', 'rounded-title');
    


    
// clear histry
document
    .getElementById('clearHistory-Btn')
    .addEventListener('click', function(){
        document.getElementById('transactionContainer').innerText= ''
    })


