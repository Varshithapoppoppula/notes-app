import "./App.css"

const App = () => {
  return (
  <div className="app-container">
    <form className="note-form">
      <input 
      placeholder="title"
      required
      ></input>
      <textarea
      placeholder="Content"
      rows={10} required
      ></textarea>
      <button type="submit">
        Add Note
      </button>
    </form>
  </div>)
}