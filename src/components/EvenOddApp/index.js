import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: true, count: 0}

  isEvenFun = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Count Even' : 'Count Odd'
  }

  buttonClicked = () => {
    this.setState(prevState => ({isEven: !prevState.isEven}))
    const count1 = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: count1}))
  }

  render() {
    const {count} = this.state
    const pText = this.isEvenFun()
    return (
      <div className="bg-container">
        <div className="container">
          <h1>
            Count <span>{count}</span>
          </h1>
          <p>{pText}</p>
          <button className="button" type="button" onClick={this.buttonClicked}>
            increment
          </button>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
