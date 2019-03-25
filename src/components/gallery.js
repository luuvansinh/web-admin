import React from 'react'
import './style.less'

export default ({ data }) => {
  return (
    <div className="rc-gallery">
      <div className="rc-gallery-scroll-warp">
        <div className="rc-gallery-scroll-body">
          <div className="rc-gallery-scroll-content">
            {
              data.length ? data.map((item) => {
                return (
                  <div className="rc-gallery-item" key={item._id}>
                    <div className="item">
                      <img
                        className="cover"
                        src={item.url}
                        alt=""
                      />
                    </div>
                  </div>
                )
              }) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}
