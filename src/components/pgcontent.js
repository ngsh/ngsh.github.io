import React from 'react'
import styles from './pgcontent.module.css'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [], text: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.text.length) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items}></TodoList>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What need to be done?</label>
          <input
            id="new-todo" 
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}

export default () => (
  <div className={styles.pgcontent}>
    <h2>Hello, playground</h2>
    <p>
      東京書籍の高校数学教科書にかざすと立体が現れたりグラフ動かせたりするアプリ、その名も『教科書AR』。現在の教科書でもこれぐらいはできることを、一般の方は勿論、もしかしたら東京書籍を採択している高校数学教員でもわりと知らない気がする。
    </p>
    <p>
      🧠 Artificial Intelligence International Conference 2018 in Barcelona
      <br />
      📅  Nov 21-23 <br />
      🏅Awards to promote excellence <br />
      🎻 Social activities to network <br />
      🎙The best expert speeches <br />
      📊  Poster presentations <br />
      📝 Submit your abstract now! <br />
    </p>
    <hr />
    
    <TodoApp />
  </div>
)
