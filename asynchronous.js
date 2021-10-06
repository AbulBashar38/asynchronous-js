// callback function

const takeOrder =(customer, callback)=>{
    console.log(`take order for ${customer}`);
    callback(customer);
}
const processOrder = (customer,callback)=>{
    console.log(`processing order for ${customer}`);
    setTimeout(()=>{
        console.log('cooking completed');
        console.log('order processed for customer 1');
        callback(customer)
    }, 3000)
};
const completedOrder =(customer)=>{
    console.log(`completed order for ${customer}`);
}
takeOrder('customer1',(customer)=>{
    processOrder(customer,(customer)=>{
        completedOrder(customer)
    })
})


// Promise

const hasMeeting = false;
const meeting = new Promise((resolve, reject) =>{
    if (!hasMeeting) {
        const newMeeting ={
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10.00 pm'
        }
        resolve(newMeeting)
    }else{
        reject(new Error('Meeting already scheduled'))
    }
})

const addToCalendar = (newMeeting) => {
    const calendar = `${newMeeting.name} has a scheduled on ${newMeeting.location} at ${newMeeting.time}`
    return Promise.resolve(calendar)
}

meeting
    .then(addToCalendar)
    .then((res)=>{console.log(res);})
    .catch((err)=>{console.log(err.message)})


// async await



const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const newMeeting = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10.00 pm'
        }
        resolve(newMeeting)
    } else {
        reject(new Error('Meeting already scheduled'))
    }
})

const addToCalendar = (newMeeting) => {
    const calendar = `${newMeeting.name} has a scheduled on ${newMeeting.location} at ${newMeeting.time}`
    return Promise.resolve(calendar)
}


async function myMeeting() {
    try {
        const newMeeting = await meeting;
        const calendar = await addToCalendar(newMeeting);
        console.log(calendar);
    } catch {
        console.log('something wrong');
    }

}
myMeeting();