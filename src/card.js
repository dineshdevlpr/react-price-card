export default function Card(props) {
  let localButton = () => {
    props.handleButtonClick()
  }
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.data.plan}
          </h5>
          <h6 className="card-price text-center">
            ${props.data.price}
            <span className="period">/{props.data.period}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
          {
            props.data.offers.map((offer) => {
              return<li className = {offer.isEnabled ? "" : "text-muted"}>
              <span className="fa-li">
                <i className= {`fas ${ offer.isEnabled ? "fa-check" : "fa-times" }`}></i>
              </span>
              {offer.name}
            </li>
            })
          }
          </ul>
          <a className="btn btn-block btn-primary text-uppercase" onClick={localButton} >
            Button
          </a>
        </div>
      </div>
    </div>
  );
}
