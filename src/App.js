import "./App.css";
import trustImg from "./assets/trustImg.png";
import ellipseBig from "./assets/ellipseBig.svg";
import rotatingSector from "./assets/rotating-sector.gif";

function App() {
  return (
    <>
      <img src={ellipseBig} alt="" className="clip-art" />
      <div class="page-container">
        <div class="header-text">
          <a href="/">xavice</a>
        </div>
        <div class="container">
          <section class="first-half">
            <div class="comingsoon-text">
              <h4>COMING SOON</h4>
            </div>
            <div>
              <h1>
                Changing How Clients <span class="work-span">Work </span> With
                Service Providers
              </h1>
            </div>
            <div class="about-content">
              <p>
                Xavice is creating an enabling system for Servicer Providers to
                work with their clients seamlessly.
              </p>
            </div>

            <div class="launch-text">
              <p>Be the first to know when we launch 🚀</p>
            </div>

            <form>
              <div class="form-container1">
                <div class="form-input">
                  <label id="email" for="email"></label>
                  <input
                    class="input-type"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div class="form-input">
                  <label id="phoneno" for="phoneno"></label>
                  <span>
                    <select
                      class="input-type"
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
                </div>
              </div>
              <div class="form-container1">
                <div class="form-input">
                  <label id="username" for="username"></label>
                  <input
                    class="input-type"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Preferred username"
                    required
                  />
                </div>
                <div class="form-input">
                  <label id="category" for="category"></label>

                  <select
                    class="input-type"
                    name="category"
                    id="category"
                    placeholder="Category"
                  >
                    <option class="dropdown-option" value="" disabled selected>
                      Category
                    </option>
                    <option class="dropdown-option" value="serviceprovider">
                      Service providers
                    </option>
                    <option class="dropdown-option" value="clients">
                      Clients
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <button class="reservation-button">Reserve my spot</button>
              </div>
            </form>
          </section>
          <section style={{ zIndex: 10 }}>
            <div style={{ position: "relative" }}>
              <img src={trustImg} alt="" style={{ zIndex: 10, position: "relative" }} />
              <img className="rotating-sector" src={rotatingSector} alt="" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
