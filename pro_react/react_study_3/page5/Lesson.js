import React from 'react';

class Lesson extends React.Component {
  render() {
    return (
      <div className='lesson-card'>
        <div className='lesson-item'>
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        {/* モーダルを用意してください */}
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              {/* レッスンの名前を表示してください */}
              <h2>{this.props.name}</h2>
              
              {/* レッスンの紹介文を表示してください */}
              <p>{this.props.introduction}</p>
              
            </div>
            <button className='modal-close-btn'>
              とじる
            </button>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Lesson;
