import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [youthName, setYouthName] = useState('')
  const [position, setPosition] = useState('KK Member')
  const [initial, setInit] = useState('!')
  const [idNum, setIdNum] = useState('')
  const [emergencyNum, setemergencyNum] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [expDate, setExpDate] = useState('Dec 31, 2022')
  const [word, setWord] = useState('')
  const [size, setSize] = useState(400)
  const [bgColor, setBgColor] = useState('ffffff')
  const [qrCode, setQrCode] = useState('')

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}${initial}&size=${size}x${size}&bgcolor=${bgColor}`
    )
  }, [word, size, bgColor])

  // Updating the input word when user
  // click on the generate button
  function handleClick () {
    // let date = awardDate.toString();
    // console.log(awardDate);
    let awardInfo = `YOUTH IDENTIFICATION QR CODE  %0A BRGY. GAPO%0A Fullname: ${youthName}%0A Designation: ${position}%0A Phone number: ${phoneNum}%0A In case of emergency: ${emergencyNum}%0A Birthdate: ${birthDay}%0A ID Number: ${idNum} %0A Expiration Date: ${expDate}`
    // let awardInfo = `
    setInit("");
    setWord(awardInfo)
    console.log(awardInfo);

  }

  return (
    <div className='App'>
      <div className='container text-center'>
      <h2>QR Code Generator for Gapo Youth</h2>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='input-box'>
              <div className='gen text-center'>
                <input
                  type='text'
                  onChange={e => {
                    setYouthName(`${e.target.value}`)
                  }}
                  placeholder='Fullname'
                />
                <br />
                <input
                  type='text'
                  onChange={e => {
                    setPhoneNum(e.target.value)
                  }}
                  placeholder='Phone Number'
                />
                <br />
                <input
                  type='text'
                  onChange={e => {
                    setemergencyNum(e.target.value)
                  }}
                  placeholder='In case of emergency'
                />
                <br />
                <input
                  type='text'
                  onChange={e => {
                    setPosition(e.target.value)
                  }}
                  placeholder='Position, KK Member by default'
                />
                <br />
                <input
                  type='date'
                  onChange={e => {
                    setBirthDay(e.target.value)
                  }}
                  placeholder='Birth date'
                />
                <br />
                <input
                  type='text'
                  onChange={e => {
                    setIdNum(e.target.value)
                  }}
                  placeholder='ID Number'
                />
                <br />
                <div className='text-center'>
                  <button className='button' onClick={handleClick}>
                    Generate
                  </button>
                </div>
              </div>
              <div className='extra'></div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='output-box'>
              <img src={qrCode} alt='' />
              <a href={qrCode} download='QRCode'>
                <button type='button'>Download</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
