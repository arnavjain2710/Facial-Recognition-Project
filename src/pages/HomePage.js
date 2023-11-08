import React from 'react'
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'

export default function HomePage() {
  const [date, setDate] = useState(new Date());
  const [img, setImg] = useState();
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };
  return (
    <>
      <h1 className='text-xl'>Submit your Photo here</h1>
      <form action="">
        <input type="text" class="form-control" placeholder="Course Name" />
        {/* <input type="password" class="form-control" placeholder="Photo" /> */}
        <br />
        <div className='app'>
          <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} />
          </div>
          <br/>
          <p >
            <span className='bold'>Selected Date:</span>{' '}
            {date.toDateString()}
          </p>
        </div>
        <br/>
        <div>
          <input type="file" onChange={onImageChange} />
          <img src={img} alt="" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
