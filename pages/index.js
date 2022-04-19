/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout'

export default function Home() {


  const slider = [{
    key: "029834m3j2",
    img: "https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-slider-img01.jpg",
    title: "First slide label",
    body: "Some representative placeholder content for the first slide.",
    alt: "blood bank"
  },
  {
    key: "asdasdas2323",

    img: "https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-slider-img02.jpg",
    title: "First slide label",
    body: "Some representative placeholder content for the first slide.",
    alt: "blood bank"
  },
  {
    key: "12414215sdfewf",
    img: "https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-slider-img01.jpg",
    title: "First slide label",
    body: "Some representative placeholder content for the first slide.",
    alt: "blood bank"
  }
  ]
  return (
    <Layout title="Welcome to my app">

      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={slider[0].img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img src={slider[1].img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider[2].img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="card" >
            <img src="https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-home-img01.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <a className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div><div className="col">
          <div className="card" >
            <img src="https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-home-img01.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <a className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div><div className="col">
          <div className="card" >
            <img src="https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-home-img01.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <a className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
