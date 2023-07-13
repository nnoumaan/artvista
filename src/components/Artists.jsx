import React from 'react'
import CardTemplate from './CardTemplate'

const Artists = () => {

  const data = [{
    id:'mfhussain',
    name:'M F Hussain',
    src:'https://images.herzindagi.info/image/2019/Jun/mf-hussain.jpg',
    dob:'19-Sep-1915'
  },{
    id:'jjohns',
    name:'Jasper Johns',
    src:'https://uploads4.wikiart.org/images/jasper-johns.jpg!Portrait.jpg',
    dob:'15-May-1930'
  },
  {
    id:'mchagall',
    name:'Marc Chagall',
    src:'https://blog.singulart.com/wp-content/uploads/2020/02/andre-kertesz-marc-chagall-in-his-studio-paris-1933.jpg',
    dob:'12-Apr-1924'
  },
  {
    id:'fnsouza',
    name:'F. N. Souza',
    src:'https://sothebys-com.brightspotcdn.com/41/53/5b4eeb61454a867abba90559dc10/francis-newton-souza.jpg',
    dob:'15-May-1930'
  },
  {
    id:'shraza',
    name:'S. H. Raza',
    src:'https://im.rediff.com/money/2010/jun/11raza2.jpg',
    dob:'22-Feb-1922'
  },
  {
    id:'tmehta',
    name:'Tyeb Mehta',
    src:'https://jnaf.org/wp-content/uploads/2017/08/Tyeb-Mehta.jpg',
    dob:'26-Jul-1925'
  },{
    id:'sgujral',
    name:'Satish Gujral',
    src:'https://jnaf.org/wp-content/uploads/2017/08/Satish-Gujral_.jpg',
    dob:'25-Dec-1925'
  },
  {
    id:'picasso',
    name:'Pablo Picasso',
    src:'https://miro.medium.com/v2/resize:fit:700/1*759mfuqRxFwqcpA1QVsnUA.jpeg',
    dob:'25-Oct-1881'
  },
  {
    id:'gbraque',
    name:'Georges Braque',
    src:'https://www.artguide.org/georges-braque/Georges%20Braque.jpg',
    dob:'13-May-1882'
  },
  {
    id:'jpollock',
    name:'Jackson Pollock',
    src:'https://youareanartist.files.wordpress.com/2011/01/jacksonpollock1.jpg',
    dob:'28-Jan-1912'
  },






]


  return (
    <div className='artistHome'>
      <div className='artistTitle'><span className='divider'></span><h1>20th Century Popular Artist's </h1><span className='divider'></span></div>
      <div className='artistCon'>{data.map(i=>{
        return <CardTemplate value={i}/>
      })}</div>
    </div>
  )
}

export default Artists