// export const Apidata =[
//     {
//         status : "Seduled",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },
//     {
//         status : "Seduled",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },
//     {
//         status : "Seduled",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },
//     {
//         status : "Seduled",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },
//     {
//         status : "Seduled",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },
//     {
//         status : "Seduled",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },
//     {
//         status : "Completed",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },
//     {
//         status : "Seduled",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },
//     {
//         status : "Running",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },
//     {
//         status : "Running",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },
//     {
//         status : "Running",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },  {
//         status : "Queued",
//         startedOn :'16 july 2020 05:48',
//         id : 148,
//         project : "Demo project",
//         build : 'v1.0.7',
//         script : 'jenkins-2207',
//         Device: "Galaxy Pro",
//         User : "User Name"
//     },
// ]



export  const Apidata = async () => {
   const apicall = await fetch('https://6125d0b42d4e0d0017b6c499.mockapi.io/api/data/devices/Test');
   const data =  await apicall.json();
   return data;   
}

// Apidata().then((result)=>{
// console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })