import "./App.css";
import trustImg from "./assets/trustImg.png";
import ellipseBig from "./assets/ellipseBig.svg";
import comingsoon from "./assets/comingSoon.svg";
import firstToKnow from "./assets/firstToKnow.svg";
import rotatingSector from "./assets/rotating-sector.gif";
import InputPhoneNumberGroup from "./InputPhoneNumberGroup";

function App() {
  return (
    <>
      <img src={ellipseBig} alt="" className="clip-art" />
      <div className="page-container">
        <div className="header-text">
          <a href="/">xavice</a>
        </div>
        <div className="container">
          <section className="first-half">
            <div className="comingsoon-text">
              <img src={comingsoon} alt="" className="" />
              <h4>COMING SOON</h4>
            </div>
            <div>
              <h1>
                Changing How Clients <span className="work-span">Work </span> With
                Service Providers
              </h1>
            </div>
            <div className="about-content">
              <p>
                Xavice is creating an enabling system for Servicer Providers to
                work with their clients seamlessly.
              </p>
            </div>

            <div className="launch-text">
              <img src={firstToKnow} alt="" className="" />
              <p>Be the first to know when we launch 🚀</p>
            </div>

            <form>
              <div className="form-container1">
                <div className="form-input">
                  <label id="email" for="email"></label>
                  <input
                    className="input-type"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    required
                  />
                </div>
                {/* <div className="form-input">
                  <label id="phoneno" for="phoneno"></label>
                  <span>
                    <select
                      className="input-type"
                      name="category"
                      id="category"
                      placeholder="Category"
                    >
                      <option value="" disabled selected>
                        234
                      </option>
                      <option value="Nigeria">Nigeria(+234)</option>
                      <option value="clients">United States(+1)</option>
                      <option>Australia(+61)</option>
                    </select>
                  </span>
                </div> */}
                <InputPhoneNumberGroup />
              </div>
              <div className="form-container1">
                <div className="form-input">
                  <label id="username" for="username"></label>
                  <input
                    className="input-type"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Preferred username"
                    required
                  />
                </div>
                <div className="form-input">
                  <label id="category" for="category"></label>

                  <select
                    className="input-type"
                    name="category"
                    id="category"
                    placeholder="Category"
                  >
                    <option className="dropdown-option" value="" disabled selected>
                      Category
                    </option>
                    <option className="dropdown-option" value="serviceprovider">
                      Service providers
                    </option>
                    <option className="dropdown-option" value="clients">
                      Clients
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <button className="reservation-button">Reserve my spot</button>
              </div>
            </form>
          </section>
          <section style={{ zIndex: 10 }}>
            <div style={{ position: "relative" }}>
              <img
                src={trustImg}
                alt=""
                style={{ zIndex: 10, position: "relative", width: "600px" }}
              />
              <img className="rotating-sector" src={rotatingSector} alt="" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
