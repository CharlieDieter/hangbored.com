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
      .then(() => {
        setState({
          loading: false,
          success: true,
        })
      })
      .catch(e => {
        let err = "Something went wrong 😕"

        if (e.response?.data?.errmsg?.includes("duplicate key")) {
          err = "We already have that email 🙏"
        }
        setState({
          loading: false,
          err,
        })
      })
  }

  return (
    <form onSubmit={handleSubmit} className={state.err ? "err" : ""}>
      {state.success ? (
        <p className="success">
          Thanks for signing up! <br /> You'll be the first to know about the
          newness.
        </p>
      ) : (
        <div className="inner-form">
          <div className="input-wrap">
            <input
              type="email"
              placeholder="example@hi.com"
              ref={ref}
              required
              aria-label="email"
            />
            <button
              className={`btn rel ${state.loading ? "loading" : "loaded"}`}
              type="submit"
            >
              <div className="loader" />
              <span className="text">Sign up</span>
            </button>
          </div>
          <div>
            <p className="error">{state.err}</p>
          </div>
        </div>
      )}
    </form>
  )
}
