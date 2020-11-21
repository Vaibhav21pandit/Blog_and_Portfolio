import React,{useState} from 'react';
import style from './project.module.less';

const AboutTile = (props) => {
  const {
    img, textH4, textH3, alt, height, width,url
  } = props;
  const [Color,setColor]=useState('black')
  return (
    <div className={style.aboutTile} >
      <div className={style.aboutBlock} >
        <img
          src={`../${img}`}
          height={height || 64}
          width={width || 64}
          alt={alt || ''}
        />
      </div>
      <div className={`textCenter ${style.mrTp26PX}`}>
        <h2><a onMouseOverCapture={()=>setColor('gray')} style={{color:Color,fontWeight:100}} href={url}>{ textH4 || ''}</a></h2>
        <p style={{fontWeight:'bold',marginRight:3,marginLeft:3}}>{textH3 || '' }</p>
      </div>
    </div>
  );
};

export default AboutTile;
// 
// 