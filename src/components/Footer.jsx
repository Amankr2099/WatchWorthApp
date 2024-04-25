import React from 'react'

export const Footer = () => {
    const date = new Date()
  return (
    <><footer className="text-center bg-body-tertiary">
          <div className="container pt-4">
              <section className="mb-4">
                  <a
                      data-mdb-ripple-init
                      className="btn btn-link btn-floating btn-lg text-body m-1"
                      href="#!"
                      role="button"
                      data-mdb-ripple-color="dark"
                  ><i className="fab fa-facebook-f"></i></a>

                  <a
                      data-mdb-ripple-init
                      className="btn btn-link btn-floating btn-lg text-body m-1"
                      href="#!"
                      role="button"
                      data-mdb-ripple-color="dark"
                  ><i className="fab fa-twitter"></i></a>

                  <a
                      data-mdb-ripple-init
                      className="btn btn-link btn-floating btn-lg text-body m-1"
                      href="#!"
                      role="button"
                      data-mdb-ripple-color="dark"
                  ><i className="fab fa-google"></i></a>

                  <a
                      data-mdb-ripple-init
                      className="btn btn-link btn-floating btn-lg text-body m-1"
                      href="#!"
                      role="button"
                      data-mdb-ripple-color="dark"
                  ><i className="fab fa-instagram"></i></a>

                  <a
                      data-mdb-ripple-init
                      className="btn btn-link btn-floating btn-lg text-body m-1"
                      href="#!"
                      role="button"
                      data-mdb-ripple-color="dark"
                  ><i className="fab fa-linkedin"></i></a>
                  <a
                      data-mdb-ripple-init
                      className="btn btn-link btn-floating btn-lg text-body m-1"
                      href="#!"
                      role="button"
                      data-mdb-ripple-color="dark"
                  ><i className="fab fa-github"></i></a>
              </section>
          </div>

          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
              © {date.getFullYear()} Copyright:
              <a className="text-body" href="https://mdbootstrap.com/">Worth Watch</a>
          </div>
      </footer></>
  )
}
