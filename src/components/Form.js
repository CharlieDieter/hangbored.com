import React from "react"
import axios from "axios"

export default () => {
  const [state, setState] = React.useState({})
  const ref = React.useRef(null)

  const handleSubmit = async e => {
    e.preventDefault()
    setState({ loading: true })

    axios
      .post("/api/emails", { email: ref.current.value })
      .then(s => {
        setState({
          loading: false,
          success: true,
        })
      })
      .catch(() => {
        setState({
          loading: false,
          err: true,
        })
      })
  }

  return (
    <form onSubmit={handleSubmit} className={state.err ? "err" : ""}>
      <div className="input-wrap">
        {state.success ? (
          <p className="success">
            Thanks for signing up! <br /> You'll be the first to know about the
            newness.
          </p>
        ) : (
          <>
            <input type="email" placeholder="Email" ref={ref} required />
            <button
              className={`btn rel ${state.loading ? "loading" : "loaded"}`}
              type="submit"
            >
              <div className="loader" />
              <span className="text">Sign up</span>
            </button>
          </>
        )}
      </div>
    </form>
  )
}
