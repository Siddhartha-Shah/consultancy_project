import { useEffect, useState } from "react"
import Chart from 'chart.js/auto';

function Example() {
  var d2 = new Date();
  var  d1 = new Date(new Date().setDate(d2.getDate() - 30));


  const[date,setDate]=useState([d1,d2])
const click=()=>{
setDate([document.getElementById("date1").value,document.getElementById("date2").value])
}
  useEffect(() => {

   setDate([document.getElementById("date1"),document.getElementById("date2")])
    var datas = [];
    var ctx = document.getElementById('myChart').getContext('2d');
    var dateArray = [];
    while (date[0] <= date[1]) {
      dateArray.push(new Date(date[0]))
      date[0].setDate(date[0].getDate() + 1)
    }

    for (let index = 0; index < dateArray.length; index++) {

      dateArray[index] = dateArray[index].getFullYear() + "-" + (dateArray[index].getMonth()+1) + "-" + dateArray[index].getDate();

    }

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dateArray,
        datasets: [{
          data: datas,
          label: "Students enrolled",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }
        ]
      },
    });
  }, [])
  return (
    <>
      <b style={{ marginLeft: "10px" }}>Starting Date:</b>
      <input type="date" style={{ padding: "4px" }} id="date1" value={date[0]}></input>
      <b style={{ marginLeft: "40px" }}>End Date:</b>
      <input type="date" style={{ padding: "4px" }} id="date2"  value={date[1]}></input>
      <button  value="submit" style={{ padding: "5px", fontWeight: "bold", marginLeft: "40px" }} onClick={click} >
      click</button>

      {/* line chart */}

      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default Example;