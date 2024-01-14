console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve,reject) =>{
        setTimeout(()=>
            reject('ticket'), 3000)
    });

        //const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
        //const getCandy = new Promise((resolve, reject) => resolve(`candy`));
       // const addButter = new Promise((resolve, reject) => resolve(`butter`));
       // const getColdDrinks = new Promise((resolve, reject) => resolve(`coldDrinks`));

       // let ticket = await promiseWifeBringingTicks;

        //let [popcorn,candy,butter, coldDrinks] = await Promise.all([getPopcorn,getCandy,addButter,getColdDrinks])

        //console.log(`${popcorn}, ${candy}, ${butter}, ${coldDrinks}`)
        //return ticket; 
        let ticket
    try{
         ticket = await promiseWifeBringingTicks;
    } catch(e){
         ticket = 'sad face';
    }
    return ticket;

}


preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');