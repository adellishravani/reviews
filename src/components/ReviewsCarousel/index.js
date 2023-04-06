import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  Increase = () => {
    const {id} = this.state
    const {reviewsList} = this.props

    if (id < reviewsList.length - 1) {
      this.setState(prevState => ({
        id: prevState.id + 1,
      }))
    }
  }

  decrease = () => {
    const {id} = this.state
    if (id > 0) {
      this.setState(prevState => ({
        id: prevState.id - 1,
      }))
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props

    return (
      <div className="bg">
        <h1 className="heading">Reviews</h1>
        <div className="imagesDiv">
          <button
            type="button"
            className="button"
            onClick={this.decrease}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div>
            <img
              src={reviewsList[id].imgUrl}
              alt={reviewsList[id].username}
              className="image"
            />
            <p className="name">{reviewsList[id].username}</p>
            <p className="para">{reviewsList[id].companyName}</p>
            <p className="para">{reviewsList[id].description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.Increase}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
