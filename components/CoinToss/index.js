import {Component} from 'react'
import './index.css'

const heads = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tails = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResult: heads,
    headsCount: 0,
    tailsCount: 0,
  }

  changeCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latestHead = headsCount
    let latestTails = tailsCount

    if (toss === 0) {
      tossImg = heads
      latestHead += 1
    } else {
      tossImg = tails
      latestTails += 1
    }
    this.setState({
      tossResult: tossImg,
      headsCount: latestHead,
      tailsCount: latestTails,
    })
  }

  render() {
    const {tossResult, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img src={tossResult} alt="toss result" className="img1" />
          <button type="button" className="btn" onClick={this.changeCoin}>
            Toss Coin
          </button>
          <div className="total-container">
            <p className="para">Total:{totalCount}</p>
            <p className="para">Heads:{headsCount}</p>
            <p className="para">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
