import React from 'react'
import ScrollableCalendar from 'react-calender-horizontal/lib/ScrollableCalendar'
const Calender = () => {
    const getdate = (date) => {
        console.log(date);
   
   
     }
  return (
    <div className='mt-4'>
     
      <ScrollableCalendar
      onDateSelect={(date) => getdate(date)}
       prevButtonColor="#ff5733"
       nextButtonColor="#33c1ff"
       daysInWeek={14}
       canSelectPastDates={false}
       maxWidth="900px"
      />
    </div>
  )
}

export default Calender
// import React from 'react'
// import ScrollableCalendar from 'react-calender-horizontal/lib/ScrollableCalendar'
// const Calender = () => {

//   return (
//     <div>
//       dsdf
//       <ScrollableCalendar
//       onDateSelect={(date) => console.log(date)}
//        prevButtonColor="#ff5733"
//        nextButtonColor="#33c1ff"
//        daysInWeek={14}
//        canSelectPastDates={false}
//        maxWidth="900px"
//       />
//     </div>
//   )
// }

// export default Calender
