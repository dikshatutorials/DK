<script>
  const year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="social-icon-box">
    <a href="https://www.facebook.com/dikshatutorials" target="_blank">
      <img
        src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
        alt="fb"
      />
    </a>
    <a href="https://www.instagram.com/dikshatutorials" target="_blank">
      <img
        src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
        alt="instagram"
      />
    </a>
    <a
      href="https://www.youtube.com/channel/UC9Z3Z9ZzjXpXZ6qf9Z9Z9ZQ"
      target="_blank"
    >
      <img
        src="https://img.icons8.com/color/48/000000/youtube-play.png"
        alt="yt"
      />
    </a>
    <a href="https://twitter.com/dikshatutorials" target="_blank">
      <img
        src="https://img.icons8.com/fluent/48/000000/twitter.png"
        alt="twitter"
      />
    </a>
    <a href="https://www.linkedin.com/company/dikshatutorials" target="_blank">
      <img
        src="https://img.icons8.com/fluent/48/000000/linkedin.png"
        alt="linkedin"
      />
    </a>
  </div>
  <p id="credit">
    Designed and Developed by <a href="mailto:vivekthakurcse20509@gmail.com"
      >Vivek Thakur</a
    >
  </p>
  <p>&copy; {year} Diksha Tutorials. All rights reserved.</p>
</footer>

<style>
  .footer {
    background-color: #b67a31;
    padding: 10px;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    text-align: center;
  }
  .social-icon-box {
    width: 30%;
    display: flex;
    justify-content: flex-start;
  }
  .social-icon-box img {
    width: 1.5rem;
  }
  #credit {
    margin: 0.5rem auto;
  }
  .footer p {
    margin: 0.5rem auto;
  }

  @media screen and (max-width: 768px) {
    .footer {
      flex-direction: column;
    }
    .social-icon-box {
      width: 100%;
      margin-bottom: 1rem;
    }
    .social-icon-box img {
      width: 2rem;
    }
  }
</style>
