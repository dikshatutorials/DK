<script>
  import sir_pic from "../assets/images/sir.jpg";
</script>

<div class="about">
  <div class="abt-imag">
    <img src={sir_pic} alt="sir" />
  </div>
  <div class="abt-text">
    <h1>About Us</h1>
    <h4>
      Since the inception of our coaching center, our unwavering commitment has
      always been to deliver excellence in education. With a steadfast
      dedication to our mission, we strive to empower students to reach their
      highest potential, thereby enabling them to become the finest versions of
      themselves. Our overarching goal is not only to impart knowledge but also
      to instill values that transcend academic achievements.
      <br />

      At the core of our philosophy lies the belief that education is a
      transformative force capable of shaping not only individual destinies but
      also the collective destiny of our world. We firmly believe that each
      student holds the key to making a positive impact on society, and through
      our guidance, we aspire to nurture the qualities essential for such
      contributions.

      <br />
      Our motto is not merely a slogan; it's a driving force that propels us forward
      each day. We understand that the dreams of our students are the seeds of a
      better, more harmonious world. By fostering an environment that encourages
      curiosity, critical thinking, and creativity, we aim to equip our students
      with the tools necessary to make meaningful contributions to society.

      <br />
      As we navigate the ever-evolving landscape of education, we remain committed
      to staying at the forefront of innovative teaching methodologies and curricula.
      We believe in adapting to the changing needs of our students and the dynamic
      global landscape, ensuring that our educational offerings remain relevant and
      effective.
    </h4>
  </div>
</div>

<style lang="css3">
  .about {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #952c4a;
  }
  .abt-imag {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .abt-imag img {
    width: 110%;
    height: 110%;
  }
  .abt-text {
    padding: 1rem 1rem 0 1rem;
    color: #ffffffea;
  }
  .abt-text h1 {
    font-size: 2rem;
    font-weight: 400;
    margin-left: 5%;
  }
  .abt-text h1::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #ffffff7e;
    margin: 1rem 0;
  }

  .abt-text h4 {
    font-size: 1rem;
    font-weight: 300;
    margin-left: 5%;
  }
</style>
